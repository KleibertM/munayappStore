import { useContext } from "react";
import { CartContext } from "../context/cartContext"; 

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        console.log('context vacio');
    }

    return context
}