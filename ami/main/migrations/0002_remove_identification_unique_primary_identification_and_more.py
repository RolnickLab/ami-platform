# Generated by Django 4.2.5 on 2023-09-21 20:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0001_initial"),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name="identification",
            name="unique_primary_identification",
        ),
        migrations.AddConstraint(
            model_name="identification",
            constraint=models.UniqueConstraint(
                condition=models.Q(("primary", True)), fields=("occurrence",), name="unique_primary_identification"
            ),
        ),
    ]
