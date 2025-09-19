import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { cartItems } = useCart()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function onSearch(e) {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <nav>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800 }}>
        <span style={{ background: '#dc2626', color: 'white', padding: '4px 8px', borderRadius: 6 }}>LEGO</span>
        <span style={{ color: '#dc2626' }}>Shop</span>
      </Link>
      <form onSubmit={onSearch} style={{ display: 'flex', gap: 8 }}>
        <input
          className="input"
          placeholder="Tìm sản phẩm..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn primary" type="submit">Tìm</button>
      </form>
      <div className="spacer" />
      <Link to="/cart">Giỏ hàng ({cartItems.reduce((s, i) => s + i.quantity, 0)})</Link>
    </nav>
  )
}


