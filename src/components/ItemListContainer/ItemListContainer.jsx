import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import {
    getProducts,
    getProductsByCategory
} from "../../services/products";

function ItemListContainer() {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setLoading(true);

        const request = categoryId
            ? getProductsByCategory(categoryId)
            : getProducts();

        request
            .then(setProducts)
            .finally(() => setLoading(false));

    }, [categoryId]);


    if (loading) {

        return (

            <div className="text-center mt-5">

                <div className="spinner-border"></div>

            </div>

        );

    }


    return <ItemList products={products} />;

}

export default ItemListContainer;