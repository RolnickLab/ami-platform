# Generated by Django 4.2.10 on 2024-08-15 04:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("ml", "0007_pipeline_endpoint_token"),
    ]

    operations = [
        migrations.AddField(
            model_name="pipelineasyncrequestrecord",
            name="callback_url",
            field=models.CharField(default="sdfssfsf", max_length=1024),
            preserve_default=False,
        ),
    ]
