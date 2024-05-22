// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let checkQuantity = inventory.map((inventorys) => inventorys.quantity)
console.log(checkQuantity)

let minQuantity = Math.min(...checkQuantity)
console.log(minQuantity)

minProduct = inventory

for (items of inventory) {
  if (items.quantity === minQuantity) {
      minProduct = items.name
    break;
  }
}
console.log(minProduct)

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProduct} ซึ่งมี ${minQuantity} ชิ้น`);
