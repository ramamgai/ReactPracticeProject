import styles from "./Item.module.css";
function Item(props) {
  let handleBuyButtonClicked = () => {
    console.log(`${props.vehicleItems} being bought.`);
  };
  return (
    <li className={styles["list-group-item"]}>
      <span className={styles["kg-span"]}>{props.vehicleItems}</span>
      <button
        className={` ${styles.buyButoon} btn btn-success`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
