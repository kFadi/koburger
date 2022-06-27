const app_ver = "App Version 3.0";
const max_addons = 3;
const initial_price = 42;

let total_price = initial_price;

let price1 = 5;
let price2 = 1;
let price3 = 1;
let price4 = 1;
let price5 = 1;

let price_double_burger = 15;
let price_healthy_bun = 5;
let price_size_fries = 5;
let price_size_drink = 5;

let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;
let cnt4 = 0;
let cnt5 = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////

function btnSubmitFcn() {
  alert("an eXtraordinary KoBurger 🍔 is on the way to your stomach 🤣 ");
  btnResetFcn();
}

function btnResetFcn() {
  document.getElementById("check-kosher").checked = false;

  while (cnt1 > 0) {
    cheeseRemoveFcn();
  }
  while (cnt2 > 0) {
    sauceRemoveFcn();
  }
  while (cnt3 > 0) {
    onionRemoveFcn();
  }
  while (cnt4 > 0) {
    lettuceRemoveFcn();
  }
  while (cnt5 > 0) {
    tomatoRemoveFcn();
  }

  document.getElementById("clr-config-2").checked = true;
  document.getElementById("clr-meal-3").checked = true;
  document.getElementById("clr-next-to-1").checked = true;
  colorConfigFcn();
  colorMealFcn();
  colorNextToFcn();

  document.getElementById("btn-cheese-remove").disabled = true;
  document.getElementById("btn-sauce-remove").disabled = true;
  document.getElementById("btn-onion-remove").disabled = true;
  document.getElementById("btn-lettuce-remove").disabled = true;
  document.getElementById("btn-tomato-remove").disabled = true;

  document.getElementById("select-burger").selectedIndex = 0;
  document.getElementById("check-double").checked = false;

  document.getElementById("check-healthy").checked = false;
  document.getElementById("check-fries").checked = false;

  document.getElementById("select-drink").selectedIndex = 0;
  document.getElementById("check-zero").checked = false;
  document.getElementById("check-drink-size").checked = false;

  document.getElementById("tt-cheese").title = price1 + " \u20AA";
  document.getElementById("tt-sauce").title = price2 + " \u20AA";
  document.getElementById("tt-onion").title = price3 + " \u20AA";
  document.getElementById("tt-lettuce").title = price4 + " \u20AA";
  document.getElementById("tt-tomato").title = price5 + " \u20AA";
  document.getElementById("t-double-burger").title =
    price_double_burger + " \u20AA";
  document.getElementById("t-healthy-bun").title =
    price_healthy_bun + " \u20AA";
  document.getElementById("t-size-fries").title = price_size_fries + " \u20AA";
  document.getElementById("t-size-drink").title = price_size_drink + " \u20AA";

  checkKosherFcn();
  updateBurgerFcn();
  checkHealthyFcn();
  checkFriesSizeFcn();
  updateDrinkFcn();

  document.getElementById("btn-reset").disabled = true;

  total_price = initial_price;
  update_price();
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function update_price() {
  const total = document.getElementById("total-tag-price");
  total.innerHTML = total_price + " &#8362;";
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function checkKosherFcn() {
  const isKosher = document.getElementById("check-kosher").checked;
  const logo_img = document.getElementById("logo-img");
  logo_img.title = app_ver;

  if (isKosher) {
    while (cnt1 > 0) {
      cheeseRemoveFcn();
    }
    logo_img.src = "/assets/logo72kosher.png";
    logo_img.alt = "KOBURGER KOSHER LOGO";
  } else {
    logo_img.src = "/assets/logo72.png";
    logo_img.alt = "KOBURGER LOGO";
  }

  document.getElementById("cheese-kosher").className = isKosher
    ? "display-yes"
    : "display-no";
  document.getElementById("cheese-cheese").className = isKosher
    ? "display-no"
    : "display-yes";

  document.getElementById("btn-reset").disabled = false;
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function createBurger(idx) {
  const img = document.createElement("img");
  if (idx === 0) {
    img.src = "/assets/meal/burger_beef.png";
    img.alt = "BEEF BURGER";
  } else if (idx === 1) {
    img.src = "/assets/meal/burger_chicken.png";
    img.alt = "CHICKEN BURGER";
  } else {
    img.src = "/assets/meal/burger_veggie.png";
    img.alt = "VEGGIE BURGER";
  }
  return img;
}

function updateBurgerFcn() {
  const checked = document.getElementById("check-double").checked;
  const idx = document.getElementById("select-burger").selectedIndex;
  const controller = document.getElementById("meal-burger");
  controller.innerHTML = "";

  controller.appendChild(createBurger(idx));
  if (checked) {
    controller.appendChild(createBurger(idx));
  }

  document.getElementById("btn-reset").disabled = false;
}

function updateDoubleBurgerFcn() {
  const checked = document.getElementById("check-double").checked;
  total_price += checked ? price_double_burger : -1 * price_double_burger;
  update_price();
  updateBurgerFcn();
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function checkHealthyFcn() {
  const checked = document.getElementById("check-healthy").checked;
  total_price += checked ? price_healthy_bun : -1 * price_healthy_bun;
  update_price();

  let img = document.createElement("img");
  if (checked) {
    img.src = "/assets/meal/bun_upper_healthy.png";
    img.alt = "HEALTHY UPPER BUN";
  } else {
    img.src = "/assets/meal/bun_upper.png";
    img.alt = "UPPER BUN";
  }
  let controller = document.getElementById("meal-upper-bun");
  controller.innerHTML = "";
  controller.appendChild(img);

  img = document.createElement("img");
  if (checked) {
    img.src = "/assets/meal/bun_lower_healthy.png";
    img.alt = "HEALTHY LOWER BUN";
  } else {
    img.src = "/assets/meal/bun_lower.png";
    img.alt = "LOWER BUN";
  }
  controller = document.getElementById("meal-lower-bun");
  controller.innerHTML = "";
  controller.appendChild(img);

  document.getElementById("btn-reset").disabled = false;
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function checkFriesSizeFcn() {
  const checked = document.getElementById("check-fries").checked;
  total_price += checked ? price_size_fries : -1 * price_size_fries;
  update_price();

  const img = document.createElement("img");
  img.id = "fries-img";
  img.className = "size-" + (checked ? "plus" : "reg");

  if (checked) {
    img.src = "/assets/fries/fries_size.png";
    img.alt = "FRIES SIZE";
  } else {
    img.src = "/assets/fries/fries.png";
    img.alt = "FRIES";
  }

  const controller = document.getElementById("next-to-fries");
  controller.innerHTML = "";
  controller.appendChild(img);

  document.getElementById("btn-reset").disabled = false;
}

//////////////////////////////////////////////

function checkDrinkSizeFcn() {
  const checked = document.getElementById("check-drink-size").checked;
  total_price += checked ? price_size_drink : -1 * price_size_drink;
  update_price();
  updateDrinkFcn();
}

function updateDrinkFcn() {
  const isZero = document.getElementById("check-zero").checked;
  const isSize = document.getElementById("check-drink-size").checked;
  const idx = document.getElementById("select-drink").selectedIndex;

  let drnk = "";

  drnk += idx === 0 ? "c" : idx === 1 ? "f" : "s";
  drnk += isZero ? "z" : "";
  drnk += isSize ? "s" : "";

  const img = document.createElement("img");
  img.id = "drink-img";
  img.className = "size-" + (isSize ? "plus" : "reg");

  switch (drnk) {
    case "c":
      img.src = "/assets/drink/cola.png";
      img.alt = "COLA";
      break;
    case "cz":
      img.src = "/assets/drink/cola_zero.png";
      img.alt = "COLA ZERO";
      break;
    case "cs":
      img.src = "/assets/drink/cola_size.png";
      img.alt = "COLA SIZE";
      break;
    case "czs":
      img.src = "/assets/drink/cola_zero_size.png";
      img.alt = "COLA ZERO SIZE";
      break;
    case "f":
      img.src = "/assets/drink/fanta.png";
      img.alt = "FANTA";
      break;
    case "fz":
      img.src = "/assets/drink/fanta_zero.png";
      img.alt = "FANTA ZERO";
      break;
    case "fs":
      img.src = "/assets/drink/fanta_size.png";
      img.alt = "FANTA SIZE";
      break;
    case "fzs":
      img.src = "/assets/drink/fanta_zero_size.png";
      img.alt = "FANTA ZERO SIZE";
      break;
    case "s":
      img.src = "/assets/drink/sprite.png";
      img.alt = "SPRITE";
      break;
    case "sz":
      img.src = "/assets/drink/sprite_zero.png";
      img.alt = "SPRITE ZERO";
      break;
    case "ss":
      img.src = "/assets/drink/sprite_size.png";
      img.alt = "SPRITE SIZE";
      break;
    case "szs":
      img.src = "/assets/drink/sprite_zero_size.png";
      img.alt = "SPRITE ZERO SIZE";
      break;
    default:
  }

  const controller = document.getElementById("next-to-drink");
  controller.innerHTML = "";
  controller.appendChild(img);

  document.getElementById("btn-reset").disabled = false;
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function add(i) {
  const img = document.createElement("img");
  let container;

  switch (i) {
    case 1:
      img.id = "d1-" + ++cnt1;
      img.src = "/assets/meal/cheese.png";
      img.alt = "CHEESE";
      container = document.getElementById("meal-cheese");
      if (cnt1 === max_addons) {
        document.getElementById("btn-cheese-add").disabled = true;
      } else if (cnt1 === 1) {
        document.getElementById("btn-cheese-remove").disabled = false;
      }
      total_price += price1;
      break;

    case 2:
      img.id = "d2-" + ++cnt2;
      img.src = "/assets/meal/sauce.png";
      img.alt = "SAUCE";
      container = document.getElementById("meal-sauce");
      if (cnt2 === max_addons) {
        document.getElementById("btn-sauce-add").disabled = true;
      } else if (cnt2 === 1) {
        document.getElementById("btn-sauce-remove").disabled = false;
      }
      total_price += price2;
      break;

    case 3:
      img.id = "d3-" + ++cnt3;
      img.src = "/assets/meal/onion.png";
      img.alt = "ONION";
      container = document.getElementById("meal-onion");
      if (cnt3 === max_addons) {
        document.getElementById("btn-onion-add").disabled = true;
      } else if (cnt3 === 1) {
        document.getElementById("btn-onion-remove").disabled = false;
      }
      total_price += price3;
      break;

    case 4:
      img.id = "d4-" + ++cnt4;
      img.src = "/assets/meal/lettuce.png";
      img.alt = "LETTUCE";
      container = document.getElementById("meal-lettuce");
      if (cnt4 === max_addons) {
        document.getElementById("btn-lettuce-add").disabled = true;
      } else if (cnt4 === 1) {
        document.getElementById("btn-lettuce-remove").disabled = false;
      }
      total_price += price4;
      break;

    case 5:
      img.id = "d5-" + ++cnt5;
      img.src = "/assets/meal/tomato.png";
      img.alt = "TOMATO";
      container = document.getElementById("meal-tomato");
      if (cnt5 === max_addons) {
        document.getElementById("btn-tomato-add").disabled = true;
      } else if (cnt5 === 1) {
        document.getElementById("btn-tomato-remove").disabled = false;
      }
      total_price += price5;
      break;

    default:
  }

  update_price();
  container.appendChild(img);

  document.getElementById("btn-reset").disabled = false;
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function rem(i) {
  let container, child;

  switch (i) {
    case 1:
      child = document.getElementById("d1-" + cnt1);
      container = document.getElementById("meal-cheese");
      container.removeChild(child);
      cnt1--;
      total_price -= price1;
      if (cnt1 === max_addons - 1) {
        document.getElementById("btn-cheese-add").disabled = false;
      } else if (cnt1 === 0) {
        document.getElementById("btn-cheese-remove").disabled = true;
      }
      break;

    case 2:
      child = document.getElementById("d2-" + cnt2);
      container = document.getElementById("meal-sauce");
      container.removeChild(child);
      cnt2--;
      total_price -= price2;
      if (cnt2 === max_addons - 1) {
        document.getElementById("btn-sauce-add").disabled = false;
      } else if (cnt2 === 0) {
        document.getElementById("btn-sauce-remove").disabled = true;
      }
      break;

    case 3:
      child = document.getElementById("d3-" + cnt3);
      container = document.getElementById("meal-onion");
      container.removeChild(child);
      cnt3--;
      total_price -= price3;
      if (cnt3 === max_addons - 1) {
        document.getElementById("btn-onion-add").disabled = false;
      } else if (cnt3 === 0) {
        document.getElementById("btn-onion-remove").disabled = true;
      }
      break;

    case 4:
      child = document.getElementById("d4-" + cnt4);
      container = document.getElementById("meal-lettuce");
      container.removeChild(child);
      cnt4--;
      total_price -= price4;
      if (cnt4 === max_addons - 1) {
        document.getElementById("btn-lettuce-add").disabled = false;
      } else if (cnt4 === 0) {
        document.getElementById("btn-lettuce-remove").disabled = true;
      }
      break;

    case 5:
      child = document.getElementById("d5-" + cnt5);
      container = document.getElementById("meal-tomato");
      container.removeChild(child);
      cnt5--;
      total_price -= price5;
      if (cnt5 === max_addons - 1) {
        document.getElementById("btn-tomato-add").disabled = false;
      } else if (cnt5 === 0) {
        document.getElementById("btn-tomato-remove").disabled = true;
      }
      break;

    default:
  }

  update_price();
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function cheeseAddFcn() {
  add(1);
}
function sauceAddFcn() {
  add(2);
}
function onionAddFcn() {
  add(3);
}
function lettuceAddFcn() {
  add(4);
}
function tomatoAddFcn() {
  add(5);
}

//////////////////////////////////////////////

function cheeseRemoveFcn() {
  rem(1);
}
function sauceRemoveFcn() {
  rem(2);
}
function onionRemoveFcn() {
  rem(3);
}
function lettuceRemoveFcn() {
  rem(4);
}
function tomatoRemoveFcn() {
  rem(5);
}

//////////////////////////////////////////////
//////////////////////////////////////////////

function colorConfigFcn() {
  const idx = document.getElementById("clr-config-1").checked
    ? 1
    : document.getElementById("clr-config-2").checked
    ? 2
    : 3;
  const cls = "col bg" + idx + (idx === 3 ? "a" : "");
  document.getElementById("config").className = cls;
  
  document.getElementById("btn-reset").disabled = false;
}

function colorMealFcn() {
  const idx = document.getElementById("clr-meal-1").checked
    ? 1
    : document.getElementById("clr-meal-2").checked
    ? 2
    : 3;
  document.getElementById("meal").className = "col bg" + idx;

  document.getElementById("btn-reset").disabled = false;
}

function colorNextToFcn() {
  const idx = document.getElementById("clr-next-to-1").checked
    ? 1
    : document.getElementById("clr-next-to-2").checked
    ? 2
    : 3;
  document.getElementById("next-to").className = "row bg" + idx;

  document.getElementById("btn-reset").disabled = false;
}

//////////////////////////////////////////////
//////////////////////////////////////////////
