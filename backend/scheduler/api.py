from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Button
from .serializers import counterSerializer

# TODO: Create your manual API views here
# TODO: write two @api_view, one POST and one GET


@api_view(['GET', 'POST'])
def clicker(request):
    if request.method == 'GET':

        obj, created = Button.objects.get_or_create(id=1)

    elif request.method == 'POST':
        
        obj, created = Button.objects.get_or_create(id=1)
        obj.count += 1
        obj.save()
        
    return Response(counterSerializer(obj).data)
        # https://www.bing.com/search?q=GET+POST+api+django&FORM=AWRE


        #counter.objects.get_or_create