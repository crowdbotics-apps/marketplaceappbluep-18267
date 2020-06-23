from django.contrib import admin
from .models import Bill, Order, PaymentMethod

admin.site.register(PaymentMethod)
admin.site.register(Bill)
admin.site.register(Order)

# Register your models here.
