from django.db import models

class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    date_start = models.DateField()
    date_due = models.DateField()
    date_finished = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=[('pending', 'Pending'), ('completed', 'Completed')])

    def __str__(self):
        return self.name
