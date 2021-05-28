# REST Services + Frontend

## Características
Base de Datos:
```
Redis
```

Frontend:
```
Angular 12
```

Backend API:
```
NodeJS
```
## Docker
Para ejecutarlo mediante docker, una vez clonado o copiado el proyecto, solo es necesario el siguiente comando en su consola situandose en la raiz del proyecto:
```sh
docker-compose up -d --build
```

## API Endpoints
| Method | Request | Endpoint | Body Example |
| ------ | ------ | ------ | ------ | 
| POST | Crear Persona | ```/api/persons/``` | Empty |
| GET | Obtener Personas | ```/api/persons/``` | Empty |
| PATCH | Actualizar Persona(s) | ```/api/persons/``` | Empty |


### Caracteristicas y detalles de funcionamiento
Se aplicaron algunos patrones de desarrollo de software como Single Responsibility de SOLID, .
Se desarrollo empleando Clean Code y lowerCamelCase 