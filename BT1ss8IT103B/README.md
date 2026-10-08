# Bài tập sửa lỗi trạm sạc VinFast

## 1. Mục tiêu

- Phân biệt cơ chế hàng đợi FIFO (First In First Out).
- Sử dụng `shift()` để lấy phần tử đầu mảng.
- Không sử dụng `pop()` vì `pop()` lấy phần tử cuối mảng.
- Sửa lỗi vượt quá chỉ số mảng do dùng `i <= array.length`.
- Đảm bảo tổng sản lượng điện và doanh thu được tính chính xác.

## 2. Phân tích lỗi

### Lỗi 1: Dùng `pop()` sai nghiệp vụ

Mã nguồn cũ:

```javascript
const nextVehicle = waitingQueue.pop();
```

`pop()` lấy phần tử cuối cùng của mảng.

Với dữ liệu:

```javascript
['29A-112.33', '30E-889.12', '51K-678.99']
```

`pop()` sẽ lấy:

```text
51K-678.99
```

Điều này sai với quy tắc FIFO vì xe `29A-112.33` là xe đến đầu tiên và phải được sạc trước.

### Cách sửa

Dùng:

```javascript
const nextVehicle = waitingQueue.shift();
```

`shift()` lấy phần tử đầu tiên của mảng.

Kết quả đúng:

```text
29A-112.33
```

---

### Lỗi 2: Điều kiện vòng lặp vượt quá chỉ số mảng

Mã nguồn cũ:

```javascript
for (let i = 0; i <= completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}
```

Mảng có:

```text
length = 4
```

Các chỉ số hợp lệ là:

```text
0, 1, 2, 3
```

Nhưng điều kiện:

```javascript
i <= completedSessionsKwh.length
```

cho phép `i = 4`.

Khi đó:

```javascript
completedSessionsKwh[4]
```

có giá trị:

```javascript
undefined
```

Sau đó:

```javascript
totalKwh += undefined;
```

làm `totalKwh` trở thành:

```text
NaN
```

### Cách sửa

Dùng:

```javascript
for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}
```

Điều kiện `<` đảm bảo chỉ truy cập các chỉ số hợp lệ từ `0` đến `length - 1`.

---

## 3. Test Cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 - Điều phối xe theo hàng đợi FIFO | `['29A-112.33', '30E-889.12', '51K-678.99']` | Dùng `pop()` nên điều phối `51K-678.99` | Dùng `shift()` nên điều phối `29A-112.33` |
| TC02 - Tính tổng sản lượng và doanh thu | `[45.2, 30.5, 62.8, 28.0]`, giá `4500 VNĐ/kWh` | Dùng `i <= length`, truy cập `undefined` và kết quả thành `NaN` | Tổng sản lượng `166.5 kWh`, doanh thu `749250 VNĐ` |

## 4. Kết quả tính toán

Tổng sản lượng:

```text
45.2 + 30.5 + 62.8 + 28.0 = 166.5 kWh
```

Doanh thu:

```text
166.5 × 4500 = 749250 VNĐ
```

Kết quả chương trình:

```text
Xe được điều phối vào sạc: 29A-112.33
Tổng sản lượng: 166.5 kWh
Tổng doanh thu: 749250 VNĐ
```

## 5. Code đã sửa

File `app.js` chỉ sử dụng những kiến thức cơ bản đã học:

- `const`
- `let`
- Mảng
- `shift()`
- `for`
- `length`
- Phép cộng và phép nhân
- `console.log()`

Không sử dụng cấu trúc dữ liệu hoặc thuật toán nâng cao.

## 6. Cách chạy

Mở Terminal trong thư mục chứa file và chạy:

```bash
node app.js
```

Kết quả mong đợi:

```text
Xe được điều phối vào sạc: 29A-112.33
Tổng sản lượng: 166.5 kWh
Tổng doanh thu: 749250 VNĐ
```
