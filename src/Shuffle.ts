import { embed_data } from "./data";

export default function shuffle(array: embed_data[]): embed_data[] {
  let arrayCopy = JSON.parse(JSON.stringify(array));
  let currentIndex = arrayCopy.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];
  }

  return arrayCopy;
}
