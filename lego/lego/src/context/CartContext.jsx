import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'lego_cart'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, quantity = 1) {
    setCartItems((items) => {
      const existing = items.find((i) => i.product.id === product.id)
      if (existing) {
        return items.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i)
      }
      return [...items, { product, quantity }]
    })
  }

  function removeFromCart(productId) {
    setCartItems((items) => items.filter((i) => i.product.id !== productId))
  }

  function clearCart() {
    setCartItems([])
  }

  const total = cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  const value = useMemo(() => ({ cartItems, addToCart, removeFromCart, clearCart, total }), [cartItems, total])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


