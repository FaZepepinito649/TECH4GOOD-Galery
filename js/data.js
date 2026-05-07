// ═══════════════════════════════════════════
// TECH4GOOD — GALERÍA DE PROYECTOS
// Data file — edita aquí para agregar proyectos,
// imágenes o URLs de páginas web.
// ═══════════════════════════════════════════

const PROJECTS = [

  // ─────────────────── COMUNIDAD ───────────────────
  {
    id: "ecocloset",
    name: "EcoCloset",
    category: "comunidad",
    type: "app",
    description: "Una comunidad en línea a nivel local que conecta tiendas de segunda mano, revendedores individuales y compradores. Su enfoque es la reventa de ropa para evitar apoyar sitios de moda rápida.",
    team: ["Celina Rangel", "Andrea López", "Leonardo Ortiz", "Valeria Gutiérrez", "Renata Robles"],
    images: ["assets/ecocloset/ecocloset-1.jpg", "assets/ecocloset/ecocloset-2.jpg", "assets/ecocloset/ecocloset-3.jpg"],
    webUrl: null,
    emoji: "👗"
  },
  {
    id: "busstop",
    name: "Bus Stop",
    category: "comunidad",
    type: "app",
    description: "Busca reducir tiempos muertos, racionalizar el espacio entre transportes y resolver el problema de la falta de transporte público en la ciudad.",
    team: ["Luis Ángel Ortega", "Maximiliano Muñoz", "Josué Sandoval", "Diego Jahuey", "Omar Cisneros"],
    images: ["assets/busstop/busstop-1.jpg", "assets/busstop/busstop-2.jpg", "assets/busstop/busstop-3.jpg"],
    webUrl: null,
    emoji: "🚌"
  },
  {
    id: "barkcam",
    name: "BarkCam",
    category: "comunidad",
    type: "app",
    description: "Una app que detecta movimiento a través de cámaras de vigilancia y genera un sonido de ladrido de perro, ahuyentando así a cualquier intruso.",
    team: ["Katia Rangel", "Inés Balbotin", "Sofía Palomares", "Ana Sofía Lira"],
    images: ["assets/barkcam/barkcam-1.jpg", "assets/barkcam/barkcam-2.jpg", "assets/barkcam/barkcam-3.jpg"],
    webUrl: null,
    emoji: "🐕"
  },
  {
    id: "mabs",
    name: "Mabs",
    category: "comunidad",
    type: "app",
    description: "La app ayuda a que los vecinos de la comunidad puedan reportar calles mal pavimentadas o baches, enviando fotos y ubicación para que el gobierno pueda identificarlos y actuar eficazmente.",
    team: ["Valentina Rizo", "Pablo González", "Marlene Castillo", "Bryan Aguilar"],
    images: ["assets/mabs/mabs-1.jpg", "assets/mabs/mabs-2.jpg", "assets/mabs/mabs-3.jpg"],
    webUrl: null,
    emoji: "🛣️"
  },
  {
    id: "safepilot",
    name: "Safe Pilot",
    category: "comunidad",
    type: "app",
    description: "En esta app se registran infracciones viales con fotos de placas, identifica al propietario, notifica la falta y la multa correspondiente.",
    team: ["Andrés Borges", "Matías Mendoza", "Diego Coronado", "Emilio Díaz de León", "Juan José Palacios"],
    images: ["assets/safepilot/safepilot-1.jpg", "assets/safepilot/safepilot-2.jpg", "assets/safepilot/safepilot-3.jpg"],
    webUrl: null,
    emoji: "🚦"
  },
  {
    id: "alertix",
    name: "Alertix",
    category: "comunidad",
    type: "app",
    description: "Una app que ayuda a mejorar la seguridad en los parques, permitiendo pedir ayuda rápido, reportar incidentes y ubicar mejor las zonas de riesgo.",
    team: ["Carlos de los Santos", "Isabel González", "Antonio Acebo", "Roberta González"],
    images: ["assets/alertix/alertix-1.jpg", "assets/alertix/alertix-2.jpg", "assets/alertix/alertix-3.jpg"],
    webUrl: null,
    emoji: "🌳"
  },
  {
    id: "focusquest",
    name: "FocusQuest",
    category: "comunidad",
    type: "app",
    description: "Apoyo a la educación de niños, fomentando su aprendizaje con diversión como si fuera un juego, logrando subir niveles para un 'pase de batalla' que brindará recompensas dentro de sus clases.",
    team: ["Patricio Flores", "Santiago Castro", "Víctor López", "Max Torres"],
    images: ["assets/focusquest/focusquest-1.jpg", "assets/focusquest/focusquest-2.jpg", "assets/focusquest/focusquest-3.jpg"],
    webUrl: null,
    emoji: "🎮"
  },
  {
    id: "iluminacion",
    name: "Iluminación Inteligente",
    category: "comunidad",
    type: "app",
    description: "Previene situaciones donde los cambios de clima provocan apagones sin previo aviso y genera mayor seguridad en las calles. La app permite programar encendidos y apagados y cuenta con pronóstico del clima.",
    team: ["Arumi Palacios", "Dana Menchaca"],
    images: ["assets/iluminacion/iluminacion-1.jpg", "assets/iluminacion/iluminacion-2.jpg", "assets/iluminacion/iluminacion-3.jpg"],
    webUrl: null,
    emoji: "💡"
  },
  {
    id: "semaforos",
    name: "Por Menos Futuros en los Semáforos",
    category: "comunidad",
    type: "app",
    description: "Fortalece el trabajo de la PPNNA mediante inteligencia artificial para detectar patrones de riesgo y prevenir la violación a los derechos. Prioriza el acompañamiento familiar y facilita el acceso a programas de bienestar.",
    team: ["Andrea Rosado", "Vicente Sánchez", "Liliana Llama", "Barbara Alejos", "Ximena Sánchez"],
    images: ["assets/semaforos/semaforos-1.jpg", "assets/semaforos/semaforos-2.jpg", "assets/semaforos/semaforos-3.jpg"],
    webUrl: null,
    emoji: "🚸"
  },
  {
    id: "smartflow",
    name: "SmartFlow",
    category: "comunidad",
    type: "app",
    description: "La app soluciona los largos tiempos de espera en los semáforos mediante cámaras inteligentes con inteligencia artificial para optimizar el flujo vehicular.",
    team: ["Francisco Torres", "Gabriel de la Maza", "Joaquín González", "Marcelo Lozano", "Rodrigo Gómez"],
    images: ["assets/smartflow/smartflow-1.jpg", "assets/smartflow/smartflow-2.jpg", "assets/smartflow/smartflow-3.jpg"],
    webUrl: null,
    emoji: "🚗"
  },
  {
    id: "sobr",
    name: "SOBR",
    category: "comunidad",
    type: "app",
    description: "La app guía a los jóvenes hacia 'zonas seguras' validando su presencia física mediante sensores Bluetooth para evitar fiestas clandestinas.",
    team: ["Miguel Ortiz", "Luis Pablo Castañedo", "Emil Antonio", "Luis Zapata"],
    images: ["assets/sobr/sobr-1.jpg", "assets/sobr/sobr-2.jpg", "assets/sobr/sobr-3.jpg"],
    webUrl: null,
    emoji: "📍"
  },
  {
    id: "inmigram",
    name: "Inmigram",
    category: "comunidad",
    type: "app",
    description: "Una red que ayuda y motiva a la comunidad a progresar en materia de voluntariado para los migrantes. La app conecta con el usuario para garantizar su seguimiento en la ayuda a migrantes.",
    team: ["Ana Lucía Mier", "Joaquín Wong", "Alejandro Boehringer", "Ana Paula Flores", "Arturo Olvera"],
    images: ["assets/inmigram/inmigram-1.jpg", "assets/inmigram/inmigram-2.jpg", "assets/inmigram/inmigram-3.jpg"],
    webUrl: null,
    emoji: "🌎"
  },
  {
    id: "escudodigital",
    name: "Escudo Digital",
    category: "comunidad",
    type: "app",
    description: "Protege a los usuarios contra amenazas digitales como fraudes, malware y robo de información. Proporciona información clara sobre riesgos en internet y permite detectar y prevenir ataques cibernéticos en tiempo real.",
    team: ["Santiago Archidona", "Victoria Martínez", "Mónica Mirabal", "Debra Osuna", "Emilio de Jesús Ramírez"],
    images: ["assets/escudodigital/escudodigital-1.jpg", "assets/escudodigital/escudodigital-2.jpg", "assets/escudodigital/escudodigital-3.jpg"],
    webUrl: null,
    emoji: "🛡️"
  },
  {
    id: "technworking",
    name: "TechN'Working",
    category: "comunidad",
    type: "app",
    description: "Enseña nuevas habilidades tecnológicas mediante cursos adaptados a las necesidades e intereses de cada usuario. Busca combatir el edadismo en el uso de la tecnología, ofreciendo aprendizajes duraderos y acompañamiento continuo.",
    team: ["Andrea Gasca", "Ana Sofía Ramírez"],
    images: ["assets/technworking/technworking-1.jpg", "assets/technworking/technworking-2.jpg", "assets/technworking/technworking-3.jpg"],
    webUrl: null,
    emoji: "💻"
  },
  {
    id: "safefire",
    name: "Safe Fire",
    category: "comunidad",
    type: "app",
    description: "Permite al usuario detectar y reportar emergencias de incendios de manera rápida y sencilla, facilitando la comunicación con los servicios de emergencia para una respuesta más eficiente.",
    team: ["Paloma González", "Carlos Jiménez", "Aquiles Anhuar", "José Ángel Leija"],
    images: ["assets/safefire/safefire-1.jpg", "assets/safefire/safefire-2.jpg", "assets/safefire/safefire-3.jpg"],
    webUrl: null,
    emoji: "🔥"
  },
  {
    id: "hydrosense",
    name: "HydroSense",
    category: "comunidad",
    type: "hardware",
    description: "Sistema que utiliza el sensor de agua HydroSense para detectar el aumento del nivel del agua y emitir una alarma. Permite tomar precauciones a tiempo, como resguardar pertenencias o evacuar si es necesario.",
    team: ["Andrea Alonso", "Diego Castillo", "Adriana Molina", "María José García", "Andrea Vera"],
    images: ["assets/hydrosense/hydrosense-1.jpg", "assets/hydrosense/hydrosense-2.jpg", "assets/hydrosense/hydrosense-3.jpg"],
    webUrl: null,
    emoji: "💧"
  },

  // ─────────────────── EDUCACIÓN ───────────────────
  {
    id: "edutea",
    name: "Edu-tea",
    category: "educacion",
    type: "app",
    description: "Desarrollada con MIT App Inventor, conecta a niños con autismo con escuelas e instituciones especializadas. Permite encontrar opciones confiables, conocer información relevante sobre cada institución y acceder a recomendaciones de otros usuarios.",
    team: ["Javier Gallegos", "Andrea Ruiz", "Miguel Alvarado", "Edgar Escalera"],
    images: ["assets/edutea/edutea-1.jpg", "assets/edutea/edutea-2.jpg", "assets/edutea/edutea-3.jpg"],
    webUrl: null,
    emoji: "🌻"
  },
  {
    id: "emotionalsupport",
    name: "Your Emotional Support",
    category: "educacion",
    type: "app",
    description: "Chat de apoyo emocional que permite a los usuarios buscar ayuda de manera anónima, especialmente si no se sienten cómodos hablando con alguien directamente. Diseñada para ser humanizada, priorizando la sensibilidad y la empatía.",
    team: ["Ivanna Gutiérrez", "Patricio Torres", "Fernando Tristán", "Jacqueline Castillo"],
    images: ["assets/emotionalsupport/emotionalsupport-1.jpg", "assets/emotionalsupport/emotionalsupport-2.jpg", "assets/emotionalsupport/emotionalsupport-3.jpg"],
    webUrl: null,
    emoji: "💬"
  },
  {
    id: "3hnx",
    name: "3-Hnx",
    category: "educacion",
    type: "app",
    description: "Fomenta el aprendizaje dinámico en niños mediante una plataforma digital que brinda apoyo personalizado, con el objetivo de mejorar su desempeño a través de herramientas interactivas.",
    team: ["Heidy Zubieta", "Nicole Mastache", "Xhaviery Viazcán"],
    images: ["assets/3hnx/3hnx-1.jpg", "assets/3hnx/3hnx-2.jpg", "assets/3hnx/3hnx-3.jpg"],
    webUrl: null,
    emoji: "📚"
  },
  {
    id: "edula",
    name: "EdulA México",
    category: "educacion",
    type: "app",
    description: "Integra un motor de IA que personaliza el aprendizaje adaptando los contenidos según necesidades e intereses. Cuenta con dashboards para alumnos, maestros, padres y administradores, y una biblioteca basada en contenidos de la SEP accesible sin internet.",
    team: ["Nicolás Ruiz", "José María Segundo", "Sebastián Montoya", "Diego Michin", "Aldo Hinojosa"],
    images: ["assets/edula/edula-1.jpg", "assets/edula/edula-2.jpg", "assets/edula/edula-3.jpg"],
    webUrl: null,
    emoji: "🧠"
  },
  {
    id: "clariox",
    name: "Clariox",
    category: "educacion",
    type: "app",
    description: "Ofrece información confiable, clara y accesible sobre educación sexual, con herramientas para la prevención de riesgos como infecciones de transmisión sexual y embarazos no planeados. Funciona como espacio seguro de conocimiento.",
    team: ["María Fernández", "Martina Diliz", "Hefziba Medina", "Fernanda de la Torre"],
    images: ["assets/clariox/clariox-1.jpg", "assets/clariox/clariox-2.jpg", "assets/clariox/clariox-3.jpg"],
    webUrl: null,
    emoji: "❤️"
  },
  {
    id: "bitaula",
    name: "Bit Aula",
    category: "educacion",
    type: "app",
    description: "Enfocada en el desarrollo de habilidades digitales esenciales. Ofrece contenido interactivo para el aprendizaje autónomo y cuenta con un sistema de acompañamiento académico a través de asesorías en línea.",
    team: ["Ximena Quistian", "Aida del Pozo", "Salvador Orozco", "Alonso Canales", "Niko Piñero", "Ivanna Escobedo"],
    images: ["assets/bitaula/bitaula-1.jpg", "assets/bitaula/bitaula-2.jpg", "assets/bitaula/bitaula-3.jpg"],
    webUrl: null,
    emoji: "⚡"
  },
  {
    id: "tucamino",
    name: "Tu Camino",
    category: "educacion",
    type: "app",
    description: "Diseñada para ayudarte a identificar tus intereses y habilidades. Explora diferentes áreas y capacidades que quizás no habías considerado, guiándote para tomar una decisión vocacional informada, segura y alineada contigo.",
    team: ["Paola Silos", "Renata Galván", "Ana Victoria Auces", "Carolina Guerrero", "Paula García"],
    images: ["assets/tucamino/tucamino-1.jpg", "assets/tucamino/tucamino-2.jpg", "assets/tucamino/tucamino-3.jpg"],
    webUrl: null,
    emoji: "🗺️"
  },
  {
    id: "equalchances",
    name: "Equal Chances",
    category: "educacion",
    type: "app",
    description: "Una app que aborda el elitismo y la segregación social estudiantil, permitiendo buscar información y eliminar la brecha social con personas de mayor estatus económico.",
    team: ["Genaro Orlando Hipólito Ramos", "Iván Sanders"],
    images: ["assets/equalchances/equalchances-1.jpg", "assets/equalchances/equalchances-2.jpg", "assets/equalchances/equalchances-3.jpg"],
    webUrl: null,
    emoji: "⚖️"
  },

  // ─────────────────── MEDIO AMBIENTE ───────────────────
  {
    id: "plantguard",
    name: "Plant Guard",
    category: "medioambiente",
    type: "hardware",
    description: "Sensor de humedad para medir la humedad de tus plantas con un semáforo de tres colores y una app con información sobre el cuidado específico de cada planta.",
    team: ["André Montes de Oca", "Jesús Ruiz", "Diego Compean", "José Compean", "Diego Rangel"],
    images: ["assets/plantguard/plantguard-1.jpg", "assets/plantguard/plantguard-2.jpg", "assets/plantguard/plantguard-3.jpg"],
    webUrl: null,
    emoji: "🌱"
  },
  {
    id: "caminosverdes",
    name: "Caminos Verdes",
    category: "medioambiente",
    type: "app",
    description: "Aplicación centrada en las áreas verdes de la ciudad para combatir la acumulación de basura. Seleccionas un parque y te dice dónde están los basureros más cercanos, con sección de concientización sobre reciclaje.",
    team: ["Emilia Muñoz", "Luna Cossío", "Jorge Sierra", "Axel Rivero"],
    images: ["assets/caminosverdes/caminosverdes-1.jpg", "assets/caminosverdes/caminosverdes-2.jpg", "assets/caminosverdes/caminosverdes-3.jpg"],
    webUrl: null,
    emoji: "🌿"
  },
  {
    id: "alertaagua",
    name: "Alerta Agua SLP",
    category: "medioambiente",
    type: "app",
    description: "App para hacer el servicio de agua más accesible y arreglar fugas mediante reportes, para que toda la población pueda acceder a agua de manera equitativa.",
    team: ["Delta Orozco", "Valentina Vonder", "Oscar Velázquez", "Juan Castanedo", "Iker Negrete", "Ximena Vázquez"],
    images: ["assets/alertaagua/alertaagua-1.jpg", "assets/alertaagua/alertaagua-2.jpg", "assets/alertaagua/alertaagua-3.jpg"],
    webUrl: null,
    emoji: "🚰"
  },
  {
    id: "trashway",
    name: "Trash Way",
    category: "medioambiente",
    type: "app",
    description: "Una app con la cual puedes localizar los centros de reciclaje más cercanos a tu ubicación de manera sencilla.",
    team: ["Gonzalo Osuna", "Ushio Inoue", "Gonzalo Salinas", "Roberto Rodrigues"],
    images: ["assets/trashway/trashway-1.jpg", "assets/trashway/trashway-2.jpg", "assets/trashway/trashway-3.jpg"],
    webUrl: null,
    emoji: "♻️"
  },
  {
    id: "escasezagua",
    name: "Escasez de Agua en SLP",
    category: "medioambiente",
    type: "app",
    description: "App para reportar la escasez de agua donde puedes hacer una solicitud para recibir servicios de suministro de agua en tu zona.",
    team: ["Rafael Méndez Ruiz", "José María Rivera", "Manuel Brandon Hernández"],
    images: ["assets/escasezagua/escasezagua-1.jpg", "assets/escasezagua/escasezagua-2.jpg", "assets/escasezagua/escasezagua-3.jpg"],
    webUrl: null,
    emoji: "💦"
  },
  {
    id: "motivapatas",
    name: "Motiva Patas",
    category: "medioambiente",
    type: "hardware",
    description: "Bote de basura que envía mensajes motivacionales cuando los dueños depositan las heces fecales de sus animales, incentivando buenas prácticas en espacios públicos.",
    team: ["Santiago Lozano", "Mauricio Lozano", "Paulina Acebo", "Marcelo Chávez"],
    images: ["assets/motivapatas/motivapatas-1.jpg", "assets/motivapatas/motivapatas-2.jpg", "assets/motivapatas/motivapatas-3.jpg"],
    webUrl: null,
    emoji: "🐾"
  },
  {
    id: "trash2life",
    name: "Trash2life",
    category: "medioambiente",
    type: "app",
    description: "Aplicación que ofrece una solución inmediata y accesible hacia la basura acumulada en San Luis Potosí, con un beneficio económico directo para el usuario.",
    team: ["Romina Guzmán", "Isabella Carrasco", "Jasmin Avalos", "Sofía Cerecero", "Frida Sandoval"],
    images: ["assets/trash2life/trash2life-1.jpg", "assets/trash2life/trash2life-2.jpg", "assets/trash2life/trash2life-3.jpg"],
    webUrl: null,
    emoji: "🔄"
  },
  {
    id: "alertaverde",
    name: "Alerta Verde",
    category: "medioambiente",
    type: "app",
    description: "Con una foto puedes reportar basura donde la veas. La ubicación se guarda y el equipo coloca botes de basura en zonas con mayor concentración de reportes.",
    team: ["Roberto Viña", "Raúl Sánchez", "Mario Delgadillo", "Erik Bucio"],
    images: ["assets/alertaverde/alertaverde-1.jpg", "assets/alertaverde/alertaverde-2.jpg", "assets/alertaverde/alertaverde-3.jpg"],
    webUrl: null,
    emoji: "📸"
  },
  {
    id: "greenscan",
    name: "Green Scan",
    category: "medioambiente",
    type: "hardware",
    description: "Bote de basura inteligente que funciona mediante una aplicación que detecta PET para darle el segundo uso adecuado y fomentar el reciclaje correcto.",
    team: ["Isabella Pedrajas", "Lucía Hernández", "Iñaki Flores", "Mónica del Río"],
    images: ["assets/greenscan/greenscan-1.jpg", "assets/greenscan/greenscan-2.jpg", "assets/greenscan/greenscan-3.jpg"],
    webUrl: null,
    emoji: "🔍"
  },
  {
    id: "sair",
    name: "SAIR",
    category: "medioambiente",
    type: "app",
    description: "Inteligencia artificial que puede clasificar basura automáticamente para facilitar el proceso de separación y reciclaje correcto.",
    team: ["Ricardo Hampshire", "Vanessa Gómez", "Daniela Ruiz"],
    images: ["assets/sair/sair-1.jpg", "assets/sair/sair-2.jpg", "assets/sair/sair-3.jpg"],
    webUrl: null,
    emoji: "🤖"
  },
  {
    id: "basurago",
    name: "Basura Go",
    category: "medioambiente",
    type: "app",
    description: "Aplicación donde puedes hacer un reporte de basura en las calles de la ciudad y un camión viene a recogerla, manteniendo la ciudad limpia.",
    team: ["Tiago Valle", "Emiliano Soni", "Luan Werner", "Guillermo Fermat"],
    images: ["assets/basurago/basurago-1.jpg", "assets/basurago/basurago-2.jpg", "assets/basurago/basurago-3.jpg"],
    webUrl: null,
    emoji: "🗑️"
  },
  {
    id: "reciclaslp",
    name: "Recicla SLP",
    category: "medioambiente",
    type: "web",
    description: "Página web que conecta a los potosinos con posibles recicladoras y campañas gubernamentales. Incluye un juego interactivo de rankings para incentivar la participación ciudadana en el reciclaje.",
    team: ["Adolfo Isaí Caballero", "Jorge Olivares", "Carlos David Gutiérrez", "Isabella Escobedo", "Lupita Lugos"],
    images: ["assets/reciclaslp/reciclaslp-1.jpg", "assets/reciclaslp/reciclaslp-2.jpg", "assets/reciclaslp/reciclaslp-3.jpg"],
    webUrl: "https://reciclaslp.netlify.app",
    emoji: "🌐"
  },
  {
    id: "cuidadoagua",
    name: "Cuidado del Agua",
    category: "medioambiente",
    type: "app",
    description: "La aplicación te ayuda a cuidar el agua y te enseña a gastarla de manera más inteligente con consejos personalizados.",
    team: ["Mauricio Arcos", "Mateo Sulaica", "Juan Pablo Rodríguez", "Paulina Vélez"],
    images: ["assets/cuidadoagua/cuidadoagua-1.jpg", "assets/cuidadoagua/cuidadoagua-2.jpg", "assets/cuidadoagua/cuidadoagua-3.jpg"],
    webUrl: null,
    emoji: "🌊"
  },

  // ─────────────────── SALUD ───────────────────
  {
    id: "medmar",
    name: "MedMar",
    category: "salud",
    type: "app",
    description: "Ayuda en el día a día facilitando la búsqueda de medicamentos, las tiendas donde están disponibles, el inventario, el precio y los descuentos, todo en una sola app. Incluye área para proveedores que pueden modificar su inventario.",
    team: ["Rodrigo Mendoza", "Iván Mercado", "Daniel Puente"],
    images: ["assets/medmar/medmar-1.jpg", "assets/medmar/medmar-2.jpg", "assets/medmar/medmar-3.jpg"],
    webUrl: null,
    emoji: "💊"
  },
  {
    id: "docbot",
    name: "Doc Bot",
    category: "salud",
    type: "app",
    description: "Aplicación para atender el desabasto de medicamentos, facilitando a los usuarios la localización rápida de farmacias o centros de salud donde haya disponibilidad.",
    team: ["Marcela Ruelas", "Regina Alfaro", "Isabella Steven's", "Ximena Ávila"],
    images: ["assets/docbot/docbot-1.jpg", "assets/docbot/docbot-2.jpg", "assets/docbot/docbot-3.jpg"],
    webUrl: null,
    emoji: "🤖"
  },
  {
    id: "helthstock",
    name: "Helth Stock",
    category: "salud",
    type: "app",
    description: "Aplicación para erradicar el desabasto de medicamentos. Te dice si hay medicamentos disponibles o no para evitar filas largas en clínicas y hospitales.",
    team: ["Sofía Reynaga"],
    images: ["assets/helthstock/helthstock-1.jpg", "assets/helthstock/helthstock-2.jpg"],
    webUrl: null,
    emoji: "📦"
  },
  {
    id: "medialerta",
    name: "Medí Alerta San Luis Potosí",
    category: "salud",
    type: "app",
    description: "Aplicación que avisa a los pacientes cuando su medicamento esté disponible y previene los viajes innecesarios a la clínica del ISSSTE mediante alertas en tiempo real.",
    team: ["Ana Paula Loredo", "Sofía Flores", "Yemin Uresti", "Andrea Torres", "Diego Reynoso"],
    images: ["assets/medialerta/medialerta-1.jpg", "assets/medialerta/medialerta-2.jpg", "assets/medialerta/medialerta-3.jpg"],
    webUrl: null,
    emoji: "🔔"
  },
  {
    id: "buscamedicina",
    name: "Busca tu Medicina",
    category: "salud",
    type: "app",
    description: "Ayuda a buscar las medicinas que necesitas y comparar precios entre farmacias para conseguirlas más baratas o más rápido. También muestra la ubicación de la farmacia en un mapa.",
    team: ["Julio Herrera", "Steven Scott", "Miguel Gutiérrez", "Mauricio Minondo", "Philip Murphy"],
    images: ["assets/buscamedicina/buscamedicina-1.jpg", "assets/buscamedicina/buscamedicina-2.jpg", "assets/buscamedicina/buscamedicina-3.jpg"],
    webUrl: null,
    emoji: "🗺️"
  },
  {
    id: "medialert",
    name: "Medi Alert",
    category: "salud",
    type: "web",
    description: "Página web donde puedes consultar medicamentos y su disponibilidad. También ayuda a organizar los inventarios de las farmacias y administrarlos de una manera más eficiente.",
    team: ["Ana Sofí Leiva", "Leo Álvarez", "Melisa Chávez", "Rodrigo Cervantes"],
    images: ["assets/medialert/medialert-1.jpg", "assets/medialert/medialert-2.jpg", "assets/medialert/medialert-3.jpg"],
    webUrl: "https://medialert.netlify.app",
    emoji: "🌐"
  },
  {
    id: "encuentramed",
    name: "Encuentra Med",
    category: "salud",
    type: "app",
    description: "App que da información sobre los medicamentos que necesitas y muestra cómo encontrarlos con un mapa integrado en la aplicación.",
    team: ["Dulce María Casanova De La Madrid", "Giovana Alexandra Eng Rosas", "Isabella Guzmán Mendes", "Ana Lucía Silva Santillán", "José Manuel Mendoza Del Valle"],
    images: ["assets/encuentramed/encuentramed-1.jpg", "assets/encuentramed/encuentramed-2.jpg", "assets/encuentramed/encuentramed-3.jpg"],
    webUrl: null,
    emoji: "🔎"
  },
  {
    id: "medistuck",
    name: "Medi Stuck",
    category: "salud",
    type: "app",
    description: "Aplicación que muestra un inventario actualizado de los hospitales para agilizar el proceso de entrega de medicamentos.",
    team: ["Emiliano Cárdenas Ortiz", "Andrea Aldrete Tapia", "Carolina Rivera Sánchez", "María José Monsivais", "Camila Monroy Nieto"],
    images: ["assets/medistuck/medistuck-1.jpg", "assets/medistuck/medistuck-2.jpg", "assets/medistuck/medistuck-3.jpg"],
    webUrl: null,
    emoji: "🏥"
  },
  {
    id: "medlock",
    name: "MedLock",
    category: "salud",
    type: "app",
    description: "Administra los medicamentos que las personas necesitan y los almacena en un lugar seguro al que solo los pacientes pueden ingresar para obtenerlos.",
    team: ["Sebastián Pérez", "José María Rocha", "Melina González", "Ulises Rivera", "Mariel Álvarez"],
    images: ["assets/medlock/medlock-1.jpg", "assets/medlock/medlock-2.jpg", "assets/medlock/medlock-3.jpg"],
    webUrl: null,
    emoji: "🔐"
  },
  {
    id: "artem",
    name: "Artem",
    category: "salud",
    type: "app",
    description: "Aplicación para buscar fácilmente medicamentos por secciones. También te dice el precio, ubicación y el contacto de las farmacias.",
    team: ["José Antonio Fierro", "Sergio Rosales", "Leonardo Escobedo", "Sara Garduño", "Mariano Calderón"],
    images: ["assets/artem/artem-1.jpg", "assets/artem/artem-2.jpg", "assets/artem/artem-3.jpg"],
    webUrl: null,
    emoji: "💉"
  },
  {
    id: "quickmed",
    name: "QuickMed",
    category: "salud",
    type: "app",
    description: "Recomienda medicamentos no recetados dependiendo de tus síntomas. También proporciona información sobre campañas de vacunación y contactos de médicos con los que puedes agendar citas.",
    team: ["Natalia Ocampos", "Mónica Saucedo", "Nuria Sánchez", "Ximena Lajas", "Karla Aguilar"],
    images: ["assets/quickmed/quickmed-1.jpg", "assets/quickmed/quickmed-2.jpg", "assets/quickmed/quickmed-3.jpg"],
    webUrl: null,
    emoji: "⚕️"
  },
  {
    id: "simptonsorter",
    name: "Simpton Sorter",
    category: "salud",
    type: "app",
    description: "Cuenta con un chatbot que crea un diagnóstico dependiendo de tus síntomas y está conectado con diferentes doctores para un seguimiento profesional.",
    team: ["Nicolás La Madrid", "Camila Navarro", "Faviola Plata", "Gabriela González"],
    images: ["assets/simptonsorter/simptonsorter-1.jpg", "assets/simptonsorter/simptonsorter-2.jpg", "assets/simptonsorter/simptonsorter-3.jpg"],
    webUrl: null,
    emoji: "💬"
  },
  {
    id: "vitta",
    name: "Vitta",
    category: "salud",
    type: "app",
    description: "Cuenta con una inteligencia artificial con la que los hospitales pueden organizar urgencias dependiendo de los síntomas del paciente, optimizando la atención médica.",
    team: ["Natalia Martínez", "Lya Jacqueline Piña", "Zara Jaques", "Tayla de Souza", "María Fernanda Navarro"],
    images: ["assets/vitta/vitta-1.jpg", "assets/vitta/vitta-2.jpg", "assets/vitta/vitta-3.jpg"],
    webUrl: null,
    emoji: "🚑"
  },
  {
    id: "medbotton",
    name: "MedBotton",
    category: "salud",
    type: "app",
    description: "Crea un diagnóstico en base a tus síntomas y cuenta con un botón de emergencia que contacta a la ayuda lo más rápido posible.",
    team: ["Andre de Souza", "Ximena Carmuda", "Mikel Ortega", "Héctor López", "Alfonso Vergara"],
    images: ["assets/medbotton/medbotton-1.jpg", "assets/medbotton/medbotton-2.jpg", "assets/medbotton/medbotton-3.jpg"],
    webUrl: null,
    emoji: "🆘"
  },
  {
    id: "nutritrack",
    name: "Nutri Track",
    category: "salud",
    type: "app",
    description: "Controla la comida de los hospitales y envía notificaciones cuando se haya acabado algún alimento para evitar escasez en el suministro.",
    team: ["Daniela Ángeles Cordero", "Axel Omar Cruz Rodríguez", "Ana Emilia González Cepeda", "José Emiliano de la Paz Ortiz", "Marcela Estefanía Escandón"],
    images: ["assets/nutritrack/nutritrack-1.jpg", "assets/nutritrack/nutritrack-2.jpg", "assets/nutritrack/nutritrack-3.jpg"],
    webUrl: null,
    emoji: "🥗"
  },
  {
    id: "stressoff",
    name: "Stress Off",
    category: "salud",
    type: "hardware",
    description: "Pulsera que mide tu pulso para detectar cuando tienes niveles altos de estrés o ansiedad. Al detectarlo, el sistema crea vibraciones para controlar el ritmo cardíaco.",
    team: ["Dania Rodríguez", "Rodrigo Zubieta", "Aldo Muñoz", "Víctor Fierro"],
    images: ["assets/stressoff/stressoff-1.jpg", "assets/stressoff/stressoff-2.jpg", "assets/stressoff/stressoff-3.jpg"],
    webUrl: null,
    emoji: "⌚"
  },
  {
    id: "cartilladigital",
    name: "Cartilla Digital",
    category: "salud",
    type: "app",
    description: "Registra tus recetas médicas en digital de forma fácil de acceder. Cuenta con notificaciones para recordarte sobre tus siguientes tratamientos.",
    team: ["Mia Ysabel Buendía Castillo", "Diana Isabel Costa Rodríguez", "José Manuel Telles Teniente", "Santiago Bicario Llanas"],
    images: ["assets/cartilladigital/cartilladigital-1.jpg", "assets/cartilladigital/cartilladigital-2.jpg", "assets/cartilladigital/cartilladigital-3.jpg"],
    webUrl: null,
    emoji: "📋"
  },
  {
    id: "unihospital",
    name: "Uni Hospital",
    category: "salud",
    type: "app",
    description: "Registra tus datos y te agenda citas en hospitales. Tiene un sistema que prioriza a las personas con problemas de salud más graves para una atención más eficiente.",
    team: ["Loreta Galván", "Ana Isa Andrade", "José Emilio Suárez", "Bruno Martínez"],
    images: ["assets/unihospital/unihospital-1.jpg", "assets/unihospital/unihospital-2.jpg", "assets/unihospital/unihospital-3.jpg"],
    webUrl: null,
    emoji: "🏨"
  },

  // ─────────────────── INCLUSIÓN ───────────────────
  {
    id: "mysaferoutine",
    name: "My Safe Routine",
    category: "inclusion",
    type: "app",
    description: "Aplicación para personas con discapacidad motriz donde pueden encontrar rutas accesibles adaptadas a sus necesidades de movilidad.",
    team: ["Regina Mercado", "Marina Rubin", "Manuela Zambrano", "María Pía Quibrera"],
    images: ["assets/mysaferoutine/mysaferoutine-1.jpg", "assets/mysaferoutine/mysaferoutine-2.jpg", "assets/mysaferoutine/mysaferoutine-3.jpg"],
    webUrl: null,
    emoji: "♿"
  },
  {
    id: "sensewalk",
    name: "Sense Walk",
    category: "inclusion",
    type: "hardware",
    description: "Bastón para personas ciegas que detecta movimiento y distancia y vibra para avisar con tiempo para que no haya choques, brindando mayor independencia.",
    team: ["Ximena Cacho", "Sebastián Capin", "Ricardo Vigna", "Cecilia Montante", "José Eduardo Esparza"],
    images: ["assets/sensewalk/sensewalk-1.jpg", "assets/sensewalk/sensewalk-2.jpg", "assets/sensewalk/sensewalk-3.jpg"],
    webUrl: null,
    emoji: "🦯"
  },
  {
    id: "eye360",
    name: "Eye 360",
    category: "inclusion",
    type: "app",
    description: "Aplicación para las personas con daltonismo que las ayuda a detectar colores en su entorno, mejorando su experiencia visual diaria.",
    team: ["Koutarou Nakashima", "Corina Cruz", "Hermione Esparza", "Rebeca Silva"],
    images: ["assets/eye360/eye360-1.jpg", "assets/eye360/eye360-2.jpg", "assets/eye360/eye360-3.jpg"],
    webUrl: null,
    emoji: "👁️"
  },
  {
    id: "activeempathy",
    name: "Active Empathy",
    category: "inclusion",
    type: "app",
    description: "Facilita a los jóvenes participar activamente para las personas en situación de abandono (adultos mayores), mediante un sistema de recompensas y voluntariados.",
    team: ["Mariano Meier", "Alejandro García", "Ivette Montes de Oca", "Rodrigo Félix", "Manuel Sánchez"],
    images: ["assets/activeempathy/activeempathy-1.jpg", "assets/activeempathy/activeempathy-2.jpg", "assets/activeempathy/activeempathy-3.jpg"],
    webUrl: null,
    emoji: "🤝"
  },
  {
    id: "signconnect",
    name: "Sign Connect",
    category: "inclusion",
    type: "app",
    description: "Facilita la comunicación entre personas con discapacidad auditiva y oyentes, creando un ambiente inclusivo que rompe las barreras de comunicación.",
    team: ["Ingrid Talavera", "Sofía Culebro", "Yuli Macías"],
    images: ["assets/signconnect/signconnect-1.jpg"],
    webUrl: null,
    emoji: "🤟"
  }
];
