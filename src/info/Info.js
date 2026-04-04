import self from "../img/self.png";

import project1 from "../img/Projects/Project1/cover.jpg";
import project2 from "../img/Projects/Project2/cover.jpg";
import project3 from "../img/Projects/Project3/cover.jpg";
import project4 from "../img/Projects/Project4/cover.jpg";
import project5 from "../img/Projects/Project5/cover.jpg";


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

import p3_img1 from "../img/Projects/Project3/1.jpg";
import p3_img2 from "../img/Projects/Project3/2.jpg";

import p4_img1 from "../img/Projects/Project4/1.jpg";
import p4_img2 from "../img/Projects/Project4/2.jpg";
import p4_img3 from "../img/Projects/Project4/3.jpg";
import p4_img4 from "../img/Projects/Project4/4.jpg";

import p5_img1 from "../img/Projects/Project5/1.jpg";
import p5_img2 from "../img/Projects/Project5/2.jpg";


import cvFile from "./Gessén-Darién-CV.pdf";

export const websiteTitle = "Gessén Darién - Portafolio";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Gessén",
    position: "Desarrollador de Software",
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
        /*{
            emoji: "📞",
            text: "",
            link: "tel:+52"
        },*/
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
        exposedTo: ['•Django', '•PHP', '•Docker', '•Firebase', '•Agile', '•Scrum'],
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
                Desarrollé la aplicación <b>"Diálogos con el tiempo"</b> para el Museo Interactivo de Economía (MIDE) de la Ciudad de México.

                La aplicación está creada como un sitio web en modo <i>portrait</i>, donde todas las animaciones fueron hechas con CSS y JS <i>vanilla</i>. Se muestra dentro del museo como un “tótem”, donde los visitantes graban un mensaje dirigido a ellos mismos en el futuro, buscando generar conciencia sobre la importancia del ahorro y las buenas finanzas.

                El video utiliza un filtro con la <i>API</i> de Snapchat y TypeScript para simular vejez en el usuario que graba su mensaje, agregando stickers al video para ser enviado a su correo electrónico.
                El usuario también tiene la posibilidad de permitir compartir el video en una pantalla principal que funciona como un mural con todos quienes se hayan grabado en la aplicación.

                Actualmente se encuentra funcionando en el museo, quedando pendiente su lanzamiento en versión web y para dispositivos móviles, abierto a todo el público.
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
            title: "Petra Clipboard for Linux",
            live: "https://gessendarien.github.io/petra-clipboard",
            source: "https://github.com/gessendarien/petra-clipboard",
            description:
                `
                Desarrollé un clipboard manager (gestor de portapapeles) para distribuciones del sistema operativo GNU/Linux.
                Soporta Wayland y X11, permitiendo funcionar en sistemas operativos derivados de Debian como Ubuntu y Linux Mint, entre otros.
                Aunque existen opciones de clipboard para Linux, incluso con interfaces gráficas amigables con el usuario final, Petra Clipboard es una opción que agrega funcionalidades que no se encontraban en otras alternativas, sin dejar de lado la experiencia de usuario y la interfaz, lo cual lo vuelve una herramienta útil, cómoda y fácil de usar para todo tipo de usuario en sistemas operativos Linux.
                Este programa nace de la necesidad de migrar de sistemas comerciales hacia el software libre sin dejar atrás herramientas que se volvieron indispensables para mí, por lo que evolucionó de un software personal hacia un desarrollo para compartirlo con todo aquel al que le pueda ser útil, bajo la filosofía open source.
                                `,
            stacks: ['Python'],
            image: project2,
            gallery: [
                { type: "image", url: p2_img1 },
                { type: "image", url: p2_img2 },
                { type: "image", url: p2_img3 },
                { type: "image", url: p2_img4 },
                { type: "image", url: p2_img5 },
                { type: "image", url: p2_img6 }
            ]
        },
        {
            title: "RetroPixel GIMP Plugin",
            live: "",
            source: "https://github.com/gessendarien/retropixel",
            description:
                `
                Desarrollé un plugin para GIMP que permite convertir imágenes en texturas para objetos 3D tipo juegos de PS1 y N64.
                Este Plugin sólo funciona para la versión de GIMP 3 o superior y puede ser agregada a cualqueir sistema operativo que soporte el programa de manipulación de imágenes.
                `,
            stacks: ['Scheme'],
            image: project3,
            gallery: [
                { type: "image", url: p3_img1 },
                { type: "image", url: p3_img2 }
            ]
        },
        {
            title: "PDFortuna - Lector de PDF privado para Android",
            live: "https://gessendarien.github.io/pdfortuna-mobile",
            source: "https://github.com/gessendarien/pdfortuna-mobile",
            description:
                `
                Esta app para Android es un lector de PDF, pero con una distinción única que fue la razón por la que se desarrolló: la privacidad.
                Existen muchos y completos lectores de PDF para teléfonos Android, pero son pocos los que realmente pueden garantizar la privacidad del usuario al otorgar permisos absolutos a todos los archivos del teléfono.
                PDFortuna garantiza que el acceso a tus archivos es solamente con el fin de mostrar todos los documentos esparcidos en tu teléfono en un mismo espacio para poder verlos, compartirlos, cambiarles el nombre o eliminarlos.
                No se recopila información ni se envía ningún dato a ningún servidor; solo muestra publicidad no invasiva a cambio.
                Puede parecer un lector más, e incluso con menos funciones, pero entre demasiadas opciones con demasiadas herramientas y sumado a la incertidumbre sobre el uso de tus archivos, esta app destaca sobre las demás.
                                `,
            stacks: ['Typescript', 'React Native', 'Expo'],
            image: project4,
            gallery: [
                { type: "image", url: p4_img1 },
                { type: "image", url: p4_img2 },
                { type: "image", url: p4_img3 },
                { type: "image", url: p4_img4 }
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
        }
    ]
};

//Si se necesita enviar vídeo de YouTube, usar en gallery { type: "video", url: "https://www.youtube.com/watch?v=yuTMWgOduFM" }