from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from core import views

api_prefix = settings.API_PREFIX

urlpatterns = [
    path("admin/", admin.site.urls),
    path(f"{api_prefix}items/", views.ItemList),
    path(f"{api_prefix}addbook", views.saveItem),
    path(f"{api_prefix}stats", views.filterItems),
    path(f"{api_prefix}download", views.download_file, name="download_file"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
