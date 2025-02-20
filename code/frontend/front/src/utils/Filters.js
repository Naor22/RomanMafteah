const dropdownItems = [
  {
    פורמט: [
      "מודפס (ספר רגיל)",
      "אלקטרוני (קובץ במחשב או בקורא ספרים אלקטרוני)",
      "מוקלט (אודיו-בוק)",
      "Format of reading",
    ],
  },
  { "מין הסופר": ["זכר", "נקבה"] },
  {
    "מוציא לאור": [
      "עם עובד",
      "ספריית פועלים",
      "שוקן",
      "ידיעות אחרונות",
      "דביר",
      "כנרת",
      "זמורה ביתן",
      "ביתן",
      "כתר",
      "הקיבוץ המאוחד",
      "פרדס",
      "מודן",
      "אחוזת בית",
      "סימן קריאה",
      "הספריה החדשה",
      "מעריב",
      "מוסד ביאליק",
      "חרגול",
      "תושיה",
      "רסלינג",
      "בבל",
      "כרמל",
      "רימונים",
      "אסיה",
      "ירון גולן",
      "קשת",
      "אור-עם",
      "פלדהיים",
      "הוצאה עצמית",
      "אינני יודע/ת",
    ],
  },
  { "רומן ביכורים": ["כן", "לא", "אינני יודע/ת"] },
  {
    "תשומת לב": [
      "הרומן עורר תשומת לב רבה",
      "הרומן עורר תשומת לב ממוצעת",
      "הרומן עורר תשומת לב מועטה",
      "הרומן לא עורר תשומת לב כלל",
      "אינני יודע/ת",
    ],
  },
  {
    "זכה בפרס": ["כן", "לא", "אינני יודע.ת"],
  },
  {
    "תת-ז'אנר": [
      "רומן אוטוביוגרפי",
      "רומן מכתבים",
      "רומן חניכה",
      "סאגה משפחתית",
      "רומן זרם-תודעה",
      "רומן היסטורי",
      "רומן מלחמה",
      "דיסטופיה",
      "אוטופיה",
      "מדע בדיוני",
      "פנטזיה",
      "בלש",
      "רומן פסיכולוגי",
      "רומן חברתי",
      "רומן גראפי",
      "ספרות חרדית (פרוזה, שאינה ספרות קודש ואינה ספרות ילדים)",
      "יש מקום לספק אם אכן זהו רומן",
    ],
  },
  {
    "חלוקה ליחידות ויחידות-משנה": [
      "הרומן כתוב ברצף אחד ואינו מחולק לפרקים, שערים או כרכים",
      "הרומן מחולק לחלקים/שערים/כרכים",
      "הרומן מחולק לפרקים",
      "הרומן מחולק לחלקים/שערים/כרכים ובתוכם פרקים",
      "קשה להגדיר",
    ],
  },
  {
    "אורך יחידות החלוקה הקצרות ביותר": [
      "קצרות מאוד (עד שני עמודים)",
      "קצרות (שלושה עד עשרה עמודים)",
      "בינוניות (אחד-עשר עד עשרים עמודים)",
      "ארוכות (עשרים ואחד עד שלושים עמודים)",
      "ארוכות מאוד (שלושים ואחד עמודים ומעלה)",
      "אי אפשר לספור עמודים בפורמט בו קראתי את הרומן",
      "קשה להגדיר",
    ],
  },
  {
    "שיבוצים מז'אנרים אמנותיים שונים": [
      "לא",
      "כן, שירים",
      "כן, משלים",
      "כן, מחזות",
      "כן, סיפורים קצרים",
    ],
  },
  { "גופנים שונים": ["כן", "לא", "לא רלוונטי"] },
  {
    "טקסט מנוקד": [
      "כלל לא",
      "לא, למעט מילים ספורות פה ושם",
      "הטקסט מכיל קטעים מנוקדים שלמים לצד קטעים שאינם מנוקדים",
      "הטקסט מנוקד כולו או רובו",
      "לא רלוונטי",
    ],
  },
  {
    "סוג המספר": [
      "מספר דיאגטי (הנוטל חלק בעולם הסיפורי כדמות או כעד)",
      "מספר לא דיאגטי (שאינו נוטל חלק בעולם הסיפורי)",
      "מספרים מתחלפים",
      "אינני מכיר.ה את המושג",
    ],
  },
  {
    "חלק מסדרה": ["כן", "לא"],
  },
  {
    "אלמנטים לא-טקסטואליים": ["כן", "לא"],
  },
  {
    "נראות העמוד": [
      "הטקסט מופיע כגוש אחד, ללא פסקאות",
      "הטקסט מחולק לפסקאות ספורות",
      "הטקסט מאוורר, עם שורות נפרדות ופסקאות רבות",
      "קשה להגדיר",
      "לא רלוונטי",
    ],
  },
  {
    "תפקיד המספר": [
      "המספר הוא הדמות המרכזית בעלילה",
      "מספר עד הנוכח בעולם הסיפורי אך אינו מעורב בעלילה העיקרית",
      "מספר עד המעורב בעלילה העיקרית אך אינו יותר מדמות שולית בה",
      "המספר הוא דמות משנית",
      "המספר הוא אחת מן הדמויות המרכזיות בעלילה",
    ],
  },
  {
    "ידע המספר ביחס לעולם המיוצג ברומן": [
      "מספר כל-יודע: יודע את שהתרחש ואת שעתיד להתרחש; יודע לדווח גם על עולמן הפנימי של הדמויות",
      "מספר בעל ידיעות חלקיות ביחס לעבר ולעתיד, וביחס לעולמן הפנימי של הדמויות",
      "מספר מוגבל: אינו יודע דבר מלבד מה שעיניו רואות ואזניו שומעות",
      "קשה להגדיר",
      "אינני מכיר/ה את המושג",
    ],
  },
  {
    "מהימנות המספר": [
      "מספר מהימן (התאמה גבוהה בינו ובין המחבר המובלע)",
      "מספר בלתי-מהימן (התאמה נמוכה או אפסית בינו ובין המחבר המובלע)",
      "קשה להכריע",
      "אינני מכיר/ה את המושג",
    ],
  },
  {
    "שימוש במבע משולב": [
      "במידה רבה: המבע המשולב מופיע בטקסט באופן אינטנסיבי",
      "במידה חלקית: המבע המשולב מופיע בטקסט מעת לעת",
      "במידה מועטה: המבע המשולב מופיע בטקסט לעתים נדירות בלבד",
      "המספר אינו משתמש כלל במבע משולב; הטקסט נמסר אך ורק מנקודת התצפית שלו",
      "קשה להכריע",
      "אינני מכיר/ה את המושג",
    ],
  },
  {
    "מארג דמויות ברומן": [
      "דמות מרכזית אחת (ללא דמויות משנה)",
      "דמות מרכזית אחת וכמה דמויות משנה",
      "שתי דמויות מרכזיות (ללא דמויות משנה)",
      "שתי דמויות מרכזיות וכמה דמויות משנה",
      "שלוש דמויות מרכזיות (ללא דמויות משנה)",
      "שלוש דמויות מרכזיות וכמה דמויות משנה",
      "ארבע דמויות מרכזיות ומעלה",
      "קשה להכריע",
    ],
  },
  {
    "דמות מואנשת": ["כן", "לא"],
  },
  {
    "אמצעי תקשורת בין הדמויות": [
      "דיאלוגים ישירים, פנים אל פנים",
      "דיאלוגים באמצעות מתווכים ושליחים",
      "דיאלוגים מדומיינים",
      "מכתבים ומברקים",
      "טלפון",
      "דואר אלקטרוני",
      "הודעות SMS",
      "ווטסאפ",
      "רשתות חברתיות",
      "אין תקשורת בין הדמויות ברומן",
    ],
  },
  {
    "עלילה יחידה": [
      "כן",
      "לא. ברומן שתיים-שלוש עלילות המשתרגות זו בזו",
      "לא. ברומן עלילות רבות המשתרגות זו בזו",
      "קשה להכריע",
    ],
  },
  {
    "תבנית סיפור בתוך סיפור": ["כן", "לא", "קשה להגדיר"],
  },
  {
    "קצב העלילה": ["1", "2", "3", "4", "5"],
  },
  {
    "מידת השלמת הקורא": ["1", "2", "3", "4", "5"],
  },
  {
    "טיב אירועי-המפתח בעלילה": ["1", "2", "3", "4", "5"],
  },

  {
    "אקספוזיציה ברומן": [
      "אקספוזיציה תחילית (מופיעה בתחילת הרומן, כגוש אחד)",
      "אקספוזיציה דחויה (מופיעה לאחר תחילת הרומן, כגוש אחד)",
      "אקספוזיציה מפוזרת (חומרי האקספוזיציה מופיעים במקומות שונים ברומן)",
      "אין חומריים אקספוזיציוניים כלל (ללא רקע והסברים על הדמויות והנושאים שברומן)",
      "קשה להגדיר",
      "אינני מכיר/ה את המושג",
    ],
  },
  {
    "טיב האירועים בעלילה": [
      "בעלילה אירועי-מפתח רבים יחסית",
      "בעלילה אירועי-מפתח מעטים",
      "בעלילה אירוע-מפתח בולט אחד",
      "בעלילה אין אירועי-מפתח כלל",
      "קשה להגדיר",
    ],
  },
  {
    "טיב אזורי המילוי בעלילה": [
      "אירועים פשוטים של יומיום",
      "תיאורי נוף, דמויות ואווירה",
      "הפוגות בעלילה לטובת סיכומים היסטוריים, עיוניים פילוסופיים וכד'",
    ],
  },
  {
    "סיום פתוח": ["1", "2", "3", "4", "5"],
  },
  {
    "האם עברית מדוברת בתקופה בה הרומן נכתב": ["כן", "לא"],
  },
  {
    "תיאור כמותי של השימוש בשפה העברית ברומן": ["1", "2", "3", "4", "5"],
  },
  {
    "משלבים שונים של השפה העברית": ["כן", "לא", "קשה להגדיר"],
  },
  {
    "שפות אחרות": [
      "אנגלית",
      "רוסית",
      "גרמנית",
      "ספרדית",
      "ערבית",
      "לדינו",
      "יידיש",
      "הרומן אינו מייחד מקום משמעותי לשפות אחרות",
    ],
  },
  {
    "מידת האינטרטקסטואליות": ["1", "2", "3", "4", "5"],
  },
  {
    "הגוף הספרותי של האינטרטקסטואליות": [
      "תנך",
      "ספרות חז״ל (משנה, תלמוד, מדרש)",
      "ספרות רבנית; ספרות קבלה וחסידות",
      "ספרות עברית ימי-ביניימית (פיוט, שירת תור הזהב, ספרות המקאמות וכו׳)",
      "ספרות עברית מתקופת ההשכלה ו/או התחייה",
      "מיתולוגיה יוונית",
      "ספרות מערבית (אנגלית, צרפתית, גרמנית, רוסית, איטלקית...), מודרנית (מהמאה ה-19 ועד ימינו)",
      "ספרות ערבית",
      "ספרות ישראלית (מ-1948 ואילך)",
      "ספרות עממית, מסורות העוברות על-פה",
      "טקסטים מאת המחבר/ת עצמו/ה",
    ],
  },
  {
    "רומן קריא": ["1", "2", "3", "4", "5"],
  },
  {
    "מדוע קריא או לא": [
      "השפה ו/או הסגנון הלשוני",
      "המבנה העלילתי ו/או אמנות הסיפור",
      "החומרים שמהם עשויה העלילה (למשל, חומרים קשים במיוחד או קלים במיוחד להכלה רגשית)",
      "ההקשר התרבותי וההיסטורי",
      "האידיאולוגיה של הטקסט",
    ],
  },
  {
    "רוחב היריעה הכרונולוגית של הרומן": [
      "שעות",
      "ימים",
      "שבוע עד חודש",
      "חודשיים עד אחד-עשר חודשים",
      "שנה עד עשור",
      "כמה עשורים",
      "מאה עד מאתיים שנה",
      "כמה מאות שנים",
      "קשה לקבוע באופן חד-משמעי",
    ],
  },
  {
    "תקופת ההתרחשות המרכזית ברומן": [
      "תקופת התנ״ך, העת העתיקה",
      "שלהי העת העתיקה",
      "ימי הביניים",
      "ראשית העת החדשה (עד סוף המאה ה-18)",
      "המאה ה-19",
      "המחצית הראשונה של המאה ה-20",
      "המחצית השנייה של המאה ה-20",
      "המאה ה-21",
      "העתיד",
      "ללא זמן קונקרטי (הרומן נעדר זמן מובחן)",
    ],
  },
  {
    "מרחב ההתרחשות העיקרי של העלילה": [
      "אוהל, צריף",
      "חדר",
      "דירה, בית מגורים",
      "מבנה, מוסד או אתר ציבורי (למשל: בית משפט, אתר נופש, אוניברסיטה, בית חרושת, בית כנסת, בית ספר, מחנה נוער וכו')",
      "כלי תחבורה (למשל: מכונית, אוטובוס, משאית, מטוס, חללית וכו')",
      "רחוב, כביש, דרך, שביל",
      "עיר",
      "כפר",
      "מושב",
      "מעברה",
      "קיבוץ",
      "התנחלות",
      "איזור טבעי או חקלאי (למשל: יער, מדבר, שדה)",
      "ים, אגם, נהר, אי",
      "מרחב אחר - לא ריאליסטי",
      "קשה להגדיר",
    ],
  },
  {
    "מקום העלילה העיקרית": [
      "ישראל (ארץ, מדינה)",
      "המזרח התיכון והמפרץ הפרסי (לא כולל ישראל שצוינה בנפרד לעיל)",
      "צפון אפריקה",
      "אפריקה הדרומית",
      "מערב אירופה, סקנדינביה וחצי האי האיברי",
      "מזרח אירופה ורוסיה",
      "חבל הבלקן (טורקיה, יוון, בולגריה, סרביה, קרואטיה וכו'; לא כולל איטליה ורומניה)",
      "צפון אמריקה (ארצות הברית וקנדה)",
      "מרכז אמריקה ודרומה",
      "המזרח הרחוק (תאילנד, נפאל, טיבט, סין, יפן וכו')",
      "מרכז אסיה (קזחסטן, אוזבקיסטן וכו')",
      "אוסטרליה וניו-זילנד",
      "אנטארטיקה והקוטב הצפוני",
      "החלל החיצון",
      "ללא מרחב גיאוגרפי קונקרטי",
      "מרחב אחר - לא ריאליסטי",
    ],
  },
  {
    "מידת מדינת ישראל ברומן": ["מרכזית", "שולית", "לא מופיעה ברומן כלל"],
  },

  {
    "היבטים תמאטיים כלליים, אירועים מרכזיים": [
      "אהבה",
      "נישואין, חתונה",
      "גירושין",
      "הלוויה, שבעה",
      "ילדות",
      "התבגרות",
      "גיל העמידה",
      "סוף החיים, מוות",
      "משפחה",
      "זקנה",
      "שיגעון",
      "יחסים בין-דוריים",
      "מצוקה גופנית, מחלה",
      "מצוקה נפשית",
      "בתי חולים, בתי אבות, מוסדות טיפוליים",
      "אלימות פיסית, מילולית, מנטאלית",
      "פשע (רצח, שוד, וכו')",
      "בתי משפט, בתי כלא, מוסדות חוק ואכיפה",
      "יהדות",
      "ציונות",
      "נצרות",
      "אסלאם",
      "דתיות ורוחניות (במובן של רליגיוזיות, אמונה פנימית)",
      "מוסדות דתיים",
      "צרכנות",
      "עוני ועושר",
      "פערים מעמדיים",
      "מוסר (אתיקה, שאלות מוסריות)",
      "הסכסוך הישראלי-פלסטיני",
      "יחסי ערבים-יהודים",
      "יחסי דתיים-חילוניים",
      "יחסי יהודים - לא-יהודים",
      "יחסי מזרחים-אשכנזים",
      "החברה החרדית",
      "תלישות",
      "הגירה",
      "שואה",
      "מסעות, נדודים, טיולים",
      "נקמה",
      "גאולה (אישית, לאומית, אוניברסלית)",
      "משיחיות",
      "פיוס והשלמה",
      'צה"ל',
      "מלחמה",
      "מיניות, זהות מינית, יחסי מין",
      "ספרות וכתיבה",
      "מדע, טכנולוגיה",
      "טבע וסביבה",
      "שינויי אקלים",
      "השכלה (לימודים)",
      "בית-ספר",
      'ה"חדר" (מוסד לימודי)',
      "אוניברסיטה, אקדמיה",
      "פוליטיקה",
    ],
  },
  {
    "מקום האהבה הרומנטית ברומן": ["מרכזית", "שולית", "אין אהבה ברומן"],
  },
  {
    "סוג האהבה ברומן": [
      "אהבה הגוברת על מכשולים לקראת מימוש מוצלח",
      "אהבה ללא קונפליקט",
      "אהבה נכזבת",
      "אהבה שנעה לקראת כשלון והתפרקות",
      "אהבה העומדת במתח בלתי-פתור בין מימוש לאי-מימוש",
      "קשה להגדיר",
    ],
  },
  {
    "יחסים בין-דוריים מרכזיים ברומן": [
      "אבות-בנים",
      "אבות-בנות",
      "אמהות-בנים",
      "אמהות-בנות",
      "סבתות-נכדים",
      "סבים-נכדות",
      "סבתות-נכדות",
      "סבים-נכדים",
      "קשה להגדיר",
      "יחסים בין דוריים אינם מרכזיים ברומן",
    ],
  },
  {
    "מידת המלחמה ברומן": ["מרכזית", "שולית", "אין מלחמה ברומן"],
  },
  {
    "מוות ברומן": [
      "שיבה טובה",
      "מחלה",
      "תאונה",
      "מוות במלחמה",
      "התאבדות",
      "רצח",
      "המוות אינו מרכזי ברומן",
    ],
  },
  {
    "דעה על הרומן": [
      "רומן קאנוני",
      "רומן שולי",
      "רומן פורץ דרך, חדשני לזמנו",
      "רומן אפיגוני, נעדר חידושים",
      "רומן הראוי להערכה מחקרית מחודשת",
      "רומן שזכה להערכה מחקרית מופרזת",
      "רומן בעל חשיבות עקרונית להבנת הספרות העברית",
      "רומן חסר חשיבות מיוחדת למחקר",
      "הרומן קיבל מספיק תשומת לב ציבורית ו/או מחקרית",
    ],
  },
  {
    "חשיבותו של הרומן": [
      "רומן חשוב מבחינה צורנית וסגנונית",
      "רומן חשוב מבחינה תמטית",
      "רומן חשוב להבנת מכלול יצירתו/ה של המחבר/ת הקאנוני/ת שלו",
      "רומן שחשיבותו נעוצה דווקא בשוליות של המחבר/ת שלו",
      "רומן חשוב מבחינה היסטורית )כלומר מבחינה חוץ-ספרותית(",
      "רומן חשוב כצוהר לתופעות חברתיות ותרבותיות",
      "רומן חשוב כי נעשה בו שימוש פוליטי או אידיאולוגי",
      "הרומן אינו חשוב באופן מיוחד",
      "הרומן אינו חשוב כלל",
    ],
  },
  {
    "הזמן הדקדוקי העיקרי שבו הסיפור נמסר": [
      "עבר",
      "הווה",
      "עתיד",
      "זמנים דקדוקיים מעורבים",
      "קשה להגדיר",
    ],
  },
];

export default dropdownItems;

/*  {
    "חלק מסדרה": [
      "כן",
      "לא",
      "אינני יודע/ת"
    ],
  },*/
