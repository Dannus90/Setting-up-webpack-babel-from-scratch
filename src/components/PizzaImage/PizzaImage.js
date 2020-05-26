import React from "react";

import styles from "./PizzaImage.styles.css";
import PizzaImage from "../../assets/original.jpg";

const pizzaImage = (props) => (
    <div className={styles.PizzaImage}>
        <img src={PizzaImage} className={styles.PizzaImg} />
    </div>
);

export default pizzaImage;
