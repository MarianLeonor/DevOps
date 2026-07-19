import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {

    const [added, setAdded] = useState(false);

    return (

        <div className="card">

            <img
                src={product.image || "https://via.placeholder.com/300"}
                className="card-img-top"
                alt={product.name}
            />

            <div className="card-body">

                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <h4>${product.price}</h4>

                <p>
                    Stock disponible: {product.stock}
                </p>

                {
                    product.stock > 0 ? (

                        added ? (

                            <Link
                                to="/cart"
                                className="btn btn-success"
                            >
                                Ir al carrito
                            </Link>

                        ) : (

                            <ItemCount
                                product={product}
                                stock={product.stock}
                                onAdd={() => setAdded(true)}
                            />

                        )

                    ) : (

                        <h5 className="text-danger">
                            Producto sin stock
                        </h5>

                    )
                }

            </div>

        </div>

    );

}

export default ItemDetail;