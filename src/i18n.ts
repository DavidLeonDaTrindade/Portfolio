import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n 
    .use(initReactI18next)
    .init({
        lng: "es",
        fallbackLng:"es",
        interpolation:{
            escapeValue: false,
        },
        resources:{
            en:{
                translation:{
                    titleHeader:"This is the header and the navigation menu",
                    inicio:"This is my home page",
                    footer:"This is the footer",
                    inicioNav:"Start",
                    portfolioNav:"Portfolio",
                    contactoNav:"Contact",
                    curriculumNav:"Resume",
                    proyectosNav:"Projects",
                    serviciosNav:"Services",
                    pInicio:"Welcome to my portfolio, here you will learn more about my abilities, virtues and some other defects, I hope you can find in my portfolio what you are looking for.",
                    proyectos:"Here you will find the link to some projects that I have been developing during my apprenticeship.",
                    textoImagen1:"This website was first created in pure html and css, as we did not achieve the desired result,at least at the beginning, we decided to use the base of colors and texts already created and do it with wordpress, currently It is working and serves as a guidefor future visitors to the rural houses.",
                    textoImagen2:"This website was designed to publicize a small business in the north of Tenerife, in the beginning it was designed completely with HTML and pure CSS but we saw the versatility and finishes of wordpress and decided to take the step given our limited experience in HTML and CSS, It is currently in operation, the client made us emphasize a product of which it is an official distributor and its social networks.",
                    textoImagen3:"This project was developed by me with the intention of controlling expired products at my current job. Before creating it, both I and my colleagues stored information separately and on paper. Now, we have everything centralized in a database, and with the push of a button, we can generate the corresponding discounts that we will have to apply.",
                    tituloProyecto1:"rural houses website",
                    tituloProyecto3:"Github Control RepositoryExpired",
                    h1servicios:"Services I offer",
                    descripcion1:"I would say that they are the three languages ​​that I master the most, the different projects that I have developed have given me the necessary freedom to launch myself into doing functional things, without a doubt I still have a long way to go to consider myself an expert.",
                    descripcion2:"Java is a language that I love, and just because of what I like, I believe that I would be able to develop great things in this language. My experience in it is limited, but even so I have carried out certain interesting practices such as hangman or snake.",
                    descripcion3:"I am currently developing several projects in React and for now I am really liking the result.",
                    contacto:"Fill out the resume to contact me",
                    nombreContacto:"Name",
                    mensajeContacto:"Message",
                    enviar:"Send",
                    curriculum:"This is my CV page",
                    nombreCurriculum:"Name",
                    apellidoCurriculum:"Surnames",
                    experiencia:"Experience",
                    estudios:"Studies",
                    habilidades:"Skills",
                    textoHabilidades:"My main skill is my involvement, sometimes I can say that it is sick,They are a methodical, responsible person and eager to build a future for myself."
                    
                    
                }
            },
            es:{
                translation:{
                    titleHeader:"Esta es la cabecera y el menu de navegacion",
                    inicio:"Esta es mi pagina de inicio",
                    footer:"Este es el pie de pagina",
                    inicioNav:"Inicio",
                    portfolioNav:"Portfolio",
                    contactoNav:"Contacto",
                    curriculumNav:"Curriculum",
                    proyectosNav:"Proyectos",
                    serviciosNav:"Servicios",
                    pInicio:"Bienvenidos a mi porfolio, aqui conocereis mas en profundidad mis capacidad, virtudes y algun que otro defecto, espero que puedan encontrar en mi portfolio lo que buscan",
                    proyectos:"Aqui encontraras el enlace a algunos proyectos, que he ido desarrollando durante mi aprendizaje.",
                    textoImagen1:"Esta web fue primeramente creada en html y css puro, como no conseguimos el resultado deseado, al menos al principio,decidimos usar la base de colores y textos ya creados y hacerla con wordpress, actualmente se encuentra funcionando y sirve de guiapara los futuros visitantes de las casas rurales.",   
                    textoImagen2:"Esta web fue diseñada para dar a conocer un pequeño comercio del norte de Tenerife, en sus inicio fue diseñada completamente con HTML y CSS puro pero vimos la versatilidad y los acabados de wordpress y decidimos dar el paso dada nuestra baja experiencia en HTML y CSS, actualmente se encuentra en funcionamiento, el cliente nos hizo incapie en destacar un producto del que es distribuidor oficial y sus redes sociales.",
                    textoImagen3:"Este proyecto fue desarrollado por mí con la intención de controlar los productos caducados en mi trabajo actual. Antes de crearlo, tanto yo como mis compañeros almacenábamos la información por separado y en papel. Ahora, tenemos todo centralizado en una base de datos, y con solo apretar un botón, podemos generar los descuentos correspondientes que tendremos que aplicar.",
                    tituloProyecto1:"Web Casas Rurales",
                    tituloProyecto3:"Repositorio Github ControlCaducados",
                    h1servicios:"Servicios que ofrezco",
                    descripcion1:"Diría que son los tres lenguajes que más domino. Los diferentes proyectos que he desarrollado me han dado la soltura necesaria para lanzarme a hacer cosas funcionales. Sin duda, aún me queda muchísimo camino que recorrer para considerarme un experto.",
                    descripcion2:"Java es un lenguaje que me encanta, y solo por el gusto que siento hacia él, creo que sería capaz de desarrollar grandes proyectos. Aunque mi experiencia en Java es limitada, he realizado algunas prácticas interesantes como el juego del ahorcado o el desarrollo de una versión del clásico juego de la serpiente.",
                    descripcion3:"Actualmente me encuentro desarrollando varios proyectos en React y por ahora me esta gustando mucho el resultado",
                    contacto:"Rellena el formulario para ponerte en contacto conmigo",
                    nombreContacto:"Nombre",
                    mensajeContacto:"Mensaje",
                    enviar:"Enviar",
                    curriculum:"Esta es la pagina de mi Curriculum",
                    nombreCurriculum:"Nombre",
                    apellidoCurriculum:"Apellidos",
                    experiencia:"Experiencia",
                    estudios:"Estudios",
                    habilidades:"Habilidades",
                    textoHabilidades:"Mi principal habilidad es mi implicación en ocasiones puedo llegar a decir que es enfermizo,son una persona metodica, responsable y con muchas ganas de labrarme un futuro."
                }
            },
        },
    });
    
export default i18n;