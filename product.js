//Profile

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

//Cart

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".addToCart");
  const cartItemCount = document.querySelector(".icon-cart span");
  const cartItemsList = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cart-total");

  let cartItems = [];
  let totalAmount = 0;

  addToCartButtons.forEach((button, home) => {
    button.addEventListener("click", () => {
      const item = {
        name: document.querySelectorAll(
          ".row .phone .product .new-product, .title"
        )[home].textContent,
        price: parseFloat(
          document.querySelectorAll(".price")[home].textContent.slice(1)
        ),
        quantity: 1,
      };

      const exisitingItem = cartItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (exisitingItem) {
        exisitingItem.quantity++;
      } else {
        cartItems.push(item);
      }

      totalAmount += item.price;

      updateCartUI();
    });

    function updateCartUI() {
      updateCartItemCount(cartItems.length);
      updateCartItemList();
      updateCartTotal(0);
    }

    function updateCartItemCount(count) {
      cartItemCount.textContent = count;
    }

    function updateCartItemList() {
      cartItemsList.innerHTML = "";
      cartItems.forEach((item, home) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item", "individual-cart-item");
        cartItem.innerHTML = `
                <span>(${item.quantity}x)${item.name}</span>
                <span class="cart-item-price">$${(
                  item.price * item.quantity
                ).toFixed(2)}
                <button class="remove-item" data-home="${home}"><i class='bx bx-trash'></i></button>
                </span>
                `;

        cartItemsList.append(cartItem);
      });

      const removeButtons = document.querySelectorAll(".remove-item");
      removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const home = event.target.dataset.home;
          removeItemFromCart(home);
        });
      });
    }

    function removeItemFromCart(home) {
      const removeItem = cartItems.splice(home, 1)[0];
      totalAmount -= removeItem.price * removeItem.quantity;
      updateCartUI();
    }

    function updateCartTotal() {
      cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }
  });
});

let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".sidebar-close");
let cart = document.querySelector(".sidebar");
let checkout = document.querySelector(".checkout-btn");

iconCart.addEventListener("click", () => {
  cart.classList.toggle("open");
});

closeCart.addEventListener("click", () => {
  cart.classList.toggle("open");
});

checkout.addEventListener("click", () => {
  cart.classList.toggle("open");
});

//Review

const review = document.querySelector(".Review");
const closeReview = document.querySelector(".close-review");
const openReview = document.querySelector(".review");

review.addEventListener("click", () => {
  openReview.classList.toggle("open-review");
});

closeReview.addEventListener("click", () => {
  openReview.classList.toggle("open-review");
});

const btn = document.querySelector(".btn");
const post = document.querySelector(".post");
const rate = document.querySelector(".rate");
const edit = document.querySelector(".edit");

btn.onclick = () => {
  rate.style.display = "none";
  post.style.display = "block";
  edit.onclick = () => {
    rate.style.display = "block";
    post.style.display = "none";
    return false;
  };
};

//Specification
//Samsung

const s24 = document.querySelector(".s24");
const closeS24 = document.getElementById("close-s24");
const openS24 = document.getElementById("s24");

s24.addEventListener("click", () => {
  openS24.classList.toggle("open-spaci");
});

closeS24.addEventListener("click", () => {
  openS24.classList.toggle("open-spaci");
});

const zfold5 = document.querySelector(".zfold5");
const closeZfold5 = document.getElementById("close-zfold5");
const openZfold5 = document.getElementById("zfold5");

zfold5.addEventListener("click", () => {
  openZfold5.classList.toggle("open-spaci");
});

closeZfold5.addEventListener("click", () => {
  openZfold5.classList.toggle("open-spaci");
});

const s24u = document.querySelector(".s24u");
const closeS24u = document.getElementById("close-s24u");
const openS24u = document.getElementById("s24u");

s24u.addEventListener("click", () => {
  openS24u.classList.toggle("open-spaci");
});

closeS24u.addEventListener("click", () => {
  openS24u.classList.toggle("open-spaci");
});

const f55 = document.querySelector(".f55");
const closeF55 = document.getElementById("close-f55");
const openF55 = document.getElementById("f55");

f55.addEventListener("click", () => {
  openF55.classList.toggle("open-spaci");
});

closeF55.addEventListener("click", () => {
  openF55.classList.toggle("open-spaci");
});

//iPhone

const ip15 = document.querySelector(".ip15");
const closeiP15 = document.getElementById("close-ip15");
const openiP15 = document.getElementById("ip15");

ip15.addEventListener("click", () => {
  openiP15.classList.toggle("open-spaci");
});

closeiP15.addEventListener("click", () => {
  openiP15.classList.toggle("open-spaci");
});

const ip15pro = document.querySelector(".ip15pro");
const closeiP15pro = document.getElementById("close-ip15pro");
const openiP15pro = document.getElementById("ip15pro");

ip15pro.addEventListener("click", () => {
  openiP15pro.classList.toggle("open-spaci");
});

closeiP15pro.addEventListener("click", () => {
  openiP15pro.classList.toggle("open-spaci");
});

const ip13mini = document.querySelector(".ip13mini");
const closeiP13mini = document.getElementById("close-ip13mini");
const openiP13mini = document.getElementById("ip13mini");

ip13mini.addEventListener("click", () => {
  openiP13mini.classList.toggle("open-spaci");
});

closeiP13mini.addEventListener("click", () => {
  openiP13mini.classList.toggle("open-spaci");
});

const ip13pro = document.querySelector(".ip13pro");
const closeiP13pro = document.getElementById("close-ip13pro");
const openiP13pro = document.getElementById("ip13pro");

ip13pro.addEventListener("click", () => {
  openiP13pro.classList.toggle("open-spaci");
});

closeiP13pro.addEventListener("click", () => {
  openiP13pro.classList.toggle("open-spaci");
});

//iPad

const ipad10 = document.querySelector(".ipad10");
const closeiPad10 = document.getElementById("close-ipad10");
const openiPad10 = document.getElementById("ipad10");

ipad10.addEventListener("click", () => {
  openiPad10.classList.toggle("open-spaci");
});

closeiPad10.addEventListener("click", () => {
  openiPad10.classList.toggle("open-spaci");
});

const ipad13pro = document.querySelector(".ipad13pro");
const closeiPad13pro = document.getElementById("close-ipad13pro");
const openiPad13pro = document.getElementById("ipad13pro");

ipad13pro.addEventListener("click", () => {
  openiPad13pro.classList.toggle("open-spaci");
});

closeiPad13pro.addEventListener("click", () => {
  openiPad13pro.classList.toggle("open-spaci");
});

const ipad11pro = document.querySelector(".ipad11pro");
const closeiPad11pro = document.getElementById("close-ipad11pro");
const openiPad11pro = document.getElementById("ipad11pro");

ipad11pro.addEventListener("click", () => {
  openiPad11pro.classList.toggle("open-spaci");
});

closeiPad11pro.addEventListener("click", () => {
  openiPad11pro.classList.toggle("open-spaci");
});

//Xiaomi

const xi14 = document.querySelector(".xi14");
const closeXi14 = document.getElementById("close-xi14");
const openXi14 = document.getElementById("xi14");

xi14.addEventListener("click", () => {
  openXi14.classList.toggle("open-spaci");
});

closeXi14.addEventListener("click", () => {
  openXi14.classList.toggle("open-spaci");
});

const civi3 = document.querySelector(".civi3");
const closeCivi3 = document.getElementById("close-civi3");
const openCivi3 = document.getElementById("civi3");

civi3.addEventListener("click", () => {
  openCivi3.classList.toggle("open-spaci");
});

closeCivi3.addEventListener("click", () => {
  openCivi3.classList.toggle("open-spaci");
});

const xi14pro = document.querySelector(".xi14pro");
const closeXi14pro = document.getElementById("close-xi14pro");
const openXi14pro = document.getElementById("xi14pro");

xi14pro.addEventListener("click", () => {
  openXi14pro.classList.toggle("open-spaci");
});

closeXi14pro.addEventListener("click", () => {
  openXi14pro.classList.toggle("open-spaci");
});

const k70pro = document.querySelector(".k70pro");
const closeK70pro = document.getElementById("close-k70pro");
const openK70pro = document.getElementById("k70pro");

k70pro.addEventListener("click", () => {
  openK70pro.classList.toggle("open-spaci");
});

closeK70pro.addEventListener("click", () => {
  openK70pro.classList.toggle("open-spaci");
});

//Huawei

const enjoy70 = document.querySelector(".enjoy70");
const closeEnjoy70 = document.getElementById("close-enjoy70");
const openEnjoy70 = document.getElementById("enjoy70");

enjoy70.addEventListener("click", () => {
  openEnjoy70.classList.toggle("open-spaci");
});

closeEnjoy70.addEventListener("click", () => {
  openEnjoy70.classList.toggle("open-spaci");
});

const mate60 = document.querySelector(".mate60");
const closeMate60 = document.getElementById("close-mate60");
const openMate60 = document.getElementById("mate60");

mate60.addEventListener("click", () => {
  openMate60.classList.toggle("open-spaci");
});

closeMate60.addEventListener("click", () => {
  openMate60.classList.toggle("open-spaci");
});

const matex3 = document.querySelector(".matex3");
const closeMatex3 = document.getElementById("close-matex3");
const openMatex3 = document.getElementById("matex3");

matex3.addEventListener("click", () => {
  openMatex3.classList.toggle("open-spaci");
});

closeMatex3.addEventListener("click", () => {
  openMatex3.classList.toggle("open-spaci");
});

//Watch

const watch8 = document.querySelector(".watch8");
const closeWatch8 = document.getElementById("close-watch8");
const openWatch8 = document.getElementById("watch8");

watch8.addEventListener("click", () => {
  openWatch8.classList.toggle("open-spaci");
});

closeWatch8.addEventListener("click", () => {
  openWatch8.classList.toggle("open-spaci");
});

const watchu = document.querySelector(".watchu");
const closeWatchu = document.getElementById("close-watchu");
const openWatchu = document.getElementById("watchu");

watchu.addEventListener("click", () => {
  openWatchu.classList.toggle("open-spaci");
});

closeWatchu.addEventListener("click", () => {
  openWatchu.classList.toggle("open-spaci");
});

const watch8se = document.querySelector(".watch8se");
const closeWatch8se = document.getElementById("close-watch8se");
const openWatch8se = document.getElementById("watch8se");

watch8se.addEventListener("click", () => {
  openWatch8se.classList.toggle("open-spaci");
});

closeWatch8se.addEventListener("click", () => {
  openWatch8se.classList.toggle("open-spaci");
});

const watchfe = document.querySelector(".watchfe");
const closeWatchfe = document.getElementById("close-watchfe");
const openWatchfe = document.getElementById("watchfe");

watchfe.addEventListener("click", () => {
  openWatchfe.classList.toggle("open-spaci");
});

closeWatchfe.addEventListener("click", () => {
  openWatchfe.classList.toggle("open-spaci");
});

//Tablet

const xipad = document.querySelector(".xipad");
const closeXipad = document.getElementById("close-xipad");
const openXipad = document.getElementById("xipad");

xipad.addEventListener("click", () => {
  openXipad.classList.toggle("open-spaci");
});

closeXipad.addEventListener("click", () => {
  openXipad.classList.toggle("open-spaci");
});

const matepad11 = document.querySelector(".matepad11");
const closeMatepad11 = document.getElementById("close-matepad11");
const openMatepad11 = document.getElementById("matepad11");

matepad11.addEventListener("click", () => {
  openMatepad11.classList.toggle("open-spaci");
});

closeMatepad11.addEventListener("click", () => {
  openMatepad11.classList.toggle("open-spaci");
});

const matepadA = document.querySelector(".matepadA");
const closeMatepadA = document.getElementById("close-matepadA");
const openMatepadA = document.getElementById("matepadA");

matepadA.addEventListener("click", () => {
  openMatepadA.classList.toggle("open-spaci");
});

closeMatepadA.addEventListener("click", () => {
  openMatepadA.classList.toggle("open-spaci");
});

const pad6sp = document.querySelector(".pad6sp");
const closePad6sp = document.getElementById("close-pad6sp");
const openPad6sp = document.getElementById("pad6sp");

pad6sp.addEventListener("click", () => {
  openPad6sp.classList.toggle("open-spaci");
});

closePad6sp.addEventListener("click", () => {
  openPad6sp.classList.toggle("open-spaci");
});

