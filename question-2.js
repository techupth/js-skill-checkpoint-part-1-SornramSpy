// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200
console.log(inventory) 

inventory.push({name: "Orange", price: 20, quantity: 300})
console.log(inventory)

const totalQuantity = inventory.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalQuantity} บาท`);
