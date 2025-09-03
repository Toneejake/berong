from django.contrib import admin
from .models import BFPKnowledgeBase

@admin.register(BFPKnowledgeBase)
class BFPKnowledgeBaseAdmin(admin.ModelAdmin):
    list_display = ('title', 'target_audience', 'created_at', 'updated_at')
    list_filter = ('target_audience', 'created_at')
    search_fields = ('title', 'content')
    ordering = ('-created_at',)
