import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../state/StateProvider";
import { getBasketTotal } from "../../state/reducer";

function Subtotal() {
  const [{ basket }, reducer] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />

      <button>Proceed to Checkout </button>
    </div>
  );
}

export default Subtotal;
