# Generated by Django 4.2.2 on 2023-08-24 03:10

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0028_sourceimage_unique_deployment_timestamp_path"),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name="sourceimage",
            name="unique_deployment_timestamp",
        ),
        migrations.RemoveConstraint(
            model_name="sourceimage",
            name="unique_deployment_timestamp_path",
        ),
    ]
