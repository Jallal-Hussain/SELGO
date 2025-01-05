import './styles.css'
import { Links as linksData } from "../../data/links";
const LinksComponent = () => {
  return (
    <>
      <div className="links">
        {linksData.map((link, index) => (
          <a key={index} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default LinksComponent;
