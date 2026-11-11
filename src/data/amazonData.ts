import { Destination, WildlifeSpecies, GalleryItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_amazon_rainforest_1794424000827.jpg';

export const DESTINATIONS: Destination[] = [
  {
    id: 'selva-amazonica',
    name: 'Selva Amazónica',
    subtitle: 'Parque Nacional Yasuní & Bosque Primario',
    icon: '🌿',
    image: '/src/assets/images/destination_selva_yasuni_1794424001260.jpg',
    description: 'Explora la increíble biodiversidad de la Amazonía ecuatoriana y descubre paisajes llenos de vida en uno de los lugares más biodiversos del planeta tierra.',
    location: 'Orellana / Pastaza, Ecuador',
    duration: '4 Días / 3 Noches',
    difficulty: 'Moderado',
    priceUSD: 420,
    highlights: [
      'Ascenso a torre de dosel de 36 metros sobre los árboles de Ceibo',
      'Caminatas de rastreo nocturno para observación de anfibios e insectos luminiscentes',
      'Senderos de plantas medicinales con guía nativo kichwa',
      'Avistamiento de más de 8 especies de primates y pecaríes de collar'
    ],
    included: [
      'Alojamiento en ecolodge sustentable de madera',
      'Todas las comidas con gastronomía amazónica típica',
      'Guía naturalista bilingüe y guía nativo local',
      'Botas de caucho, ponchos de lluvia y equipo de seguridad'
    ]
  },
  {
    id: 'cascadas',
    name: 'Cascadas',
    subtitle: 'Ruta del Agua & Piscinas Naturales',
    icon: '💦',
    image: '/src/assets/images/destination_amazon_waterfall_1794424002326.jpg',
    description: 'Disfruta de impresionantes cascadas rodeadas de naturaleza y paisajes únicos en las estribaciones orientales de la cordillera andino-amazónica.',
    location: 'Tena & Pastaza, Ecuador',
    duration: '3 Días / 2 Noches',
    difficulty: 'Fácil',
    priceUSD: 280,
    highlights: [
      'Visita a las cascadas sagradas Hola Vida y Pailón Mágico',
      'Baños energizantes en piscinas naturales de agua cristalina',
      'Descenso asistido en cañonismo y senderismo entre helechos gigantes',
      'Mirador del cañón del río Pastaza y orquídeas silvestres'
    ],
    included: [
      'Hospedaje campestre con vista a la selva',
      'Desayunos y almuerzos campestres de la huerta orgánica',
      'Equipo homologado para caminata y cañonismo',
      'Transporte privado terrestre desde Tena o Baños'
    ]
  },
  {
    id: 'rios-amazonicos',
    name: 'Ríos Amazónicos',
    subtitle: 'Cuyabeno & Afluentes del Río Napo',
    icon: '🌊',
    image: '/src/assets/images/destination_amazon_river_1794424002657.jpg',
    description: 'Navega por los ríos de la Amazonía y disfruta de paisajes naturales llenos de tranquilidad, lagunas de aguas negras y fauna anfibia.',
    location: 'Sucumbíos / Cuyabeno, Ecuador',
    duration: '5 Días / 4 Noches',
    difficulty: 'Aventura',
    priceUSD: 490,
    highlights: [
      'Navegación en canoas tradicionales a remo en la Laguna Grande',
      'Búsqueda y observación de delfines rosados y caimanes negros',
      'Atardeceres inolvidables con reflejos de espejo sobre el agua',
      'Pesca deportiva tradicional de pirañas con devolución responsable'
    ],
    included: [
      'Cabañas flotantes o a orillas de la laguna con mosquiteros',
      'Transporte fluvial en canoas motorizadas autorizadas',
      'Tres comidas diarias estilo buffet ecuatoriano',
      'Permiso de ingreso y contribución comunitaria a la reserva'
    ]
  }
];

export const WILDLIFE_LIST: WildlifeSpecies[] = [
  {
    id: 'jaguar',
    commonName: 'Jaguar Amazónico',
    scientificName: 'Panthera onca',
    status: 'Casi Amenazado (Protegido en Yasuní)',
    habitat: 'Selva alta y riberas de ríos remotos',
    description: 'El felino más grande de América y guardián espiritual de los pueblos amazónicos. De pelaje dorado con rosetas únicas, es el superdepredador de la selva virgen.',
    curiosity: 'Sus mandíbulas son tan potentes que pueden perforar el caparazón de tortugas y cráneos de caimán.',
    image: '/src/assets/images/fauna_jaguar_amazon_1794424018678.jpg'
  },
  {
    id: 'delfin-rosado',
    commonName: 'Delfín Rosado de Río',
    scientificName: 'Inia geoffrensis',
    status: 'En Peligro (Monitoreo activo)',
    habitat: 'Lagunas de aguas negras y cuenca del Cuyabeno',
    description: 'Famoso por su llamativa coloración rosácea que se intensifica con la edad y el ejercicio. Son extremadamente curiosos y sociables.',
    curiosity: 'A diferencia de los delfines marinos, sus vértebras cervicales no están fusionadas, lo que les permite girar el cuello 180 grados entre las ramas sumergidas.',
    image: '/src/assets/images/fauna_delfin_rosado_1794424018768.jpg'
  },
  {
    id: 'guacamayo',
    commonName: 'Guacamayo Escarlata',
    scientificName: 'Ara macao',
    status: 'Preocupación Menor en Cuenca Amazónica',
    habitat: 'Dosel superior y saladeros de arcilla',
    description: 'Con sus plumajes rojos intensos, azules y amarillos, los guacamayos vuelan en parejas de por vida sobre las copas del bosque lluvioso.',
    curiosity: 'Frecuentan los saladeros minerales de arcilla para neutralizar las toxinas de ciertas semillas ácidas que consumen en el bosque.',
    image: '/src/assets/images/fauna_guacamayo_scarlet_1794424019174.jpg'
  },
  {
    id: 'rana-cristal',
    commonName: 'Rana de Cristal',
    scientificName: 'Hyalinobatrachium dianae',
    status: 'Vulnerable a cambios ambientales',
    habitat: 'Hojas húmedas junto a arroyos cristalinos',
    description: 'Pequeños anfibios nocturnos de piel ventral translúcida que permite ver sus órganos internos latiendo. Bioindicadores esenciales de la pureza del agua.',
    curiosity: 'Los machos cuidan los huevos adheridos al envés de las hojas sobre el agua durante días para protegerlos de insectos parásitos.',
    image: '/src/assets/images/fauna_rana_cristal_1794424019074.jpg'
  }
];

export const EXPERIENCES_DATA = {
  title: 'Vive la experiencia amazónica',
  subtitle: 'Naturaleza, cultura y aventura',
  mainDescription: 'La Amazonía ecuatoriana es un lugar lleno de biodiversidad, culturas ancestrales y paisajes sorprendentes. Conoce comunidades, disfruta de la naturaleza, descubre nuevas especies y vive experiencias inolvidables con guías certificados y respetuosos con las comunidades indígenas.',
  image: '/src/assets/images/experience_community_culture_1794424003006.jpg',
  pillars: [
    {
      title: 'Caminatas por la selva',
      description: 'Senderos botánicos guiados de día y noche para descubrir insectos fosforescentes, lianas gigantes y árboles milenarios.',
      icon: 'TreePine'
    },
    {
      title: 'Visita a cascadas y ríos',
      description: 'Navegación en canoas tradicionales de madera y chapuzones purificadores en cañones y caídas de agua cristalina.',
      icon: 'Waves'
    },
    {
      title: 'Convivencia con comunidades',
      description: 'Encuentros interculturales auténticos con familias Kichwa y Waorani: preparación de maito, alfarería y medicina de la selva.',
      icon: 'Users'
    },
    {
      title: 'Fotografía de paisajes y fauna',
      description: 'Puntos estratégicos en torres sobre el dosel de los árboles y riberas para capturar guacamayos, monos y reflejos de agua.',
      icon: 'Camera'
    }
  ],
  itineraryDays: [
    {
      day: 'Día 1: Entrada al Reino Verde',
      details: 'Llegada a Tena o Puerto Francisco de Orellana (Coca). Embarque en canoa tradicional río abajo. Bienvenida en ecolodge, almuerzo típico maito de pescado y primera caminata al mirador del atardecer.'
    },
    {
      day: 'Día 2: El Dosel y las Cascadas Ocultas',
      details: 'Despertar con sinfonía de aves a las 5:30 am. Ascenso a la torre de dosel de 36m. Tarde de exploración a la cascada escondida con baño natural y expedición nocturna de anfibios.'
    },
    {
      day: 'Día 3: Sabiduría Ancestral y Río Tranquilo',
      details: 'Visita respetuosa a la comunidad Kichwa de Añangu o Shiripuno. Demostración de cerámica tradicional, tejido de chambira y degustación de guayusa. Navegación crepuscular en busca de caimanes.'
    },
    {
      day: 'Día 4: Despedida de la Selva',
      details: 'Última navegación matutina por el saladero de loros donde cientos de aves comen arcilla rica en minerales. Desayuno de despedida y retorno en canoa con transfer de conexión.'
    }
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Amanecer en el Río Napo',
    category: 'paisajes',
    categoryLabel: 'Paisaje',
    location: 'Río Napo, Orellana',
    image: '/src/assets/images/hero_amazon_rainforest_1794424000827.jpg',
    caption: 'La niebla matutina disolviéndose sobre los meandros del gran río amazónico.'
  },
  {
    id: 'g-2',
    title: 'Ceibo Sagrado Centenario',
    category: 'paisajes',
    categoryLabel: 'Selva',
    location: 'Parque Nacional Yasuní',
    image: '/src/assets/images/destination_selva_yasuni_1794424001260.jpg',
    caption: 'Raíces tabulares gigantes de un Kapok Ceibo que sostiene un ecosistema completo.'
  },
  {
    id: 'g-3',
    title: 'Cascada Esmeralda',
    category: 'cascadas',
    categoryLabel: 'Cascada',
    location: 'Pastaza / Ruta de las Cascadas',
    image: '/src/assets/images/destination_amazon_waterfall_1794424002326.jpg',
    caption: 'Caída de agua cristalina formando un pozo de baño mineral en la selva alta.'
  },
  {
    id: 'g-4',
    title: 'Canoa al Atardecer',
    category: 'paisajes',
    categoryLabel: 'Ríos',
    location: 'Reserva Cuyabeno',
    image: '/src/assets/images/destination_amazon_river_1794424002657.jpg',
    caption: 'Navegación serena sobre la Laguna Grande al caer el sol ecuatorial.'
  },
  {
    id: 'g-5',
    title: 'Encuentro Intercultural Kichwa',
    category: 'cultura',
    categoryLabel: 'Cultura',
    location: 'Comunidad Kichwa Shiripuno',
    image: '/src/assets/images/experience_community_culture_1794424003006.jpg',
    caption: 'Compartiendo saberes milenarios y cerámica tradicional en una maloca abierta.'
  },
  {
    id: 'g-6',
    title: 'El Soberano de la Jungla',
    category: 'fauna',
    categoryLabel: 'Fauna',
    location: 'Reserva de Biósfera Yasuní',
    image: '/src/assets/images/fauna_jaguar_amazon_1794424018678.jpg',
    caption: 'Jaguar adulto descansando sobre un tronco cubierto de musgo y bromelias.'
  },
  {
    id: 'g-7',
    title: 'Delfín Rosado en Cuyabeno',
    category: 'fauna',
    categoryLabel: 'Fauna',
    location: 'Laguna Grande de Cuyabeno',
    image: '/src/assets/images/fauna_delfin_rosado_1794424018768.jpg',
    caption: 'Inia geoffrensis emergiendo a respirar en las tranquilas aguas negras.'
  },
  {
    id: 'g-8',
    title: 'Guacamayos en Libertad',
    category: 'fauna',
    categoryLabel: 'Fauna',
    location: 'Canopy Tower Yasuní',
    image: '/src/assets/images/fauna_guacamayo_scarlet_1794424019174.jpg',
    caption: 'Pareja de guacamayos rojos vigilando el inmenso manto verde del bosque.'
  },
  {
    id: 'g-9',
    title: 'Rana de Cristal con Rocío',
    category: 'fauna',
    categoryLabel: 'Fauna',
    location: 'Estribaciones de Tena',
    image: '/src/assets/images/fauna_rana_cristal_1794424019074.jpg',
    caption: 'Diminuto bioindicador nocturno refugiado en una hoja de monstera silvestre.'
  }
];

export const TRAVEL_TIPS = [
  {
    icon: 'SunMedium',
    title: 'Clima y Temperatura',
    desc: 'Cálido y húmedo (24°C - 31°C). Las lluvias tropicales son parte de la magia y suelen durar 1 a 2 horas, refrescando la selva.'
  },
  {
    icon: 'Shirt',
    title: 'Qué Ropa Traer',
    desc: 'Ropa ligera de secado rápido, pantalones largos transpirables, camisas de manga larga contra insectos y traje de baño.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Salud y Vacunas',
    desc: 'Se recomienda vacuna de fiebre amarilla para estancias prolongadas. Repelente biodegradable y bloqueador solar eco-friendly.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Turismo Responsable',
    desc: 'No dejar residuos en los senderos, pedir permiso antes de fotografiar personas y adquirir artesanías directamente de las comunidades.'
  }
];

export const REGIONS_WEATHER = [
  { region: 'Tena (Napo)', temp: '27°C', condition: 'Llovizna suave', humidity: '88%' },
  { region: 'El Coca (Orellana)', temp: '29°C', condition: 'Parcialmente nublado', humidity: '82%' },
  { region: 'Cuyabeno (Sucumbíos)', temp: '28°C', condition: 'Cielo despejado', humidity: '85%' },
  { region: 'Puyo (Pastaza)', temp: '24°C', condition: 'Brisa de montaña', humidity: '89%' }
];
