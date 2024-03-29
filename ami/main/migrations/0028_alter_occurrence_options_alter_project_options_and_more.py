# Generated by Django 4.2.2 on 2023-12-03 23:36

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0027_update_occurrence_scores"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="occurrence",
            options={"ordering": ["-determination_score"]},
        ),
        migrations.AlterModelOptions(
            name="project",
            options={"ordering": ["-priority", "created_at"]},
        ),
        migrations.AddField(
            model_name="project",
            name="active",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="project",
            name="priority",
            field=models.IntegerField(default=1),
        ),
    ]
