const Basket = [
  {
    Item: "Bread",
    Price: 30,
    discount: 1,
    Promo: true,
  },
  {
    Item: "Rice",
    Price: 200,
    discount: 0,
    Promo: false,
  },
  {
    Item: "Meat",
    Price: 340,
    discount: 5,
    Promo: false,
  },
  {
    Item: "Bri",
    Price: 340,
    discount: 15,
    Promo: true,
  },
  {
    Item: "Chicken",
    Price: 140,
    discount: 0,
    Promo: true,
  },
  {
    Item: "Soap",
    Price: 100,
    discount: 5,
    Promo: false,
  },
  {
    Item: "Cream",
    Price: 70,
    discount: 2,
    Promo: true,
  },
  {
    Item: "Milk",
    Price: 80,
    discount: 0,
    Promo: false,
  },
  {
    Item: "Bin",
    Price: 200,
    discount: 0,
    Promo: true,
  },
  {
    Item: "Plastic",
    Price: 100,
    discount: 3,
    Promo: false,
  },
  {
    Item: "Cereal",
    Price: 75,
    discount: 2,
    Promo: true,
  },
];


const basketDiv = document.getElementById("list");

Basket.map((Item)=> {
    // console.log(value)
    basketDiv.innerHTML += `<div class="${
      Item.Promo && Item.discount > 0 ? "red" : "normal"
    }">
        <p>${Item.Item}</p>
        <p>${Item.Price}</p>
        <p>${Item.discount}</p>
        <p>${Item.Promo}</p>
    </div>`;
}); 

/*==============================Discount Items=====================================*/

const basketDiv2 = document.getElementById("discountlist");

Basket.map((Item) => {

  Item.discount == 0 ? Item.Item: 

  basketDiv2.innerHTML += `<div class='discount'>
  <p>${Item.Item}</p>
  <p> R ${Item.Price}</p>
  <p>Discount: ${Item.Price * Item.discount/100}</p>
  <p>Total: R ${Item.Price - Item.Price * Item.discount/100}</p>
  </div>`

});

/*=============================Payment without discount======================================*/


const basketDiv3 = document.getElementById("nondiscount");

const shoping = Basket.reduce((pricediscount, totalprice)=>{

  totalprice.discount == 0? totalprice.Item:

  pricediscount += totalprice.Price;

  basketDiv3.innerHTML = `<div class="totaldsc">
  <p>Total Non-dsc Price: R ${pricediscount}</p>
  </div>`

  return pricediscount
},0);

/*=========================Payment with discount==========================================*/

const basketDiv4 = document.getElementById("totaldiscount");

const shoping2 = Basket.reduce((pricedsc, totalprice)=>{

  const discount = totalprice.Price - totalprice.Price * totalprice.discount/100;

  totalprice.discount == 0? totalprice.Item:

  pricedsc += discount;

  basketDiv4.innerHTML = `<div class="non-dsc">
  <p>Total Discount Price: R ${parseFloat(pricedsc.toFixed(2))}</p>
  </div>`

  return pricedsc
},0);

/*=============================Items with promo ======================================*/

const basketDiv5 = document.getElementById("promo");

Basket.map((Item) => {

  Item.Promo == 0 ? Item.Item: 

  basketDiv5.innerHTML += `<div class='plusdiscount'>
  <p>${Item.Item}</p>
  <p>R ${Item.Price}</p>
  <p>Plus discount: ${Item.discount + 10}%</p>
  <p>${Item.Promo}</p>
  </div>`

});

/*=============================Discount Promo ======================================*/

const basketDiv6 = document.getElementById("plusdsc");

const shoping3 = Basket.reduce((totaldsc, totalprice)=>{

  totalprice.Promo == false? totalprice.Item:

  totaldsc += totalprice.discount + 10;

  basketDiv6.innerHTML = `<div class="total-dsc">
  <p>Total dsc Pecent: ${totaldsc}%</p>
  </div>`

  return totaldsc
},0);
