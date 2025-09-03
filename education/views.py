from rest_framework import generics, permissions
from .models import BFPKnowledgeBase
from .serializers import BFPKnowledgeBaseSerializer

class BFPKnowledgeBaseListView(generics.ListAPIView):
    queryset = BFPKnowledgeBase.objects.all()
    serializer_class = BFPKnowledgeBaseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.user_type == 'kid':
            return BFPKnowledgeBase.objects.filter(target_audience='kids')
        elif user.user_type == 'adult':
            return BFPKnowledgeBase.objects.filter(target_audience='adults')
        elif user.user_type == 'bfp':
            return BFPKnowledgeBase.objects.filter(target_audience='bfp')
        return BFPKnowledgeBase.objects.none()

class BFPKnowledgeBaseDetailView(generics.RetrieveAPIView):
    queryset = BFPKnowledgeBase.objects.all()
    serializer_class = BFPKnowledgeBaseSerializer
    permission_classes = [permissions.IsAuthenticated]
