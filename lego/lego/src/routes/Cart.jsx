import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatVnd } from '../data/products'

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, total, clearCart } = useCart()

  function updateQuantity(product, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(product.id)
    } else {
      // Remove current item and add with new quantity
      removeFromCart(product.id)
      addToCart(product, newQuantity)
    }
  }

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <div>Giỏ hàng trống. <Link to="/">Tiếp tục mua sắm</Link></div>
      ) : (
        <div>
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className="card" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: 12 }}>
              <img src={product.image} alt={product.name} style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 6 }} />
              <div>
                <div>{product.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  <span>Số lượng:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <button className="btn" onClick={() => updateQuantity(product, quantity - 1)} style={{ padding: '4px 8px', minWidth: 32 }}>-</button>
                    <span style={{ minWidth: 24, textAlign: 'center' }}>{quantity}</span>
                    <button className="btn" onClick={() => updateQuantity(product, quantity + 1)} style={{ padding: '4px 8px', minWidth: 32 }}>+</button>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 8 }}>
                <div>{formatVnd(product.price * quantity)}</div>
                <button className="btn" onClick={() => removeFromCart(product.id)}>Xóa</button>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
            <strong>Tổng: {formatVnd(total)}</strong>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn" onClick={clearCart}>Xóa giỏ</button>
              <Link className="btn primary" to="/checkout">Thanh toán</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


