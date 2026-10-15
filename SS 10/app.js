
let library = [
    {
        bookCode: "B01",
        title: "Lap trinh JavaScript",
        category: "Cong nghe",
        price: 120000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A1"
    },
    {
        bookCode: "B02",
        title: "Lap trinh Java",
        category: "Cong nghe",
        price: 150000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A2"
    },
    {
        bookCode: "B03",
        title: "Co so du lieu",
        category: "Cong nghe",
        price: 100000,
        totalCopies: 6,
        availableCopies: 0,
        shelfLocation: "B1"
    },
    {
        bookCode: "B04",
        title: "Tin hoc dai cuong",
        category: "Giao duc",
        price: 80000,
        totalCopies: 4,
        availableCopies: 2,
        shelfLocation: "C1"
    }
];

function addBook(book) {
    library.push(book);
    console.log("Da nhap kho sach: " + book.title);
}

addBook({
    bookCode: "B05",
    title: "Lap trinh Python",
    category: "Cong nghe",
    price: 130000,
    totalCopies: 5,
    availableCopies: 5,
    shelfLocation: "A3"
});

function borrowBook(bookCode) {
    let found = false;

    for (let i = 0; i < library.length; i++) {
        if (library[i].bookCode === bookCode) {
            found = true;

            if (library[i].availableCopies > 0) {
                library[i].availableCopies--;

                console.log("Muon sach thanh cong: " + library[i].title);

                if (library[i].availableCopies === 0) {
                    console.log("HET SACH TREN KE");
                }
            } else {
                console.log("Sach da het tren ke!");
            }

            break;
        }
    }

    if (!found) {
        console.log("Khong tim thay ma sach: " + bookCode);
    }
}

borrowBook("B01");

function moveBook(bookCode, newLocation) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].bookCode === bookCode) {
            library[i].shelfLocation = newLocation;
            console.log("Da chuyen sach " + bookCode + " den ke " + newLocation);
            return;
        }
    }

    console.log("Khong tim thay sach can chuyen!");
}

moveBook("B02", "D1");

function liquidateBook(bookCode) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].bookCode === bookCode) {
            let removedBook = library.splice(i, 1);
            console.log("Da thanh ly sach: " + removedBook[0].title);
            return;
        }
    }

    console.log("Khong tim thay sach can thanh ly!");
}

liquidateBook("B04");

function inventoryReport() {
    let totalBookTitles = 0;
    let totalCopies = 0;
    let totalAvailable = 0;
    let totalAssetValue = 0;

    console.log("\n+------+----------------------+----------+---------------------+-------------+");
    console.log("| Ma   | Ten sach             | So luong | Con tren ke         | Gia tri     |");
    console.log("+------+----------------------+----------+---------------------+-------------+");

    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let assetValue = book.totalCopies * book.price;

        let status = book.availableCopies === 0
            ? "HET SACH"
            : String(book.availableCopies);

        totalBookTitles++;
        totalCopies += book.totalCopies;
        totalAvailable += book.availableCopies;
        totalAssetValue += assetValue;

        console.log(
            "| " + book.bookCode.padEnd(4) +
            " | " + book.title.padEnd(20) +
            " | " + String(book.totalCopies).padStart(8) +
            " | " + status.padEnd(19) +
            " | " + assetValue.toLocaleString("vi-VN").padStart(11) + " |"
        );
    }

    console.log("+------+----------------------+----------+---------------------+-------------+");
    console.log("Tong dau sach: " + totalBookTitles);
    console.log("Tong so luong sach: " + totalCopies);
    console.log("Tong sach con tren ke: " + totalAvailable);
    console.log("Tong gia tri tai san kho: " +
        totalAssetValue.toLocaleString("vi-VN") + " VND");
}

inventoryReport();
