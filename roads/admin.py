from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin

from .models import IndianRoadlines


class IndianRoadlinesAdmin(LeafletGeoAdmin):
    list_display = ("name", "roads")


admin.site.register(IndianRoadlines, IndianRoadlinesAdmin)
