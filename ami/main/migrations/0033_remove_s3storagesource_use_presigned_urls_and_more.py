# Generated by Django 4.2.10 on 2024-07-09 19:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0032_alter_s3storagesource_public_base_url"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="s3storagesource",
            name="use_presigned_urls",
        ),
        migrations.AlterField(
            model_name="sourceimage",
            name="public_base_url",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
