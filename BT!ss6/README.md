# MENU FITNESS GYM

## 1. Chức năng

Chương trình có 3 lựa chọn:

```text
1. Nhập và chuẩn hóa mã đơn hàng
2. Tính tiền và in hóa đơn
3. Thoát chương trình
```

## 2. Cách xử lý

Mã đơn hàng:

```text
"  GYM-1024  "
```

Sau khi dùng `trim()` và `toUpperCase()`:

```text
GYM-1024
```

Kiểm tra:

```js
orderCode.startsWith("GYM-")
```

Mã có độ dài từ 8 ký tự trở lên thì hợp lệ.

Dùng `slice()` để lấy:

```text
GYM-    → tiền tố
1024    → số đơn
```

## 3. Tính tiền

Giá sản phẩm:

```text
SHAKER  = 120.000 VNĐ
GLOVES  = 180.000 VNĐ
STRAP   = 150.000 VNĐ
```

Số lượng:

```text
SHAKER  = 1
GLOVES  = 1
STRAP   = 2
```

Tạm tính:

```text
120.000 + 180.000 + (150.000 × 2)
= 600.000 VNĐ
```

Khách VIP được giảm 10%:

```text
600.000 × 10% = 60.000 VNĐ
```

Tổng thanh toán:

```text
540.000 VNĐ
```

## 4. Kỹ thuật sử dụng

- `do-while` để lặp menu.
- `switch-case` để xử lý lựa chọn.
- `trim()` để xóa khoảng trắng.
- `toUpperCase()` để chuẩn hóa chữ.
- `startsWith()` để kiểm tra tiền tố.
- `slice()` để tách mã.
- `for` để tính tiền các sản phẩm.
- `repeat()` để tạo đường viền hóa đơn.
- `padStart()` để căn chỉnh hóa đơn.
- `default` để xử lý lựa chọn không hợp lệ.
