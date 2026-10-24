export const projects = [
  {
    id: 'hero-ia',
    name: 'Hero IA',
    summary: 'Chat con Deadpool usando IA (Google Gemini).',
    description:
      'SPA que permite conversar con Deadpool, un personaje ficticio del universo Marvel, mediante inteligencia artificial. Incluye routing con History API, historial de conversación en sesión y una serverless function que protege la API key.',
    tech: ['JavaScript', 'History API', 'Google Gemini', 'Vercel'],
    demo: 'https://project-root-mauve.vercel.app',
    repo: 'https://github.com/juandavid200010-wq/ComicSans-SPA',
  },
  {
    id: 'task-manager',
    name: 'Task Manager',
    summary: 'App de gestión de tareas con login y resumen por correo.',
    description:
      'SPA donde los usuarios se registran, inician sesión, gestionan sus tareas de forma persistente en la nube y reciben un resumen por correo electrónico. Desarrollada como Proyecto Integrador 4.',
    tech: ['React', 'TypeScript', 'Vite', 'Firebase', 'AWS SES', 'Vitest'],
    demo: 'https://task-manager-two-pi-14.vercel.app',
    repo: 'https://github.com/juandavid200010-wq/task-manager',
  },
  {
    id: 'miniblog-api',
    name: 'MiniBlog API',
    summary: 'API REST para gestionar autores y posts.',
    description:
      'API REST desarrollada en Node.js y Express con base de datos PostgreSQL para gestionar autores y posts. Incluye pruebas automatizadas.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Vitest', 'Supertest'],
    demo: null,
    repo: 'https://github.com/juandavid200010-wq/miniblog-api',
  },
    {
    id: 'paleta-colores',
    name: 'PincelStudio',
    summary: 'Generador de paletas de colores para diseño.',
    description:
      'Aplicación web para crear paletas de colores para diseños. Proyecto del Módulo 1, hecho con HTML, CSS y JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    demo: 'https://paletacolores.vercel.app/',
    repo: 'https://github.com/juandavid200010-wq/ProyectoM1_JuanDavidCamargo',
  },
  {
    id: 'tienda-shopify',
    name: 'Tienda de belleza (Shopify)',
    summary: 'Tienda de productos de belleza con una sección propia en Liquid.',
    description:
      'Tienda de práctica creada en Shopify con productos de belleza organizados en colecciones. Incluye una sección personalizada, "Destacados", programada en Liquid, con título y colección editables desde el personalizador del tema.',
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS'],
    demo: 'https://belleza-juandavid.myshopify.com',
    repo: null,
    note: 'La tienda tiene una página de contraseña. Contraseña: TU-CONTRASEÑA',
  },
]