from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes, api_view, APIView
from rest_framework.authentication import TokenAuthentication

class LoginView(APIView):
    def post(self, request):
        user = get_object_or_404(User, username=request.data['username'])
        if not user.check_password(request.data['password']):
            return Response({'error': 'Invalid Username or Password'}, status=status.HTTP_400_BAD_REQUEST)
        token, _ = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
        return Response({'token': token.key, 'user': serializer.data})

@ensure_csrf_cookie
def get_csrf_token(request):
    """
    Generate and return a CSRF token in a JSON response.
    
    Args:
        request: The HTTP request object.
    
    Returns:
        Response: A JSON response containing the generated CSRF token under the key 'csrfToken'.
    """
    csrf_token = get_token(request)
    print(csrf_token)
    if csrf_token:
        return JsonResponse({"csrfToken": csrf_token})
    else:
        return JsonResponse({"error": "CSRF token not found"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

def signup(request):
    pass

class DashboardView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            'message': 'Welcome to the dashboard!',
            'user': {
                'username': user.username,
                'email': user.email,
            }
        }
        return Response(data)