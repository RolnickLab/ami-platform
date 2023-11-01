# Generated by Django 4.2.2 on 2023-10-20 20:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0010_alter_sourceimagecollection_kwargs_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="taxon",
            name="author",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name="taxon",
            name="bold_taxon_bin",
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name="BOLD taxon BIN"),
        ),
        migrations.AddField(
            model_name="taxon",
            name="inat_taxon_id",
            field=models.BigIntegerField(blank=True, null=True, verbose_name="iNaturalist taxon ID"),
        ),
        migrations.AddField(
            model_name="taxon",
            name="notes",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="taxon",
            name="sort_phylogeny",
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="taxon",
            name="rank",
            field=models.CharField(
                choices=[
                    ("ORDER", "Order"),
                    ("SUPERFAMILY", "Superfamily"),
                    ("FAMILY", "Family"),
                    ("SUBFAMILY", "Subfamily"),
                    ("GENUS", "Genus"),
                    ("TRIBE", "Tribe"),
                    ("SUBTRIBE", "Subtribe"),
                    ("SPECIES", "Species"),
                ],
                default="SPECIES",
                max_length=255,
            ),
        ),
    ]