from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CategoryViewSet, CountryViewSet, ItemVariantViewSet

router = DefaultRouter()
router.register("country", CountryViewSet)
router.register("itemvariant", ItemVariantViewSet)
router.register("category", CategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
