import { Card } from "./components";
import { useCards } from "./hooks/use-cards";

import "./App.css";

export function App() {
  const { isLoading, cards } = useCards();

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      {cards.map((card) => (
        <Card key={card.code} name={card.name} image={card.imagesrc} />
      ))}
    </main>
  );
}
