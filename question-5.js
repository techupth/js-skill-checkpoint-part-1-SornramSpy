// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
    if (promotionCode === "SALE20") {
      return products.reduce((totalPrice, products) => totalPrice + products.price * products.quantity * 0.2, 0)
    } else if (promotionCode === "SALE50") {
      return products.reduce((totalPrice, products) => totalPrice + products.price * products.quantity * 0.5, 0)
    } else {
      return products.reduce((totalPrice, products) => totalPrice + products.price * products.quantity , 0) 
    }
}

console.log(products);
console.log(calculateTotalPrice(products, ""))
console.log(calculateTotalPrice(products, "SALE20")) 
console.log(calculateTotalPrice(products, "SALE50")) 



