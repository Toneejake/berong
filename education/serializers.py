from rest_framework import serializers
from .models import BFPKnowledgeBase

class BFPKnowledgeBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = BFPKnowledgeBase
        fields = '__all__'
