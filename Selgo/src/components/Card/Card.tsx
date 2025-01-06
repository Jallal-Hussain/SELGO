import React from "react";
import "./styles.css";

interface CardProps {
  id: number;
  name: string;
  price: string | number;
  imageUrl: string;
  icon?: string;
  description: string;
}

interface FavoriteCardProps {
  data: CardProps[];
}

const Card: React.FC<FavoriteCardProps> = ({ data }) => {
  return (
    <div className="card">
      {data.map((card) => (
        <div key={card.id} className="fav-card-container">
          <div className="fav-card-image">
            <img src={card.imageUrl} alt={card.name} />
            <span>
              <p>{card.price}</p>
            </span>
          </div>
          <div className="fav-card-content">
            <p>{card.name}</p>
            <img src={card.icon} alt={card.name} />
          </div>
          <span>
            <p>{card.description}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
