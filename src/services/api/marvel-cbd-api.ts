import type { Card, TypeCode } from "../../@types/marvel-cards";

const BASE_URL = "https://marvelcdb.com";

/** GET https://marvelcdb.com/api/public/cards/ */
export async function fetchCards(typeCode?: TypeCode) {
  const response = await fetch(`${BASE_URL}/api/public/cards/`);
  if (!response.ok) {
    throw new Error("Failed to fetch cards");
  }
  const cards: Card[] = await response.json();
  if (typeCode) {
    return cards.filter((card) => card.type_code === typeCode);
  }
  return cards;
}

// export async function fetchCardImage(card: Card) {
//   const response = await fetch(`${BASE_URL}${card.imagesrc}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch card image");
//   }
//   // const blob = await response.blob();
//   // return URL.createObjectURL(blob);
//   return response.url;
// }
