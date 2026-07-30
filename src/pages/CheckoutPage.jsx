import { useDispatch, useSelector } from "react-redux";

import BascketCard from "../components/BascketCard";
import BascketSidebar from "../components/BascketSidebar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return <div className={styles.container}>empty</div>;
  }

  return (
    <div className={styles.container}>
      <BascketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BascketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
