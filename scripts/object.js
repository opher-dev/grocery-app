const firstEvent = events[0]

// get keys from firstEvent - key:value pairs
const keys = Object.keys(firstEvent);
// console.log(keys)
keys.map(key=>{
    // console.log(key)
});
// for loops, forEach, map,
for(let i =0; i<keys.length; i++) {
    // console.log(keys[i])
}
// new version 1
for(let i of keys){
    // console.log(i)
}
 // new version 2
 for(let i in keys) {
    // console.log(keys[i])
 }

 // forEach 
keys.forEach(item=>{
});
const printData = (message) => {
  document.getElementById("showData").innerHTML += `<p>${message}</p>`;
};
 
for(let a in keys) {
    a%2? printData(`This has an  even index: ${keys[a]}`): printData(`This has an Old Index: ${keys[a]}`)
}
keys.filter(key=> {
    // key === "price" ? printData("Its A Price!"): printData(`Thats Something Else: ${key}!`);
})

const basketItems = [
  {
    promo: true,
    discount: 1,
    price: 30,
    item: "bread"
  },

   {
    promo: true,
    discount: 0,
    price: 200,
    item:"rice"
  },

   {
    promo: true,
    discount: 5,
    price: 340,
    item: "meat"
  },

   {
    promo: true,
    discount: 15,
    price: 340,
    item: "brai"
  },

   {
    promo: true,
    discount: 0,
    price: 140,
    item: "chicken"
  },

   {
    promo: true,
    discount: 5,
    price: 100,
    item: "soap"
  },

   {
    promo: true,
    discount: 2,
    price: 70,
    item: "cremora"
  },

   {
    promo: true,
    discount: 0,
    price: 80,
    item:"milk"
  },
   {
    promo: true,
    discount: 0,
    price: 200,
    item: "bin"
  },
   {
    promo: true,
    discount: 1,
    price: 100,
    item: "plastic" 
  },
   {
    promo: true,
    discount: 5,
    price: 75,
    item: "bin plastic"
  },
];

const basketDiv = document.getElementById("basket");

const name = "Kagisho Pitsi".split(" "); // type array ['Kagisho', "Pitsi"]

const [item1,item2,item3,item4, item5, item6]=basketItems

const {discount, price, item, promo} = item2


const [name1, name2] = name // object destructuring


basketItems.map((item)=> {
    // console.log(value)
    basketDiv.innerHTML += `<div class="${
      item.promo && item.discount > 0 ? "red" : "normal"
    }">
        <p>${item.item}</p>
        <p>${item.price}</p>
        <p>${item.discount}</p>
        <p>${item.promo}</p>
    </div>`;
})





