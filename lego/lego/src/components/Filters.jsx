import { categories } from '../data/products'
import { useState, useEffect } from 'react'

export default function Filters({ onChange, defaultSort = 'popularity' }) {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState(defaultSort)

  useEffect(() => {
    onChange({ category, sort })
  }, [category, sort, onChange])

  return (
    <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
      <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
      </select>
      <select className="input" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="popularity">Bán chạy</option>
        <option value="rating">Đánh giá cao</option>
        <option value="price-asc">Giá tăng dần</option>
        <option value="price-desc">Giá giảm dần</option>
      </select>
    </div>
  )
}


