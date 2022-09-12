import { useState } from "react";
import { embed_data } from "./data";
import "./styles/Programs.css";

interface embed_key_data extends embed_data {
  key: number;
}

export default function Program(embed: embed_key_data): JSX.Element {
  const [hover, setHover] = useState(false);

  const imgAlt = `${embed.name} Logo`;
  const imgSrc = `./src/assets/${embed.name.toLowerCase()}.svg`;
  const shadow = { filter: `drop-shadow(0 0 2em ${embed.shadow_color})` };

  return (
    <div className="embed">
      <div className="icon">
        <div
          style={hover ? shadow : undefined}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <a href={embed.website} target="_blank">
            <img alt={imgAlt} src={imgSrc} />
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
