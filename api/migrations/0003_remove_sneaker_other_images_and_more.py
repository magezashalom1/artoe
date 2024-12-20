# Generated by Django 5.1.2 on 2024-10-27 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_order_orderitem_order_sneakers"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="sneaker",
            name="other_images",
        ),
        migrations.AddField(
            model_name="sneaker",
            name="additional_image_1",
            field=models.ImageField(blank=True, null=True, upload_to="sneakers/extra/"),
        ),
        migrations.AddField(
            model_name="sneaker",
            name="additional_image_2",
            field=models.ImageField(blank=True, null=True, upload_to="sneakers/extra/"),
        ),
        migrations.AddField(
            model_name="sneaker",
            name="additional_image_3",
            field=models.ImageField(blank=True, null=True, upload_to="sneakers/extra/"),
        ),
        migrations.AddField(
            model_name="sneaker",
            name="additional_image_4",
            field=models.ImageField(blank=True, null=True, upload_to="sneakers/extra/"),
        ),
    ]
