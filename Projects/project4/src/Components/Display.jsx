import React from "react";
import styles from "./Display.module.css";

function Display({ value }) {
  return (
    <input type="text" className={styles.display} value={value} readOnly />
  );
}

export default Display;
