import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);


    // Agregar producto al carrito
    const addItem = (product, quantity) => {

    setCart(currentCart => {

        const productExists = currentCart.find(
            item => item.id === product.id
        );

        if (productExists) {

            return currentCart.map(item =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                    : item
            );

        }

        return [
            ...currentCart,
            {
                ...product,
                quantity
            }
        ];

    });

};

    // Eliminar un producto
    const removeItem = (id) => {

        setCart(
            cart.filter(item => item.id !== id)
        );

    };


    // Vaciar carrito
    const clearCart = () => {

        setCart([]);

    };


    // Total de unidades
    const totalQuantity = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );


    // Total del carrito
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );


    return (

        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                totalPrice
            }}
        >

            {children}

        </CartContext.Provider>

    );

}