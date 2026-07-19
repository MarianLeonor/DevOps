import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";


export const createOrder = async (order) => {

    const ordersCollection = collection(db, "orders");


    const docRef = await addDoc(
        ordersCollection,
        {
            ...order,
            date: Timestamp.now()
        }
    );


    return docRef.id;

};