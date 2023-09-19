# Generated by Django 4.2.2 on 2023-09-14 20:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0032_alter_deployment_options"),
    ]

    operations = [
        migrations.AddField(
            model_name="taxon",
            name="gbif_taxon_key",
            field=models.BigIntegerField(blank=True, null=True, verbose_name="GBIF taxon key"),
        ),
        migrations.AlterField(
            model_name="taxon",
            name="parents",
            field=models.ManyToManyField(blank=True, related_name="children", to="main.taxon"),
        ),
        migrations.AlterField(
            model_name="taxon",
            name="projects",
            field=models.ManyToManyField(blank=True, related_name="taxa", to="main.project"),
        ),
        migrations.AlterField(
            model_name="taxon",
            name="rank",
            field=models.CharField(
                choices=[("ORDER", "Order"), ("FAMILY", "Family"), ("GENUS", "Genus"), ("SPECIES", "Species")],
                default="SPECIES",
                max_length=255,
            ),
        ),
    ]