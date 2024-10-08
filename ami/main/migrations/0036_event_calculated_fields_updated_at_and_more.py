# Generated by Django 4.2.10 on 2024-08-22 19:56

from django.db import migrations, models
import django.db.models.deletion


def update_event_counts(apps, schema_editor):
    from ami.main.models import update_calculated_fields_for_events
    import datetime

    end_of_time = datetime.datetime(3000, 1, 1, 0, 0, 0)
    update_calculated_fields_for_events(last_updated=end_of_time)


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0035_alter_taxon_parents_json_alter_taxon_rank"),
    ]

    operations = [
        migrations.AddField(
            model_name="event",
            name="calculated_fields_updated_at",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="event",
            name="captures_count",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="event",
            name="detections_count",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="event",
            name="occurrences_count",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.RunPython(update_event_counts, reverse_code=migrations.RunPython.noop),
    ]
