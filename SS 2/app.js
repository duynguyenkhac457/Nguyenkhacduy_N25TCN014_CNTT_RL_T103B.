'use strict';

// Thiết lập thông tin chuyến đi GrabRide
const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 4;
const isHeavyRain = true;

// Thiết lập bảng giá
const baseFare = 12000;
const extraFarePerKm = 4500;

let totalFare = 0;

// Kiểm tra dữ liệu đầu vào
if (distanceInKm < 0) {
    console.log("Lỗi: Quãng đường không hợp lệ.");
} else if (distanceInKm <= 2) {
    // 2 km đầu tiên chỉ tính cước cơ bản
    totalFare = baseFare;
} else {
    // Chỉ tính phí cho số km vượt quá 2 km
    const extraDistance = distanceInKm - 2;

    totalFare = baseFare + extraDistance * extraFarePerKm;
}

// Áp dụng phụ phí mưa lớn
if (isHeavyRain && distanceInKm >= 0) {
    totalFare = totalFare * 1.2;
}

// Xuất kết quả ra Console
console.log("Mã chuyến đi:", bookingId);
console.log("Khách hàng:", customerName);
console.log("Quãng đường:", distanceInKm, "km");
console.log("Tổng cước chuyến đi:", totalFare, "VNĐ");