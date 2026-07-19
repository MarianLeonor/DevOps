import Item from "../Item/Item";

function ItemList({ products }) {

    return (

        <div className="row g-4">

            {
                products.map(product => (

                    <div
                        className="col-md-4 d-flex"
                        key={product.id}
                    >

                        <Item product={product} />

                    </div>

                ))
            }

        </div>

    );

}

export default ItemList;