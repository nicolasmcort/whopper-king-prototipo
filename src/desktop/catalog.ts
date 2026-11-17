/** Catálogo desktop — mismas fotos / platos del prototipo móvil. */

export type DeskProduct = {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  screen: string;
  category: string;
};

export type DeskCategory = {
  id: string;
  label: string;
  hint: string;
  /** Clave de ícono en ClientUiIcons / desktop */
  icon: 'burger' | 'lunch' | 'chicken' | 'meat' | 'fish' | 'drink';
};

const A = (id: string) =>
  `https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/${id}`;

/** Logo hamburguesa con pulgar (mismo asset del inicio móvil). */
export const RESTAURANT_LOGO = A('2cdb9c09-53d1-4add-b286-f23aace567d4.png');
/** Fallback local (login). */
export const RESTAURANT_LOGO_LOCAL = `${import.meta.env.BASE_URL}login-burger.png`;

/** Favorito del inicio. */
export const FEATURED_IMG = A('a86a1986-9af3-483e-8ba2-ce441b5ed50f.png');

export const IMG = {
  whopperKing: A('36330105-2074-4efd-8732-5a572d03abad.png'),
  whopper: A('8884a526-58b2-4917-8f19-975dad85c119.jpg'),
  whopperBbq: A('f7791f79-c84a-45a0-a434-55a1edc327b5.png'),
  whopperHawaiana: A('2db227dc-df21-4b1c-84ab-083318b48fa7.png'),
  cowBoy: A('946b68dc-15bd-4dd2-af2e-53fcd469024a.png'),
  polloMilanesa: A('740873da-9aeb-4c01-97ea-4b4630acd700.png'),
  cheeseWhopper: A('b8581c1e-ce7c-46c6-80c2-10052cd15920.jpg'),
  bigBoy: A('f043b93d-47c4-42b5-b1cb-9d7807232255.jpg'),
  whopperCriolla: A('3f7953b7-162b-4ecd-a9a1-9a1e9333e8f7.png'),
  todoTerreno: A('f5c487c3-364c-4d75-98ee-e687654c6255.png'),
  texana: A('83ad0840-e0a8-4d29-bf61-31af1a7a6cc0.png'),
  whopperDetail: A('5cdef993-0dbb-4774-9e93-d1809f98a59d.png'),
  almuerzoCarneSudada: A('d29a1361-2b1f-4d00-9fb3-31ed6e4741e0.png'),
  almuerzoCarneAsada: A('b127b9f2-8aff-47dc-aee2-579d8e1bedc0.png'),
  almuerzoHigadoAsado: A('9de96bf8-ad68-4ac9-933d-0bc581f58198.png'),
  almuerzoHigadoSudado: A('fca6296a-9355-43b6-9f37-24e1f12fab99.png'),
  chuletaCerdo: A('323ef4ca-31aa-4e44-8119-53f81f8b491d.png'),
  pescadoApanado: A('84c96fe1-9435-4deb-9423-8532bb338594.png'),
  almuerzoChuletaPollo: A('4a838ed4-08b8-4e42-a2e8-53c8c10a9549.png'),
  almuerzoBroster: A('b3cfbe26-08e4-445c-b306-d40a926de9b5.png'),
  almuerzoCordon: A('67a56330-3016-45c2-b88a-7a514441d377.png'),
  almuerzoTrucha: A('6ea21415-1721-4f04-9674-676f723031dd.png'),
  polloFamiliar: A('80082932-621a-4649-80a5-1e9c95b93d1b.png'),
  polloGrillet: A('5645e025-9a45-4a10-ab41-4929edd53dd7.png'),
  bandejaBroaster: A('25d0d48d-b673-4b9d-8761-d817e8d6258f.png'),
  arrozPollo: A('584a31d4-ea01-4005-b4b9-b0665921a4dc.png'),
  steakMixto: A('0bbd594b-e1d7-4028-bb33-455a522c1b50.png'),
  churrasco: A('8e989a88-e25f-4233-bb1e-908da8437e9a.png'),
  steakMixto2: A('a0e18d9a-7759-4b5e-a7a4-d5abd6be529b.png'),
  filetePescado: A('35e4203e-69b4-4d88-b32c-21f742406f31.png'),
  trucha: A('9197fbe9-d556-4049-bf87-85a6344b1c50.png'),
  jugos: A('11a87723-5aed-41c3-b502-ce9652811db2.png'),
  gaseosas: A('20d9701e-f21d-4ca1-a26f-80eabafdf17f.png'),
  cartWhopper: A('961948be-e1a8-485b-bc9d-b272387ae3a6.jpg'),
  cartTexana: A('787e0899-fa0d-4dd6-9659-85d325bcf7a8.jpg'),
} as const;

export const CATEGORIES: DeskCategory[] = [
  { id: 'menu-burgers', label: 'Whoppers', hint: 'Hamburguesas', icon: 'burger' },
  { id: 'menu-almuerzo', label: 'Almuerzos y menús', hint: 'Menú del día', icon: 'lunch' },
  { id: 'menu-pollo', label: 'Pollo', hint: 'Pollo', icon: 'chicken' },
  { id: 'menu-carne', label: 'Carne', hint: 'Res', icon: 'meat' },
  { id: 'menu-pescado', label: 'Pescado', hint: 'Mar', icon: 'fish' },
  { id: 'menu-bebidas', label: 'Bebidas', hint: 'Para acompañar', icon: 'drink' },
];

export const PRODUCTS: DeskProduct[] = [
  {
    id: 'whopper-king',
    name: 'Whopper King',
    price: 21400,
    desc: 'Hamburguesa gigante · Ensalada de huevo · Papas · Anillos de cebolla',
    image: IMG.whopperKing,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'whopper',
    name: 'Whopper',
    price: 10400,
    desc: '150 gr de res · Lechuga · Tomate · Pepino',
    image: IMG.whopper,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'whopper-bbq',
    name: 'Whopper BBQ',
    price: 17400,
    desc: 'Tocineta · Queso doble crema · Salsa BBQ',
    image: IMG.whopperBbq,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'whopper-hawaiana',
    name: 'Whopper Hawaiana',
    price: 19000,
    desc: 'Jamón · Queso · Tocineta',
    image: IMG.whopperHawaiana,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'cow-boy',
    name: 'Cow Boy',
    price: 30000,
    desc: 'Cubierta con frijoles · Carne de res · Salsas de la casa',
    image: IMG.cowBoy,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'pollo-milanesa',
    name: 'Whopper Pollo Milanesa',
    price: 15000,
    desc: 'Pollo apanado · Ensalada de verduras',
    image: IMG.polloMilanesa,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'cheese-whopper',
    name: 'Cheese Whopper',
    price: 11600,
    desc: '150 gr de res · Queso doble crema',
    image: IMG.cheeseWhopper,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'big-boy',
    name: 'Big Boy',
    price: 20000,
    desc: 'Pollo apanado · Ensalada de verduras',
    image: IMG.bigBoy,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'whopper-criolla',
    name: 'Whopper Criolla',
    price: 18000,
    desc: '150 gr de res · Queso doble crema · Toque criollo',
    image: IMG.whopperCriolla,
    screen: 'personaliza-whopper',
    category: 'menu-burgers',
  },
  {
    id: 'todo-terreno',
    name: 'Todo Terreno Especial',
    price: 31900,
    desc: '150 gr de res · 140 gr de pollo · Jamón',
    image: IMG.todoTerreno,
    screen: 'desc-texana',
    category: 'menu-burgers',
  },
  {
    id: 'texana',
    name: 'Texana Especial',
    price: 23500,
    desc: 'Todo terreno especial · Picante suave',
    image: IMG.texana,
    screen: 'desc-texana',
    category: 'menu-burgers',
  },
  {
    id: 'alm-carne-sudada',
    name: 'Almuerzo Carne Sudada',
    price: 14500,
    desc: 'Arroz · Papa · Bebida · Principio · Sopa · Ensalada',
    image: IMG.almuerzoCarneSudada,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-carne-asada',
    name: 'Almuerzo Carne Asada',
    price: 14500,
    desc: 'Arroz · Papa · Bebida · Principio · Sopa · Ensalada',
    image: IMG.almuerzoCarneAsada,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-higado-asado',
    name: 'Almuerzo Hígado Asado',
    price: 14500,
    desc: 'Arroz · Papa · Bebida · Principio · Sopa · Ensalada',
    image: IMG.almuerzoHigadoAsado,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-higado-sudado',
    name: 'Almuerzo Hígado Sudado',
    price: 14500,
    desc: 'Arroz · Papa · Bebida · Principio · Sopa · Ensalada',
    image: IMG.almuerzoHigadoSudado,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-chuleta-cerdo',
    name: 'Chuleta de Cerdo',
    price: 14500,
    desc: 'Chuleta apanada · Arroz · Papa · Bebida · Sopa',
    image: IMG.chuletaCerdo,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-pescado',
    name: 'Pescado Apanado',
    price: 14500,
    desc: 'Basa apanada · Arroz · Papa · Bebida · Sopa',
    image: IMG.pescadoApanado,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-chuleta-pollo',
    name: 'Almuerzo Chuleta Pollo',
    price: 14500,
    desc: 'Chuleta de pollo · Arroz · Papa · Bebida · Sopa',
    image: IMG.almuerzoChuletaPollo,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-broster',
    name: 'Almuerzo Pollo Broster',
    price: 14500,
    desc: 'Pollo broster · Arroz · Papa · Bebida · Sopa',
    image: IMG.almuerzoBroster,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-cordon',
    name: 'Almuerzo Cordon Bleu',
    price: 18000,
    desc: 'Cordon bleu · Arroz · Papa · Bebida · Sopa',
    image: IMG.almuerzoCordon,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'alm-trucha',
    name: 'Almuerzo Trucha',
    price: 18000,
    desc: 'Trucha frita · Arroz · Papa · Bebida · Sopa',
    image: IMG.almuerzoTrucha,
    screen: 'personaliza-whopper',
    category: 'menu-almuerzo',
  },
  {
    id: 'pollo-familiar',
    name: 'Pollo Familiar',
    price: 58000,
    desc: 'Pollo familiar · Papas fritas',
    image: IMG.polloFamiliar,
    screen: 'personaliza-whopper',
    category: 'menu-pollo',
  },
  {
    id: 'pollo-grillet',
    name: 'Pollo Grillet o Chuleta',
    price: 29000,
    desc: 'Papas fritas · Arroz · Ensalada',
    image: IMG.polloGrillet,
    screen: 'personaliza-whopper',
    category: 'menu-pollo',
  },
  {
    id: 'bandeja-broaster',
    name: 'Bandeja Broaster',
    price: 20000,
    desc: 'Dos presas · Ensalada · Arroz · Papa francesa',
    image: IMG.bandejaBroaster,
    screen: 'personaliza-whopper',
    category: 'menu-pollo',
  },
  {
    id: 'arroz-pollo',
    name: 'Arroz con Pollo',
    price: 24000,
    desc: 'Papas fritas · Rodajas de tomate',
    image: IMG.arrozPollo,
    screen: 'personaliza-whopper',
    category: 'menu-pollo',
  },
  {
    id: 'steak-mixto-1',
    name: 'Steak Mixto 1',
    price: 22100,
    desc: 'Carne de res · Pollo a la plancha',
    image: IMG.steakMixto,
    screen: 'personaliza-whopper',
    category: 'menu-carne',
  },
  {
    id: 'churrasco',
    name: 'Churrasco',
    price: 30700,
    desc: 'Carne · Acompañamientos de la casa',
    image: IMG.churrasco,
    screen: 'personaliza-whopper',
    category: 'menu-carne',
  },
  {
    id: 'steak-mixto-2',
    name: 'Steak Mixto 2',
    price: 22100,
    desc: 'Carne de res · Cerdo a la plancha',
    image: IMG.steakMixto2,
    screen: 'personaliza-whopper',
    category: 'menu-carne',
  },
  {
    id: 'filete-pescado',
    name: 'Filete Pescado',
    price: 30700,
    desc: 'Basa apanada · Salsa tártara · Arroz · Papa · Ensalada',
    image: IMG.filetePescado,
    screen: 'personaliza-whopper',
    category: 'menu-pescado',
  },
  {
    id: 'trucha-arcoiris',
    name: 'Trucha Arco Iris',
    price: 30000,
    desc: 'Apanada o frita · Salsa tártara · Arroz · Papa · Ensalada',
    image: IMG.trucha,
    screen: 'personaliza-whopper',
    category: 'menu-pescado',
  },
  {
    id: 'jugos',
    name: 'Jugos en Agua',
    price: 6500,
    desc: 'Mora · Mango · Fresa · Maracuyá',
    image: IMG.jugos,
    screen: 'personaliza-whopper',
    category: 'menu-bebidas',
  },
  {
    id: 'gaseosas',
    name: 'Gaseosas 300 c.c',
    price: 3000,
    desc: 'Postobón · Coca-Cola · Sprite · Colombiana',
    image: IMG.gaseosas,
    screen: 'personaliza-whopper',
    category: 'menu-bebidas',
  },
];

export function productsForScreen(screenId: string): DeskProduct[] {
  if (screenId === 'menu' || screenId === 'menu-burgers-00' || screenId === 'menu-hamburguesas') {
    return PRODUCTS.filter((p) => p.category === 'menu-burgers');
  }
  return PRODUCTS.filter((p) => p.category === screenId);
}

export function productByScreen(screenId: string): DeskProduct | undefined {
  const exact = PRODUCTS.find((p) => p.screen === screenId);
  if (exact) return exact;
  if (screenId.includes('texana') || screenId.includes('terreno')) {
    return PRODUCTS.find((p) => p.id === 'texana') ?? PRODUCTS.find((p) => p.id === 'todo-terreno');
  }
  return PRODUCTS.find((p) => p.id === 'whopper');
}

/** Imagen grande de detalle según pantalla. */
export function detailImageFor(screenId: string, fallback: string): string {
  if (screenId.includes('texana')) return IMG.texana;
  if (screenId.startsWith('personaliza-whopper')) return IMG.whopperDetail;
  return fallback;
}
