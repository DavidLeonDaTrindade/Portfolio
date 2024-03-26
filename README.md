Este es el Readme de mi portfolio, las variantes que he introducido por ahora son una barra de navegacion o navbar, y e importado una libreria
para hacer uso de iconos y que asi quede mas vistozo el footer.
Los colores que voy a utilizar son el blanco y negro por que dan un toque elegante y de profesionalidad a la pagina web.
En la seccion de portfolio encontraras tres proyectos desarrollados por mi y actualmente funcionando.
En contacto he usado un formulario (Sin ruta de destino por el momento) para que cualquier usuario que quiera ponerse en contacto conmigo lo pueda hacer.
En curriculum he usado el mismo estilo minimalista del formulario, colocando información de interes que ire incrementando en el fururo.
En la sección de proyecto encontraras los enlaces a todas mis webs, no tendras que hacer uso de una pestaña nueva pues tiene el atributo _blank.
En los servicios he colocado alguna imagen de los lenguajes que mas domino y del que actualmente me encuentro aprendiendo.
Por supuesto toda la pagina esta en español eh ingles, iremos en un futuro incrementando informacion de interes.
-------------------
Tema02
En la sección de contacto uso el useState para mantener el estado que queremos.
En el Footer hago uso del useEffect almacenando la variable de visitas en localStorage para conseguir persistencia y poder ir aumentando el contador, ya que de otra manera no conseguia aumentar la variable o lo que consegui es que no parara de aumentar sin interactuar con la pagina.
En la sección de contacto combino el useEffect junto con el useRef para que cuando regargemos la pagina nos lleve directamente al input de nombre.
En la sección de proyectos hacemos uso del useMemo para memorizar la lista de proyectos y asi poder hacer una busqueda eficiente, definimos una lista de proyectos con un nombre y enlaces y utilizamos el useMemo para memorizar la lista filtrada de proyectos basada en el termino de busqueda y por ultimo manejamos los cambios para actualizar el estado.
