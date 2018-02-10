import urllib.parse

from django.contrib import messages
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.shortcuts import redirect, render
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.views import APIView


def logout(request):
    django_logout(request)
    return redirect('login')


class LoginView(APIView):
    permission_classes = ()

    def get(self, request):
        if request.user.is_authenticated:
            return redirect(request.query_params.get('next', '/'))

        return render(request, 'login.html', {
            'next': request.query_params.get('next', '/')
        })

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)

        redirect_target = reverse('login')
        if request.data.get('next', None):
            redirect_target = redirect_target + '?next=' + urllib.parse.quote(request.data['next'])

        if not email or not password:
            messages.error(request._request, 'Email and password required')
            return redirect(redirect_target)

        user = authenticate(email=email, password=password)
        if user is None:
            messages.error(request._request, 'Failed to authenticate')
            return redirect(redirect_target)

        django_login(request, user)
        return redirect(request.data['next'] or '/')


class UserView(APIView):
    def get(self, request):
        return Response({
            'email': request.user.email,
            'first_name': request.user.first_name,
            'last_name': request.user.last_name,
        })
