import "./card.css";

type Props = {
  name: string;
  image: string;
};
const BASE_IMG_URL = "https://marvelcdb.com";

export function Card({ name, image }: Props) {
  const imgSrc = BASE_IMG_URL + image;

  return (
    <article className="card">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
    </article>
  );
}
