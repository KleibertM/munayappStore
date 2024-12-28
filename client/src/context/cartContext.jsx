import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = [...cart]; // Crear una copia del carrito actual
            newCart[productInCartIndex].quantity += product.quantity; // Incrementar la cantidad del producto existente
            const newTotal = calculateTotal(newCart); // Calcular el nuevo total
            setTotal(newTotal); // Actualizar el estado total
            setCart(newCart); // Actualizar el carrito
            localStorage.setItem('cart', JSON.stringify(newCart));
            localStorage.setItem('total', JSON.stringify(newTotal));
        } else {
            const newProduct = { ...product }; // Crear un nuevo objeto de producto con una cantidad inicial de 1
            const newTotal = total + (product.precio * product.quantity);
            setTotal(newTotal); // Actualizar el total sumando el precio del nuevo producto
            setCart([...cart, newProduct]); // Agregar el nuevo producto al carrito
            localStorage.setItem('cart', JSON.stringify([...cart, newProduct]));
            localStorage.setItem('total', JSON.stringify(newTotal));
        }
        // localStorage.setItem('carrito', JSON.stringify(cart));
        console.log(cart);
        console.log(total);
    }




    const incrementQuantity = product => {
        // Buscar el índice del producto en el carrito
        const productIndex = cart.findIndex(item => item.id === product.id);

        // Verificar si el producto está en el carrito
        if (productIndex >= 1) {
            console.log('increment');
            const newCart = [...cart]; // Clonar el carrito para evitar mutaciones directas
            newCart[productIndex].quantity += 1 // Incrementar la cantidad del producto
            const newTotal = calculateTotal(newCart);
            setTotal(newTotal);
            localStorage.setItem('cart', JSON.stringify(newCart));
            localStorage.setItem('total', JSON.stringify(newTotal));
            return setCart(newCart); // Actualizar el estado del carrito
        }
    };

    const decrementQuantity = (product) => {
        const productIndex = cart.findIndex(item => item.id === product.id);
        // Verificar si el producto está en el carrito
        if (productIndex >= 0) {
            const newCart = [...cart]; // Clonar el carrito para evitar mutaciones directas
            // Verificar si la cantidad es mayor a 1 antes de decrementar
            if (newCart[productIndex].quantity > 12) {
                newCart[productIndex].quantity -= 1; // Decrementar la cantidad del producto
                const newTotal = calculateTotal(newCart);
                localStorage.setItem('cart', JSON.stringify(newCart));
                localStorage.setItem('total', JSON.stringify(newTotal));
                setTotal(newTotal);
                return setCart(newCart); // Actualizar el estado del carrito
            }
        }
    }

    const cartRemove = (product) => {
        const productToRemove = cart.find(item => item.id === product.id);
        if (productToRemove) {
            const newTotal = total - (productToRemove.precio * productToRemove.quantity);
            setTotal(newTotal);

            // Guardar prevState en una variable
            const updatedCart = cart.filter(item => item.id !== product.id);

            // Actualizar el estado del carrito
            setCart(updatedCart);

            // Guardar el estado actualizado en localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            localStorage.setItem('total', JSON.stringify(newTotal));
        }
    }

    const cleanCart = () => {
        setCart([])
        setTotal(0);
        localStorage.clear()
    }

    const calculateTotal = cart => {
        return cart.reduce((acc, item) => {
            return acc + (item.precio * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cleanCart,
            cartRemove,
            decrementQuantity,
            incrementQuantity,
            total,
            setCart,
            setTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}