'use strict';

// Dữ liệu khách hàng
const customerName = "Tran Thi Mai";
const customerAge = 20;
const movieRating = "T18";
const seatType = "VIP";
const isStudent = true;
const isWeekday = true;

// Giá vé
const BASE_PRICE = 80000;

let surcharge = 0;
let seatName = "";
let discountPercent = 0;
let ticketPrice = 0;
let discountAmount = 0;
let finalPayment = 0;
let isValid = true;

// Kiểm tra độ tuổi
if (movieRating === "T18" && customerAge < 18) {
    console.warn(
        "GIAO DICH THAT BAI: Khach hang duoi 18 tuoi khong duoc phep xem phim nhan T18!"
    );
    isValid = false;
}

if (isValid) {
    // Xác định phụ thu theo loại ghế
    switch (seatType) {
        case "STANDARD":
            surcharge = 0;
            seatName = "Ghe Thuong";
            break;

        case "VIP":
            surcharge = 15000;
            seatName = "Ghe VIP";
            break;

        case "COUPLE":
            surcharge = 40000;
            seatName = "Ghe Doi Couple";
            break;

        default:
            console.error("GIAO DICH THAT BAI: Loai ghe khong hop le!");
            isValid = false;
    }
}

if (isValid) {
    // Tính giảm giá
    if (isStudent === true && isWeekday === true) {
        discountPercent = 20;
    } else {
        discountPercent = 0;
    }

    // Tính tiền
    ticketPrice = BASE_PRICE + surcharge;
    discountAmount = (ticketPrice * discountPercent) / 100;
    finalPayment = ticketPrice - discountAmount;

    // Quà tặng bằng toán tử ba ngôi
    const giftMessage = seatType === "COUPLE"
        ? "Tang 01 ly nuoc ngot co lon"
        : "Khong ap dung qua tang";

    // Xuất hóa đơn
    console.log(`
========================================
       HOA DON BAN VE CINEMA CGV
========================================
Khach hang: ${customerName}
Do tuoi: ${customerAge} | Nhan phim: ${movieRating} (Hop le)
Hang ghe: ${seatName}
Gia ve co so: ${BASE_PRICE} VND
Phu thu ghe: ${surcharge} VND
Tong gia ve goc: ${ticketPrice} VND
Chiet khau HSSV (${discountPercent}%): -${discountAmount} VND
----------------------------------------
TONG TIEN THANH TOAN: ${finalPayment} VND
Uu dai di kem: ${giftMessage}
========================================
`);
}