# Generated by Django 4.2.2 on 2023-11-10 01:52

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("jobs", "0008_alter_job_pipeline"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="job",
            name="config",
        ),
    ]
