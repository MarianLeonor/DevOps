import { useState } from "react";


function CheckoutForm({ onConfirm }) {


    const [buyer, setBuyer] = useState({

        name:"",
        phone:"",
        email:""

    });



    const handleChange = (e)=>{

        setBuyer({

            ...buyer,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = (e)=>{

        e.preventDefault();

        onConfirm(buyer);

    };



    return (

        <form
            onSubmit={handleSubmit}
            className="mt-4"
        >


            <input
                className="form-control mb-3"
                placeholder="Nombre"
                name="name"
                value={buyer.name}
                onChange={handleChange}
            />


            <input
                className="form-control mb-3"
                placeholder="Teléfono"
                name="phone"
                value={buyer.phone}
                onChange={handleChange}
            />


            <input
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                value={buyer.email}
                onChange={handleChange}
            />


            <button
                className="btn btn-success"
            >
                Confirmar compra
            </button>


        </form>

    );

}


export default CheckoutForm;