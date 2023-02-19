var clothingCards = document.getElementById("clothContainer");

const cards = [
  {
    id: 1,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    title: "Men Navy Blue Solid Sweatshirt",
    subtitle: "United Colors of Benetton",
    price: "Rs 2599",
  },
  {
    id: 2,
    img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
    title: "Men Black MAMGP T7 Sweat Sporty Jacket",
    subtitle: "Puma",
    price: "Rs 7999",
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