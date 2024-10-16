import CardItem from "./card-item";

import {CardInfo} from "@/types";

interface Props {
  cards: CardInfo[];
}

function CardList({cards}: Props) {
  return (
    <section className="space-y-4">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </section>
  );
}

export default CardList;
