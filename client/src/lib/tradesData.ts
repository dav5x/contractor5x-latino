/*
 * DESIGN: Industrial Brutalism — Datos de Oficios
 * Cada oficio tiene: contenido hero, puntos de dolor, soluciones a la medida, estadísticas, testimonio y FAQs
 */

export interface TradePainPoint {
  title: string;
  desc: string;
}

export interface TradeSolution {
  tool: string;
  headline: string;
  desc: string;
  stat: string;
  statLabel: string;
}

export interface TradeFAQ {
  q: string;
  a: string;
}

export interface TradeData {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  icon: string;
  accentStat: string;
  accentStatLabel: string;
  painPoints: TradePainPoint[];
  solutions: TradeSolution[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    result: string;
  };
  faqs: TradeFAQ[];
}

// Imágenes de Unsplash — específicas por oficio
const IMGS = {
  hvac: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80",
  plumbing: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1400&q=80",
  electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&q=80",
  roofing: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  generalContractor: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  painting: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1400&q=80",
  landscaping: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80",
  pestControl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  treeService: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80",
  poolService: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1400&q=80",
  applianceRepair: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  windows: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80",
};

export const tradesData: TradeData[] = [
  {
    id: "hvac",
    name: "HVAC",
    tagline: "Calefacción, Aire y Ventilación",
    headline: "Marketing con AI Hecho para Contratistas HVAC",
    subheadline: "Llena tu agenda con instalaciones y servicios de alto valor — sin andar persiguiendo leads.",
    description: "HVAC es uno de los trades más competitivos en mercados locales. Los dueños de casa buscan en Google cuando su sistema se rompe — y llaman a la primera empresa que encuentran. Nosotros nos aseguramos que seas tú.",
    heroImage: IMGS.hvac,
    heroImageAlt: "Técnico HVAC trabajando en una unidad de aire acondicionado",
    icon: "🌡️",
    accentStat: "+287%",
    accentStatLabel: "Incremento promedio de leads para clientes HVAC",
    painPoints: [
      { title: "Picos de Demanda Estacionales", desc: "Cuando llega el calor, todas las empresas HVAC se saturan. Los que ganan ya están rankeados en Google antes de que empiece la temporada — no corriendo para ponerse al día." },
      { title: "Llamadas de Emergencia Que Van a la Competencia", desc: "Dueños de casa con AC roto a las 10pm llaman a la primera empresa que contesta. Si tu teléfono va al buzón, se van con otro." },
      { title: "Llamadas de Bajo Valor Que Te Consumen Tiempo", desc: "Atendiendo llamadas para cambios de filtro de $50 cuando deberías estar cerrando reemplazos de sistemas de $8,000. El AI filtra y califica leads para que te enfoques en los trabajos grandes." },
      { title: "Sin Sistema para Reviews", desc: "Tu competencia tiene 200 reviews en Google y tú solo 12 — aunque tu trabajo sea mejor. Las reviews son el factor #1 para rankear en búsquedas HVAC." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Nunca Pierdas una Llamada de Emergencia", desc: "Cuando el AC de un cliente muere a medianoche, Lead Closer contesta al instante, recoge su info y agenda a tu técnico — incluso mientras duermes.", stat: "78%", statLabel: "de leads HVAC van al primer que responde" },
      { tool: "Google Optimizer", headline: "Domina las Búsquedas HVAC Cerca de Ti", desc: "Optimizamos tu Google Business Profile con keywords específicas HVAC, contenido estacional y un sistema de generación de reviews que aumenta tu visibilidad mes a mes.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Job Promoter", headline: "Presume Cada Instalación", desc: "Fotos antes/después de reemplazos, videos walkthrough de nuevas instalaciones — Job Promoter convierte tus trabajos terminados en una herramienta de ventas 24/7.", stat: "3.2X", statLabel: "más solicitudes de cotización por prueba social" },
      { tool: "Re-Activator", headline: "Agenda Contratos de Mantenimiento", desc: "Re-Activator contacta automáticamente a clientes pasados con ofertas de tune-ups estacionales, convirtiendo llamadas únicas en ingresos recurrentes anuales.", stat: "$12K", statLabel: "ingresos promedio de clientes HVAC re-activados" },
    ],
    testimonial: {
      quote: "Antes de Contractor5x, perdía llamadas de emergencia todas las noches porque no podía contestar después de las 6pm. Ahora el AI maneja todas las consultas fuera de horario y estoy cerrando 40% más trabajos. Mis reviews en Google subieron de 18 a 94 en cuatro meses.",
      name: "Mike R.",
      role: "Contratista HVAC",
      result: "+40% trabajos cerrados, 94 reviews en Google",
    },
    faqs: [
      { q: "¿Funciona para HVAC residencial y comercial?", a: "Sí. Personalizamos la calificación de leads y mensajes para llamadas residenciales y contratos comerciales. Muchos de nuestros clientes HVAC manejan ambas divisiones desde el mismo sistema." },
      { q: "¿Cómo maneja el AI las llamadas de emergencia fuera de horario?", a: "El AI Agent contesta todas las llamadas 24/7, recoge info del cliente y detalles del problema, y agenda servicio de emergencia o cita para el día siguiente — sin que muevas un dedo." },
      { q: "¿Pueden ayudar con marketing estacional (tune-ups de AC en primavera, revisiones de furnace en otoño)?", a: "Claro que sí. Integramos campañas estacionales en tus flujos de Re-Activator y Job Promoter para que tus clientes pasados reciban ofertas automáticas cada primavera y otoño." },
    ],
  },
  {
    id: "plumbing",
    name: "Plomería",
    tagline: "Plomería Residencial y Comercial",
    headline: "Marketing con AI Hecho para Plomeros",
    subheadline: "Deja de perder llamadas de emergencia. Empieza a dominar las búsquedas locales. Llena tu agenda todo el año.",
    description: "La plomería es un negocio de emergencias. Cuando una tubería revienta o el calentador falla, los dueños de casa necesitan ayuda YA — y llaman al primero que aparece en Google. Nosotros nos aseguramos que seas tú.",
    heroImage: IMGS.plumbing,
    heroImageAlt: "Plomero trabajando bajo un fregadero en tuberías",
    icon: "🔧",
    accentStat: "+312%",
    accentStatLabel: "Incremento promedio de leads para clientes de plomería",
    painPoints: [
      { title: "Perdiendo Llamadas de Emergencia", desc: "Una tubería rota a las 2am es un trabajo de $2,000. Si pierdes esa llamada, tu competencia la agarra. Nuestro AI contesta todas las llamadas, siempre — de día o de noche." },
      { title: "Invisible en Google", desc: "Cuando alguien busca 'plomero cerca de mí', los 3 primeros resultados reciben el 80% de las llamadas. Si no estás ahí, no existes para ese cliente." },
      { title: "Sin Sistema para Clientes Recurrentes", desc: "Has arreglado cientos de calentadores y destapado miles de drenajes. Pero esos clientes no piensan en ti para su próximo problema — porque nunca mantuviste contacto." },
      { title: "Compitiendo por Precio", desc: "Cuando los clientes no ven diferencia entre plomeros, escogen al más barato. Te ayudamos a construir una reputación que hace que el precio sea irrelevante." },
    ],
    solutions: [
      { tool: "AI Agent", headline: "Contesta Todas las Llamadas de Emergencia", desc: "El AI Agent maneja llamadas 24/7 — recoge detalles del trabajo, despacha a tu técnico de guardia y agenda citas no urgentes automáticamente.", stat: "2X", statLabel: "tasa de cierre con respuesta instantánea" },
      { tool: "Google Optimizer", headline: "Aparece en 'Plomero Cerca de Mí'", desc: "Convertimos tu Google Business Profile en una máquina de leads — keywords optimizadas, reviews consistentes y SEO local que mejora tu visibilidad en búsquedas locales.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Lead Closer", headline: "Convierte Más Cotizaciones en Trabajos", desc: "Lead Closer hace seguimiento automático a cada estimado — enviando recordatorios, respondiendo preguntas y empujando a los prospectos hasta que reservan.", stat: "67%", statLabel: "más conversiones de cotización a trabajo" },
      { tool: "Re-Activator", headline: "Convierte Clientes Pasados en Ingresos Recurrentes", desc: "Contacta automáticamente a clientes pasados con recordatorios de mantenimiento de calentadores, ofertas estacionales para limpieza de drenajes y solicitudes de referidos.", stat: "$9K", statLabel: "ingresos mensuales promedio por re-activación" },
    ],
    testimonial: {
      quote: "Mi ranking en Google mejoró dramáticamente en semanas. Ahora aparezco en búsquedas para las que nunca rankeaba. Solo el AI Agent ha pagado todo el servicio — captura cada llamada de emergencia que antes perdía.",
      name: "Dave M.",
      role: "Contratista de Plomería",
      result: "Mejor visibilidad en Google, 2X tasa de cierre",
    },
    faqs: [
      { q: "¿Funciona para limpieza de drenajes, calentadores y remodelaciones completas?", a: "Sí. Personalizamos tus formularios de captura y respuestas AI para cada tipo de servicio — desde destapes de $150 hasta remodelaciones de baño de $15,000. Cada lead se dirige y sigue correctamente." },
      { q: "¿Cómo maneja el AI el despacho de emergencias?", a: "Cuando alguien llama con emergencia, el AI recoge la dirección, describe el problema y conecta con tu técnico de guardia o envía notificación automática al equipo." },
      { q: "¿Pueden ayudarme a conseguir más reviews 5 estrellas en Google?", a: "Sí — nuestro Google Optimizer incluye un sistema automático que manda SMS pidiendo reviews después de cada trabajo, facilitando que clientes felices dejen su opinión." },
    ],
  },
  {
    id: "electrical",
    name: "Eléctrico",
    tagline: "Eléctrico Residencial y Comercial",
    headline: "Marketing con AI Hecho para Electricistas",
    subheadline: "Más upgrades de panel, más instalaciones de cargadores EV, más trabajos de alto valor — en piloto automático.",
    description: "El trabajo eléctrico va desde reparaciones de enchufes de $200 hasta upgrades de panel de $15,000. Los contratistas que ganan los trabajos grandes son los que aparecen primero, hacen seguimiento constante y tienen reviews que lo respaldan.",
    heroImage: IMGS.electrical,
    heroImageAlt: "Electricista trabajando en un panel eléctrico",
    icon: "⚡",
    accentStat: "+265%",
    accentStatLabel: "Incremento promedio de leads para clientes eléctricos",
    painPoints: [
      { title: "Perdiendo Leads de Alto Valor", desc: "Upgrades de panel, instalaciones de cargadores EV y cableado completo son trabajos de $5,000–$20,000. Una llamada perdida puede costarte un mes de trabajos pequeños." },
      { title: "Compitiendo con Grandes Empresas", desc: "Las grandes eléctricas tienen equipos de marketing y presupuestos para ads. Nosotros nivelamos el juego con AI que trabaja tan duro como todo su departamento." },
      { title: "Seguimiento Lento a Cotizaciones", desc: "Das un presupuesto, te ocupas en un trabajo y olvidas hacer seguimiento. El cliente contrata a otro. El seguimiento automático arregla esto para siempre." },
      { title: "Sin Exhibición de Tu Trabajo", desc: "El trabajo eléctrico es invisible cuando cierran las paredes. Job Promoter captura tu trabajo antes de que pongan el drywall — generando confianza con futuros clientes." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Captura Cada Lead de Alto Valor", desc: "Lead Closer califica cada consulta — filtrando trabajos pequeños de los grandes — y hace seguimiento automático hasta que el cliente reserva.", stat: "3X", statLabel: "más reservas de upgrades de panel" },
      { tool: "Job Promoter", headline: "Documenta Tu Trabajo Antes de Que Desaparezca", desc: "Creamos contenido antes/después de cada upgrade, instalación EV y cableado — convirtiendo tu trabajo invisible en prueba social visible.", stat: "2.8X", statLabel: "más solicitudes de cotización por contenido" },
      { tool: "Google Optimizer", headline: "Aparece en Búsquedas de Alta Intención", desc: "Instalación de cargadores EV, upgrade de panel, electricista cerca de mí — optimizamos tu listing para las búsquedas que traen trabajos de alto valor.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "AI Agent", headline: "Contesta Cada Llamada, Día y Noche", desc: "Ya sea un breaker disparado a medianoche o una cotización comercial un sábado, el AI Agent lo maneja profesionalmente y agenda el trabajo.", stat: "24/7", statLabel: "cobertura, cero llamadas perdidas" },
    ],
    testimonial: {
      quote: "Antes perdía leads de upgrades porque siempre estaba en un trabajo cuando llamaban. Ahora el AI maneja todas las consultas y estoy cerrando 3x más trabajos de alto valor. Mis ingresos subieron 55% este año.",
      name: "James T.",
      role: "Contratista Eléctrico",
      result: "+55% ingresos, 3X reservas de upgrades de panel",
    },
    faqs: [
      { q: "¿Funciona para eléctrico residencial y comercial?", a: "Sí. Configuramos pipelines separados para residencial y comercial, con preguntas de calificación, expectativas de precio y seguimientos distintos para cada uno." },
      { q: "¿Pueden ayudarme a promocionar instalaciones de cargadores EV?", a: "Claro. Las instalaciones EV son uno de los segmentos que más crecen en eléctrico residencial. Creamos contenido Google y posts sociales específicos para este servicio." },
      { q: "¿Cómo me ayudan a competir con grandes eléctricas?", a: "Te damos la misma infraestructura de marketing que tienen las grandes — seguimiento automático, generación de reviews, contenido profesional — pero adaptado a tu mercado local y marca." },
    ],
  },
  {
    id: "roofing",
    name: "Techado",
    tagline: "Reparación, Reemplazo e Instalación de Techos",
    headline: "Marketing con AI Hecho para Techadores",
    subheadline: "Temporada de tormentas o temporada baja — mantén a tu equipo ocupado con pipeline lleno todo el año.",
    description: "Techado es un trade de tickets altos y mucha competencia. Un reemplazo de techo vale $8,000–$25,000. Los techadores que ganan consistentemente son los que tienen mejor presencia online, más reviews y seguimiento rápido.",
    heroImage: IMGS.roofing,
    heroImageAlt: "Techador instalando tejas en un techo residencial",
    icon: "🏠",
    accentStat: "+340%",
    accentStatLabel: "Incremento promedio de leads para clientes de techado",
    painPoints: [
      { title: "Competencia de Cazadores de Tormentas", desc: "Después de cada tormenta, contratistas de fuera inundan tu mercado. Los techadores locales con buen ranking y reviews en Google ganan los trabajos — los demás no reciben nada." },
      { title: "Ciclos de Venta Largos", desc: "Los dueños de casa piden 3–5 cotizaciones antes de decidir. El contratista que mejor hace seguimiento — no el más barato — gana. La mayoría de techadores hace un solo seguimiento y se rinde." },
      { title: "Bajas Temporales", desc: "El invierno mata ingresos para techadores en la mayoría de mercados. Re-Activator mantiene tu pipeline caliente contactando clientes pasados y fuentes de referidos en meses lentos." },
      { title: "Complejidad de Reclamos de Seguro", desc: "Los trabajos de seguro requieren mensajes y seguimientos diferentes a los pagos en efectivo. Personalizamos tu pipeline para manejar ambos tipos correctamente." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Gana la Batalla del Seguimiento", desc: "Lead Closer envía secuencias automáticas de seguimiento por 7–14 días después de cada cotización — manteniéndote en la mente del cliente mientras la competencia se queda callada.", stat: "5X", statLabel: "más cotizaciones convertidas en trabajos" },
      { tool: "Job Promoter", headline: "Contenido Antes y Después Que Vende", desc: "Nada vende un reemplazo de techo como un antes/después dramático. Job Promoter convierte cada trabajo terminado en contenido que genera referidos y nuevos leads.", stat: "4.1X", statLabel: "más referidos por contenido visual" },
      { tool: "Google Optimizer", headline: "Aparece en Búsquedas Locales de Techado", desc: "Construimos tu presencia en Google para mejorar significativamente tu visibilidad en búsquedas locales de techado — especialmente las de alta intención como 'reemplazo de techo cerca de mí' y 'reparación por daños de tormenta.'", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Re-Activator", headline: "Llena las Temporadas Bajas", desc: "Re-Activator contacta a clientes pasados con ofertas de limpieza de canaletas, recordatorios de inspección anual y solicitudes de referidos — manteniendo ingresos constantes todo el año.", stat: "$22K", statLabel: "ingresos promedio de campañas de re-activación" },
    ],
    testimonial: {
      quote: "La última temporada de tormentas estuve abrumado de leads por primera vez en 10 años. El AI manejó todas las consultas iniciales, agendó cotizaciones y dio seguimiento automático. Cerré 40% más trabajos que el año anterior sin contratar a nadie nuevo.",
      name: "Rick S.",
      role: "Contratista de Techado",
      result: "+40% trabajos cerrados, $22K de re-activación",
    },
    faqs: [
      { q: "¿Funciona para reclamos de seguro y trabajos en efectivo?", a: "Sí. Creamos pipelines separados para clientes de seguro y en efectivo — con mensajes, preguntas de calificación y seguimientos distintos para cada tipo." },
      { q: "¿Cómo ayudan durante la temporada de tormentas cuando suben los leads?", a: "Durante la temporada de tormentas, Lead Closer maneja el volumen automáticamente — respondiendo cada consulta al instante, calificando leads y agendando cotizaciones sin que te satures." },
      { q: "¿Pueden ayudarme a conseguir más referidos de clientes pasados?", a: "Claro. Re-Activator incluye una secuencia automática para pedir referidos a clientes pasados, facilitando que recomienden a amigos y familiares." },
    ],
  },
  {
    id: "general-contracting",
    name: "Contratación General",
    tagline: "Remodelaciones, Renovaciones y Construcción",
    headline: "Marketing con AI Hecho para Contratistas Generales",
    subheadline: "Consigue más remodelaciones, ampliaciones y proyectos comerciales — sin pasar todo el día en ventas.",
    description: "La contratación general implica ciclos de venta largos, proyectos complejos y contratos de alto valor. Los GCs que crecen consistentemente son los que manejan su reputación, hacen seguimiento implacable y muestran su portafolio efectivamente.",
    heroImage: IMGS.generalContractor,
    heroImageAlt: "Contratista general revisando planos en obra",
    icon: "🏗️",
    accentStat: "+198%",
    accentStatLabel: "Incremento promedio de leads para clientes GC",
    painPoints: [
      { title: "Ciclos de Venta Largos Sin Seguimiento", desc: "Una remodelación de cocina toma semanas para cerrar. La mayoría de GCs da una cotización y espera. Los que hacen seguimiento constante — sin ser agresivos — ganan el trabajo." },
      { title: "Mostrar Proyectos Complejos", desc: "Una ampliación de $150,000 es difícil de vender solo con texto. Job Promoter crea contenido visual que muestra la transformación y genera confianza antes de la primera reunión." },
      { title: "Manejar Múltiples Tipos de Proyectos", desc: "Desde remodelaciones de baños hasta construcciones comerciales, cada tipo necesita mensajes diferentes. Personalizamos tu pipeline para cada servicio que ofrezcas." },
      { title: "Referidos Que Se Quedan en la Mesa", desc: "Tus mejores clientes conocen a 10 personas que necesitan trabajo. Re-Activator pide referidos en el momento justo — convirtiendo clientes felices en tus mejores vendedores." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Nutre Ciclos de Venta Largos", desc: "Lead Closer corre secuencias de seguimiento por semanas después de cada cotización — enviando contenido útil, respondiendo preguntas y manteniéndote en mente hasta que el cliente decide.", stat: "3.5X", statLabel: "más cotizaciones convertidas en contratos firmados" },
      { tool: "Job Promoter", headline: "Portafolio Que Se Vende Solo", desc: "Documentamos cada proyecto con contenido profesional antes/durante/después — creando un portafolio visual que genera confianza y referidos automáticamente.", stat: "5X", statLabel: "más referidos por documentación de proyectos" },
      { tool: "Smart Website", headline: "Un Website Que Gana Proyectos", desc: "Tu sitio web es tu showroom digital. Construimos un website para contratistas que muestra tu portafolio, captura leads y convierte visitantes en consultas.", stat: "4.2X", statLabel: "más solicitudes de consulta" },
      { tool: "Re-Activator", headline: "Maximiza Referidos", desc: "Re-Activator contacta a clientes pasados en el momento perfecto — después de terminar el proyecto y de nuevo a los 6 meses — para pedir referidos y reviews.", stat: "67%", statLabel: "del negocio GC viene de referidos" },
    ],
    testimonial: {
      quote: "Job Promoter transformó cómo presento mi trabajo. Mi Instagram pasó de vacío a 3,500 seguidores en 4 meses, y recibo solicitudes de consulta de gente que me encontró en redes. El tamaño promedio de mis proyectos subió porque los clientes ven la calidad antes de conocernos.",
      name: "Carlos R.",
      role: "Contratista General",
      result: "3,500 seguidores en Instagram, mayor valor promedio de proyectos",
    },
    faqs: [
      { q: "¿Funciona para remodelaciones residenciales y construcción comercial?", a: "Sí. Configuramos pipelines y mensajes separados para proyectos residenciales y comerciales, con preguntas de calificación y seguimientos apropiados para cada uno." },
      { q: "¿Cómo manejan el ciclo largo de ventas para proyectos grandes?", a: "Lead Closer corre secuencias de nutrición por semanas que aportan valor — tips de planeación, guías de materiales, info de financiamiento — mientras te mantiene en mente hasta que el cliente firma." },
      { q: "¿Pueden ayudarme a construir un portafolio que atraiga proyectos de mayor valor?", a: "Claro. Job Promoter documenta sistemáticamente cada proyecto con contenido profesional que muestra tu calidad y atrae clientes que valoran calidad sobre precio." },
    ],
  },
  {
    id: "painting",
    name: "Pintura",
    tagline: "Pintura Interior y Exterior",
    headline: "Marketing con AI Hecho para Pintores",
    subheadline: "Reserva más trabajos interiores y exteriores — y deja de competir por precio.",
    description: "Pintura es uno de los trades más visuales — y con más competencia por precio. Los pintores que ganan trabajos premium son los que tienen mejor contenido antes/después, más reviews y un sistema que hace seguimiento a cada cotización.",
    heroImage: IMGS.painting,
    heroImageAlt: "Pintor aplicando pintura en una pared interior",
    icon: "🎨",
    accentStat: "+223%",
    accentStatLabel: "Incremento promedio de leads para clientes de pintura",
    painPoints: [
      { title: "Siempre Compitiendo por Precio", desc: "Cuando los clientes no ven diferencia entre pintores, escogen al más barato. Contenido visual y reviews hacen obvia tu calidad — así el precio pasa a segundo plano." },
      { title: "Bajas Temporales", desc: "La pintura exterior baja en invierno. Re-Activator mantiene ingresos promoviendo pintura interior, retoques y restauración de gabinetes en meses lentos." },
      { title: "Cotizaciones Que Se Enfrían", desc: "Das una cotización, el cliente dice que pensará y nunca regresa. El seguimiento automático mantiene la conversación hasta que están listos para reservar." },
      { title: "Sin Sistema de Referidos", desc: "Clientes felices de pintura son tu mejor fuente de nuevos negocios — pero solo si pides en el momento correcto. Re-Activator automatiza esa petición." },
    ],
    solutions: [
      { tool: "Job Promoter", headline: "Contenido Antes y Después Que Gana Trabajos", desc: "Nada vende pintura como una foto de transformación impresionante. Job Promoter convierte cada trabajo en contenido que genera referidos y nuevos leads.", stat: "4.5X", statLabel: "más solicitudes de cotización por contenido visual" },
      { tool: "Lead Closer", headline: "Haz Seguimiento Hasta Que Reserven", desc: "Lead Closer envía una secuencia de seguimiento de 10 días después de cada cotización — respondiendo preguntas, compartiendo ejemplos y empujando suavemente al cliente a decidir.", stat: "3X", statLabel: "más cotizaciones convertidas en trabajos" },
      { tool: "Google Optimizer", headline: "Aparece en Búsquedas Locales de Pintura", desc: "Optimizamos tu Google Business Profile con keywords específicas de pintura y un sistema de generación de reviews que aumenta tu visibilidad local mes a mes.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Re-Activator", headline: "Mantén Ingresos Todo el Año", desc: "Re-Activator contacta a clientes pasados con ofertas de pintura interior en invierno, promociones de retoques en primavera y solicitudes de referidos tras cada trabajo.", stat: "$8K", statLabel: "ingresos mensuales promedio por re-activación" },
    ],
    testimonial: {
      quote: "Antes competía por precio y apenas ganaba. Desde que uso Contractor5x, mi contenido antes/después cambió cómo los clientes ven mi trabajo. Cobro 30% más y cierro más trabajos que nunca. Solo el sistema de seguimiento se ha pagado 10 veces solo.",
      name: "Luis M.",
      role: "Contratista de Pintura",
      result: "+30% en precios, 3X más cotizaciones convertidas",
    },
    faqs: [
      { q: "¿Funciona para pintura interior y exterior?", a: "Sí. Personalizamos tu captura de leads y estrategia de contenido para ambos tipos de trabajo, con campañas estacionales que promueven el servicio correcto en cada época." },
      { q: "¿Cómo me ayudan a dejar de competir por precio?", a: "Construyendo un portafolio fuerte de contenido antes/después y una biblioteca de reviews 5 estrellas, hacemos obvia tu calidad antes de que el cliente llame — así te eligen por tu trabajo, no por precio." },
      { q: "¿Pueden ayudarme a conseguir más trabajos de restauración de gabinetes y especiales?", a: "Claro. Creamos contenido y optimización Google para servicios especializados de alto valor como restauración de gabinetes, pisos epóxicos y pintura decorativa." },
    ],
  },
  {
    id: "landscaping",
    name: "Paisajismo",
    tagline: "Cuidado de Césped, Paisajismo y Hardscaping",
    headline: "Marketing con AI Hecho para Paisajistas",
    subheadline: "Llena tu agenda con cuidado de césped recurrente y proyectos de paisajismo de alto valor.",
    description: "Paisajismo es un negocio de relaciones. Clientes recurrentes de cuidado de césped valen miles al año, y un solo proyecto de hardscaping puede valer $20,000+. Te ayudamos a ganar ambos — y que vuelvan siempre.",
    heroImage: IMGS.landscaping,
    heroImageAlt: "Paisajista trabajando en un jardín hermoso",
    icon: "🌿",
    accentStat: "+245%",
    accentStatLabel: "Incremento promedio de leads para clientes de paisajismo",
    painPoints: [
      { title: "Baches de Ingresos Estacionales", desc: "El cuidado de césped baja en invierno. La remoción de nieve ayuda algo, pero la mayoría de paisajistas sufren flujo de caja en temporada baja. Re-Activator mantiene ingresos constantes todo el año." },
      { title: "Alta Rotación de Clientes", desc: "Clientes de césped cambian de proveedor constantemente — usualmente por mala comunicación, no por mal servicio. Mantener contacto automático reduce la rotación mucho." },
      { title: "Hardscaping Subvalorado", desc: "Hardscaping y diseño de paisaje son servicios de alto valor que la mayoría subvende. Mejor contenido y presencia online atraen clientes que valoran calidad." },
      { title: "Sin Exhibición de Transformaciones", desc: "Una transformación de paisaje es uno de los antes/después más dramáticos en cualquier trade. Job Promoter convierte cada proyecto en una vitrina generadora de leads." },
    ],
    solutions: [
      { tool: "Re-Activator", headline: "Reduce Rotación, Aumenta Ingresos Recurrentes", desc: "Re-Activator chequea automáticamente a clientes de césped, manda recordatorios estacionales y facilita que agreguen servicios o refieran amigos.", stat: "85%", statLabel: "tasa de retención con re-activación" },
      { tool: "Job Promoter", headline: "Transformaciones de Paisaje Que Se Vuelven Virales", desc: "Las transformaciones antes/después son de los contenidos más compartidos en redes. Job Promoter captura y distribuye cada proyecto automáticamente.", stat: "6X", statLabel: "más referidos por contenido de proyectos" },
      { tool: "Lead Closer", headline: "Convierte Consultas de Hardscaping en Contratos Firmados", desc: "Lead Closer califica leads de hardscaping, hace seguimiento a cada estimado y nutre prospectos durante el ciclo largo de decisión para proyectos grandes.", stat: "4X", statLabel: "más proyectos de hardscaping reservados" },
      { tool: "Google Optimizer", headline: "Aparece en Todas las Búsquedas de Paisajismo", desc: "Desde 'cuidado de césped cerca de mí' hasta 'contratista de instalación de patios,' optimizamos tu presencia Google para cada servicio que ofreces.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
    ],
    testimonial: {
      quote: "Mis ingresos recurrentes de cuidado de césped bajaban 60% en invierno. Ahora Re-Activator mantiene a mis clientes activos todo el año con ofertas estacionales y he sumado $4,000/mes en ingresos fuera de temporada. Los leads de hardscaping de Job Promoter han sido increíbles — estoy reservado 3 meses adelante.",
      name: "Tony G.",
      role: "Contratista de Paisajismo",
      result: "+$4K/mes fuera de temporada, reservado 3 meses adelante",
    },
    faqs: [
      { q: "¿Funciona para mantenimiento de césped y hardscaping?", a: "Sí. Creamos pipelines separados para mantenimiento recurrente y proyectos de hardscaping únicos, con mensajes y seguimientos distintos para cada uno." },
      { q: "¿Cómo ayudan con las bajas estacionales?", a: "Re-Activator corre campañas estacionales que promueven remoción de nieve en otoño, limpieza de primavera en invierno y consultas de diseño en temporada baja — manteniendo ingresos constantes." },
      { q: "¿Pueden ayudarme a atraer clientes de hardscaping de alto valor?", a: "Claro. Job Promoter crea contenido antes/después atractivo para cada proyecto de hardscaping y optimizamos tu presencia Google para búsquedas de alto valor como 'instalación de patios' y 'cocina exterior'." },
    ],
  },
  {
    id: "pest-control",
    name: "Control de Plagas",
    tagline: "Manejo Residencial y Comercial de Plagas",
    headline: "Marketing con AI Hecho para Empresas de Control de Plagas",
    subheadline: "Construye ingresos recurrentes con más contratos de servicio y menos persiguiendo clientes únicos.",
    description: "Control de plagas es un negocio de ingresos recurrentes — pero solo si tienes un sistema para convertir clientes únicos en contratos anuales. Te ayudamos a hacerlo automáticamente, mientras llenas tu pipeline con nuevos leads.",
    heroImage: IMGS.pestControl,
    heroImageAlt: "Técnico de control de plagas tratando una casa",
    icon: "🐛",
    accentStat: "+189%",
    accentStatLabel: "Incremento promedio de leads para clientes de control de plagas",
    painPoints: [
      { title: "Clientes Únicos Que Nunca Regresan", desc: "Tratas una casa por hormigas, haces buen trabajo y nunca vuelven — hasta que tienen cucarachas y llaman a otro. Re-Activator arregla esto automáticamente." },
      { title: "Picos Estacionales y Periodos Muertos", desc: "Temporada de termitas, mosquitos y roedores — tu negocio sube y baja. Un sistema de marketing todo el año suaviza la curva de ingresos." },
      { title: "Baja Conversión a Contratos de Servicio", desc: "La mayoría de clientes no saben que necesitan servicio trimestral hasta que tienen infestación grave. Campañas educativas automáticas cambian esto." },
      { title: "Compitiendo con Cadenas Nacionales", desc: "Orkin y Terminix tienen presupuestos enormes. Ayudamos a empresas locales a competir con mejor SEO local, más reviews y respuestas más rápidas." },
    ],
    solutions: [
      { tool: "Re-Activator", headline: "Convierte Clientes Únicos en Recurrentes", desc: "Re-Activator contacta a cada cliente pasado con contenido educativo sobre prevención y ofertas para contratos trimestrales — todo automático.", stat: "$18K", statLabel: "ingresos promedio de campañas de re-activación" },
      { tool: "AI Agent", headline: "Maneja Emergencias de Infestación al Instante", desc: "Cuando alguien descubre un nido de avispas o problema de roedores, quiere ayuda YA. El AI Agent responde al instante, califica el trabajo y agenda la cita.", stat: "24/7", statLabel: "cobertura para llamadas de emergencia" },
      { tool: "Google Optimizer", headline: "Supera a las Cadenas Nacionales Localmente", desc: "Las cadenas no pueden competir con una empresa local que tiene 200 reviews 5 estrellas y un listing Google optimizado. Construimos esa ventaja para ti.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Lead Closer", headline: "Nutre Leads Hasta Contratos de Servicio", desc: "Lead Closer hace seguimiento a cada consulta con contenido educativo sobre prevención de plagas, construyendo confianza y convirtiendo consultas únicas en contratos a largo plazo.", stat: "3X", statLabel: "más contratos de servicio firmados" },
    ],
    testimonial: {
      quote: "Solo el Customer Re-Activator pagó todo el servicio. Re-enganchamos a más de 200 clientes en el primer mes y cerramos $18,000 en trabajos que no habríamos conseguido. Mis ingresos recurrentes por contratos se han duplicado en seis meses.",
      name: "Jennifer K.",
      role: "Dueña de Control de Plagas",
      result: "$18K de re-activación, 2X ingresos recurrentes",
    },
    faqs: [
      { q: "¿Funciona para control residencial y comercial?", a: "Sí. Creamos pipelines separados para cuentas residenciales y comerciales, con precios, preguntas de calificación y seguimientos distintos para cada uno." },
      { q: "¿Cómo convierten clientes únicos en contratos de servicio?", a: "Re-Activator manda mensajes educativos después de cada servicio único — explicando beneficios del servicio trimestral, alertas estacionales y facilitando la inscripción a planes recurrentes." },
      { q: "¿Pueden ayudarme a competir con Orkin y Terminix?", a: "Claro. Las empresas locales consistentemente superan a las cadenas nacionales cuando tienen buenas reviews en Google y un listing local optimizado. Construimos esa ventaja sistemáticamente." },
    ],
  },
  {
    id: "tree-service",
    name: "Servicio de Árboles",
    tagline: "Remoción, Poda y Trituración de Tocones",
    headline: "Marketing con AI Hecho para Empresas de Servicio de Árboles",
    subheadline: "Más trabajos de remoción, más contratos de poda, más trabajo de tormentas — todo el año.",
    description: "Servicio de árboles es un trade de tickets altos, alto riesgo y mucha competencia. Una remoción puede valer $2,000–$8,000. Las empresas que ganan consistentemente tienen mejores reviews, respuesta más rápida y contenido visual convincente.",
    heroImage: IMGS.treeService,
    heroImageAlt: "Arborista podando un árbol grande",
    icon: "🌳",
    accentStat: "+278%",
    accentStatLabel: "Incremento promedio de leads para clientes de servicio de árboles",
    painPoints: [
      { title: "Trabajo de Tormentas Va al Que Contesta Primero", desc: "Después de una tormenta, los dueños llaman a todas las empresas que encuentran. El primero que contesta y agenda gana el trabajo. Nuestro AI contesta todas las llamadas al instante." },
      { title: "Trabajo Peligroso Necesita Señales Fuertes de Confianza", desc: "Los dueños de casa están nerviosos de contratar una empresa de árboles — un corte mal hecho puede dañar su casa. Reviews, seguro y contenido profesional generan la confianza que gana trabajos." },
      { title: "Fluctuaciones Estacionales de Ingresos", desc: "Primavera y otoño son temporadas altas; verano e invierno pueden ser lentos. Re-Activator mantiene ingresos con recordatorios de poda y campañas de referidos estacionales." },
      { title: "Compitiendo por Precio en Remociones", desc: "Las cotizaciones de remoción varían mucho. Clientes que ven tu calidad en contenido y reviews son menos propensos a escoger la opción más barata." },
    ],
    solutions: [
      { tool: "AI Agent", headline: "Gana Cada Emergencia de Tormenta", desc: "El AI Agent contesta cada llamada durante y después de tormentas — agendando evaluaciones de emergencia, recogiendo detalles y despachando tu equipo sin que estés pegado al teléfono.", stat: "3X", statLabel: "más trabajos de tormenta capturados" },
      { tool: "Job Promoter", headline: "Contenido Dramático Que Genera Confianza", desc: "Remociones y podas dramáticas son de los contenidos antes/después más convincentes en cualquier trade. Job Promoter captura cada trabajo y lo convierte en prueba social.", stat: "5X", statLabel: "más referidos por contenido visual" },
      { tool: "Google Optimizer", headline: "Aparece en Búsquedas de Emergencia de Árboles", desc: "'Remoción de árboles cerca de mí,' 'servicio de emergencia de árboles,' 'remoción de árbol caído' — optimizamos tu presencia para las búsquedas que traen trabajos de alto valor.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Re-Activator", headline: "Recordatorios Anuales de Poda Que Llenan Temporadas Bajas", desc: "Re-Activator contacta automáticamente a clientes pasados con recordatorios de poda anual, tips para prepararse para tormentas y solicitudes de referidos — manteniendo tu agenda llena todo el año.", stat: "$11K", statLabel: "ingresos promedio por re-activación" },
    ],
    testimonial: {
      quote: "La última temporada de tormentas fue totalmente diferente. El AI manejó todas las llamadas de emergencia mientras yo estaba con mi equipo. Capturé 3x más trabajos de tormenta que el año anterior y mis reviews en Google subieron de 22 a 89 en cinco meses. La mejor inversión que he hecho en mi negocio.",
      name: "Brian W.",
      role: "Dueño de Servicio de Árboles",
      result: "3X trabajos de tormenta, 89 reviews en Google",
    },
    faqs: [
      { q: "¿Funciona para remoción, poda y trituración de tocón?", a: "Sí. Personalizamos tu captura de leads y contenido para cada servicio — con expectativas de precio y seguimientos distintos para remoción, poda y trabajo de tocón." },
      { q: "¿Cómo manejan el aumento de llamadas después de una tormenta?", a: "El AI Agent maneja llamadas concurrentes ilimitadas durante picos de tormenta — recogiendo detalles, agendando evaluaciones y priorizando emergencias sin esfuerzo manual de tu parte." },
      { q: "¿Cómo ayudan a generar confianza para trabajos de alto riesgo?", a: "Construimos tu perfil de reviews en Google, creamos contenido profesional antes/después y aseguramos que tu sitio web comunique claramente tu seguro, certificaciones y experiencia — haciendo que los clientes confíen en ti." },
    ],
  },
  {
    id: "pool-service",
    name: "Servicio de Piscinas",
    tagline: "Limpieza, Reparación e Instalación de Piscinas",
    headline: "Marketing con AI Hecho para Empresas de Servicio de Piscinas",
    subheadline: "Construye una base de clientes recurrentes semanales y gana más construcciones de piscinas.",
    description: "Servicio de piscinas es el negocio definitivo de ingresos recurrentes — clientes de limpieza semanal valen $1,500–$3,000 al año cada uno. Te ayudamos a construir esa base mientras ganas trabajos de reparación e instalación de alto valor.",
    heroImage: IMGS.poolService,
    heroImageAlt: "Técnico de piscinas limpiando y manteniendo una piscina",
    icon: "🏊",
    accentStat: "+234%",
    accentStatLabel: "Incremento promedio de leads para clientes de servicio de piscinas",
    painPoints: [
      { title: "Perdiendo Clientes Semanales a la Competencia", desc: "Los clientes de servicio de piscinas cambian de proveedor cuando se sienten ignorados o poco valorados. Check-ins automáticos y comunicaciones estacionales reducen la rotación mucho." },
      { title: "Caídas Estacionales de Ingresos", desc: "En climas fríos, los ingresos de piscinas bajan 70% en invierno. Re-Activator mantiene ingresos con recordatorios de invernaje, ofertas de upgrades y campañas de apertura temprana en primavera." },
      { title: "Perdiendo Llamadas de Reparación de Alto Valor", desc: "Una falla en la bomba o una fuga es emergencia. Si no contestas, el cliente llama a la competencia — y muchas veces se quedan con ellos para el servicio semanal también." },
      { title: "Sin Sistema para Referidos de Construcción de Piscinas", desc: "Tus clientes semanales son la mejor fuente de referidos para construcciones. Re-Activator pide referidos sistemáticamente en el momento correcto." },
    ],
    solutions: [
      { tool: "Re-Activator", headline: "Mantén Clientes Semanales de Por Vida", desc: "Re-Activator manda check-ins automáticos, recordatorios estacionales y ofertas de upgrades — manteniendo felices a tus clientes y reduciendo rotación casi a cero.", stat: "92%", statLabel: "tasa de retención con re-activación" },
      { tool: "AI Agent", headline: "Nunca Pierdas una Llamada de Reparación de Emergencia", desc: "Cuando una bomba falla un viernes por la tarde, el AI Agent contesta al instante, recoge detalles y despacha a tu técnico — manteniendo al cliente tranquilo y el trabajo para ti.", stat: "24/7", statLabel: "cobertura para reparaciones de emergencia" },
      { tool: "Job Promoter", headline: "Transformaciones de Piscinas Que Se Venden Solas", desc: "Una renovación o construcción de piscina es uno de los antes/después más impresionantes en cualquier trade. Job Promoter captura cada proyecto y lo convierte en contenido que genera referidos.", stat: "8X", statLabel: "más referidos por contenido de construcción de piscinas" },
      { tool: "Google Optimizer", headline: "Aparece en Búsquedas de Servicio de Piscinas en Tu Área", desc: "Optimizamos tu Google Business Profile para cada servicio de piscina que ofreces — desde limpieza semanal hasta renovaciones completas — aumentando tu visibilidad local mes a mes.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
    ],
    testimonial: {
      quote: "Antes perdía 20% de mis clientes semanales cada año a la competencia. Desde que uso Contractor5x, mi rotación bajó casi a cero. Los check-ins automáticos hacen que los clientes se sientan valorados, y Re-Activator me ha traído de vuelta 15 clientes que pensé perdidos para siempre.",
      name: "Marco V.",
      role: "Dueño de Servicio de Piscinas",
      result: "Rotación casi cero, 15 clientes re-activados",
    },
    faqs: [
      { q: "¿Funciona para servicio semanal, reparaciones y construcciones de piscinas?", a: "Sí. Creamos pipelines separados para cada tipo de servicio — con mensajes, precios y seguimientos distintos para mantenimiento, reparación y construcción nueva." },
      { q: "¿Cómo ayudan a reducir la rotación de clientes semanales?", a: "Re-Activator manda check-ins mensuales automáticos, recordatorios estacionales y alertas proactivas de mantenimiento — haciendo que los clientes se sientan valorados y menos tentados a cambiar." },
      { q: "¿Pueden ayudarme a promocionar renovaciones y construcciones de piscinas?", a: "Claro. Job Promoter crea contenido antes/después impresionante para cada renovación y construcción, y optimizamos tu presencia Google para búsquedas de alto valor como 'contratista de renovación de piscinas' y 'constructor de piscinas cerca de mí.'" },
    ],
  },
  {
    id: "appliance-repair",
    name: "Reparación de Electrodomésticos",
    tagline: "Todas las Marcas y Electrodomésticos",
    headline: "Marketing con AI Hecho para Empresas de Reparación de Electrodomésticos",
    subheadline: "Contesta cada llamada de emergencia y construye una base de clientes leales que te llaman primero.",
    description: "La reparación de electrodomésticos es un trade de emergencias y clientes recurrentes. Clientes que tienen buena experiencia te llaman para cada reparación futura — y recomiendan a sus vecinos. Te ayudamos a capturar cada emergencia y construir esa base leal.",
    heroImage: IMGS.applianceRepair,
    heroImageAlt: "Técnico reparando una lavadora",
    icon: "🔨",
    accentStat: "+156%",
    accentStatLabel: "Incremento promedio de leads para clientes de reparación de electrodomésticos",
    painPoints: [
      { title: "Perdiendo Llamadas de Emergencia a la Competencia", desc: "Cuando un refrigerador se rompe un domingo, el cliente llama a todas las empresas que puede. El primero que contesta gana el trabajo — y muchas veces al cliente para siempre." },
      { title: "Sin Sistema para Clientes Recurrentes", desc: "Clientes que tuvieron buena experiencia contigo llaman a cualquier empresa la próxima vez — a menos que mantengas contacto. Re-Activator te mantiene en mente." },
      { title: "Compitiendo con Centros de Servicio de Marca", desc: "LG, Samsung y Whirlpool tienen sus propias redes de servicio. Ayudamos a empresas independientes a competir con mejor SEO local, respuesta más rápida y reviews más fuertes." },
      { title: "Valor Promedio Bajo por Trabajo", desc: "Llamadas de reparación individuales son de bajo valor. La clave es volumen y clientes recurrentes — lo que requiere un sistema para capturar cada llamada y mantener contacto con clientes pasados." },
    ],
    solutions: [
      { tool: "AI Agent", headline: "Contesta Cada Emergencia, Siempre", desc: "El AI Agent maneja todas las llamadas 24/7 — recogiendo detalles del electrodoméstico, agendando citas el mismo o siguiente día, y manteniendo a clientes calmados en emergencias.", stat: "24/7", statLabel: "cobertura para llamadas de emergencia" },
      { tool: "Re-Activator", headline: "Convierte Clientes Únicos en Leales", desc: "Re-Activator contacta a clientes pasados con tips de mantenimiento, recordatorios estacionales y ofertas de servicio — manteniéndote en mente para futuras reparaciones.", stat: "4X", statLabel: "más clientes recurrentes" },
      { tool: "Google Optimizer", headline: "Aparece Por Encima de Centros de Servicio de Marca", desc: "Optimizamos tu Google Business Profile con keywords específicas y un sistema de generación de reviews que aumenta tu visibilidad local y te ayuda a competir con centros de marca.", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Lead Closer", headline: "Reserva Más Trabajos por Día", desc: "Lead Closer maneja todas las consultas entrantes simultáneamente — calificando trabajos, dando estimados y agendando citas sin jugar al teléfono.", stat: "2.5X", statLabel: "más trabajos reservados por día" },
    ],
    testimonial: {
      quote: "Antes perdía 30% de mis llamadas porque siempre estaba en un trabajo. Ahora el AI maneja cada llamada y estoy reservando 2.5x más trabajos por día. Mis reviews en Google subieron de 14 a 78 en tres meses y ahora soy el top en reparación de electrodomésticos en mi ciudad.",
      name: "Steve H.",
      role: "Dueño de Reparación de Electrodomésticos",
      result: "2.5X más trabajos, mejor visibilidad en Google",
    },
    faqs: [
      { q: "¿Funciona para todo tipo y marca de electrodomésticos?", a: "Sí. Personalizamos tus formularios para capturar tipo, marca y modelo — asegurando que tu técnico llegue preparado y que los clientes reciban estimados precisos." },
      { q: "¿Cómo me ayudan a competir con centros de servicio de marca?", a: "Las empresas locales consistentemente superan a centros de servicio de marca cuando tienen buenas reviews en Google y un listing local optimizado. Construimos esa ventaja sistemáticamente." },
      { q: "¿Pueden ayudarme a construir una base leal para negocios recurrentes?", a: "Claro. Re-Activator manda mensajes automáticos después de cada reparación — compartiendo tips de mantenimiento, recordatorios estacionales y facilitando que los clientes agenden su próximo servicio contigo." },
    ],
  },
  {
    id: "windows-doors",
    name: "Ventanas y Puertas",
    tagline: "Instalación, Reemplazo y Reparación",
    headline: "Marketing con AI Hecho para Contratistas de Ventanas y Puertas",
    subheadline: "Gana más proyectos de reemplazo y construye un pipeline de trabajos de renovación de alto valor.",
    description: "Reemplazo de ventanas y puertas es una compra de ticket alto y considerada. Los dueños de casa investigan mucho antes de decidir. Los contratistas que ganan son los que aparecen primero en búsqueda, tienen más reviews y hacen seguimiento constante tras cada estimado.",
    heroImage: IMGS.windows,
    heroImageAlt: "Instalador de ventanas colocando una ventana nueva en una casa",
    icon: "🪟",
    accentStat: "+201%",
    accentStatLabel: "Incremento promedio de leads para clientes de ventanas y puertas",
    painPoints: [
      { title: "Ciclos de Decisión Largos", desc: "Reemplazo de ventanas es una decisión de $5,000–$20,000. Los clientes tardan semanas en decidir. El contratista que mejor hace seguimiento — sin ser agresivo — gana el trabajo." },
      { title: "Comparación de Múltiples Cotizaciones", desc: "Los dueños piden 3–5 cotizaciones para proyectos de ventanas. Tu sistema de seguimiento debe mantenerte en mente mientras comparan — y hacer obvio tu valor." },
      { title: "Patrones Estacionales de Demanda", desc: "Primavera y otoño son temporadas altas para reemplazo de ventanas. Re-Activator contacta a clientes pasados y fuentes de referidos antes de que empiece la temporada — llenando tu pipeline temprano." },
      { title: "Mensaje de Eficiencia Energética", desc: "El ahorro de energía es el punto de venta #1 para reemplazo de ventanas — pero la mayoría no lo comunica bien. Lo integramos en tu contenido y seguimiento." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Gana la Batalla del Seguimiento Largo", desc: "Lead Closer corre secuencias de seguimiento de 14 días tras cada estimado — compartiendo datos de ahorro energético, opciones de financiamiento y ejemplos de proyectos similares hasta que el cliente se compromete.", stat: "4X", statLabel: "más cotizaciones convertidas en contratos firmados" },
      { tool: "Job Promoter", headline: "Contenido Antes y Después Que Justifica la Inversión", desc: "Una transformación de ventanas es dramática — especialmente cuando muestras datos de eficiencia junto con la mejora visual. Job Promoter captura cada instalación.", stat: "3.8X", statLabel: "más referidos por contenido de proyectos" },
      { tool: "Google Optimizer", headline: "Aparece en Búsquedas de Reemplazo de Ventanas", desc: "Optimizamos tu presencia Google para búsquedas de alta intención como 'reemplazo de ventanas cerca de mí,' 'ventanas eficientes,' y 'contratista de puertas.'", stat: "6 semanas", statLabel: "tiempo promedio para ver mejora en ranking" },
      { tool: "Re-Activator", headline: "Campañas Estacionales Que Llenan Tu Pipeline", desc: "Re-Activator contacta a clientes pasados y referidos antes de temporada alta — con recordatorios de ahorro energético, ofertas de financiamiento y solicitudes de referidos.", stat: "$15K", statLabel: "ingresos promedio de campañas estacionales" },
    ],
    testimonial: {
      quote: "El sistema de seguimiento cambió mi negocio por completo. Antes daba cotizaciones y esperaba. Ahora Lead Closer hace seguimiento automático y convierto 4x más estimados en contratos firmados. Mis ingresos subieron 65% este año.",
      name: "Paul N.",
      role: "Contratista de Ventanas y Puertas",
      result: "+65% ingresos, 4X conversión de cotizaciones",
    },
    faqs: [
      { q: "¿Funciona para ventanas y puertas?", a: "Sí. Personalizamos tu captura de leads y estrategia de contenido para ambos — con mensajes distintos para reemplazo, reparación e instalación nueva." },
      { q: "¿Cómo manejan el ciclo largo de decisión para reemplazo de ventanas?", a: "Lead Closer corre secuencias de nutrición por semanas que aportan valor — calculadoras de ahorro, info de financiamiento, ejemplos de proyectos — mientras te mantiene en mente hasta que el cliente firma." },
      { q: "¿Pueden ayudarme a promocionar la eficiencia energética como punto de venta?", a: "Claro. Integramos mensajes de eficiencia energética en tu contenido Google, posts sociales y seguimientos — haciendo obvio el ROI de nuevas ventanas para cada prospecto." },
    ],
  },
];

export const tradesById = Object.fromEntries(tradesData.map((t) => [t.id, t]));