let products = [
  {
    id: 15487,
    title: 'Кожанная сумка Lakestone Sandy',
    price: 3250,
    description:
      'Рюкзак Ashwood Leather G-35 сделан из высококачественной натуральной кожи.',
    category: 'Рюкзаки',
    image: [
      'img/PRODUCTS/1rukzak1.jpg',
      'img/PRODUCTS/1rukzak2.jpg',
      'img/PRODUCTS/1rukzak3.jpg',
    ],
    status: 'Новинка',
    sale: '',
    rating: 'ХИТ!',
  },
  {
    id: 15487,
    title: 'Сумка мужская деловая',
    price: 7896,
    description:
      'Рюкзак Ashwood Leather G-35 сделан из высококачественной натуральной кожи.',
    category: 'Сумки',
    image: [
      'img/PRODUCTS/1sumki1.jpg',
      'img/PRODUCTS/1sumki2.jpg',
      'img/PRODUCTS/1sumki3.jpg',
    ],
    status: 'Новинка',
    sale: 30,
    rating: '',
  },
  {
    id: 21879,
    title: 'Бумажник Visconti AT62 Hector',
    price: 6000,
    description:
      'Стильный мужской кожаный ремень Miguel Bellido с пряжкой. Натуральная кожа и удобный зажим полотна.',
    category: 'Кошельки',
    image: [
      'img/PRODUCTS/1koselok1.jpg',
      'img/PRODUCTS/1koselok2.jpg',
      'img/PRODUCTS/1koselok3.jpg',
    ],
    status: 'Новинка',
    sale: 20,
    rating: '',
  },
  {
    id: 22318,
    title: 'Кожанный ремень Miguel Bellido',
    price: 1900,
    description:
      'Стильный мужской кожаный ремень Miguel Bellido с пряжкой. Натуральная кожа и удобный зажим полотна.',
    category: 'Ремни',
    image: [
      'img/PRODUCTS/1remen1.jpg',
      'img/PRODUCTS/1remen2.jpg',
      'img/PRODUCTS/1remen3.jpg',
    ],
    status: 'Новинка',
    sale: '',
    rating: 'ХИТ!',
  },
  {
    id: 21879,
    title: 'Бумажник Visconti AT62 Hector',
    price: 6000,
    description:
      'Стильный мужской кожаный ремень Miguel Bellido с пряжкой. Натуральная кожа и удобный зажим полотна.',
    category: 'Кошельки',
    image: [
      'img/PRODUCTS/2koselok1.jpg',
      'img/PRODUCTS/2koselok2.jpg',
      'img/PRODUCTS/2koselok3.jpg',
    ],
    status: 'Новинка',
    sale: 20,
    rating: '',
  },
  {
    id: 15487,
    title: 'Кожанная сумка Lakestone Sandy',
    price: 3250,
    description:
      'Рюкзак Ashwood Leather G-35 сделан из высококачественной натуральной кожи.',
    category: 'Рюкзаки',
    image: [
      'img/PRODUCTS/2rukzak1.jpg',
      'img/PRODUCTS/2rukzak2.jpg',
      'img/PRODUCTS/2rukzaak3.jpg',
    ],
    status: 'Новинка',
    sale: '',
    rating: '',
  },
  {
    id: 15487,
    title: 'Сумка мужская деловая',
    price: 3996,
    description:
      'Рюкзак Ashwood Leather G-35 сделан из высококачественной натуральной кожи.',
    category: 'Сумки',
    image: [
      'img/PRODUCTS/2sumki1.jpg',
      'img/PRODUCTS/2sumki2.jpg',
      'img/PRODUCTS/2sumki3.jpg',
    ],
    status: 'Новинка',
    sale: '',
    rating: '',
  },

  {
    id: 22318,
    title: 'Кожанный ремень Miguel Bellido',
    price: 1900,
    description:
      'Стильный мужской кожаный ремень Miguel Bellido с пряжкой. Натуральная кожа и удобный зажим полотна.',
    category: 'Ремни',
    image: [
      'img/PRODUCTS/2remni1.jpg',
      'img/PRODUCTS/2remni2.jpg',
      'img/PRODUCTS/2remni3.jpg',
    ],
    status: 'Новинка',
    sale: 50,
    rating: 'ХИТ!',
  },
]
// let searchIcon = document.querySelector('.search-icon')


// searchIcon.addEventListener('click', () => {
//     let data = products.filter((e) => e.title.includes('а'))
//     localStorage.setItem('search', JSON.stringify(data))
//     location.href = 'search.html'
//   })


let mBasket = document.getElementById('mobileBasket')
let right = document.querySelector('.right')
mBasket.addEventListener('click', () => {
  mBasket.classList.toggle('active')
})

let catalogbtn = document.getElementById('catalog')
let sideCatalog = document.querySelector('.side-catalog')
let mobileBottom = document.querySelector('.mobile-bottom')
let burger = document.querySelector('.burger')

catalogbtn.addEventListener('click', () => {
  sideCatalog.style.transform = `translate(0)`
  mobileBottom.classList.add('none')
  burger.innerHTML = `<img src="img/Сlose.svg" alt="">`
})
let topnav = document.querySelector('.topnav')
burger.addEventListener('click', () => {
  if (burger.innerHTML == `<img src="img/Сlose.svg" alt="">`) {
    sideCatalog.style.transform = `translate(-1000px)`
    mobileBottom.classList.remove('none')
    burger.innerHTML = `<img src="img/Burger.svg" alt="">`
  } else if ((burger.innerHTML = `<img src="img/Burger.svg" alt="">`)) {
    topnav.classList.toggle('burgerActive')
    mobileBottom.classList.toggle('none')
  }
})

let searchbtn = document.querySelector('.searchIcon')
let searchWindow = document.querySelector('.absoluteDiv')

searchbtn.addEventListener('click', () => {
  searchWindow.classList.toggle('display')
  searchbtn.innerHTML = `<img src="img/closee.svg" alt="">`
  if (!searchWindow.classList.contains('display')) {
    searchbtn.innerHTML = `<img src="img/search.svg" alt="">`
  }
})

let close = document.querySelectorAll('.close')
let abAccount = document.querySelector('.abAccount')
let accountBtn = document.getElementById('bottomAccount')

accountBtn.addEventListener('click', () => {
  abAccount.style.display = 'block'
})

close.forEach((e) => {
  e.addEventListener('click', () => {
    for (let i = 0; i < [...close].length; i++) {
      ;[...close][i].parentElement.parentElement.style.display = 'none'
    }
  })
})
let register = document.querySelector('.register')
let link = document.getElementById('registerlink')

link.addEventListener('click', () => {
  register.style.display = 'block'
})

let card = document.querySelector('.item-cards')
if (window.innerWidth > 926) {
  for (let i = 0; i < 8; i++) {
    let saleprice =
      products[i].price - (products[i].price * products[i].sale) / 100
    card.innerHTML += ` <div class="item-card">
  <div class="span"> <div class="status">${products[i].status}</div>
  ${
    products[i].rating != ''
      ? `<div class="rating">${products[i].rating}</div>`
      : ''
  }
${
  products[i].sale != ''
    ? `<div class="sale">Скидка -${products[i].sale}%</div>`
    : ''
} 
  </div>
   <div class="img-div">
      <div class="swiper productSlide" >
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="${
                products[i].image[0]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[1]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[2]
              }" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
   </div>
   <div class="main">
   <span class="id">Код: ${products[i].id}</span>
   <h2>${products[i].title}
   </h2>
   <p>${products[i].description}</p></div>
  <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
    saleprice,
  )} p.</span> <span class="old-price">${
      products[i].price
    } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
 </div>`
  }
}
let oldprice = document.querySelectorAll('.old-price')
let price = document.querySelectorAll('.price')

for (let i = 0; i < oldprice.length; i++) {
  if (oldprice[i].innerText == price[i].innerText) {
    oldprice[i].style.display = 'none'
  }
}
let newItemBtn = document.querySelector('.newitembtn')
let hitsBtn = document.querySelector('.hitsbtn')
let saleItemBtn = document.querySelector('.saleitembtn')
let select = document.getElementById('btn-group1')
if (window.innerWidth > 926) {
  function newItem() {
    const result = products.filter((a) => a.status == 'Новинка')
    card.innerHTML = ''
    for (let i = 0; i < 8; i++) {
      let saleprice = result[i].price - (result[i].price * result[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
    <div class="span"> <div>${result[i].status}</div>
    ${
      result[i].rating != ''
        ? `<div class="rating">${result[i].rating}</div>`
        : ''
    }
  ${
    result[i].sale != ''
      ? `<div class="sale">Скидка -${result[i].sale}%</div>`
      : ''
  } 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${
                  result[i].image[0]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result[i].image[1]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result[i].image[2]
                }" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id">Код: ${result[i].id}</span>
     <h2>${result[i].title}
     </h2>
     <p>${result[i].description}</p></div>
    <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
      saleprice,
    )} p.</span> <span class="old-price">${
        result[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
    }
  }
}
if (window.innerWidth > 926) {
  function hitsItem() {
    const result1 = products.filter((a) => a.rating == 'ХИТ!')
    card.innerHTML = ''
    for (let i = 0; i < 8; i++) {
      let saleprice =
        result1[i].price - (result1[i].price * result1[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
    <div class="span"> <div>${result1[i].status}</div>
    ${
      result1[i].rating != ''
        ? `<div class="rating">${result1[i].rating}</div>`
        : ''
    }
  ${
    result1[i].sale != ''
      ? `<div class="sale">Скидка -${result1[i].sale}%</div>`
      : ''
  } 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${
                  result1[i].image[0]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result1[i].image[1]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result1[i].image[2]
                }" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id">Код: ${result1[i].id}</span>
     <h2>${result1[i].title}
     </h2>
     <p>${result1[i].description}</p></div>
    <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
      saleprice,
    )} p.</span> <span class="old-price">${
        result1[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
    }
  }
}
if (window.innerWidth > 926) {
  function saleItem() {
    const result2 = products.filter((a) => a.sale !== '')
    card.innerHTML = ''
    for (let i = 0; i < 8; i++) {
      let saleprice =
        result2[i].price - (result2[i].price * result2[i].sale) / 100
      card.innerHTML += ` <div class="item-card">
    <div class="span"> <div>${result2[i].status}</div>
    ${
      result2[i].rating != ''
        ? `<div class="rating">${result2[i].rating}</div>`
        : ''
    }
  ${
    result2[i].sale != ''
      ? `<div class="sale">Скидка -${result2[i].sale}%</div>`
      : ''
  } 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${
                  result2[i].image[0]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result2[i].image[1]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result2[i].image[2]
                }" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id">Код: ${result2[i].id}</span>
     <h2>${result2[i].title}
     </h2>
     <p>${result2[i].description}</p></div>
    <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
      saleprice,
    )} p.</span> <span class="old-price">${
        result2[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
    }
  }
}
newItemBtn.addEventListener('click', () => {
  newItem()
})
hitsBtn.addEventListener('click', () => {
  hitsItem()
})
saleItemBtn.addEventListener('click', () => {
  saleItem()
})
select.addEventListener('change', () => {
  if (select.value == 'Новинки') {
    newItem()
  }
  if (select.value == 'Хиты продаж') {
    hitsItem()
  }
  if (select.value == 'Выгодные скидки') {
    saleItem()
  }
})

// ---------------------------FORSMALLSCREENS-----------------------------

if (window.innerWidth <= 926) {
  for (let i = 0; i < 4; i++) {
    let saleprice =
      products[i].price - (products[i].price * products[i].sale) / 100
    card.innerHTML += ` <div class="item-card">
  <div class="span"> <div>${products[i].status}</div>
  ${
    products[i].rating != ''
      ? `<div class="rating">${products[i].rating}</div>`
      : ''
  }
${
  products[i].sale != ''
    ? `<div class="sale">Скидка -${products[i].sale}%</div>`
    : ''
} 
  </div>
   <div class="img-div">
      <div class="swiper productSlide" >
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="${
                products[i].image[0]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[1]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[2]
              }" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
   </div>
   <div class="main">
   <span class="id">Код: ${products[i].id}</span>
   <h2>${products[i].title}
   </h2>
   <p>${products[i].description}</p></div>
  <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
    saleprice,
  )} p.</span> <span class="old-price">${
      products[i].price
    } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
 </div>`
  }
}
if (window.innerWidth <= 926) {
  function newItem() {
    const result = products.filter((a) => a.status == 'Новинка')
    card.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let saleprice = result[i].price - (result[i].price * result[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
      <div class="span"> <div>${result[i].status}</div>
      ${
        result[i].rating != ''
          ? `<div class="rating">${result[i].rating}</div>`
          : ''
      }
    ${
      result[i].sale != ''
        ? `<div class="sale">Скидка -${result[i].sale}%</div>`
        : ''
    } 
      </div>
       <div class="img-div">
          <div class="swiper productSlide" >
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${
                    result[i].image[0]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result[i].image[1]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result[i].image[2]
                  }" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
       </div>
       <div class="main">
       <span class="id">Код: ${result[i].id}</span>
       <h2>${result[i].title}
       </h2>
       <p>${result[i].description}</p></div>
      <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
        saleprice,
      )} p.</span> <span class="old-price">${
        result[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
     </div>`
    }
  }
}
if (window.innerWidth <= 926) {
  function hitsItem() {
    const result1 = products.filter((a) => a.rating == 'ХИТ!')
    card.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let saleprice =
        result1[i].price - (result1[i].price * result1[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
      <div class="span"> <div>${result1[i].status}</div>
      ${
        result1[i].rating != ''
          ? `<div class="rating">${result1[i].rating}</div>`
          : ''
      }
    ${
      result1[i].sale != ''
        ? `<div class="sale">Скидка -${result1[i].sale}%</div>`
        : ''
    } 
      </div>
       <div class="img-div">
          <div class="swiper productSlide" >
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${
                    result1[i].image[0]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result1[i].image[1]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result1[i].image[2]
                  }" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
       </div>
       <div class="main">
       <span class="id">Код: ${result1[i].id}</span>
       <h2>${result1[i].title}
       </h2>
       <p>${result1[i].description}</p></div>
      <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
        saleprice,
      )} p.</span> <span class="old-price">${
        result1[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
     </div>`
    }
  }
}
if (window.innerWidth <= 926) {
  function saleItem() {
    const result2 = products.filter((a) => a.sale !== '')
    card.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let saleprice =
        result2[i].price - (result2[i].price * result2[i].sale) / 100
      card.innerHTML += ` <div class="item-card">
      <div class="span"> <div>${result2[i].status}</div>
      ${
        result2[i].rating != ''
          ? `<div class="rating">${result2[i].rating}</div>`
          : ''
      }
    ${
      result2[i].sale != ''
        ? `<div class="sale">Скидка -${result2[i].sale}%</div>`
        : ''
    } 
      </div>
       <div class="img-div">
          <div class="swiper productSlide" >
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${
                    result2[i].image[0]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result2[i].image[1]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result2[i].image[2]
                  }" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
       </div>
       <div class="main">
       <span class="id">Код: ${result2[i].id}</span>
       <h2>${result2[i].title}
       </h2>
       <p>${result2[i].description}</p></div>
      <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
        saleprice,
      )} p.</span> <span class="old-price">${
        result2[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
     </div>`
    }
  }
}


