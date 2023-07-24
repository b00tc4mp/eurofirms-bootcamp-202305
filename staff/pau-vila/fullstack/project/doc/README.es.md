# Mi App

TORNORECICLA

## Intro

La aplicación se dedicará a restaurar y reciclar muebles o cosas viejas de madera, a través de publicaciones de tipo contenido como posts de fotos o vídeos con sus descripciones o talleres donde la gente puede apuntarse y asistir a clases para crearlo, reciclarlo o restaurarlo de nuevo.

## Descripción funcional

El objetivo principal y las principales ventajas para los usuarios de esta aplicación es poder compartir sus obras de arte y cómo las han hecho.
Este propósito se logrará utilizando los posts de diferentes usuarios, mostrados en forma de lista. Obviamente guardando otros campos como fecha de creación, autor del post, etc.

## Technical Description:

DATA

Los principales componentes de la aplicación incluirán los siguientes esquemas

Arquitectura de datos

esquema de usuario:
    nombre: tipo (String, obligatorio),
    email: type (String, required, unique),
    contraseña: tipo (String, requerido, minLength: 8),
    región: código postal (cadena, opcional)
    whatapps: (cadena, opcional)
    favs: type (ObjectId, ref'Post')
    fecha de creación: type (Date)

post Scheme:
    author: type (ObjectId, ref 'Usuario', obligatorio)
    imagen: type (archivo de foto, opcional),
    vídeo: tipo (Cadena: URL de youtube o similar, opcional)
    descripción: tipo (String, obligatorio),
    furnitureType: tipo (cadena, obligatorio)
    matherial: type (cadena, obligatorio)
    creationDate: type (Fecha, obligatorio)
    modificationDate: type (Fecha, opcional)

esquema de taller:
    joinUserList: type (Array of User id, obligatorio)
    place: type (String, obligatorio)
    region: código postal del lugar del taller (String, obligatorio)
    fecha: incluye hora, día y tipo de fecha (Date, obligatorio)
    Duración: en minutos (Entero, obligatorio)
