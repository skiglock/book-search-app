import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
