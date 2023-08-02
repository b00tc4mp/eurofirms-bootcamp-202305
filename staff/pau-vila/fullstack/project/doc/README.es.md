# Mi App

TORNORECICLA

## Intro

La aplicación se dedicará a restaurar y reciclar muebles o cosas viejas de madera, a través de publicaciones de tipo contenido como posts de fotos o vídeos con sus descripciones o talleres donde la gente puede apuntarse y asistir a clases para crearlo, reciclarlo o restaurarlo de nuevo.

## Descripción funcional

El objetivo principal y las principales ventajas para los usuarios de esta aplicación es poder compartir sus obras de arte y cómo las han hecho.
Este propósito se logrará utilizando los posts de diferentes usuarios, mostrados en forma de lista. Obviamente guardando otros campos como fecha de creación, autor del post, etc.

## Casos prácticos
- publicar obra o taller
- ver obras o talleres
- actualizar obras o talleres
- eliminar obra o taller
- unirse/desunirse a un taller
- buscar obras o talleres

## Technical Description:

### Modelo de datos

Los principales modelos de la aplicación incluirán los siguientes esquemas

Usuario
- nombre (cadena, obligatorio)
- correo electrónico (cadena, obligatoria, única)
- contraseña (cadena, obligatoria, longitud mínima: 8)
- código postal de la región (cadena, opcional)
- teléfono (cadena, opcional)
- favs (ObjectId, ref Artwork)
- fecha de creación (Fecha)

Obra de arte 
- author (ObjectId, ref 'Usuario', obligatorio)
- image (archivo de foto, obligatoria)
- vídeo (cadena: URL de youtube o similar, opcional)
- descripción (cadena, obligatoria)
- tipo (String, obligatorio)
- materiales ([String], obligatorio)
- creationDate (Fecha, obligatorio)

Taller 
- attendants (Array of User id, obligatorio)
- lugar (String, obligatorio)
- código postal (cadena, obligatorio)
- date start (Fecha, obligatorio)
- fecha fin (Entero, obligatorio)
- imagen (archivo de foto, opcional)
- vídeo (cadena: URL de youtube o similar, opcional)
- descripción (cadena, obligatoria)


