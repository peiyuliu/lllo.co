
export function selectAd(ad){
    return{
        type:'AD_SELECTED',
        payload:ad
    };
}

export function addToCart(ad){
    return {
        type: 'ADD_TO_CART',
        payload: ad
    };
}

export function removeFromCart(ad){
    return {
        type: 'REMOVE_FROM_CART',
        payload: ad
    };
}

export function addToWishList(ad){
    return {
        type: 'ADD_TO_WISHLIST',
        payload: ad
    };
}

export function removeFromWishList(ad){
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: ad
    };
}

export function selectProduct(product){
    return{
        type:'PRODUCT_SELECTED',
        payload:product
    };
}