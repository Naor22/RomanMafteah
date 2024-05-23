import os
from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django.http import FileResponse
from rest_framework import viewsets
import numpy as np
from .models import item
from .serializers import itemSerializer
import pandas as pd

file_path = os.path.join(settings.MEDIA_ROOT, "data.xlsx")


@api_view(["GET"])
@renderer_classes([JSONRenderer])
def ItemList(request):
    try:
        df = pd.read_excel(file_path)
        df.reset_index(inplace=True, drop=True)
        df["number of pages"] = df["number of pages"].fillna("לא צוין")
        allItems = df[["title", "author's name", "number of pages"]].to_dict("records")

        paginator = PageNumberPagination()
        paginator.page_size = 10
        paginated_items = paginator.paginate_queryset(allItems, request)
        return paginator.get_paginated_response(paginated_items)
    except Exception as e:
        print(e)
        raise


@api_view(["GET"])
def getBook(request):
    title = request.GET.get("q", None)
    df = pd.read_excel(file_path)
    filtered_row = df[df["title"] == title].iloc[0]
    filtered_row = (
        filtered_row.replace([np.inf, -np.inf], np.nan).fillna("לא ידוע").to_dict()
    )
    filtered_row = filtered_row[
        [
            "author's sex",
            "year of publication",
            "publishing house",
            "part of a book serias",
        ]
    ]

    return Response(filtered_row, status=status.HTTP_200_OK)


@api_view(["POST"])
@renderer_classes([JSONRenderer])
def filterItems(request):
    df = pd.read_excel(file_path)
    try:
        filters = request.data
        stats = {}
        names = ""
        df_filtered = df.copy()
        for filter in filters:
            df_filtered = df_filtered[
                df_filtered[heToEn(filter["name"])] == filter["value"]
            ]
            names += filter["value"] + "|"
        count_total = len(df)
        count_filtered = len(df_filtered)
        df_filtered["number of pages"] = df["number of pages"].fillna("לא צוין")
        titles = df_filtered[["title", "author's name", "number of pages"]].to_dict(
            "records"
        )
        # titles = df_filtered["title"].tolist()
        stats = {"total": count_total, names: count_filtered, "titles": titles}
        return Response(stats, status=status.HTTP_200_OK)

    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@renderer_classes([JSONRenderer])
def saveItem(request):
    serializer = itemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def asdict(self):
    return {"name": self.name, "author": self.author, "length": self.length}


def download_file(request):
    return FileResponse(open(file_path, "rb"), as_attachment=True)


he_to_en = {
    "פורמט": "format of reading",
    "מין הסופר": "author's sex",
    "מוציא לאור": "publishing house",
    "רומן ביכורים": "debut novel",
    "תשומת לב": "critical attention",
    "זכה בפרס": "prize ",
    "תת-ז'אנר": "sub-genre",
    "חלוקה ליחידות ויחידות-משנה": "novel's sub-division",
    "אורך יחידות החלוקה הקצרות ביותר": " typical length of shortest units",
    "שיבוצים מז'אנרים אמנותיים שונים": "integration of other texts",
    "גופנים שונים": "different fonts",
    "טקסט מנוקד": "vocalization",
    "סוג המספר": "the narrator",
    "חלק מסדרה": "part of a book serias ",
    "אלמנטים לא-טקסטואליים": "a-textual elements ",
    "נראות העמוד": "the typical page",
    "תפקיד המספר": "narrator's role ",
    "ידע המספר ביחס לעולם המיוצג ברומן": "narrator's knowledge ",
    "מהימנות המספר": "narrator's reliability",
    "שימוש במבע משולב": "free indirect discourse ",
    "מארג דמויות ברומן": "characters ",
    "דמות מואנשת": "personification",
    "אמצעי תקשורת בין הדמויות": "communication between  characters",
    "עלילה יחידה": "number of plotlines",
    "תבנית סיפור בתוך סיפור": "frame story",
    "אקספוזיציה ברומן": "novel's exposition",
    "קצב העלילה": "pace of events",
    "מידת השלמת הקורא": "gaps in the novel",
    "טיב האירועים בעלילה": "type of events",
    "טיב אירועי-המפתח בעלילה": "predictability of key events",
    "טיב אזורי המילוי בעלילה": "type of fillers",
    "סיום פתוח": "closure",
    "האם עברית מדוברת בתקופה בה הרומן נכתב": "Hebrew as spoken language  ",
    "תיאור כמותי של השימוש בשפה העברית ברומן": "linguistic register",
    "משלבים שונים של השפה העברית": "different linguistic registers",
    "שפות אחרות": "languages other than Hebrew",
    "מידת האינטרטקסטואליות": "intertextuality",
    "הגוף הספרותי של האינטרטקסטואליות": "corpus of intertextuality",
    "רומן קריא": "readability",
    "מדוע קריא או לא": "reasons for level of readability ",
    "רוחב היריעה הכרונולוגית של הרומן": "chronological timespan",
    "תקופת ההתרחשות המרכזית ברומן": "main epoch",
    "מרחב ההתרחשות העיקרי של העלילה": "main space",
    "מקום העלילה העיקרית": "main geographical location",
    "מידת מדינת ישראל ברומן": "centrality of Israel",
    "היבטים תמאטיים כלליים, אירועים מרכזיים": "themes",
    "מקום האהבה הרומנטית ברומן": "centrality of love",
    "סוג האהבה ברומן": "type of love",
    "יחסים בין-דוריים מרכזיים ברומן": "intergenerational relationships",
    "מידת המלחמה ברומן": "centrality of war",
    "מוות ברומן": "death",
    "דעה על הרומן": "opinion on the novel",
    "חשיבותו של הרומן": " reasons for importance",
    "הזמן הדקדוקי העיקרי שבו הסיפור נמסר": " main grammatical tense",
}

en_to_he = {
    "format of reading": "פורמט",
    "author's sex": "מין הסופר",
    "publishing house": "מוציא לאור",
    "debut novel": "רומן ביכורים",
    "critical attention": "תשומת לב",
    "prize ": "זכה בפרס",
    "sub-genre": "תת-ז'אנר",
    "novel's sub-division": "חלוקה ליחידות ויחידות-משנה",
    " typical length of shortest units": "אורך יחידות החלוקה הקצרות ביותר",
    "integration of other texts": "שיבוצים מז'אנרים אמנותיים שונים",
    "different fonts": "גופנים שונים",
    "vocalization": "טקסט מנוקד",
    "the narrator": "סוג המספר",
    "part of a book serias ": "חלק מסדרה",
    "a-textual elements ": "אלמנטים לא-טקסטואליים",
    "the typical page": "נראות העמוד",
    "narrator's role ": "תפקיד המספר",
    "narrator's knowledge ": "ידע המספר ביחס לעולם המיוצג ברומן",
    "narrator's reliability": "מהימנות המספר",
    "free indirect discourse ": "שימוש במבע משולב",
    "characters ": "מארג דמויות ברומן",
    "personification": "דמות מואנשת",
    "communication between  characters": "אמצעי תקשורת בין הדמויות",
    "number of plotlines": "עלילה יחידה",
    "frame story": "תבנית סיפור בתוך סיפור",
    "novel's exposition": "אקספוזיציה ברומן",
    "pace of events": "קצב העלילה",
    "gaps in the novel": "מידת השלמת הקורא",
    "type of events": "טיב האירועים בעלילה",
    "predictability of key events": "טיב אירועי-המפתח בעלילה",
    "type of fillers": "טיב אזורי המילוי בעלילה",
    "closure": "סיום פתוח",
    "Hebrew as spoken language  ": "האם עברית מדוברת בתקופה בה הרומן נכתב",
    "linguistic register": "תיאור כמותי של השימוש בשפה העברית ברומן",
    "different linguistic registers": "משלבים שונים של השפה העברית",
    "languages other than Hebrew": "שפות אחרות",
    "intertextuality": "מידת האינטרטקסטואליות",
    "corpus of intertextuality": "הגוף הספרותי של האינטרטקסטואליות",
    "readability": "רומן קריא",
    "reasons for level of readability ": "מדוע קריא או לא",
    "chronological timespan": "רוחב היריעה הכרונולוגית של הרומן",
    "main epoch": "תקופת ההתרחשות המרכזית ברומן",
    "main space": "מרחב ההתרחשות העיקרי של העלילה",
    "main geographical location": "מקום העלילה העיקרית",
    "centrality of Israel": "מידת מדינת ישראל ברומן",
    "themes": "היבטים תמאטיים כלליים, אירועים מרכזיים",
    "centrality of love": "מקום האהבה הרומנטית ברומן",
    "type of love": "סוג האהבה ברומן",
    "intergenerational relationships": "יחסים בין-דוריים מרכזיים ברומן",
    "centrality of war": "מידת המלחמה ברומן",
    "death": "מוות ברומן",
    "opinion on the novel": "דעה על הרומן",
    "reasons for importance ": "חשיבותו של הרומן",
    " main grammatical tense": "הזמן הדקדוקי העיקרי שבו הסיפור נמסר",
}


def heToEn(hebrew_text):
    return he_to_en.get(hebrew_text, hebrew_text)


def enToHe(english_text):
    return en_to_he.get(english_text, english_text)
