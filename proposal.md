# Propuesta TP DSW

## Grupo
### Integrantes
* legajo - Apellido(s), Nombre(s)
N° Legajo:46835 - Foix, Gaston

### Repositorios
* [frontend app](https://github.com/Gaston-01/tp-dsw/tree/main/backend)
* [backend app](https://github.com/Gaston-01/tp-dsw/tree/main/frontend)
*Nota*: si utiliza un monorepo indicar un solo link con fullstack app.

## Tema
### Descripción
La app está orientada a la venta de autos, permite comprar autos, cada auto cuenta con su descripción de características/componentes que trae, ofrece planes de pagos de varios modelos, esta app cuenta con logueo, además permite gestionar el estado de las ventas realizadas (vista admin), mostrar el historial de compras (vista usuario).

### Modelo
* [imagen del modelo](https://drive.google.com/file/d/1A02m3tE_yg6S68U2BrWSwvm6_EAv0VRS/view?usp=drive_link)

## Alcance Funcional 

### Alcance Mínimo

*Nota*: El siguiente es un ejemplo para un grupo de 1 integrante para un sistema de venta de autos.

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Auto<br>2. CRUD Plan<br>3. CRUD Localidad|
|CRUD dependiente|1. CRUD Auto {depende de} CRUD Tipo Auto<br>2. CRUD Cliente {depende de} CRUD Localidad<br>3. CRUD Seguro {depende de} CRUD Auto|
|Listado<br>+<br>detalle| 1. Listado de autos filtrado por tipo de auto, muestra modelo y tipo de auto => detalle CRUD Auto<br> 2. Listado de compras filtrado fecha; muestra modelo y tipo de auto, y nombre del cliente => detalle muestra datos completos de las compras y del cliente<br> 3. Listado de seguros filtrado por auto => detalle CRUD Seguro|
|CUU/Epic1. Comprar un auto<br>2. Ver historial de compra

Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Tipo Auto<br>2. CRUD Plan<br>3. CRUD Localidad<br>4. CRUD Provincia<br>5. CRUD Auto<br>6. CRUD Seguro<br>7. CRUD Cliente<br>8. CRUD Empleado|
|CUU/Epic|1. Comprar un auto|


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
|Listados |1. Ventas realizadas online, filtrado por tipo y/o modelo de auto, cliente, fecha<br>2. Planes (pago en cuotas), filtrado por promociones (estado)|
|CUU/Epic|1. Consultar ventas<br>2. Consumir plan|
|Otros|1. Envío de recordatorio de compra por email|

