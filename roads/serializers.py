from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometryField
from .models import IndianRoadlines


class IndianRoadlinesSerializer(GeoFeatureModelSerializer):
    geom = GeometryField()

    class Meta:
        model = IndianRoadlines
        geo_field = "geom"
        fields = "__all__"
