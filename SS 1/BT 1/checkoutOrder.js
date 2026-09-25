'use strict';

// Dữ liệu tiếp nhận từ biểu mẫu đơn hàng dạng chuỗi
const customerName = "Nguyen Thi Mai";
const foodItemName = "Com Tam Suon Bi Cha";
const rawFoodPrice = "55000";
const rawToppingPrice = "15000";
const rawDeliveryFee = "20000";
const voucherDiscount = 10000;

// Ép kiểu chuỗi sang kiểu Number
const foodPrice = Number(rawFoodPrice);
const toppingPrice = Number(rawToppingPrice);
const deliveryFee = Number(rawDeliveryFee);

// Tính tổng tiền món ăn
const foodTotal = foodPrice + toppingPrice;

// Tính tổng tiền thanh toán
const finalPayment = foodTotal + deliveryFee - voucherDiscount;

// Xuất kết quả ra Console bằng Template Literals
console.log(`Khách hàng: ${customerName}`);
console.log(`Món ăn: ${foodItemName}`);
console.log(`Tổng tiền món ăn: ${foodTotal} VND`);
console.log(`Số tiền thanh toán thực tế: ${finalPayment} VND`);