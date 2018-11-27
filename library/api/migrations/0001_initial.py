# Generated by Django 2.0.5 on 2018-11-27 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=255)),
                ('birthday', models.DateField()),
                ('born', models.CharField(max_length=255)),
                ('kind', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('author', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('free', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=255)),
            ],
        ),
    ]