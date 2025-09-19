import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductModal from '../components/ProductModal'
import ProductCard from '../components/ProductCard'

export default function Search() {
  const [params] = useSearchParams()
  const q = (params.get('q') || '').toLowerCase()
  const { addToCart } = useCart()
  const [selected, setSelected] = useState(null)

  const results = useMemo(() => {
    if (!q) return []
    return products.filter(p => p.name.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)))
  }, [q])

  return (
    <div>
      <h2>Kết quả tìm kiếm {q && `cho "${q}"`}</h2>
      {q && results.length === 0 && <div>Không tìm thấy sản phẩm</div>}
      <div className="grid">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={setSelected} onAdd={addToCart} />
        ))}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}


