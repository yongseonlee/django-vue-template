from django.contrib.admin import register
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from server import models


@register(models.User)
class UserAdmin(BaseUserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'date_joined')
