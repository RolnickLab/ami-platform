# Generated by Django 4.2.2 on 2023-08-14 20:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0012_alter_page_content_alter_page_link_class_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="deployment",
            name="data_source_last_checked",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="sourceimage",
            name="checksum",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="sourceimage",
            name="checksum_algorithm",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="sourceimage",
            name="last_modified",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="sourceimage",
            name="source",
            field=models.CharField(blank=True, max_length=255),
        ),
    ]