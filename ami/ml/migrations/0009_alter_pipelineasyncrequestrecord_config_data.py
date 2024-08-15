# Generated by Django 4.2.10 on 2024-08-15 04:46

import ami.ml.schemas.v2
from django.db import migrations
import django_pydantic_field.fields


class Migration(migrations.Migration):
    dependencies = [
        ("ml", "0008_pipelineasyncrequestrecord_callback_url"),
    ]

    operations = [
        migrations.AlterField(
            model_name="pipelineasyncrequestrecord",
            name="config_data",
            field=django_pydantic_field.fields.PydanticSchemaField(
                blank=True, config=None, null=True, schema=ami.ml.schemas.v2.PipelineConfig
            ),
        ),
    ]
