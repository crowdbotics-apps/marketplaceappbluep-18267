from django.contrib import admin
from .models import Category, Country, ItemVariant

admin.site.register(Country)
admin.site.register(ItemVariant)
admin.site.register(Category)

# Register your models here.
