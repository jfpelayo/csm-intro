from rest_framework import serializers
from .models import Button

# TODO: Create your serializers here
# TODO: WRITE A COUNTER SERALIZER

class counterSerializer(serializers.ModelSerializer):
    counter = serializers.IntegerField()

    """class Meta:
        model = Button
        count = 'counter' """
    
