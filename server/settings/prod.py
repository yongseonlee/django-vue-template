from os import environ
from .base import *

DEBUG = False
ALLOWED_HOSTS = (
    environ.get('HOST'),
)
CSRF_COOKIE_DOMAIN = environ.get('HOST')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': environ.get('DB_HOST'),
        'PORT': environ.get('DB_PORT'),
        'NAME': environ.get('DB_NAME'),
        'USER': environ.get('DB_USER'),
        'PASSWORD': environ.get('DB_PW'),
    }
}
