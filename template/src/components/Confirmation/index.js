export function addCart(id) {
    var cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    var condition = false
    if (cart.length == 0) {
        cart.push(id)
    } else {
        for (var i = 0; i < cart.length; i++) {
            if (parseInt(id) == parseInt(cart[i])) {
                condition = true
            }
        }
        if (!condition) {
            cart.push(id)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(localStorage)
}
