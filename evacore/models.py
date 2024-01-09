from django.db import models
from django.contrib.auth.models import User



class Profile(models.Model):
    NIVEL_CHOICES = [
        ('AGENTE', 'Agente'),
        ('SUPERVISOR', 'Supervisor'),
        ('GERENTE', 'Gerente'),
        ('SUBDIRECTOR', 'Subdirector'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    full_name = models.CharField(max_length=100)
    nivel = models.CharField(max_length=50, choices=NIVEL_CHOICES, default='AGENTE')





    def __str__(self):
        return self.user.username
