import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function CartItem({ product }) {


    const { removeItem } = useContext(CartContext);



    return (

        <div className="card mb-3">

            <div className="card-body d-flex justify-content-between align-items-center">


                <div>

                    <h5>
                        {product.name}
                    </h5>

                    <p>
                        Precio unitario: ${product.price}
                    </p>

                    <p>
                        Cantidad: {product.quantity}
                    </p>

                    <p>
                        Subtotal: ${product.price * product.quantity}
                    </p>

                </div>


                <button
                    className="btn btn-danger"
                    onClick={() => removeItem(product.id)}
                >
                    Eliminar
                </button>


            </div>

        </div>

    );

}


export default CartItem;