# Highlands Coffee - Sửa lỗi chương trình

## 1. Lỗi thứ nhất

Code cũ:

```js
for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++)
```

Đặt 3 ly nhưng vòng lặp chỉ chạy 2 lần.

Vì `cupIndex` chạy:

```text
1
2
```

Sửa thành:

```js
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++)
```

Lúc này vòng lặp chạy 3 lần nên tính đủ 3 ly.

## 2. Lỗi thứ hai

Code cũ đặt giảm giá bên trong vòng lặp:

```js
if (isGoldMember) {
    totalBill = totalBill * 0.9;
}
```

Như vậy mỗi lần thêm một ly lại giảm giá tiếp.

Sửa bằng cách đưa giảm giá ra ngoài vòng lặp.

Kết quả: tính đủ tiền 3 ly trước, sau đó giảm giá 10% một lần.

## 3. Tính tiền đúng

Một ly:

```text
29.000 + 6.000 + (2 × 8.000)
= 51.000 VNĐ
```

Ba ly:

```text
51.000 × 3
= 153.000 VNĐ
```

Giảm 10%:

```text
153.000 × 0.9
= 137.700 VNĐ
```

Kết quả đúng:

```text
137.700 VNĐ
```

## 4. Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---:|---:|
| 3 ly, thành viên Gold | 3 ly, size M, 2 topping/ly, Gold | 45.900 VNĐ | 137.700 VNĐ |
| 3 ly, không thành viên Gold | 3 ly, size M, 2 topping/ly, không Gold | 102.000 VNĐ | 153.000 VNĐ |

## 5. Kết quả

Chương trình sau khi sửa sẽ:

- Tính đủ 3 ly.
- Tính đúng tiền topping.
- Giảm giá Gold 10% đúng một lần.
- Tổng thanh toán đúng là **137.700 VNĐ** với dữ liệu đề bài.
