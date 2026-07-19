import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer(){


    const { itemId } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(()=>{

        getProductById(itemId)
            .then(response=>{
                setProduct(response);
            })
            .finally(()=>{
                setLoading(false);
            });


    },[itemId]);



    if(loading){
        return <h2>Cargando producto...</h2>
    }



    return (

        <>
            {
                product
                ?
                <ItemDetail product={product}/>
                :
                <h2>Producto no encontrado</h2>
            }
        </>

    );
}


export default ItemDetailContainer;