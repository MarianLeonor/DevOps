import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget() {

    const { totalQuantity } = useContext(CartContext);

    return (

        <Link
            to="/cart"
            className="btn btn-outline-dark position-relative"
        >
            <i className="bi bi-cart fs-5"></i>

            {
                totalQuantity > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalQuantity}
                    </span>
                )
            }

        </Link>

    );
}

export default CartWidget;