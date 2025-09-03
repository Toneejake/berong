from django.db import models

class BFPKnowledgeBase(models.Model):
    TARGET_AUDIENCE_CHOICES = (
        ('kids', 'Kids'),
        ('adults', 'Adults'),
        ('bfp', 'BFP Professionals'),
    )
    
    title = models.CharField(max_length=200)
    content = models.TextField()
    target_audience = models.CharField(max_length=10, choices=TARGET_AUDIENCE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
