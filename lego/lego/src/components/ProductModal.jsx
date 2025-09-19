import { createPortal } from 'react-dom'
import { formatVnd } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart()
  if (!product) return null
  return createPortal(
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={onClose}>
      <div className="card" style={{ maxWidth: 900, width: '100%', background: 'white' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="modal-content">
          <div>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8 }} onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image'; }} />
            <a href={product.image} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: 8, color: '#dc2626', textDecoration: 'underline' }}>Xem ảnh gốc</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h3 style={{ margin: 0 }}>{product.name}</h3>
            <div>{formatVnd(product.price)}</div>
            <div>Đã bán: {product.sold} | Đánh giá: {product.rating}⭐ ({product.reviews})</div>
            <div>{product.description}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <button className="btn" onClick={onClose}>Đóng</button>
              <button className="btn primary" onClick={() => { addToCart(product, 1); onClose(); }}>Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}


