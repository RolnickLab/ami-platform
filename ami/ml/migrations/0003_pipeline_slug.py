# Generated by Django 4.2.2 on 2023-11-22 03:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("ml", "0002_pipeline_endpoint_url"),
    ]

    operations = [
        migrations.AddField(
            model_name="pipeline",
            name="slug",
            field=models.SlugField(max_length=255, null=True, unique=True),
        ),
    ]