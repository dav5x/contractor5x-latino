/**
 * DESIGN: Industrial Brutalism — Datos de Estudios de Caso
 * 4 estudios de caso reales para Contractor5x
 */

export interface CaseStudy {
  slug: string;
  company: string;
  trade: string;
  location: string;
  website: string;
  tagline: string;
  heroImage: string;
  logoText: string;
  ownerName: string;
  ownerTitle: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string; color: string }[];
  services: string[];
  quote: string;
  quoteAuthor: string;
  videoTestimonial?: string; // YouTube embed ID
  beforeAfter?: { before: string; after: string };
  bodyParagraphs: string[];
  accentColor: string;
  industry: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "castle-stone-and-tile",
    company: "Castle Stone & Tile",
    trade: "Instalación de Piedra y Azulejo",
    location: "San Diego, CA",
    website: "https://castlestoneandtile.com",
    tagline: "El Mejor Contratista de Piedra y Azulejo Domina la Búsqueda en San Diego",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=80",
    logoText: "Castle Stone & Tile",
    ownerName: "Shawn",
    ownerTitle: "Dueño, Castle Stone & Tile",
    challenge:
      "Shawn ha estado manejando Castle Stone & Tile por años — haciendo un trabajo increíble en duchas walk-in, azulejos de cocina, pisos comerciales y hardscapes exteriores en todo el condado de San Diego. Pero su pipeline era inconsistente. Dependía casi totalmente del boca a boca y no tenía un sistema real para capturar leads, hacer follow-up con clientes pasados o mostrar su trabajo online. Su presencia en Google era mínima y no tenía tiempo para postear en redes sociales entre trabajos.",
    solution:
      "Contractor5x desplegó un stack completo de marketing con AI hecho a la medida para el trade de piedra y azulejo. Construimos un smart website con páginas de servicio optimizadas para SEO, activamos el Job Promoter para postear fotos antes/después de proyectos semanalmente, configuramos el Lead Closer para capturar y hacer follow-up automático con cada solicitud de cotización, y lanzamos el Google Optimizer para aumentar su cantidad de reviews y ranking local. Shawn también dio un testimonio en video que usamos en todas sus redes sociales.",
    results: [
      { metric: "4.2×", label: "Más Leads Entrantes", color: "text-[#F97316]" },
      { metric: "62", label: "Nuevas Reseñas en Google en 90 Días", color: "text-[#F97316]" },
      { metric: "#1", label: "Ranking en Google Maps — 'Tile San Diego'", color: "text-[#F97316]" },
      { metric: "3×", label: "Alcance en Redes Sociales", color: "text-[#F97316]" },
    ],
    services: ["Job Promoter", "Lead Closer", "Google Optimizer", "Smart Website", "AI Agent"],
    quote:
      "He estado haciendo trabajos de azulejo por más de 15 años y nunca tuve un sistema de marketing que realmente funcionara. Contractor5x puso todo en marcha y ahora los leads llegan mientras estoy en el job site. Las reseñas en Google solas cambiaron todo para nosotros.",
    quoteAuthor: "Shawn — Dueño, Castle Stone & Tile",
    videoTestimonial: "2f8P3JKMCFQ",
    bodyParagraphs: [
      "Castle Stone & Tile es la empresa premier de instalación de piedra y azulejo en San Diego, sirviendo a dueños de casa y clientes comerciales con duchas personalizadas, azulejos de cocina, pisos comerciales y hardscapes exteriores. El dueño, Shawn, construyó el negocio con base en la calidad y referencias — pero el crecimiento se había estancado.",
      "Cuando Shawn llegó a Contractor5x, no tenía una forma consistente de generar nuevos leads online. Su perfil de Google Business tenía menos de 10 reseñas, su sitio web no rankeaba para búsquedas locales, y no dedicaba tiempo a redes sociales. Cada nuevo trabajo venía por referencia de amigos.",
      "Empezamos con la base: un nuevo Smart Website con páginas dedicadas para duchas, azulejos de cocina, trabajos comerciales y hardscapes — cada una optimizada para búsquedas locales en San Diego. En 30 días, el sitio de Shawn estaba en la primera página para 'tile contractor San Diego' y 'walk-in shower remodel San Diego'.",
      "El Job Promoter tomó control total de sus redes sociales. Cada semana, fotos antes/después de trabajos terminados se posteaban automáticamente en Facebook e Instagram con captions y hashtags geoetiquetados. Los seguidores de Shawn se triplicaron en 60 días.",
      "El Google Optimizer mandó solicitudes automáticas de reseñas a cada cliente después de terminar el trabajo. En 90 días, Castle Stone & Tile pasó de 8 a 70 reseñas — todas 5 estrellas — llevándolos al top en Google Maps para sus keywords principales.",
      "El Lead Closer aseguró que ninguna solicitud de cotización quedara sin respuesta. Cada formulario activaba una secuencia inmediata de SMS y email para agendar consultas automáticamente. La tasa de cierre de Shawn mejoró porque siempre respondía primero.",
    ],
    accentColor: "#F97316",
    industry: "Piedra y Azulejo",
  },
  {
    slug: "homesmith-san-diego",
    company: "Homesmith Inc.",
    trade: "Carpintería Personalizada y Espacios Exteriores",
    location: "Ramona, CA",
    website: "https://homesmithsandiego.com",
    tagline: "El Contratista de Madera Personalizada de Ramona Llena su Calendario 6 Semanas Adelante",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    logoText: "Homesmith Inc.",
    ownerName: "Chris",
    ownerTitle: "Dueño, Homesmith Inc.",
    challenge:
      "Homesmith construye decks personalizados, cobertores de patio, fire pits y espacios exteriores en todo el condado de San Diego. El trabajo habla por sí mismo — pero el negocio era invisible online. Basado en Ramona, un mercado pequeño, el dueño tenía problemas para llegar a dueños de casa en suburbios más grandes de San Diego que buscaban contratistas de exteriores personalizados. Su calendario tenía espacios libres y no tenía sistema para hacer follow-up con clientes pasados para negocios repetidos o referidos.",
    solution:
      "Contractor5x construyó para Homesmith un Smart Website geo-targeteado con páginas de servicio optimizadas para Ramona, Escondido, Poway y el área mayor de San Diego. El Job Promoter empezó a postear fotos semanales y videos time-lapse de proyectos. El Re-Activator mandó campañas a clientes pasados ofreciendo mantenimiento de decks y mejoras de patios según temporada. El Lead Closer automatizó cada solicitud de cotización y el AI Agent manejó consultas fuera de horario para que ningún lead se enfriara de noche.",
    results: [
      { metric: "6 Sem", label: "Calendario Lleno con 6 Semanas de Anticipación", color: "text-[#F97316]" },
      { metric: "38%", label: "Aumento en Valor Promedio de Trabajo", color: "text-[#F97316]" },
      { metric: "5×", label: "Más Solicitudes de Cotización por Mes", color: "text-[#F97316]" },
      { metric: "47", label: "Nuevas Reseñas 5 Estrellas en Google", color: "text-[#F97316]" },
    ],
    services: ["Smart Website", "Job Promoter", "Re-Activator", "Lead Closer", "AI Agent"],
    quote:
      "Antes me preocupaba de dónde venía el próximo trabajo. Ahora tengo que rechazar trabajo porque estamos full. El sistema AI maneja todo el follow-up y mis reseñas en Google siguen subiendo. La mejor inversión que he hecho en el negocio.",
    quoteAuthor: "Chris — Dueño, Homesmith Inc.",
    bodyParagraphs: [
      "Homesmith Inc. es el contratista de confianza en Ramona para espacios exteriores personalizados — decks, cobertores de patio, enrejados, fire pits y carpintería que transforma patios en espacios para todo el año. Contratista Licenciado #911254, Homesmith tiene reputación de calidad en todo el condado de San Diego.",
      "El reto era el alcance. Ramona es un mercado pequeño y los dueños de casa que más invierten en proyectos de $15,000–$40,000 viven en Poway, Escondido, El Cajon y suburbios del North County. Homesmith no tenía forma de llegar a ellos online y su calendario tenía huecos impredecibles entre trabajos grandes.",
      "Contractor5x construyó un Smart Website multi-locación con páginas dedicadas para cada área — Ramona, Poway, Escondido, Santee y el área mayor de San Diego. Cada página estaba optimizada para búsquedas como 'custom deck contractor [ciudad]' y 'patio cover installation [ciudad]'.",
      "El Job Promoter se volvió la herramienta más poderosa de Homesmith. Cada proyecto terminado — un deck de cedro en Poway, un fire pit en Escondido, una pérgola en Ramona — se convertía en post en redes con fotos antes/después, detalles del proyecto y llamado a la acción. Los dueños de casa en esas zonas empezaron a reconocer la marca.",
      "El Re-Activator mandó campañas estacionales a clientes pasados: ofertas de mantenimiento de decks en primavera, upgrades de fire pits en verano, instalación de cobertores en otoño. El negocio repetido de clientes existentes agregó ingresos confiables sin depender solo de nuevos leads.",
      "En 90 días, el calendario de Homesmith estaba lleno con 6 semanas de anticipación. El dueño subió el valor mínimo de proyecto en 20% porque la demanda superaba la capacidad — un problema que muchos contratistas quisieran tener.",
    ],
    accentColor: "#F97316",
    industry: "Carpintería y Espacios Exteriores",
  },
  {
    slug: "vacation-property-maids",
    company: "Vacation Property Maids",
    trade: "Limpieza de Rentas Vacacionales",
    location: "San Diego, CA",
    website: "https://vacationpropertymaids.com",
    tagline: "La Limpiadora #1 de Rentas Vacacionales en San Diego Se Expande a 3 Condados con AI",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
    logoText: "Vacation Property Maids",
    ownerName: "Maria",
    ownerTitle: "Dueña, Vacation Property Maids",
    challenge:
      "Vacation Property Maids llevaba más de 6 años operando y tenía una base leal de dueños de propiedades en Airbnb y VRBO en San Diego. Pero escalar más allá de su base principal era difícil. Los nuevos dueños no sabían que existían, su presencia en Google era inconsistente en San Diego, LA y Orange County, y su equipo pasaba horas haciendo follow-up manual con leads y enviando confirmaciones de reservas. El crecimiento estaba limitado por la capacidad operativa, no por la demanda.",
    solution:
      "Contractor5x desplegó el sistema completo de marketing AI en los tres condados. El Smart Website fue reconstruido con páginas específicas para San Diego, Los Ángeles y Orange County. El AI Agent manejó todas las consultas fuera de horario y la calificación de leads. El Job Promoter posteó semanalmente contenido sobre tips para rentas vacacionales, listas de limpieza y estrategias para reseñas 5 estrellas. El Google Optimizer aumentó sus reseñas en los tres perfiles de Google Business simultáneamente.",
    results: [
      { metric: "3×", label: "Cobertura de Área de Servicio", color: "text-[#F97316]" },
      { metric: "89", label: "Nuevas Reseñas en 3 Perfiles", color: "text-[#F97316]" },
      { metric: "52%", label: "Aumento en Consultas de Nuevos Clientes", color: "text-[#F97316]" },
      { metric: "24/7", label: "AI Agent Maneja Todas las Reservas", color: "text-[#F97316]" },
    ],
    services: ["AI Agent", "Google Optimizer", "Smart Website", "Job Promoter", "Lead Closer"],
    quote:
      "Llevamos 6 años en el negocio y nunca tuvimos un sistema de marketing tan completo. Solo el AI Agent nos ahorra horas cada semana — califica leads, responde preguntas y agenda consultas mientras limpiamos. Nuestras reseñas en Google en los tres condados están por las nubes.",
    quoteAuthor: "Maria — Dueña, Vacation Property Maids",
    bodyParagraphs: [
      "Vacation Property Maids es la empresa #1 en limpieza completa de rentas vacacionales en el sur de California, sirviendo a dueños en Airbnb, VRBO y plataformas directas en San Diego, Los Ángeles y Orange County. Con más de 6 años y reputación de turnovers 5 estrellas, tenían la calidad de servicio — pero necesitaban la infraestructura de marketing para igualar.",
      "El reto principal era la visibilidad en múltiples mercados. Con tres condados de servicio, manejar perfiles de Google Business, redes sociales y follow-up manual era insostenible. Nuevos anfitriones en LA y Orange County no los encontraban y el equipo perdía leads que llegaban fuera de horario.",
      "Contractor5x reconstruyó su sitio con páginas específicas para cada condado — cada una optimizada para búsquedas como 'vacation rental cleaning [ciudad]' en San Diego, Los Ángeles y Orange County. El tráfico orgánico se triplicó en 60 días conforme cada página empezó a rankear para su área.",
      "El AI Agent transformó su proceso de respuesta a leads. Cada consulta nueva — sea a las 2pm o 2am — recibía una respuesta inmediata e inteligente que calificaba tipo de propiedad, número de cuartos y frecuencia de limpieza, y luego agendaba consulta automáticamente. No más leads perdidos de noche.",
      "El Google Optimizer ejecutó campañas automáticas de solicitud de reseñas tras cada limpieza. En 90 días, los tres perfiles de Google Business crecieron entre 25 y 35 reseñas nuevas cada uno, llevando a Vacation Property Maids al top de resultados locales en cada condado.",
      "El Job Promoter creó un calendario consistente de contenido: tips para rentas, fotos antes/después de limpieza, estrategias para reseñas de huéspedes y contenido estacional. Su audiencia en redes creció 180% y se volvió una fuente genuina de leads para nuevos clientes dueños de propiedades.",
    ],
    accentColor: "#F97316",
    industry: "Servicios de Limpieza",
  },
  {
    slug: "mckowskis",
    company: "McKowski's Maintenance Systems",
    trade: "Mantenimiento Comercial de Edificios",
    location: "San Diego & Los Angeles, CA",
    website: "https://mckowskis.com",
    tagline: "La Firma de Mantenimiento Comercial con Legado en San Diego Moderniza su Marketing",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    logoText: "McKowski's",
    ownerName: "Paulina",
    ownerTitle: "CEO, McKowski's Maintenance Systems",
    challenge:
      "McKowski's Maintenance Systems ha servido a San Diego desde 1979 — una de las empresas de mantenimiento comercial más establecidas en la región. Pero su marketing no había seguido el ritmo de su reputación. Con servicios que van desde mantenimiento, construcción, jardinería, limpieza y ingeniería de instalaciones en San Diego y LA, no tenían una presencia digital unificada. Su sitio web estaba desactualizado, sus reseñas en Google eran pocas para sus décadas de trabajo, y no tenían sistema para generar consistentemente nuevas consultas comerciales.",
    solution:
      "Contractor5x construyó un sistema completo de marketing digital para la operación multi-servicio y multi-locación de McKowski's. Un nuevo Smart Website organizó las 8 líneas de servicio con páginas dedicadas para San Diego y LA. El Job Promoter mostró proyectos comerciales terminados semanalmente. El Google Optimizer aumentó sus reseñas en ambos perfiles de ciudad. El Lead Closer automatizó el proceso de RFQ para clientes comerciales y el AI Agent manejó consultas fuera de horario.",
    results: [
      { metric: "8", label: "Líneas de Servicio Ahora Completamente Visibles Online", color: "text-[#F97316]" },
      { metric: "71", label: "Nuevas Reseñas en Google en 4 Meses", color: "text-[#F97316]" },
      { metric: "2.8×", label: "Más Envíos de RFQ Comerciales", color: "text-[#F97316]" },
      { metric: "45+", label: "Años en el Negocio — Ahora #1 Online", color: "text-[#F97316]" },
    ],
    services: ["Smart Website", "Google Optimizer", "Job Promoter", "Lead Closer", "AI Agent"],
    quote:
      "Estamos en el negocio desde 1979 y construimos nuestra reputación en calidad y relaciones. Contractor5x nos ayudó a llevar esa reputación online. Nuestras reseñas en Google pasaron de casi nada a más de 70 en cuatro meses, y ahora recibimos solicitudes de cotización comerciales de empresas que antes nunca nos habrían encontrado.",
    quoteAuthor: "Paulina Zamora — CEO, McKowski's Maintenance Systems",
    bodyParagraphs: [
      "McKowski's Maintenance Systems ha sido un pilar en la industria de mantenimiento comercial de San Diego desde 1979. Con servicios que incluyen mantenimiento de edificios, construcción, jardinería, limpieza, ingeniería de instalaciones y limpieza de oficinas — sirviendo HOAs, propiedades comerciales e instalaciones industriales en San Diego y Los Ángeles — McKowski's es una de las operaciones de mantenimiento más completas en el sur de California.",
      "A pesar de más de 45 años de excelencia, la presencia digital de McKowski's no reflejaba su estatus. Su sitio web listaba servicios pero no estaba optimizado para búsqueda local. Sus perfiles de Google Business en San Diego y LA tenían menos de 15 reseñas combinadas. Los administradores de propiedades comerciales buscando 'building maintenance San Diego' o 'facilities management San Diego' no los encontraban.",
      "Contractor5x empezó con una reconstrucción completa del sitio — organizando las 8 líneas de servicio en páginas dedicadas y optimizadas para SEO con contenido específico para San Diego y Los Ángeles. Cada página apuntaba a los tomadores de decisión comerciales que buscan estos servicios: administradores de propiedades, juntas de HOA y directores de instalaciones.",
      "El Google Optimizer ejecutó campañas automáticas de reseñas para la amplia base de clientes de McKowski's. En cuatro meses, ambos perfiles de Google Business crecieron de casi cero a más de 35 reseñas cada uno — todas 5 estrellas — mejorando dramáticamente su ranking local y credibilidad con nuevos prospectos comerciales.",
      "El Job Promoter mostró proyectos comerciales terminados: restauraciones de decks de HOA en La Jolla, reparaciones de asfalto en Mission Valley, reparaciones de balcones en North Park. Cada post demostraba la calidad y alcance del trabajo de McKowski's a administradores de propiedades que buscan un socio confiable.",
      "El Lead Closer y AI Agent transformaron su proceso de RFQ comercial. Las solicitudes ahora activan una respuesta inmediata y profesional que califica alcance, ubicación y tiempos — luego dirige los leads calientes directamente al equipo de estimación. Los envíos de RFQ comerciales casi se triplicaron en los primeros 90 días.",
    ],
    accentColor: "#F97316",
    industry: "Mantenimiento Comercial",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}