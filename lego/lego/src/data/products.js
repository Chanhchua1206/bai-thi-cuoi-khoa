export const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'city', label: 'LEGO City' },
  { id: 'ninjago', label: 'LEGO Ninjago' },
  { id: 'technic', label: 'LEGO Technic' },
  { id: 'starwars', label: 'LEGO Star Wars' },
  { id: 'friends', label: 'LEGO Friends' },
]

export const products = [
  { id: 'l1', name: 'LEGO City Police Station', price: 1299000, image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/096/240/products/194329460047-2.jpg?v=1465878216423', tags: ['city','police'], sold: 523, rating: 4.6, reviews: 128, description: 'Trạm cảnh sát LEGO City với nhiều chi tiết thú vị.' },
  { id: 'l2', name: 'LEGO Star Wars X-Wing', price: 1999000, image: 'https://www.lego.com/cdn/cs/set/assets/blt114953c776ac3457/75355_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1', tags: ['starwars','ship'], sold: 841, rating: 4.8, reviews: 203, description: 'Mô hình X-Wing Starfighter cho fan Star Wars.' },
  { id: 'l3', name: 'LEGO Technic Bugatti', price: 8999000, image: 'https://www.mykingdom.com.vn/cdn/shop/files/42151_8159bb4a-0e82-4b57-94b2-2ba56d1da751.jpg?v=1746673239&width=1946', tags: ['technic','car'], sold: 112, rating: 4.9, reviews: 77, description: 'Siêu xe Bugatti chi tiết từ dòng LEGO Technic.' },
  { id: 'l4', name: 'LEGO Friends Cafe', price: 999000, image: 'https://www.mykingdom.com.vn/cdn/shop/files/42618_d27a1fd0-6181-46b6-8489-d94ab214fb97.jpg?v=1752025180&width=990', tags: ['friends','city'], sold: 345, rating: 4.5, reviews: 90, description: 'Quán cafe ấm cúng cho bộ sưu tập Friends.' },
  { id: 'l5', name: 'LEGO Ninjago Dragon', price: 1599000, image: 'https://www.mykingdom.com.vn/cdn/shop/files/71822.jpg?v=1726926098&width=990', tags: ['ninjago','dragon'], sold: 456, rating: 4.7, reviews: 151, description: 'Rồng Ninjago mạnh mẽ với nhiều khớp nối.' },
  { id: 'l6', name: 'LEGO City Fire Truck', price: 899000, image: 'https://www.merlinsbricks.com/LEGO-60061_13423526143751678516_hu_474d28b8ebcc7f28.webp', tags: ['city','fire'], sold: 612, rating: 4.4, reviews: 88, description: 'Xe cứu hỏa LEGO City cho bé thích nghề lính cứu hỏa.' },
  { id: 'l7', name: 'LEGO Technic Ducati', price: 2499000, image: 'https://www.mykingdom.com.vn/cdn/shop/files/do-choi-lap-rap-xe-moto-ducati-lego-technic-42202.png?v=1741331282', tags: ['technic','bike'], sold: 220, rating: 4.7, reviews: 64, description: 'Mô hình Ducati Panigale từ LEGO Technic.' },
  { id: 'l8', name: 'LEGO Ninjago Temple', price: 1899000, image: 'https://m.media-amazon.com/images/I/51I4jSs1EtL._SX300_SY300_QL70_FMwebp_.jpg', tags: ['ninjago','temple'], sold: 301, rating: 4.6, reviews: 97, description: 'Đền Ninjago huyền bí nhiều chi tiết.' },
  { id: 'l9', name: 'LEGO Star Wars AT-AT', price: 4999000, image: 'https://bfasset.costco-static.com/U447IH35/as/5ztqgzk5sq8gwjr42kgcj8jp/1560001-847__1?auto=webp&amp;format=jpg&width=600&height=600&fit=bounds&canvas=600,600', tags: ['starwars','walker'], sold: 177, rating: 4.8, reviews: 140, description: 'Cỗ máy AT-AT khổng lồ cho fan Star Wars.' },
  { id: 'l10', name: 'LEGO Friends House', price: 1399000, image: 'https://www.lego.com/cdn/cs/set/assets/blta11583c1ce98be91/41340.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1', tags: ['friends','city'], sold: 274, rating: 4.3, reviews: 59, description: 'Ngôi nhà Friends đầy màu sắc.' },
]

export function formatVnd(amount) {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}


