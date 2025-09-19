import { formatVnd } from '../data/products'

export default function ProductCard({ product, onOpen, onAdd }) {
  const discount = product.discount || 0
  const hasDiscount = discount > 0
  return (
    <div className="card" style={{ position: 'relative' }}>
      {hasDiscount && (
        <div style={{ position: 'absolute', top: 8, left: 8, background: '#dc2626', color: 'white', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>-{discount}%</div>
      )}
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', borderRadius: 6, cursor: 'zoom-in' }}
        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image'; }}
        onClick={() => onOpen(product)}
      />
      <strong style={{ cursor: 'pointer' }} onClick={() => onOpen(product)}>{product.name}</strong>
      <span>
        {hasDiscount ? (
          <>
            <span style={{ textDecoration: 'line-through', color: '#9ca3af', marginRight: 6 }}>{formatVnd(product.price)}</span>
            <span style={{ color: '#dc2626', fontWeight: 600 }}>{formatVnd(Math.round(product.price*(100-discount)/100))}</span>
          </>
        ) : (
          formatVnd(product.price)
        )}
        {' '}· {product.rating}⭐ · Đã bán {product.sold}
      </span>
      <button className="btn primary" onClick={() => onAdd(product, 1)}>Thêm vào giỏ</button>
    </div>
  )
}


