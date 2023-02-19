var clothingCards = document.getElementById("clothContainer");

const cards = [
  {
    id: 1,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    title: "Men Navy Blue Solid Sweatshirt",
    subtitle: "United Colors of Benetton",
    price: "Rs 2599"
  },
  {
    id: 2,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
    title: "Men Black MAMGP T7 Sweat Sporty Jacket",
    subtitle: "Puma",
    price: "Rs 7999"
  },
  {
    id: 3,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
    title: "Men Black Action Parkview Lifestyle Shoes",
    subtitle: "Hush Puppies",
    price: "Rs 6999"
  },
  {
    id: 4,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
    title: "Women Black Solid Lightweight Leather Jacket",
    subtitle: "BARESKIN",
    price: "Rs 9999"
  },
  {
    id: 4,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
    title: "Women Blue Solid Shirt Dress",
    subtitle: "SASSAFRAS",
    price: "Rs 5200"
  },
];

let output = "";
for (let i = 0; i < cards.length; i++) {
output += `<div class="card" id="${cards[i].id}">
    <div class="img"><img src="${cards[i].img}"></div>
    <div class="details">
        <h3>${cards[i].title}</h3>
        <h4>${cards[i].subtitle}</h4>
        <h5>${cards[i].price}</h5>
    </div>
</div>`
}

clothingCards.innerHTML = output;