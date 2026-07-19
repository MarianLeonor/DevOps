import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

import { createOrder } from "../../services/orders";

function Checkout() {

    const {
        cart,
        totalPrice,
        clearCart
    } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    const handleConfirm = async (buyer) => {

        const order = {

            buyer,

            items: cart.map(item => ({

                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price

            })),

            total: totalPrice

        };

        const id = await createOrder(order);

        setOrderId(id);

        clearCart();

    };

    if (orderId) {

        return (

            <div className="container text-center mt-5">

                <h2 className="mb-3">
                    ¡Compra realizada con éxito!
                </h2>

                <p>
                    Tu número de orden es:
                </p>

                <h4 className="text-success">
                    {orderId}
                </h4>

                <Link
                    to="/"
                    className="btn btn-primary mt-4"
                >
                    Volver al catálogo
                </Link>

            </div>

        );

    }

    if (cart.length === 0) {

        return (

            <div className="container text-center mt-5">

                <h2>
                    El carrito está vacío
                </h2>

                <Link
                    to="/"
                    className="btn btn-primary mt-3"
                >
                    Volver al catálogo
                </Link>

            </div>

        );

    }

    return (

        <div className="container">

            <h1 className="mb-4">
                Checkout
            </h1>

            <CheckoutForm
                onConfirm={handleConfirm}
            />

        </div>

    );

}

export default Checkout;