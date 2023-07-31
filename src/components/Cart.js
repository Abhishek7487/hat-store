import React from "react";
import CartProductList from "./CartProductList";
import CartCheckout from "./CartCheckout";
import EmptyCart from "../empty-cart.png";
import CartProduct from "./CartProduct";

function Cart({
  cart,
  setCart,
  total,
  setTotal,
  checkoutMessage,
  setCheckoutMessage,
  cartVisibility,
  setCartVisibility,
}) {
  function handleReturnToCart() {
    setCheckoutMessage(false);
    setTotal(0);
    setCartVisibility(!cartVisibility);
  }

  return (
    <div className={!cartVisibility ? "cart hide" : "cart show"}>
      {checkoutMessage ? (
        <div className="checkoutMessage">
          <p>
            Thank you! for your purchase of{" "}
            <span>₹{total.toLocaleString("en-IN")}</span>😊
          </p>
          <button onClick={handleReturnToCart}>Shop more</button>
        </div>
      ) : (
        <>
          <h3>Your Cart</h3>
          {total > 0 ? (
            <>
              <CartProductList>
                {cart.map((product) => (
                  <CartProduct
                    product={product}
                    key={product.id}
                    cart={cart}
                    setCart={setCart}
                    total={total}
                    setTotal={setTotal}
                  />
                ))}
              </CartProductList>
              <CartCheckout
                setCart={setCart}
                total={total}
                setTotal={setTotal}
                setCheckoutMessage={setCheckoutMessage}
              />
            </>
          ) : (
            <div className="emptyCart">
              <img src={EmptyCart} alt="emptyCart" />
              <p>Your cart is empty!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
