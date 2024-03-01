import { useParams, useNavigate } from "react-router-dom";
import "./catalog.css";
import { DRINKS_STATIC } from "../../static/DRINKS_STATIC.JS";
import { CONDIMENTS_STATIC } from "../../static/CONDIMENTS_STATIC.JS";
import { SWEETS_STATIC } from "../../static/SWEETS_STATIC";
import { PICKLES_STATIC } from "../../static/PICKLES_STATIC.js";
import { MEAT_STATIC } from "../../static/MEAT_STATIC.js";
import { LEGUMES_STATIC } from "../../static/LEGUMES_STATIC.js";
import { OIL_STATIC } from "../../static/OIL_STATIC.js";
import { TEA_STATIC } from "../../static/TEA_STATIC.js";
import { OTHERS_STATIC } from "../../static/OTHERS_STATIC.js";
const Catalog = () => {
  const { type } = useParams();
  let product;
  switch (type) {
    case "drinks":
      product = DRINKS_STATIC;
      break;
    case "sweets":
      product = SWEETS_STATIC;
      break;
    case "pickles":
      product = PICKLES_STATIC;
      break;
    case "meats":
      product = MEAT_STATIC;
      break;
    case "condiments":
      product = CONDIMENTS_STATIC;
      break;
    case "legumes":
      product = LEGUMES_STATIC;
      break;
    case "oils":
      product = OIL_STATIC;
      break;
    case "teas":
      product = TEA_STATIC;
      break;
    case "others":
      product = OTHERS_STATIC;
      break;
    default:
      break;
  }
  const navigate = useNavigate();

  return (
    <section>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Qaytish
      </button>
      {product.map((item, index) => {
        return (
          <div className="catalog_item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="item_info">
              <h2 className="item_name">{item.name}</h2>
              <div>
                <em>{item.amount}</em>
                <h3>{item.price} ₩</h3>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Catalog;
