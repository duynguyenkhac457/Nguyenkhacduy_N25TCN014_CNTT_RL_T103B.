const orderCodeInput = "  GYM-1024  ";
const isVip = true;

const productNames = ["SHAKER", "GLOVES", "STRAP"];
const productPrices = [120000, 180000, 150000];
const productQuantities = [1, 1, 2];

let orderCode = "";
let isOrderValid = false;
let choice;

do {
    console.log("");
    console.log("===== MENU FITNESS GYM =====");
    console.log("1. Nhập và chuẩn hóa mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");

    choice = prompt("Chọn chức năng:");

    switch (choice) {
        case "1":
            orderCode = orderCodeInput.trim().toUpperCase();

            const prefix = orderCode.slice(0, 4);
            const orderNumber = orderCode.slice(4);

            if (orderCode.length >= 8 && orderCode.startsWith("GYM-")) {
                isOrderValid = true;
                console.log("Mã đơn hàng:", orderCode);
                console.log("Tiền tố:", prefix);
                console.log("Số đơn:", orderNumber);
                console.log("Mã đơn hàng hợp lệ.");
            } else {
                isOrderValid = false;
                console.log("Mã đơn hàng không hợp lệ.");
            }
            break;

        case "2":
            if (!isOrderValid) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước.");
                break;
            }

            let total = 0;

            console.log("");
            console.log("-".repeat(40));
            console.log("HÓA ĐƠN PHỤ KIỆN FITNESS");
            console.log("-".repeat(40));
            console.log("Sản phẩm".padStart(10) + " SL".padStart(8) + " Thành tiền".padStart(18));
            console.log("-".repeat(40));

            for (let i = 0; i < productNames.length; i++) {
                const amount = productPrices[i] * productQuantities[i];
                total += amount;

                console.log(
                    productNames[i].padStart(10) +
                    String(productQuantities[i]).padStart(8) +
                    String(amount).padStart(18)
                );
            }

            console.log("-".repeat(40));
            console.log("Tạm tính:".padStart(28) + String(total).padStart(12));

            if (isVip) {
                const discount = total * 0.1;
                total = total - discount;
                console.log("Giảm VIP:".padStart(28) + String(discount).padStart(12));
            }

            console.log("Tổng tiền:".padStart(28) + String(total).padStart(12));
            console.log("-".repeat(40));
            break;

        case "3":
            console.log("Đã thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
    }

} while (choice !== "3");
