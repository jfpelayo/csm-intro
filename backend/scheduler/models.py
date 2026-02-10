from django.db import models

# TODO: Create your models here
# TODO: WRTIE A COUNTER SERALIZER


class Button(models.Model):
    #intial = True
    
    counter = models.IntegerField(default = 0) # new counter

    # this would create a table where col(0) is id and col(1) is counter