import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCount({ product, stock, onAdd }) {

    const [quantity, setQuantity] = useState(1);

    const { addItem } = useContext(CartContext);

    const increment = () => {

        if (quantity < stock) {
            setQuantity(quantity + 1);
        }

    };

    const decrement = () => {

        if (quantity > 1) {
            setQuantity(quantity - 1);
        }

    };

    const handleAdd = () => {

        addItem(product, quantity);

        onAdd();

    };

    return (

        <div className="mt-3">

            <div className="d-flex align-items-center gap-3">

                <button
                    className="btn btn-outline-secondary"
                    onClick={decrement}
                >
                    -
                </button>

                <span className="fs-4">
                    {quantity}
                </span>

                <button
                    className="btn btn-outline-secondary"
                    onClick={increment}
                >
                    +
                </button>

            </div>

            <button
                className="btn btn-primary mt-3"
                onClick={handleAdd}
            >
                Agregar al carrito
            </button>

        </div>

    );

}

export default ItemCount;