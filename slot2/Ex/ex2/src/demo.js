let tong = (a, b) => a + b;
//Gọi hàm tổng với a = 5 và b = 3, sau đó in kết quả ra console
console.log(tong(5, 3)); //out put là 8

let chao = () => 
     console.log("Xin chao cac ban!");
chao();

let chaoTen = (ten) => `Xin chao, ${ten}!`;
console.log(chaoTen("LocNB")); //out put là "Xin chao, LocNB!"

// Viet ham Chao2 nhan 1 tham so la 1 doi tuong Person co cac thuoc tinh id, name, age, address.
// Sau do in ra loi chao voi ten cua doi tuong do.
// Goi ham Chao2 voi mot doi tuong person mau.
let chao2 = (person) => `Xin chao, ${person.name}!`;
let person = {
    id: 1,
    name: "LocNB",
    age: 20,
    address: "123 Nguyen Trai, Hanoi"
};
console.log(chao2(person)); // Output: Xin chao, LocNB!