import self from "../img/self.png";

import project1 from "../img/Projects/Project1/cover.jpg";
import project2 from "../img/Projects/Project2/cover.jpg";
import project3 from "../img/Projects/Project3/cover.jpg";
import project4 from "../img/Projects/Project4/cover.png";
import project5 from "../img/Projects/Project5/cover.png";




import p1_img1 from "../img/Projects/Project1/1.jpg";
import p1_img2 from "../img/Projects/Project1/2.jpg";
import p1_img3 from "../img/Projects/Project1/3.jpg";
import p1_img4 from "../img/Projects/Project1/4.jpg";
import p1_img5 from "../img/Projects/Project1/5.jpg";
import p1_img6 from "../img/Projects/Project1/6.jpg";
import p1_img7 from "../img/Projects/Project1/7.jpg";
import p1_img8 from "../img/Projects/Project1/8.jpg";

import p2_img1 from "../img/Projects/Project2/1.jpg";
import p2_img2 from "../img/Projects/Project2/2.jpg";
import p2_img3 from "../img/Projects/Project2/3.jpg";
import p2_img4 from "../img/Projects/Project2/4.jpg";
import p2_img5 from "../img/Projects/Project2/5.jpg";
import p2_img6 from "../img/Projects/Project2/6.jpg";
import p2_img7 from "../img/Projects/Project2/7.jpg";

import p3_img1 from "../img/Projects/Project3/1.jpg";
import p3_img2 from "../img/Projects/Project3/2.jpg";
import p3_img3 from "../img/Projects/Project3/3.jpg";
import p3_img4 from "../img/Projects/Project3/4.jpg";

import p4_img1 from "../img/Projects/Project4/1.gif";
import p4_img2 from "../img/Projects/Project4/2.jpg";

import p5_img1 from "../img/Projects/Project5/1.jpg";
import p5_img2 from "../img/Projects/Project5/2.jpg";


import cvFile from "./Gessén-Darién-CV.pdf";

export const websiteTitle = "Gessén Darién - Portafolio";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Gessén",
    position: "Desarrollador Frontend",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: "💻",
            text: "Tech Lead and Product Designer",
            link: ""
        },
        {
            emoji: '☕',
            text: 'Transformación digital',
            link: ""
        },
        {
            emoji: "📞",
            text: "55 6084 3465",
            link: "tel:+525560843465"
        },
        {
            emoji: "📧",
            text: "gessendarien@gmail.com",
            link: "mailto:gessendarien@gmail.com"
        },
        {
            emoji: "📄",
            text: "CV",
            link: cvFile  // Usando el archivo PDF importado
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/gessendarien/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/gessendarien",
            icon: "fa fa-github",
            label: 'github'
        }
    ],
    bio: "Profesional con +5 años de experiencia en desarrollo web y +3 años como UX/UI Product Designer. Implementando soluciones innovadoras en equipo para alcanzar objetivos estratégicos. Hábil en la coordinación de múltiples proyectos, garantizando cumplimiento de plazos, calidad y rentabilidad de acuerdo a estándares y requerimientos del cliente.",
    skills: {
        proficientWith: ['•React', '•React Native', '•Express', '•TypeScript', '•Python', '•Git', '•Github', '•SQL'],
        exposedTo: ['•Django', '•PHP','•Docker', '•Firebase', '•Agile', '•Scrum'],
        lenguages: ['•Español nativo', '•Inglés B2']
    },
    education: [
        {
            name: "Diplomado en Transformación Digital en los Negocios y las Organizaciones - UNAM",
            icon: "https://www.unam.mx/sites/default/files/images/unam.svg"
        }
    ],
    certificate: [
        {
            name: "Desarrollo Web Oracle Next Education",
            link: "https://app.aluracursos.com/program/certificate/60ced51b-243a-4b83-83f2-682f8f08b53b",
            icon: "https://www.aluracursos.com/assets/api/programas/oracle-one.svg"
        },
        {
            name: "Data Science ONE",
            link: "https://app.aluracursos.com/user/gessendarien/degree-data-science-oci-oracle-one-15451/certificate",
            icon: "https://www.aluracursos.com/assets/api/programas/oracle-one.svg"
        }
    ],
    hobbies: 
        {
            info: `Me gusta todo lo relacionado a tecnología, videojuegos y programación. 
            Me gusta viajar y hacer video resúmenes de mis viajes.
            Me encantan las películas de fantasía de los 80's y en general lo vintage; creo que por eso también me gusta tanto Stranger Things.
            Tengo varios gatos, les quiero un montón.
            `
        },
    portfolio: [
        {
            title: "Museo MIDE",
            live: "",
            source: "",
            description: 
                `
                Desarrollé la aplicación interactiva <b>"Diálogos con el tiempo"</b> para el Museo Interactivo de Economía (MIDE) de la Ciudad de México.

                La aplicación esta creada como un sitio web en modo portrait donde todas las animaciones fueron hechas con CSS y JS <i>vanilla</i>. Se muestra dentro del museo como un 'totem' donde los visitantes graban un mensaje dirigido a ellos mismo en un futuro, buscando generar conciencia sobre la importancia del ahorro y las buenas finanzas.
                
                El video utiliza un filtro con la <i>API</i> de Snapchat y TypeScript para simular vejéz en el usuario que graba su mensaje, agregando stickers al video para ser enviado a su correo electrónico.
                El usuario también tiene la posibilidad de permitir compartir el video en una pantalla principal que hace de mural con todos los usuarios que han grabado en la aplicación.
                
                Actualmente se encuentra funcionando en el museo, teniendo pendiente de lanzarlo en versión web y dispositivos móviles abierto a todo el público.
                `,
            stacks: ['JavaScript', 'CSS3', 'Snapchat API', 'TypeScript', 'MySQL'],
            image: project1,
            gallery: [
                { type: "image", url: p1_img1 },
                { type: "image", url: p1_img2 },
                { type: "image", url: p1_img3 },
                { type: "image", url: p1_img4 },
                { type: "image", url: p1_img5 },
                { type: "image", url: p1_img6 },
                { type: "image", url: p1_img7 },
                { type: "image", url: p1_img8 }

                
            ]
        },
        {
            title: "Trivia en tiempo real",
            live: "",
            source: "",
            description: 
                `
                Desarrollé un sitio de trivias en tiempo real (aún no en producción). El sistema funciona mediante Vanilla web (nativo), PHP y MySQL, para la creación de eventos, creación de preguntas e importanción mediante CSV.
                Además como microservicio el juego de preguntas se inicializa mediante un código QR en tiempo real mostrándose en tres vistas distintas; el pandel del anfitrion desde donde se puede iniciar y cambiar la configuración de las preguntas en cualquier momento, la vista de proyección si el usuario requiere mostrarlas en alguna pantalla, y la vista de teléfono y tablets desde donde el concursante va respondiendo las preguntas.
                Para este microservicio en coparación con el sitio gateway se utilizó Node, Express y Sockets para las preguntas en tiempo real.
                 `,
            stacks: ['PHP', 'MySQL', 'Javascript', 'Express', 'Socket.io'],
            image: project2,
            gallery: [
                { type: "image", url: p2_img1 },
                { type: "image", url: p2_img2 },
                { type: "image", url: p2_img3 },
                { type: "image", url: p2_img4 },
                { type: "image", url: p2_img5 },
                { type: "image", url: p2_img6 },
                { type: "image", url: p2_img7 }
            ]
        },
        {
            title: "EnigmaRooms",
            live: "http://www.enigmarooms.net",
            source: "",
            description: 
                `
                Mejoré el sistema y experiencia UX/UI del sitio EnigmaRooms, que es una atracción de tipo Escape Room (o “sala de escape”), un juego en vivo donde un grupo de personas entra a una habitación temática y debe resolver acertijos, encontrar pistas y desbloquear mecanismos para poder salir antes de que se acabe el tiempo.

                Rediseñé y desarrollé la interfaz del sistema interno de estadísticas de ventas y utilidades de la empresa, usando librerías existentes como Chart.js pero también escribiendo la librería ahora open source Chartmander.js mostrada también aquí en mis proyectos.

                También tuve participación en la edición de diferentes páginas dentro del sitio en la modificación y adaptación de imágenes, estilos y valores en las diferentes experiencias de las distintas ciudades.

                `,
            stacks: ['Javascript', 'CSS', 'MySQL', 'Chartmander.js'],
            image: project3,
            gallery: [
                { type: "image", url: p3_img1 },
                { type: "image", url: p3_img2 },
                { type: "image", url: p3_img3 },
                { type: "image", url: p3_img4 }


                // { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }
            ]
        },
                {
            title: "Cascabel Launcher Games",
            live: "",
            source: "https://github.com/gessendarien/cascabel-launcher",
            description: 
                `
                Cascabel Launcher es un lanzador de juegos multiplataforma para Windows y Linux que desarrollé con el objetivo de centralizar y organizar emuladores de forma elegante y funcional. Permite gestionar múltiples consolas desde una interfaz con pestañas, configurar rutas de ejecutables, juegos y carátulas, además de ofrecer opciones de personalización como temas, música de fondo y ordenamiento por popularidad o alfabeto.

                El proyecto está pensado para brindar una experiencia fluida y personalizable a los usuarios que coleccionan o disfrutan de juegos retro. Incluye guardado de configuraciones para migrar fácilmente entre equipos y un sistema visual atractivo con soporte de imágenes de perfil y portadas de juegos sincronizadas automáticamente.

                `,
            stacks: ['Javascript', 'CSS', 'Electron', 'NSIS'],
            image: project5,
            gallery: [
                { type: "image", url: p5_img1 },
                { type: "image", url: p5_img2 }
            ]
        },
        {
            title: "Chartmander.js",
            live: "",
            source: "",
            description: 
                `
                Desarrollé una bibliotecas en JS que permite crear gráficas verticalmente, además de mostrar porcentajes y valor total; acompañado de una animación al cargar.
                Fue escrita originalmente para las gráficas internas del sitio EnigmaRooms pero avanzó siendo adaptada para ser open source y de uso libre dada su sencilléz de configuración y su formato vertical no tan distribuído en otras bibliotecas.

                `,
            stacks: ['Javascript', 'CSS'],
            image: project4,
            gallery: [
                { type: "image", url: p4_img1 },
                { type: "image", url: p4_img2 }


                // { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }
            ]
        }
    ]
};

//Si se necesita enviar vídeo de YouTube, usar en gallery { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }