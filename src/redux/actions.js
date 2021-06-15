export function addToCart(product, qty) {
    return {
      type: "ADD_TO_CART",
      product,
      qty
    };
  }
  
  export function updateInCart(productId, qty) {
    return {
      type: "UPDATE_IN_CART",
      productId,
      qty
    };
  }
  
  export function removeFromCart(productId) {
    return {
      type: "REMOVE_FROM_CART",
      productId
    };
  }
  