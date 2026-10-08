# Bài tập sửa lỗi Dot Notation và Bracket Notation - Grand Hotel

## 1. Mục tiêu

- Phân biệt Dot Notation (`obj.prop`) và Bracket Notation (`obj[dynamicKey]`).
- Hiểu cách truy cập thuộc tính thông qua biến động.
- Sửa lỗi truy cập thuộc tính làm giá trị thành `undefined` và tổng tiền thành `NaN`.
- Quản lý thông tin phiếu đặt phòng khách sạn an toàn và chính xác.

## 2. Phân tích lỗi

### Dòng code bị sai

Mã nguồn ban đầu:

```javascript
const priceKey = "roomPrice";
const basePrice = bookingReservation.priceKey;
```

Vấn đề nằm ở:

```javascript
bookingReservation.priceKey
```

JavaScript hiểu đây là Dot Notation và tìm thuộc tính có tên chính xác là:

```text
"priceKey"
```

Trong đối tượng `bookingReservation` không có thuộc tính `priceKey`.

Đối tượng chỉ có thuộc tính:

```text
roomPrice
```

Vì vậy:

```javascript
bookingReservation.priceKey
```

trả về:

```text
undefined
```

Sau đó chương trình thực hiện:

```javascript
surcharge = basePrice * 0.3;
```

tương đương:

```javascript
undefined * 0.3
```

Kết quả là:

```text
NaN
```

Tiếp tục:

```javascript
const totalAmount = basePrice + surcharge;
```

cũng cho kết quả:

```text
NaN
```

---

## 3. Cách sửa

Vì `priceKey` là một biến chứa tên thuộc tính:

```javascript
const priceKey = "roomPrice";
```

phải dùng Bracket Notation:

```javascript
const basePrice = bookingReservation[priceKey];
```

JavaScript sẽ lấy giá trị thuộc tính có tên được lưu trong biến `priceKey`.

Kết quả:

```text
bookingReservation["roomPrice"]
```

trả về:

```text
1500000
```

### Phân biệt

Dot Notation:

```javascript
bookingReservation.roomPrice
```

Dùng khi biết trực tiếp tên thuộc tính.

Bracket Notation:

```javascript
bookingReservation[priceKey]
```

Dùng khi tên thuộc tính được lưu trong biến hoặc cần truy cập bằng giá trị động.

---

## 4. Test Cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 - Tra cứu giá phòng bằng biến động | `priceKey = "roomPrice"`, `roomPrice = 1500000` | `bookingReservation.priceKey` trả về `undefined`, làm `basePrice = undefined` | `bookingReservation[priceKey]` trả về `1500000 VNĐ` |
| TC02 - Tính hóa đơn khi nhận phòng sớm | `checkInHour = 9`, `roomPrice = 1500000` | Phụ thu và tổng tiền đều thành `NaN` do `basePrice` là `undefined` | Phụ thu `450000 VNĐ`, tổng thanh toán `1950000 VNĐ` |

---

## 5. Kiểm tra kết quả

Giá phòng:

```text
1.500.000 VNĐ
```

Khách nhận phòng lúc:

```text
09:00
```

Vì:

```javascript
9 < 12
```

nên được tính phụ thu nhận phòng sớm 30%.

Phụ thu:

```text
1.500.000 × 30% = 450.000 VNĐ
```

Tổng tiền:

```text
1.500.000 + 450.000 = 1.950.000 VNĐ
```

## 6. Kết quả chương trình mong đợi

```text
Mã đặt phòng: BK-2024-8891
Khách hàng: Trần Minh Quang
Phụ thu nhận phòng sớm: 450000
Tổng số tiền thanh toán: 1950000
```

## 7. Kiến thức được sử dụng

Chương trình chỉ sử dụng kiến thức cơ bản:

- `const`
- `let`
- Object
- Dot Notation
- Bracket Notation
- Biến
- `if`
- Phép tính
- `console.log()`

Không sử dụng cấu trúc dữ liệu hoặc giải thuật nâng cao.
