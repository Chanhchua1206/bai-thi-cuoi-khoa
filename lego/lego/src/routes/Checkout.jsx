import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatVnd } from '../data/products'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { total, clearCart } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  function isValidPhone(value) {
    // Định dạng VN cơ bản: 10 số, bắt đầu 0 hoặc +84 (bỏ khoảng trắng/ký tự)
    const digits = value.replace(/\D/g, '')
    if (digits.startsWith('84')) {
      return digits.length === 11 // 84 + 9 số
    }
    return digits.length === 10 && digits.startsWith('0')
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!name || !address || !phone) return
    if (!isValidPhone(phone)) {
      alert('Số điện thoại không hợp lệ (VN: 10 số hoặc +84...)')
      return
    }
    clearCart()
    alert('Đặt hàng thành công!')
    navigate('/')
  }

  return (
    <div style={{ maxWidth: 520, margin: '24px auto' }}>
      <h2>Thanh toán</h2>
      <div style={{ marginBottom: 12 }}>Tổng thanh toán: <strong>{formatVnd(total)}</strong></div>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input className="input" placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input" placeholder="Địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input className="input" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="btn primary" type="submit">Đặt hàng</button>
      </form>
    </div>
  )
}


