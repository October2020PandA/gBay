# Generated by Django 2.2 on 2020-10-22 19:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('buy_sell', '0003_auto_20201022_1151'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
        migrations.RemoveField(
            model_name='product',
            name='user',
        ),
    ]
