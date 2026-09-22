export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime?: string;
  dek?: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "metodo-diagnostico-aureon",
    tag: "Metodología",
    readTime: "6 min de lectura",
    title:
      "El Método de Diagnóstico Aureon: cómo encontramos dónde tu negocio pierde tiempo antes de proponer nada",
    excerpt:
      "Las cinco preguntas que hacemos en los primeros 30 minutos, en qué orden y por qué ninguna es sobre tecnología.",
    dek: "Una regla ordena todo lo que hacemos: nunca ofrecer un precio sin diagnosticar antes.",
    content: [
      "Casi todos los pedidos que recibimos vienen con la solución ya elegida. \"Necesito automatizar el WhatsApp.\" \"Quiero un sistema para los pedidos.\" A veces tienen razón. La mayoría de las veces el problema está un paso antes, y automatizar el proceso equivocado solo lo hace más rápido.",
      "Por eso el diagnóstico dura 30 minutos y no arranca preguntando qué querés automatizar. Arranca preguntando cómo trabaja tu equipo un martes cualquiera.",
      "## Las cinco preguntas",
      "**01 · ¿Qué tarea se repite todas las semanas exactamente igual?**\nLo que se repite idéntico es lo primero que se puede sacar de encima. Si cada vez es distinto, todavía no es candidato.",
      "**02 · ¿Qué pasa cuando la persona que la hace no está?**\nLa respuesta a esto suele mostrar el riesgo real del negocio, más que cualquier planilla.",
      "**03 · ¿Dónde se vuelve a escribir un dato que ya existe?**\nCada vez que un dato se copia a mano, hay dos costos: el tiempo de copiarlo y el error que se cuela.",
      "**04 · ¿Cuánto tarda tu negocio en responderle a alguien que quiere comprar?**\nEs la métrica que más rápido se traduce en plata, y la que casi nadie mide.",
      "**05 · ¿Qué decisión estás tomando vos que podría tomar otro?**\nSi la lista es larga, el problema no es de procesos: es de criterios sin escribir.",
      "## Qué sale de los 30 minutos",
      "Sale un mapa corto: dos o tres frentes donde se está perdiendo tiempo, ordenados por lo que costaría dejarlos como están. Con eso podés hacer tres cosas: contratarnos, resolverlo internamente, o no hacer nada porque no da el número. Las tres son respuestas válidas y las tres son mejores que empezar a construir a ciegas.",
      "Lo que no sale del diagnóstico es un presupuesto. El precio aparece después, cuando ya sabemos cuánto vale el problema y podemos comparar una cosa con la otra.",
    ],
  },
  {
    slug: "costo-no-automatizar-vencimientos-estudio-contable",
    tag: "Costo del problema",
    readTime: "4 min de lectura",
    title:
      "Cuánto le cuesta a un estudio contable no automatizar el seguimiento de vencimientos",
    excerpt:
      "Una cuenta simple: horas de seguimiento manual por mes, multiplicadas por el valor de la hora profesional.",
    content: [
      "En un estudio contable, el seguimiento de vencimientos suele depender de que alguien se acuerde: una planilla, una alarma, la memoria de quien lleva la cuenta. Funciona, hasta que no.",
      "El costo real no es solo la multa ocasional — es el tiempo que se va en revisar manualmente qué vence y cuándo, y la ansiedad de no tener certeza de que nada se está pasando.",
      "Un sistema de recordatorios que sale solo no reemplaza el criterio del contador. Libera el tiempo que hoy se va en sostener el seguimiento a mano.",
    ],
  },
  {
    slug: "leads-inmobiliarios-demora-respuesta",
    tag: "Costo del problema",
    readTime: "4 min de lectura",
    title:
      "Por qué el 35% de los leads inmobiliarios se pierden por demora en la respuesta",
    excerpt:
      "Qué pasa entre el momento en que alguien consulta y el momento en que alguien contesta.",
    content: [
      "En el rubro inmobiliario, la primera respuesta importa más que la calidad de la propiedad. Un interesado que escribe a las 10 de la noche y recibe respuesta al otro día ya avanzó con otra opción.",
      "El problema no es falta de interés del equipo — es que ninguna persona puede estar disponible las 24 horas. Y cada consulta sin responder a tiempo es un lead que se enfría solo.",
      "Automatizar la primera respuesta no reemplaza al agente inmobiliario: le da tiempo a llegar a la conversación cuando el interés todavía está caliente.",
    ],
  },
  {
    slug: "agente-ia-tareas-repetitivas",
    tag: "Autoridad técnica",
    readTime: "5 min de lectura",
    title:
      "Qué es un agente de IA y por qué tu equipo no debería competir con uno en tareas repetitivas",
    excerpt:
      "Explicado sin jerga, con el criterio para decidir qué conviene delegarle y qué no.",
    content: [
      "Un agente de IA, explicado simple, es un sistema que sigue un proceso y responde según reglas y contexto — sin cansarse, sin horario, sin necesitar que alguien esté mirando.",
      "El error común es pensar que la automatización compite con las personas. En la práctica, compite con las tareas que nadie quiere seguir haciendo a mano: responder lo mismo veinte veces por día, registrar un pedido, mandar un recordatorio.",
      "Cuando ese tipo de tarea deja de depender de una persona, el equipo se libera para lo que sí necesita criterio humano.",
    ],
  },
  {
    slug: "por-que-dejamos-de-ofrecer-solo-automatizacion",
    tag: "Bitácora",
    readTime: "3 min de lectura",
    title: "Por qué dejamos de ofrecer solo automatización",
    excerpt:
      "La decisión de abrir el Operador Fraccionado, contada mientras pasa y sin resultados todavía.",
    content: [
      "Durante un tiempo, Aureon ofreció exclusivamente automatización de procesos: WhatsApp, seguimientos, pedidos. Funciona, y sigue siendo el corazón de lo que hacemos.",
      "Pero en el camino apareció un patrón distinto: negocios donde el proceso ya funcionaba razonablemente bien, y el freno real era otro — que cada decisión, grande o chica, seguía pasando por una sola persona.",
      "Ahí nace Operador Fraccionado: acompañamiento operativo continuo, no una implementación puntual. Todavía es una línea nueva, sin casos propios cerrados — y preferimos decirlo así, en vez de simular una experiencia que no tenemos todavía.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
