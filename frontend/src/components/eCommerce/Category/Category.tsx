import { TCategory } from "@types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ title, img, prefix , id }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/products/${id}/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
