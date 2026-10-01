# Kiosk tự phục vụ tại bệnh viện

## 1. Lỗi trong code cũ

### Lỗi 1: Kiểm tra tiền tố

Code cũ kiểm tra:

```js
cleanAppointmentCode.startsWith("MED-")
```

Nhưng mã nhập vào là:

```text
med-nhi-1024
```

Chữ `med` viết thường nên kết quả là `false`.

Cách sửa:

```js
const normalizedCode = cleanAppointmentCode.toUpperCase();
const isValidPrefix = normalizedCode.startsWith("MED-");
```

Sau khi đổi thành chữ in hoa:

```text
MED-NHI-1024
```

kết quả kiểm tra là `true`.

### Lỗi 2: Cắt số thứ tự

Code cũ:

```js
const appointmentNumber = cleanAppointmentCode.slice(8, 12);
```

Mã:

```text
MED-NHI-1024
```

Phần số thứ tự bắt đầu từ vị trí 8 và có 4 chữ số.

Cách sửa đơn giản:

```js
const appointmentNumber = normalizedCode.slice(8, 12);
```

Kết quả:

```text
1024
```

## 2. Kết quả đúng

```text
Bệnh nhân: NGUYỄN VĂN AN
Chuyên khoa: NHI
Số thứ tự tiếp đón: 1024
Trạng thái hợp lệ: true
```

## 3. Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| Mã có khoảng trắng, chữ thường | `"  med-nhi-1024  "` | Tiền tố không hợp lệ | Mã hợp lệ, số thứ tự `1024` |
| Tên bệnh nhân có khoảng trắng | `"  nguyễn văn an  "` | Tên chưa được chuẩn hóa | `NGUYỄN VĂN AN` |
