import { Link } from "react-router-dom";

function Item({ product }) {

    return (

        <div className="card h-100 w-100 shadow-sm">

            <img
                src={product.image || "https://via.placeholder.com/300"}
                className="card-img-top"
                alt={product.name}
            />

            <div className="card-body">

                <h5 className="card-title">
                    {product.name}
                </h5>

                <p className="card-text">
                    {product.description}
                </p>

                <p className="price">
                    ${product.price}
                </p>

                <Link
                    className="btn btn-primary mt-auto"
                    to={`/item/${product.id}`}
                >
                    Ver detalle
                </Link>

            </div>

        </div>

    );

}

export default Item;