import { PairingSection, Wine, Winery } from "./types";

const now = Date.now();

export const seedWineries: Winery[] = [
  {
    "id": "w-alianta-vin",
    "name": "Alianta-Vin",
    "region": "Stefan Voda",
    "city": "Stefan Voda",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.3,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-asconi-winery",
    "name": "Asconi Winery",
    "region": "Valul lui Traian",
    "city": "Puhoi",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.5,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-basavin-winery",
    "name": "Basavin Winery",
    "region": "Valul lui Traian",
    "city": "Bascalia",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.4,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-bostavan",
    "name": "Bostavan",
    "region": "Codru",
    "city": "Calarasi",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.2,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-carlevana-winery",
    "name": "Carlevana Winery",
    "region": "Stefan Voda",
    "city": "Mereni",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$$",
    "rating": 4.5,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-castel-mimi",
    "name": "Castel Mimi",
    "region": "Codru",
    "city": "Bulboaca",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$$",
    "rating": 4.8,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-chateau-cojusna",
    "name": "Chateau Cojusna",
    "region": "Codru",
    "city": "Cojusna",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.3,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-chateau-purcari",
    "name": "Chateau Purcari",
    "region": "Stefan Voda",
    "city": "Purcari",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$$",
    "rating": 4.9,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-chateau-vartely",
    "name": "Chateau Vartely",
    "region": "Codru",
    "city": "Orhei",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.7,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-cricova",
    "name": "Cricova",
    "region": "Codru",
    "city": "Cricova",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.8,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-et-cetera",
    "name": "Et Cetera",
    "region": "Stefan Voda",
    "city": "Crocmaz",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$$",
    "rating": 4.7,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-etcetera",
    "name": "Et Cetera",
    "region": "Stefan Voda",
    "city": "Crocmaz",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$$",
    "rating": 4.7,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-fautor-winery",
    "name": "Fautor Winery",
    "region": "Valul lui Traian",
    "city": "Tigheci",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$$",
    "rating": 4.8,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-kazayak",
    "name": "Kazayak",
    "region": "Stefan Voda",
    "city": "Tudora",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.3,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-milestii-mici",
    "name": "Milestii Mici",
    "region": "Codru",
    "city": "Ialoveni",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.6,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-radacini",
    "name": "Radacini",
    "region": "Codru",
    "city": "Cricova",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.5,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-taraclia-winery",
    "name": "Taraclia Winery",
    "region": "Valul lui Traian",
    "city": "Taraclia",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.2,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "w-vinaria-din-vale",
    "name": "Vinaria din Vale",
    "region": "Valul lui Traian",
    "city": "Taraclia",
    "description": "Verified Moldovan winery from research dataset.",
    "priceLevel": "$$",
    "rating": 4.4,
    "liked": false,
    "createdAt": now,
    "updatedAt": now
  }
];

export const seedWines: Wine[] = [
  {
    "id": "wine-alianta-vin-alianta-vin-cabernet-barique",
    "wineryId": "w-alianta-vin",
    "name": "Cabernet Barique",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-cabernet-barique.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-chardonnay-barique",
    "wineryId": "w-alianta-vin",
    "name": "Chardonnay Barique",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-chardonnay-barique.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-feteasca-regala",
    "wineryId": "w-alianta-vin",
    "name": "Feteasca Regala",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-feteasca-regala.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-merlot-barique",
    "wineryId": "w-alianta-vin",
    "name": "Merlot Barique",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-merlot-barique.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-merlot-blend",
    "wineryId": "w-alianta-vin",
    "name": "Merlot Blend",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-merlot-blend.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-merlot",
    "wineryId": "w-alianta-vin",
    "name": "Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-merlot.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-rose",
    "wineryId": "w-alianta-vin",
    "name": "Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-rose.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-alianta-vin-alianta-vin-viorica",
    "wineryId": "w-alianta-vin",
    "name": "Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/alianta-vin-alianta-vin-viorica.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-june-chardonnay",
    "wineryId": "w-asconi-winery",
    "name": "Asconi June Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-june-chardonnay.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-uneori-merlot",
    "wineryId": "w-asconi-winery",
    "name": "Asconi Uneori Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-uneori-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-ancellotta",
    "wineryId": "w-asconi-winery",
    "name": "Ancellotta",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-ancellotta.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-casa-felina-muscat-sauvignon-blanc",
    "wineryId": "w-asconi-winery",
    "name": "Casa Felina Muscat Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-casa-felina-muscat-sauvignon-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-casa-felina-sauvignon-blanc-feteasca-alba",
    "wineryId": "w-asconi-winery",
    "name": "Casa Felina Sauvignon Blanc Feteasca Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-casa-felina-sauvignon-blanc-feteasca-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-gold-merlot-roz",
    "wineryId": "w-asconi-winery",
    "name": "Gold Merlot Roz",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-gold-merlot-roz.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-gold-muscat",
    "wineryId": "w-asconi-winery",
    "name": "Gold Muscat",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-gold-muscat.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-ice-wine-traminer",
    "wineryId": "w-asconi-winery",
    "name": "Ice Wine Traminer",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-ice-wine-traminer.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-noble",
    "wineryId": "w-asconi-winery",
    "name": "Noble",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 250,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-noble.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-rezerva-rara-neagra-merlot",
    "wineryId": "w-asconi-winery",
    "name": "Rezerva Rara Neagra Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-rezerva-rara-neagra-merlot.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-saperavi",
    "wineryId": "w-asconi-winery",
    "name": "Saperavi",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-saperavi.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-cabernet-sauvignon-rose",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Cabernet Sauvignon Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-cabernet-sauvignon-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-chardonnay",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 250,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-feteasca-alba",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Feteasca Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 250,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-feteasca-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-feteasca-neagra",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-merlot",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 250,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-merlot.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-rara-neagra",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-rara-neagra.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-sauvignon-blanc",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-sauvignon-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-sol-negru-viorica",
    "wineryId": "w-asconi-winery",
    "name": "Sol Negru Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-sol-negru-viorica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-asconi-winery-asconi-winery-uneori-moscato-rose",
    "wineryId": "w-asconi-winery",
    "name": "Uneori Moscato Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/asconi-winery-asconi-winery-uneori-moscato-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-albernet",
    "wineryId": "w-basavin-winery",
    "name": "Basavin Albernet",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-albernet.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-chateau-du-basavines-cabernet-sauvignon",
    "wineryId": "w-basavin-winery",
    "name": "Basavin Chateau du Basavines Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-chateau-du-basavines-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-madam-rose",
    "wineryId": "w-basavin-winery",
    "name": "Basavin Madam Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-madam-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-muscat-spumant-rose-dulce",
    "wineryId": "w-basavin-winery",
    "name": "Basavin Muscat Spumant Rose Dulce",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Valul lui Traian",
    "body": "light",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-muscat-spumant-rose-dulce.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-pinot-grigio-alb-brut",
    "wineryId": "w-basavin-winery",
    "name": "Basavin Pinot Grigio Alb Brut",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-pinot-grigio-alb-brut.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-pinot-grigio-spumant-rose-brut",
    "wineryId": "w-basavin-winery",
    "name": "Basavin Pinot Grigio Spumant Rose Brut",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-pinot-grigio-spumant-rose-brut.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-argilos-rosu",
    "wineryId": "w-basavin-winery",
    "name": "Argilos Rosu",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-argilos-rosu.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-argilos-verde",
    "wineryId": "w-basavin-winery",
    "name": "Argilos Verde",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-argilos-verde.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-optimist-feteasca-neagra-rara-neagra-shiraz",
    "wineryId": "w-basavin-winery",
    "name": "Optimist Feteasca Neagra Rara Neagra Shiraz",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-optimist-feteasca-neagra-rara-neagra-shiraz.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-orange",
    "wineryId": "w-basavin-winery",
    "name": "Orange",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-orange.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-rara-neagra",
    "wineryId": "w-basavin-winery",
    "name": "Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-romanovca-marsala-style",
    "wineryId": "w-basavin-winery",
    "name": "Romanovca Marsala Style",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-romanovca-marsala-style.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-basavin-winery-basavin-winery-trei-fete-feteasca-regala-feteasca-alba-feteasca-neagra",
    "wineryId": "w-basavin-winery",
    "name": "Trei Fete Feteasca Regala Feteasca Alba Feteasca Neagra",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/basavin-winery-basavin-winery-trei-fete-feteasca-regala-feteasca-alba-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-black-doktor-dry-red",
    "wineryId": "w-bostavan",
    "name": "Black Doktor Dry Red",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/bostavan-black-doktor-dry-red.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-bostavan-black-doktor",
    "wineryId": "w-bostavan",
    "name": "Black Doktor",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/bostavan-bostavan-black-doktor.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-bostavan-floare-de-dor",
    "wineryId": "w-bostavan",
    "name": "Floare de Dor",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/bostavan-bostavan-floare-de-dor.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-dor-brut-alb",
    "wineryId": "w-bostavan",
    "name": "Dor Brut Alb",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Codru",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/bostavan-dor-brut-alb.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-dor-brut-rose",
    "wineryId": "w-bostavan",
    "name": "Dor Brut Rose",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/bostavan-dor-brut-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-dor-reserve-cabernet-sauvignon",
    "wineryId": "w-bostavan",
    "name": "Dor Reserve Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/bostavan-dor-reserve-cabernet-sauvignon.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-dor-reserve-chardonnay",
    "wineryId": "w-bostavan",
    "name": "Dor Reserve Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/bostavan-dor-reserve-chardonnay.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-dor-reserve-merlot",
    "wineryId": "w-bostavan",
    "name": "Dor Reserve Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/bostavan-dor-reserve-merlot.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-ed-knows-chardonnay",
    "wineryId": "w-bostavan",
    "name": "ed Knows Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 90,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/bostavan-ed-knows-chardonnay.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-ed-knows-sauvignon-blanc",
    "wineryId": "w-bostavan",
    "name": "ed Knows Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/bostavan-ed-knows-sauvignon-blanc.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-bostavan-white-doktor-dry-white",
    "wineryId": "w-bostavan",
    "name": "White Doktor Dry White",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/bostavan-white-doktor-dry-white.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-colectie-lupu-cabernet-sauvignon-2003",
    "wineryId": "w-carlevana",
    "name": "Colectie Lupu Cabernet Sauvignon 2003",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-colectie-lupu-cabernet-sauvignon-2003.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-kosher-cabernet-sauvignon",
    "wineryId": "w-carlevana",
    "name": "Kosher Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-kosher-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-kosher-malbec-merlot",
    "wineryId": "w-carlevana",
    "name": "Kosher Malbec Merlot",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-kosher-malbec-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-kosher-merlot",
    "wineryId": "w-carlevana",
    "name": "Kosher Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-kosher-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-kosher-pinot-noir",
    "wineryId": "w-carlevana",
    "name": "Kosher Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 260,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-kosher-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-port-mereni-2005",
    "wineryId": "w-carlevana",
    "name": "Port Mereni 2005",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-port-mereni-2005.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-raritet-cuvee-blanc",
    "wineryId": "w-carlevana",
    "name": "Raritet Cuvee Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-raritet-cuvee-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-renaissance-chardonnay",
    "wineryId": "w-carlevana",
    "name": "Renaissance Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-renaissance-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-auriu-1989",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Auriu 1989",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-auriu-1989.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-dnestrovscoe-1977",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Dnestrovscoe 1977",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-dnestrovscoe-1977.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-lupu",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Lupu",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-lupu.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-pastoral",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Pastoral",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-pastoral.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-renaissance-rose",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Renaissance Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-renaissance-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-renaissance-shiraz",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Renaissance Shiraz",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-renaissance-shiraz.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-villa-danastris-cabernet-sauvignon",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Villa Danastris Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-villa-danastris-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-villa-danastris-rara-neagra",
    "wineryId": "w-carlevana-winery",
    "name": "Carlevana Villa Danastris Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-villa-danastris-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-winery-alb-de-mereni",
    "wineryId": "w-carlevana-winery",
    "name": "Alb de Mereni",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-winery-alb-de-mereni.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-winery-black-raven",
    "wineryId": "w-carlevana-winery",
    "name": "Black Raven",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-winery-black-raven.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-winery-raritet-orange",
    "wineryId": "w-carlevana-winery",
    "name": "Raritet Orange",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 410,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-winery-raritet-orange.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-winery-raritet-viorica",
    "wineryId": "w-carlevana-winery",
    "name": "Raritet Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 410,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-winery-raritet-viorica.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-carlevana-winery-carlevana-winery-rubinus",
    "wineryId": "w-carlevana-winery",
    "name": "Rubinus",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/carlevana-winery-carlevana-winery-rubinus.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-cabernet-sauvignon-limited",
    "wineryId": "w-castel-mimi",
    "name": "Cabernet Sauvignon Limited",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 490,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-cabernet-sauvignon-limited.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-cucoanele",
    "wineryId": "w-castel-mimi",
    "name": "Cucoanele",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-cucoanele.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-first-lady-ros",
    "wineryId": "w-castel-mimi",
    "name": "First Lady Ros",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-first-lady-ros.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-fudul-vin-alb-sec",
    "wineryId": "w-castel-mimi",
    "name": "Fudul Vin Alb Sec",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-fudul-vin-alb-sec.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-governor-feteasca-neagra",
    "wineryId": "w-castel-mimi",
    "name": "Governor Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 500,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-governor-feteasca-neagra.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-ice-wine-riesling",
    "wineryId": "w-castel-mimi",
    "name": "Ice Wine Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 490,
    "region": "Codru",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-ice-wine-riesling.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-isterie",
    "wineryId": "w-castel-mimi",
    "name": "Isterie",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-isterie.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-late-harvest-riesling-viorica",
    "wineryId": "w-castel-mimi",
    "name": "Late Harvest Riesling Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-late-harvest-riesling-viorica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-orange-chardonnay",
    "wineryId": "w-castel-mimi",
    "name": "Orange Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-orange-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-orange-de-bulboaca",
    "wineryId": "w-castel-mimi",
    "name": "Orange de Bulboaca",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-orange-de-bulboaca.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-rose-de-bulboaca",
    "wineryId": "w-castel-mimi",
    "name": "Rose de Bulboaca",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-rose-de-bulboaca.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-rose-rara-neagra",
    "wineryId": "w-castel-mimi",
    "name": "Rose Rara Neagra",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-rose-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-rosu-de-bulboaca",
    "wineryId": "w-castel-mimi",
    "name": "Rosu de Bulboaca",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-rosu-de-bulboaca.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-sanzienele",
    "wineryId": "w-castel-mimi",
    "name": "Sanzienele",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-sanzienele.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-sf-ditele",
    "wineryId": "w-castel-mimi",
    "name": "sf Ditele",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-sf-ditele.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-the-governor-s-blend-in-cutie",
    "wineryId": "w-castel-mimi",
    "name": "The Governor s Blend in Cutie",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 500,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-the-governor-s-blend-in-cutie.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-the-governor-s-blend",
    "wineryId": "w-castel-mimi",
    "name": "The Governor s Blend",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 490,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-the-governor-s-blend.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-castel-mimi-the-governor-s-chardonnay-riesling",
    "wineryId": "w-castel-mimi",
    "name": "The Governor s Chardonnay Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 500,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/castel-mimi-castel-mimi-the-governor-s-chardonnay-riesling.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-mimi-red-dreams-animaliens-wines",
    "wineryId": "w-castel-mimi",
    "name": "Mimi Red Dreams Animaliens Wines",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 500,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/castel-mimi-mimi-red-dreams-animaliens-wines.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castel-mimi-mimi-rose-dreams-animaliens-wines",
    "wineryId": "w-castel-mimi",
    "name": "Mimi Rose Dreams Animaliens Wines",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 490,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/castel-mimi-mimi-rose-dreams-animaliens-wines.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castelmimi-diva-extra-brut-alb",
    "wineryId": "w-castelmimi",
    "name": "Diva Extra Brut Alb",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 490,
    "region": "Codru",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/castelmimi-diva-extra-brut-alb.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-castelmimi-diva-extra-brut-rose",
    "wineryId": "w-castelmimi",
    "name": "Diva Extra Brut Rose",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 490,
    "region": "Codru",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/castelmimi-diva-extra-brut-rose.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-cabernet-sauvignon-feteasc-neagr",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Cabernet Sauvignon Feteasc Neagr",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-cabernet-sauvignon-feteasc-neagr.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-cabernet-sauvignon-merlot",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Cabernet Sauvignon Merlot",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-cabernet-sauvignon-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-cabernet-sauvignon-pinot-noir",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Cabernet Sauvignon Pinot Noir",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-cabernet-sauvignon-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-chardonnay-feteasc-alba",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Chardonnay Feteasc Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-chardonnay-feteasc-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-chardonnay-sauvignon-blanc",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Chardonnay Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-chardonnay-sauvignon-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-merlot-feteasca-neagra",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Merlot Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-merlot-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-autentic-sauvignon-blanc-floricica",
    "wineryId": "w-chateau-cojusna",
    "name": "Autentic Sauvignon Blanc Floricica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-autentic-sauvignon-blanc-floricica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-enigma",
    "wineryId": "w-chateau-cojusna",
    "name": "Enigma",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-enigma.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-piatra-alba",
    "wineryId": "w-chateau-cojusna",
    "name": "Piatra Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-piatra-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-piatra-neagra",
    "wineryId": "w-chateau-cojusna",
    "name": "Piatra Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-piatra-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-piatra-rosie",
    "wineryId": "w-chateau-cojusna",
    "name": "Piatra Rosie",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-piatra-rosie.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-vin-de-colec-ie-auriu-1999",
    "wineryId": "w-chateau-cojusna",
    "name": "Vin de Colec ie Auriu 1999",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-vin-de-colec-ie-auriu-1999.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-vin-de-colec-ie-cabernet-sauvignon-2005",
    "wineryId": "w-chateau-cojusna",
    "name": "Vin de Colec ie Cabernet Sauvignon 2005",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-vin-de-colec-ie-cabernet-sauvignon-2005.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-vin-de-colec-ie-gratie-ti-1999",
    "wineryId": "w-chateau-cojusna",
    "name": "Vin de Colec ie Gratie ti 1999",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-vin-de-colec-ie-gratie-ti-1999.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-vin-de-colec-ie-madras-1990",
    "wineryId": "w-chateau-cojusna",
    "name": "Vin de Colec ie Madras 1990",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-vin-de-colec-ie-madras-1990.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-vin-de-colec-ie-muscat-2002",
    "wineryId": "w-chateau-cojusna",
    "name": "Vin de Colec ie Muscat 2002",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 130,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-vin-de-colec-ie-muscat-2002.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-cojusna-chateau-cojusna-vin-de-colec-ie-pastoral-2001",
    "wineryId": "w-chateau-cojusna",
    "name": "Vin de Colec ie Pastoral 2001",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Codru",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-cojusna-chateau-cojusna-vin-de-colec-ie-pastoral-2001.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-academia-purcari-feteasca-neagra",
    "wineryId": "w-chateau-purcari",
    "name": "Academia Purcari Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-academia-purcari-feteasca-neagra.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-academia-purcari-viorica",
    "wineryId": "w-chateau-purcari",
    "name": "Academia Purcari Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-academia-purcari-viorica.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-cuvee-de-purcari-adamant",
    "wineryId": "w-chateau-purcari",
    "name": "Cuvee de Purcari Adamant",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 600,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-cuvee-de-purcari-adamant.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-cuvee-de-purcari-brut",
    "wineryId": "w-chateau-purcari",
    "name": "Cuvee de Purcari Brut",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 610,
    "region": "Stefan Voda",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/chateau-purcari-cuvee-de-purcari-brut.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-pinot-noir-de-purcari-limited-edition",
    "wineryId": "w-chateau-purcari",
    "name": "Pinot Noir de Purcari Limited Edition",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 610,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-pinot-noir-de-purcari-limited-edition.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-alb-de-purcari",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Alb de Purcari",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 600,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-alb-de-purcari.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-cabernet-sauvignon",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-feteasca-neagra",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-floricica",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Floricica",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-floricica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-grand-vintage",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Grand Vintage",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 600,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-grand-vintage.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-malbec-de-purcari",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Malbec de Purcari",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-malbec-de-purcari.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-orange",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Orange",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-orange.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-ro-u-de-purcari",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari ro u de Purcari",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-ro-u-de-purcari.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-sapiens-orange",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Sapiens Orange",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-sapiens-orange.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-sapiens-rara-neagra",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Sapiens Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-sapiens-rara-neagra.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-sapiens-rose",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Sapiens Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-sapiens-rose.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-shiraz",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Shiraz",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-shiraz.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-vinohora-roze",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Vinohora Roze",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 280,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-vinohora-roze.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-purcari-purcari-viorica-muscat-ottonel",
    "wineryId": "w-chateau-purcari",
    "name": "Purcari Viorica Muscat Ottonel",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 270,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-purcari-purcari-viorica-muscat-ottonel.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-alb-brut-methode-classique",
    "wineryId": "w-chateau-vartely",
    "name": "Alb Brut Methode Classique",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-alb-brut-methode-classique.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-feteasca-regala",
    "wineryId": "w-chateau-vartely",
    "name": "Feteasca Regala",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-feteasca-regala.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-ice-wine-riesling",
    "wineryId": "w-chateau-vartely",
    "name": "Ice Wine Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 900,
    "region": "Codru",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-ice-wine-riesling.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-individo-feteasca-neagra-rara-neagra",
    "wineryId": "w-chateau-vartely",
    "name": "Individo Feteasca Neagra Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-individo-feteasca-neagra-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-individo-feteasca-regala-riesling",
    "wineryId": "w-chateau-vartely",
    "name": "Individo Feteasca Regala Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-individo-feteasca-regala-riesling.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-individo-malbec-shiraz-rose",
    "wineryId": "w-chateau-vartely",
    "name": "Individo Malbec Shiraz Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-individo-malbec-shiraz-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-individo-pinot-grigio-chardonay",
    "wineryId": "w-chateau-vartely",
    "name": "Individo Pinot Grigio Chardonay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-individo-pinot-grigio-chardonay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-individo-rara-neagra-malbec-shyrah",
    "wineryId": "w-chateau-vartely",
    "name": "Individo Rara Neagra Malbec Shyrah",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-individo-rara-neagra-malbec-shyrah.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-individo-rose-rara-neagra",
    "wineryId": "w-chateau-vartely",
    "name": "Individo Rose Rara Neagra",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-individo-rose-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-taraboste-chardonnay",
    "wineryId": "w-chateau-vartely",
    "name": "Taraboste Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-taraboste-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-taraboste-pur-aristocratic",
    "wineryId": "w-chateau-vartely",
    "name": "Taraboste Pur Aristocratic",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-taraboste-pur-aristocratic.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-tribut-cabernet-sauvignon",
    "wineryId": "w-chateau-vartely",
    "name": "Tribut Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-tribut-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-chateau-vartely-chateau-vartely-tribut-saperavi",
    "wineryId": "w-chateau-vartely",
    "name": "Tribut Saperavi",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/chateau-vartely-chateau-vartely-tribut-saperavi.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-amplius",
    "wineryId": "w-cricova",
    "name": "Amplius",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-amplius.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-elogiu-7-soiuri",
    "wineryId": "w-cricova",
    "name": "Elogiu 7 Soiuri",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-elogiu-7-soiuri.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-elogiu-chardonnay",
    "wineryId": "w-cricova",
    "name": "Elogiu Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/cricova-cricova-elogiu-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-ice-wine-muscat",
    "wineryId": "w-cricova",
    "name": "Ice Wine Muscat",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/cricova-cricova-ice-wine-muscat.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-limited-edition-cabernet-sauvignon",
    "wineryId": "w-cricova",
    "name": "Limited Edition Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/cricova-cricova-limited-edition-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-limited-edition-feteasca-alba",
    "wineryId": "w-cricova",
    "name": "Limited Edition Feteasca Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/cricova-cricova-limited-edition-feteasca-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-limited-edition-pinot-noir",
    "wineryId": "w-cricova",
    "name": "Limited Edition Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-limited-edition-pinot-noir.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-limited-edition-rose-rara-neagra",
    "wineryId": "w-cricova",
    "name": "Limited Edition Rose Rara Neagra",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/cricova-cricova-limited-edition-rose-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-limited-edition-viorica",
    "wineryId": "w-cricova",
    "name": "Limited Edition Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/cricova-cricova-limited-edition-viorica.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-orasul-subteran-cabernet-sauvignon-rose",
    "wineryId": "w-cricova",
    "name": "Orasul Subteran Cabernet Sauvignon Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/cricova-cricova-orasul-subteran-cabernet-sauvignon-rose.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-orasul-subteran-feteasca-neagra",
    "wineryId": "w-cricova",
    "name": "Orasul Subteran Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-orasul-subteran-feteasca-neagra.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-patriarh-vin-licoros",
    "wineryId": "w-cricova",
    "name": "Patriarh Vin Licoros",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Codru",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-patriarh-vin-licoros.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-prestige-codru",
    "wineryId": "w-cricova",
    "name": "Prestige Codru",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-prestige-codru.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-red-blend-1952",
    "wineryId": "w-cricova",
    "name": "Red Blend 1952",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-red-blend-1952.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-rose-blend-1952",
    "wineryId": "w-cricova",
    "name": "Rose Blend 1952",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 300,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/cricova-cricova-rose-blend-1952.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-tatius-licoros",
    "wineryId": "w-cricova",
    "name": "Tatius Licoros",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Codru",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-tatius-licoros.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-white-blend-1952",
    "wineryId": "w-cricova",
    "name": "White Blend 1952",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-white-blend-1952.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-wild-feteasc-neagr-rose",
    "wineryId": "w-cricova",
    "name": "Wild Feteasc Neagr Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/cricova-cricova-wild-feteasc-neagr-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-cricova-wild-feteasc-regal",
    "wineryId": "w-cricova",
    "name": "Wild Feteasc Regal",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-cricova-wild-feteasc-regal.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-cricova-vinuri-colectie-cricova-codru-vin-de-colectie-2000",
    "wineryId": "w-cricova",
    "name": "Vinuri Colectie Cricova Codru Vin de Colectie 2000",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 310,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/cricova-vinuri-colectie-cricova-codru-vin-de-colectie-2000.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-aeroplane-affinite",
    "wineryId": "w-et-cetera",
    "name": "Aeroplane Affinite",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-aeroplane-affinite.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-aeroplane-cabernet-sauvignon",
    "wineryId": "w-et-cetera",
    "name": "Aeroplane Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-aeroplane-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-aeroplane-cuvee-rouge",
    "wineryId": "w-et-cetera",
    "name": "Aeroplane Cuvee Rouge",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-aeroplane-cuvee-rouge.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-aeroplane-merlot",
    "wineryId": "w-et-cetera",
    "name": "Aeroplane Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-aeroplane-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-albarossa",
    "wineryId": "w-et-cetera",
    "name": "Albarossa",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-albarossa.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-cabernet-franc",
    "wineryId": "w-et-cetera",
    "name": "Cabernet Franc",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-cabernet-franc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-cabernet-sauvignon-2012",
    "wineryId": "w-et-cetera",
    "name": "Cabernet Sauvignon 2012",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-cabernet-sauvignon-2012.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-cabernet-sauvignon",
    "wineryId": "w-et-cetera",
    "name": "Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-carmenere",
    "wineryId": "w-et-cetera",
    "name": "Carmenere",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-carmenere.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-cuvee-rouge-2015",
    "wineryId": "w-et-cetera",
    "name": "Cuvee Rouge 2015",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 370,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-cuvee-rouge-2015.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-cuvee-rouge",
    "wineryId": "w-et-cetera",
    "name": "Cuvee Rouge",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-cuvee-rouge.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-feteasca-neagra",
    "wineryId": "w-et-cetera",
    "name": "Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-marselan",
    "wineryId": "w-et-cetera",
    "name": "Marselan",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-marselan.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-merlot-2015",
    "wineryId": "w-et-cetera",
    "name": "Merlot 2015",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-merlot-2015.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-merlot",
    "wineryId": "w-et-cetera",
    "name": "Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-nanghty-boys-magnum",
    "wineryId": "w-et-cetera",
    "name": "Nanghty Boys Magnum",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-nanghty-boys-magnum.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-naughty-boys",
    "wineryId": "w-et-cetera",
    "name": "Naughty Boys",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-naughty-boys.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-pinot-noir",
    "wineryId": "w-et-cetera",
    "name": "Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-et-cetera-et-cetera-serenity",
    "wineryId": "w-et-cetera",
    "name": "Serenity",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/et-cetera-et-cetera-serenity.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-aeroplane-merlot",
    "wineryId": "w-etcetera",
    "name": "Aeroplane Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/etcetera-aeroplane-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-cabernet-sauvignon",
    "wineryId": "w-etcetera",
    "name": "Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 230,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/etcetera-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-carmenere",
    "wineryId": "w-etcetera",
    "name": "Carmenere",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/etcetera-carmenere.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-cuvee-blanc",
    "wineryId": "w-etcetera",
    "name": "Cuvee Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/etcetera-cuvee-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-feteasca-neagra",
    "wineryId": "w-etcetera",
    "name": "Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/etcetera-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-naughty-boys",
    "wineryId": "w-etcetera",
    "name": "Naughty Boys",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/etcetera-naughty-boys.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-naughty-girls",
    "wineryId": "w-etcetera",
    "name": "Naughty Girls",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 380,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/etcetera-naughty-girls.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-pinot-noir",
    "wineryId": "w-etcetera",
    "name": "Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/etcetera-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-etcetera-spumante-rose",
    "wineryId": "w-etcetera",
    "name": "Spumante Rose",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 220,
    "region": "Stefan Voda",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/etcetera-spumante-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-310-altitudine-cabernet-feteasca-neagra",
    "wineryId": "w-fautor-winery",
    "name": "Fautor 310 Altitudine Cabernet Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-310-altitudine-cabernet-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-310-altitudine-merlot-rara-neagra",
    "wineryId": "w-fautor-winery",
    "name": "Fautor 310 Altitudine Merlot Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-310-altitudine-merlot-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-310-altitudine-pastoral",
    "wineryId": "w-fautor-winery",
    "name": "Fautor 310 Altitudine Pastoral",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-310-altitudine-pastoral.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-310-altitudine-rose-merlot-feteasca-neagra",
    "wineryId": "w-fautor-winery",
    "name": "Fautor 310 Altitudine Rose Merlot Feteasca Neagra",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-310-altitudine-rose-merlot-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-310-altitudine-sauvignon-blanc-aligote",
    "wineryId": "w-fautor-winery",
    "name": "Fautor 310 Altitudine Sauvignon Blanc Aligote",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-310-altitudine-sauvignon-blanc-aligote.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-310-altitudine-traminer-riesling",
    "wineryId": "w-fautor-winery",
    "name": "Fautor 310 Altitudine Traminer Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-310-altitudine-traminer-riesling.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-negre",
    "wineryId": "w-fautor-winery",
    "name": "Fautor Negre",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-negre.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-aurore-feteasca-neagra-tempranillo",
    "wineryId": "w-fautor-winery",
    "name": "Aurore Feteasca Neagra Tempranillo",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-aurore-feteasca-neagra-tempranillo.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-aurore-feteasca-regala",
    "wineryId": "w-fautor-winery",
    "name": "Aurore Feteasca Regala",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-aurore-feteasca-regala.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-aurore-rara-neagra",
    "wineryId": "w-fautor-winery",
    "name": "Aurore Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-aurore-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-aurore-syrah-cabernet-sauvignon",
    "wineryId": "w-fautor-winery",
    "name": "Aurore Syrah Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-aurore-syrah-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-barbaro",
    "wineryId": "w-fautor-winery",
    "name": "Barbaro",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-barbaro.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-blanca",
    "wineryId": "w-fautor-winery",
    "name": "Blanca",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-blanca.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-fume-blanc",
    "wineryId": "w-fautor-winery",
    "name": "Fume Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-fume-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-ice-wine-traminer-muscat-ottonel",
    "wineryId": "w-fautor-winery",
    "name": "Ice Wine Traminer Muscat Ottonel",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 350,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-ice-wine-traminer-muscat-ottonel.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-illustro-chardonnay-feteasca-regala-sauvignon-blanc-riesling",
    "wineryId": "w-fautor-winery",
    "name": "Illustro Chardonnay Feteasca Regala Sauvignon Blanc Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-illustro-chardonnay-feteasca-regala-sauvignon-blanc-riesling.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-orange-traminer",
    "wineryId": "w-fautor-winery",
    "name": "Orange Traminer",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-orange-traminer.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-riesling-lake-breeze",
    "wineryId": "w-fautor-winery",
    "name": "Riesling Lake Breeze",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-riesling-lake-breeze.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-tempranillo",
    "wineryId": "w-fautor-winery",
    "name": "Tempranillo",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-tempranillo.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-fautor-winery-fautor-winery-vivienne-cuvee-rose",
    "wineryId": "w-fautor-winery",
    "name": "Vivienne Cuvee Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 360,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/fautor-winery-fautor-winery-vivienne-cuvee-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-alb-de-kazayak",
    "wineryId": "w-kazayak",
    "name": "Alb de Kazayak",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-alb-de-kazayak.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-cabernet-sauvignon",
    "wineryId": "w-kazayak",
    "name": "Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-chardonnay-barique",
    "wineryId": "w-kazayak",
    "name": "Chardonnay Barique",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 290,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-chardonnay-barique.webp",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-feteasca-neagra",
    "wineryId": "w-kazayak",
    "name": "Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-feteasca-regala",
    "wineryId": "w-kazayak",
    "name": "Feteasca Regala",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-feteasca-regala.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-malbec",
    "wineryId": "w-kazayak",
    "name": "Malbec",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-malbec.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-merlot-rose",
    "wineryId": "w-kazayak",
    "name": "Merlot Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-merlot-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-merlot",
    "wineryId": "w-kazayak",
    "name": "Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-negru-de-kazayak",
    "wineryId": "w-kazayak",
    "name": "Negru de Kazayak",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-negru-de-kazayak.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-riton-sauvignon-blanc",
    "wineryId": "w-kazayak",
    "name": "Riton Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-riton-sauvignon-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-rose-de-kazayak",
    "wineryId": "w-kazayak",
    "name": "Rose de Kazayak",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-rose-de-kazayak.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-rosu-de-kazayk",
    "wineryId": "w-kazayak",
    "name": "Rosu de Kazayk",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 180,
    "region": "Stefan Voda",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-rosu-de-kazayk.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-kazayak-kazayak-viorica",
    "wineryId": "w-kazayak",
    "name": "Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 190,
    "region": "Stefan Voda",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/kazayak-kazayak-viorica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-mile-tii-mici-negru-1988",
    "wineryId": "w-milestii-mici",
    "name": "Mile Tii Mici Negru 1988",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-mile-tii-mici-negru-1988.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-mile-tii-mici-ro-u-1987",
    "wineryId": "w-milestii-mici",
    "name": "Mile Tii Mici ro u 1987",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 850,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-mile-tii-mici-ro-u-1987.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-milestii-mici-auriu-1986",
    "wineryId": "w-milestii-mici",
    "name": "Auriu 1986",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 840,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-milestii-mici-auriu-1986.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-milestii-mici-chardonnay",
    "wineryId": "w-milestii-mici",
    "name": "Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/milestii-mici-milestii-mici-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-milestii-mici-muscat-2014",
    "wineryId": "w-milestii-mici",
    "name": "Muscat 2014",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 170,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/milestii-mici-milestii-mici-muscat-2014.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-milestii-mici-purpuriu-de-purcari",
    "wineryId": "w-milestii-mici",
    "name": "Purpuriu de Purcari",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-milestii-mici-purpuriu-de-purcari.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-milestii-mici-sauvignon",
    "wineryId": "w-milestii-mici",
    "name": "Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/milestii-mici-milestii-mici-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-moldova-de-lux-alb-dulce",
    "wineryId": "w-milestii-mici",
    "name": "Moldova de Lux Alb Dulce",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 160,
    "region": "Codru",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/milestii-mici-moldova-de-lux-alb-dulce.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-vinuri-colectie-mile-tii-mici-codru-1987",
    "wineryId": "w-milestii-mici",
    "name": "Vinuri Colectie Mile Tii Mici Codru 1987",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 840,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-vinuri-colectie-mile-tii-mici-codru-1987.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-vinuri-colectie-milestii-mici-cabernet-sauvignon",
    "wineryId": "w-milestii-mici",
    "name": "Vinuri Colectie Milestii Mici Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 840,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/milestii-mici-vinuri-colectie-milestii-mici-cabernet-sauvignon.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-vinuri-colectie-milestii-mici-gratiesti-1986",
    "wineryId": "w-milestii-mici",
    "name": "Vinuri Colectie Milestii Mici Gratiesti 1986",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 850,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-vinuri-colectie-milestii-mici-gratiesti-1986.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-vinuri-colectie-milestii-mici-pastoral-1986",
    "wineryId": "w-milestii-mici",
    "name": "Vinuri Colectie Milestii Mici Pastoral 1986",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 850,
    "region": "Codru",
    "body": "full",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-vinuri-colectie-milestii-mici-pastoral-1986.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-milestii-mici-vinuri-colectie-milestii-mici-trandafirul-moldovei",
    "wineryId": "w-milestii-mici",
    "name": "Vinuri Colectie Milestii Mici Trandafirul Moldovei",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 840,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/milestii-mici-vinuri-colectie-milestii-mici-trandafirul-moldovei.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-ampre-alb-viorica-riesling-chardonnay",
    "wineryId": "w-radacini",
    "name": "Ampre Alb Viorica Riesling Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-ampre-alb-viorica-riesling-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-ampre-rose",
    "wineryId": "w-radacini",
    "name": "Ampre Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/radacini-ampre-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-ampre-rosu-rara-neagra-merlot-saperavi",
    "wineryId": "w-radacini",
    "name": "Ampre Rosu Rara Neagra Merlot Saperavi",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-ampre-rosu-rara-neagra-merlot-saperavi.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-ampre-rosu-saperavi-feteasca-neagra-merlot",
    "wineryId": "w-radacini",
    "name": "Ampre Rosu Saperavi Feteasca Neagra Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-ampre-rosu-saperavi-feteasca-neagra-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-cuvee-muscat-dulce-alb",
    "wineryId": "w-radacini",
    "name": "Cuvee Muscat Dulce Alb",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Codru",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-cuvee-muscat-dulce-alb.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-fiori-feteasca-alba",
    "wineryId": "w-radacini",
    "name": "Fiori Feteasca Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-fiori-feteasca-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-fiori-feteasca-neagra-syrah",
    "wineryId": "w-radacini",
    "name": "Fiori Feteasca Neagra Syrah",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-fiori-feteasca-neagra-syrah.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-fiori-feteasca-neagra",
    "wineryId": "w-radacini",
    "name": "Fiori Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-fiori-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-fiori-viorica",
    "wineryId": "w-radacini",
    "name": "Fiori Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-fiori-viorica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-ampre-feteasca-neagra-merlot-pinot-noir-rose",
    "wineryId": "w-radacini",
    "name": "Ampre Feteasca Neagra Merlot Pinot Noir Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/radacini-radacini-ampre-feteasca-neagra-merlot-pinot-noir-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-ampre-rara-neagra-merlot-saperavi",
    "wineryId": "w-radacini",
    "name": "Ampre Rara Neagra Merlot Saperavi",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-ampre-rara-neagra-merlot-saperavi.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-ampre-saperavi-feteasca-neagr-merlot",
    "wineryId": "w-radacini",
    "name": "Ampre Saperavi Feteasca Neagr Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-ampre-saperavi-feteasca-neagr-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-ampre-viorica-riesling-chardonnay",
    "wineryId": "w-radacini",
    "name": "Ampre Viorica Riesling Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-ampre-viorica-riesling-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-fiori-rara-neagra",
    "wineryId": "w-radacini",
    "name": "Fiori Rara Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-fiori-rara-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-fiori-viorica",
    "wineryId": "w-radacini",
    "name": "Fiori Viorica",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-fiori-viorica.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-ice-wine-riesling",
    "wineryId": "w-radacini",
    "name": "Ice Wine Riesling",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "medium",
    "sweetness": "sweet",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-ice-wine-riesling.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-reserve-chardonnay-pinot-grigio",
    "wineryId": "w-radacini",
    "name": "Reserve Chardonnay Pinot Grigio",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-reserve-chardonnay-pinot-grigio.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-reserve-pinot-noir",
    "wineryId": "w-radacini",
    "name": "Reserve Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-reserve-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-reserve-saperavi",
    "wineryId": "w-radacini",
    "name": "Reserve Saperavi",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-reserve-saperavi.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-vero-di-moscato-dolce-alb",
    "wineryId": "w-radacini",
    "name": "Vero di Moscato Dolce Alb",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-vero-di-moscato-dolce-alb.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-vero-di-moscato-dolce-rose",
    "wineryId": "w-radacini",
    "name": "Vero di Moscato Dolce Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 100,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/radacini-radacini-vero-di-moscato-dolce-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-vintage-cabernet-sauvignon-merlot",
    "wineryId": "w-radacini",
    "name": "Vintage Cabernet Sauvignon Merlot",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-vintage-cabernet-sauvignon-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-vintage-chardonnay",
    "wineryId": "w-radacini",
    "name": "Vintage Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 210,
    "region": "Codru",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/radacini-radacini-vintage-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-vintage-merlot",
    "wineryId": "w-radacini",
    "name": "Vintage Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-vintage-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-radacini-radacini-vintage-pinot-noir",
    "wineryId": "w-radacini",
    "name": "Vintage Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 200,
    "region": "Codru",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/radacini-radacini-vintage-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-cabernet-sauvignon-pinot-noir",
    "wineryId": "w-taraclia-winery",
    "name": "Cabernet Sauvignon Pinot Noir",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-cabernet-sauvignon-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-cabernet-sauvignon",
    "wineryId": "w-taraclia-winery",
    "name": "Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-chardonnay",
    "wineryId": "w-taraclia-winery",
    "name": "Chardonnay",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-chardonnay.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-merlot-cabernet-sauvignon",
    "wineryId": "w-taraclia-winery",
    "name": "Merlot Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-merlot-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-merlot",
    "wineryId": "w-taraclia-winery",
    "name": "Merlot",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 120,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-pinot-noir",
    "wineryId": "w-taraclia-winery",
    "name": "Pinot Noir",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-pinot-noir.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-taraclia-winery-taraclia-winery-sauvignon-blanc",
    "wineryId": "w-taraclia-winery",
    "name": "Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 110,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/taraclia-winery-taraclia-winery-sauvignon-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-7-coline-cabernet-sauvignon-merlot",
    "wineryId": "w-vinaria-din-vale",
    "name": "7 Coline Cabernet Sauvignon Merlot",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-7-coline-cabernet-sauvignon-merlot.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-7-coline-feteasca-neagra-cabernet-sauvignon",
    "wineryId": "w-vinaria-din-vale",
    "name": "7 Coline Feteasca Neagra Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-7-coline-feteasca-neagra-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-7-coline-feteasca-regala-traminer",
    "wineryId": "w-vinaria-din-vale",
    "name": "7 Coline Feteasca Regala Traminer",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-7-coline-feteasca-regala-traminer.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-7-coline-rose",
    "wineryId": "w-vinaria-din-vale",
    "name": "7 Coline Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-7-coline-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-7-coline-sauvignon-blanc-pinot-grigio",
    "wineryId": "w-vinaria-din-vale",
    "name": "7 Coline Sauvignon Blanc Pinot Grigio",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-7-coline-sauvignon-blanc-pinot-grigio.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-7-coline-viorica-bianca",
    "wineryId": "w-vinaria-din-vale",
    "name": "7 Coline Viorica Bianca",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-7-coline-viorica-bianca.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-codru-vintage",
    "wineryId": "w-vinaria-din-vale",
    "name": "Codru Vintage",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 250,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-codru-vintage.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-codru",
    "wineryId": "w-vinaria-din-vale",
    "name": "Codru",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-codru.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-malbec-vintage",
    "wineryId": "w-vinaria-din-vale",
    "name": "Malbec Vintage",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 250,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-malbec-vintage.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-motive-cabernet-sauvignon",
    "wineryId": "w-vinaria-din-vale",
    "name": "Motive Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-motive-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-motive-feteasca-alba",
    "wineryId": "w-vinaria-din-vale",
    "name": "Motive Feteasca Alba",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-motive-feteasca-alba.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-motive-feteasca-neagra",
    "wineryId": "w-vinaria-din-vale",
    "name": "Motive Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-motive-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-motive-feteasca-regala",
    "wineryId": "w-vinaria-din-vale",
    "name": "Motive Feteasca Regala",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-motive-feteasca-regala.jpg",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-motive-rose",
    "wineryId": "w-vinaria-din-vale",
    "name": "Motive Rose",
    "type": "rose",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "компании",
      "пикник",
      "лёгкие закуски"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-motive-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-onest-cabernet-sauvignon",
    "wineryId": "w-vinaria-din-vale",
    "name": "Onest Cabernet Sauvignon",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-onest-cabernet-sauvignon.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-premium-feteasca-neagra",
    "wineryId": "w-vinaria-din-vale",
    "name": "Premium Feteasca Neagra",
    "type": "red",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "full",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "16-18 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "красное мясо",
      "барбекю",
      "стейк"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-premium-feteasca-neagra.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-sauvignon-blanc",
    "wineryId": "w-vinaria-din-vale",
    "name": "Sauvignon Blanc",
    "type": "white",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "medium",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "10-12 C",
    "alcoholPercent": 13,
    "pairingTags": [
      "рыба",
      "морепродукты",
      "белое мясо"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-sauvignon-blanc.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-spumant-brut",
    "wineryId": "w-vinaria-din-vale",
    "name": "Spumant Brut",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-spumant-brut.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-spumant-muscat",
    "wineryId": "w-vinaria-din-vale",
    "name": "Spumant Muscat",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 150,
    "region": "Valul lui Traian",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-spumant-muscat.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  },
  {
    "id": "wine-vinaria-din-vale-vinaria-din-vale-spumant-rose",
    "wineryId": "w-vinaria-din-vale",
    "name": "Spumant Rose",
    "type": "sparkling",
    "grapeVariety": "See source",
    "year": 2021,
    "price": 140,
    "region": "Valul lui Traian",
    "body": "light",
    "sweetness": "dry",
    "aromaNotes": [
      "fruit",
      "floral",
      "spice"
    ],
    "servingTemp": "6-8 C",
    "alcoholPercent": 12,
    "pairingTags": [
      "аперитив",
      "компании",
      "праздник"
    ],
    "imagePath": "/bottle-images/vinaria-din-vale-vinaria-din-vale-spumant-rose.png",
    "liked": false,
    "sourceType": "seed",
    "createdAt": now,
    "updatedAt": now
  }
];

export const seedPairings: PairingSection[] = [
  {
    id: "pair-red-meat",
    title: "К красному мясу",
    description: "Плотные красные вина к жареному и запеченному мясу.",
    recommendedWineIds: seedWines.filter((w) => w.type === "red").slice(0, 8).map((w) => w.id),
    colorToken: "var(--accent-wine)",
    iconKey: "steak",
    order: 1,
    pinned: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "pair-cheese",
    title: "К сырам",
    description: "Игристые, белые и розе для мягких и выдержанных сыров.",
    recommendedWineIds: seedWines.filter((w) => w.type !== "red").slice(0, 8).map((w) => w.id),
    colorToken: "var(--accent-leaf)",
    iconKey: "cheese",
    order: 2,
    pinned: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "pair-gatherings",
    title: "Для компаний",
    description: "Универсальные вина для встреч и праздников.",
    recommendedWineIds: seedWines.slice(0, 10).map((w) => w.id),
    colorToken: "var(--accent-clay)",
    iconKey: "group",
    order: 3,
    pinned: false,
    createdAt: now,
    updatedAt: now
  }
];
