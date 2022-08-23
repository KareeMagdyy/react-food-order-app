import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ onHideCart }) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );

  return (
    <Modal onHideCart={onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>35.52</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
