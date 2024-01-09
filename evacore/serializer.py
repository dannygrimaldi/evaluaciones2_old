from rest_framework import serializers
from .models import User, Profile
from .models import *


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(many=False, read_only=True)

    class Meta:
        model = Profile
        fields = ('user', 'full_name', 'nivel')  # Cambié 'email' por 'nivel' ya que no estás usando 'email' en tu modelo Profile
