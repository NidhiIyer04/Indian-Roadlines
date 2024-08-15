from rest_framework.routers import DefaultRouter

from .views import IndianRoadlinesViewSet

router = DefaultRouter()

router.register(
    prefix="api/v1/IndianRoadlines",
    viewset=IndianRoadlinesViewSet,
    basename="indianroadlines",
)

urlpatterns = router.urls
