import { useState } from "react";
import { embed_data } from "./data";

export default function Program(embed: embed_data): JSX.Element {
  const [hover, setHover] = useState(false);

  const imgAlt = `${embed.name} Logo`;
  const imgSrc = `./assets/icons/${embed.name.toLowerCase()}.svg`;

  return (
    <div className="embed">
      <div className="icon">
        <div
          className="shadow"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <a href={embed.website} target="_blank">
            <img alt={imgAlt} src={embed.img} />
          </a>
        </div>
      </div>
      <div>
        <a href={embed.website} target="_blank">
          {embed.name}
        </a>
      </div>
    </div>
  );
}
