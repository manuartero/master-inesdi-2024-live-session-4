import { useEffect, useState } from "react";
import { fetchCards } from "../services/api/marvel-cbd-api";

import type { Card } from "../@types/marvel-cards";

export function useCards() {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function _fetchCards() {
      setIsLoading(true);
      /**
       * fetchCards() : Promise<Card[]>
       * await fetchCards() : Card[]
       */
      const cards = await fetchCards("ally");
      // limit to 5 cards
      setCards(cards.slice(0, 5));
      setIsLoading(false);
    }

    _fetchCards();
  }, []);

  return { isLoading, cards };
}
