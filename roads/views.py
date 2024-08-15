from rest_framework import viewsets

from .serializers import IndianRoadlinesSerializer
from .models import IndianRoadlines


class IndianRoadlinesViewSet(viewsets.ModelViewSet):
    queryset = IndianRoadlines.objects.all()
    serializer_class = IndianRoadlinesSerializer
