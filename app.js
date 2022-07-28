const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ALPARGATA CLASS",
    price: 120.000,
    colors: [
      {
        code: "black",
        img: "./img/alpargatanegra.png",
      },
      {
        code: "blue",
        img: "./img/alpargataazul.png",
      },
    ],
  },
  {
    id: 2,
    title: "ALPARGATA COLOR",
    price: 149.000,
    colors: [
      {
        code: "lightgray",
        img: "./img/alpargata1.png",
      },
      {
        code: "lightgray",
        img: "./img/alpargatacolores.png",
      },
    ],
  },
  {
    id: 3,
    title: "ALPARGATA FIQUE",
    price: 99.000,
    colors: [
      {
        code: "lightgray",
        img: "./img/alpargatasfique.png",
      },
      {
        code: "blue",
        img: "./img/alpargatasfique.png",
      },
    ],
  },
  {
    id: 4,
    title: "ALPARGATA CUÑA",
    price: 129.000,
    colors: [
      {
        code: "black",
        img: "./img/alpargatadecuña.png",
      },
      {
        code: "lightgray",
        img: "./img/alpargatadecuña.png",
      },
    ],
  },
  {
    id: 5,
    title: "ALPARGATA OTAVALEÑA",
    price: 119.000,
    colors: [
      {
        code: "gray",
        img: "./img/otovaleñas.png",
      },
      {
        code: "black",
        img: "./img/otovaleñas.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //cambiar la diapositiva actual
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //cambiar el producto elegido
    choosenProduct = products[index];

    //cambiar los textos del producto actual
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //asignar colores
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
