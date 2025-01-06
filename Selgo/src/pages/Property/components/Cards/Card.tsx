import {favoriteCardData} from "../../data/CardData";
import "./styles.css";

const FavoriteCard = () => {
  return (
    <>
      <div className="card">
        {favoriteCardData.map((card) => (
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
    </>
  );
};

export default FavoriteCard;
