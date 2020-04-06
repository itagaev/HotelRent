import { HotelItemShape } from "./Hotels";

export const hotels: HotelItemShape[] = [
  {
    id: 1,
    city: "Алматы",
    name: "Казахстан",
    stars: 4,
    desc: "Гостиница в центре города с отличным видом на горы! 850м от цетра",
    rating: 8.9,
    maxPlace: 4,
    hasPlace: true,
    price: {
      1: 15000,
      2: 20000,
      3: 35000,
      4: 60000,
    },
    advantages: ["бесплатный завтрак", "онлайн-оплата"],
    disadvantages: ["предоплата"],
    favorite: false,
    imgLink:
      "https://r-cf.bstatic.com/xdata/images/hotel/square220/16723416.webp?k=10a4c7adfe60342b3e5a91e75a59290b1f0f62fb5cec350b3c83865776359c86&o=",
    contacts: "+7-747-909-7212",
  },
  {
    id: 2,
    city: "Алматы",
    name: "Отель Алматы",
    stars: 3,
    desc:
      "Гостиница «Алматы» расположена в центре города Алматы. К услугам гостей ресторан, сауна и массажный кабинет. Стойка регистрации работает круглосуточно. Предоставляется бесплатный Wi-Fi.",
    rating: 8.5,
    maxPlace: 3,
    hasPlace: true,
    price: {
      1: 10000,
      2: 15000,
      3: 25000,
    },
    advantages: ["онлайн-оплата"],
    disadvantages: [],
    favorite: false,
    imgLink:
      "https://r-cf.bstatic.com/xdata/images/hotel/square220/153056764.webp?k=87573493ae417164c2b23cbcad17604a23e9e5c9d0cd034c9aba6f99a4650493&o=",
    contacts: "+7-747-853-8636",
  },
  {
    id: 3,
    city: "Нур-Султан",
    name: "Gokai Hotel",
    stars: 3,
    desc:
      "Отель Gokai расположен в районе Нур-Султан, в 5 км от монумента Байтерек. К услугам гостей бар, бесплатная частная парковка и общий лаундж.",
    rating: 8.7,
    maxPlace: 2,
    hasPlace: true,
    price: {
      1: 10000,
      2: 15000,
    },
    advantages: [],
    disadvantages: [],
    favorite: false,
    imgLink:
      "https://q-cf.bstatic.com/xdata/images/hotel/square220/211331834.webp?k=7735c228aee3618d2107b58211f267bf71236626a6b9db1f29463fe4d5d48401&o=",
    contacts: "+7-747-853-8636",
  },
];
