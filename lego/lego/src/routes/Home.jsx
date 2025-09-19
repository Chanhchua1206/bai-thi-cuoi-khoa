import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { useMemo, useState } from 'react'
import ProductModal from '../components/ProductModal'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'

export default function Home() {
  const { addToCart } = useCart()
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState({ category: 'all', sort: 'popularity' })

  const list = useMemo(() => {
    let arr = products
    if (filter.category !== 'all') {
      arr = arr.filter(p => p.tags.includes(filter.category))
    }
    switch (filter.sort) {
      case 'price-asc':
        arr = [...arr].sort((a,b) => a.price - b.price); break
      case 'price-desc':
        arr = [...arr].sort((a,b) => b.price - a.price); break
      case 'rating':
        arr = [...arr].sort((a,b) => b.rating - a.rating); break
      default:
        arr = [...arr].sort((a,b) => b.sold - a.sold)
    }
    return arr
  }, [filter])
  return (
    <div>
      <h2>Sản phẩm</h2>
      <Filters onChange={setFilter} />
      <div className="grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={setSelected} onAdd={addToCart} />
        ))}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}


