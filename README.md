# free-food-for-all project

## proyecto

Un reconocido restaurante ha decidido tener una jornada de donación de comida a los residentes de la región con la única condición de que el plato que obtendrán los comensales será aleatorio.

## Instrucciones 📚

Se realizo una web en la cual tenemos un sistema automatizado de solitud de ordenes y preparacion de ordenes. este sistema funciona de manera lineal siempre y cuando
los ingredientes necesarios para preparar esta receta esten disponibles.

Contamos con acceso a la plaza de mercado local donde podemos comprar los ingredientes necesarions para nuestras recetas.

La informacion de correspondiente a recetas, ingredientes en bodega e historiales de compras y preparacion de productos estan almacenadas en una base de datos 'MongoDB'

## Instalacion con docker-compose (Recommended)

```bash
git clone https://github.com/nelsin-06/free-food-for-all
cd free-food-for-all
docker-compose build
docker-compose up
```
Despues de la ejecucion correcta del comando anterior se podra acceder a la web desde <a target="_blank" href="http://localhost:3000">http://localhost:3000</a>

## Construido con🛠️
- dotenv
- express
- Mongoose
- connect-flash
- express-handlebars
- express-session
- node-fetch
