import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";


function Cart() {


    const {
        cart,
        totalPrice,
        clearCart
    } = useContext(CartContext);



    if (cart.length === 0) {

        return (

            <div className="container mt-5 text-center">

                <h2>
                    El carrito está vacío
                </h2>


                <Link
                    className="btn btn-primary mt-3"
                    to="/"
                >
                    Volver al catálogo
                </Link>


            </div>

        );

    }



    return (

        <div className="container mt-5">


            <h1 className="mb-4">
                Carrito de compras
            </h1>



            {
                cart.map(product => (

                    <CartItem

                        key={product.id}

                        product={product}

                    />

                ))
            }



            <div className="mt-4">


                <h3>
                    Total: ${totalPrice}
                </h3>



                <button

                    className="btn btn-danger me-3"

                    onClick={clearCart}

                >
                    Vaciar carrito

                </button>



                <Link

                    className="btn btn-success"

                    to="/checkout"

                >
                    Finalizar compra

                </Link>


            </div>


        </div>

    );

}


export default Cart;