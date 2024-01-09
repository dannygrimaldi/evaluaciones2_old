import csv
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()

class Command(BaseCommand):
    help = 'Carga usuarios desde un archivo CSV'

    def add_arguments(self, parser):
        parser.add_argument('archivo_csv', type=str, help='Ruta al archivo CSV')

    def handle(self, *args, **options):
        archivo_csv = options['archivo_csv']

        with open(archivo_csv, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                # Asegúrate de que los nombres de las columnas coincidan con los campos del modelo
                user = User.objects.create_user(username=row['username'], password=row['password'], nivel=row['nivel'])
                self.stdout.write(self.style.SUCCESS(f'Usuario "{user.username}" creado con éxito.'))



#Deberas crear un CSV con el siguiente formato y ejecutar el comando python manage.py cargar_usuarios ruta_al_archivo.csv
#username,password,nivel
#usuario1,contraseña1,AGENTE
#usuario2,contraseña2,SUPERVISOR
#usuario3,contraseña3,GERENTE