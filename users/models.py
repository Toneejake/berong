from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('kid', 'Kid'),
        ('adult', 'Adult'),
        ('bfp', 'BFP'),
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='adult')

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    # Add any additional fields for the user profile here
    # For example:
    # age = models.PositiveIntegerField(null=True, blank=True)
    # household_id = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.user.username
