from django.db import models

import ami.tasks


class BaseModel(models.Model):
    """ """

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        """All django models should have this method."""
        if hasattr(self, "name"):
            name = getattr(self, "name") or "Untitled"
            return name
        else:
            return f"{self.__class__.__name__} #{self.pk}"

    def save_async(self, *args, **kwargs):
        """Save the model in a background task."""
        ami.tasks.model_task.delay(self.__class__.__name__, self.pk, "save", *args, **kwargs)

    def update_calculated_fields(self, save=True):
        """Update calculated fields specific to each model."""
        pass

    def save(self, update_calculated_fields=True, *args, **kwargs):
        if update_calculated_fields:
            self.update_calculated_fields(save=False)
        super().save(*args, **kwargs)

    class Meta:
        abstract = True
