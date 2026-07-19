import {
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where
} from "firebase/firestore";

import { db } from "../firebase/config";


// Todos los productos
export const getProducts = async () => {

    const productsCollection = collection(db, "products");

    const snapshot = await getDocs(productsCollection);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

};


// Productos por categoría
export const getProductsByCategory = async (categoryId) => {

    const productsCollection = collection(db, "products");

    const productsQuery = query(
        productsCollection,
        where("category", "==", categoryId)
    );

    const snapshot = await getDocs(productsQuery);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

};


// Producto por id
export const getProductById = async (id) => {

    const productDoc = doc(db, "products", id);

    const snapshot = await getDoc(productDoc);

    if (!snapshot.exists()) return null;

    return {
        id: snapshot.id,
        ...snapshot.data()
    };

};