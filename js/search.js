let t = JSON.parse(localStorage.getItem('search'))
let rightDiv = document.querySelector('#searchResult')
let container=document.querySelector('.container')

if (t.length !== 0) {
  t.forEach((e) => {
    let saleprice = e.price - (e.price * e.sale) / 100
    rightDiv.innerHTML += `<div class="item-card">
    <div class="span"> ${e.status != '' ? `<div class="status">${e.status}</div>` : ''}
    ${e.rating != '' ? `<div class="rating">${e.rating}</div>` : ''}
  ${e.sale != '' ? `<div class="sale">Скидка -${e.sale}%</div>` : ''} 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${e.image[0]}" alt=""></div>
                <div class="swiper-slide"><img src="${e.image[1]}" alt=""></div>
                <div class="swiper-slide"><img src="${e.image[2]}" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id">Код: ${e.id}</span>
     <h2>${e.title}
     </h2>
     <p>${e.description}</p></div>
    <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
      saleprice,
    )} p.</span> <span class="old-price">${
      e.price
    } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
  })
} else {
  container.innerHTML = `<div class="noresult">
  <div>
      <h1>404</h1>
      <h3>Страница не найдена</h3>
      <p>Страница, которую вы ищете, была перемещена, удалена, переименована или никогда не существовала.</p>
      <button>Перейти на главную</button>
  </div>
</div>`
}
console.log(t)

let productcount = document.querySelector('.productCount')
productcount.innerHTML = `${t.length}`

let buttonFilter = document.querySelector('#get-filter-result')
let from = document.querySelector('#price-from')
let to = document.querySelector('#price-to')
let range = document.querySelector('#price-range')
let color = document.querySelectorAll('#color-checkbox input')
let brand = document.querySelectorAll('#brand-checkbox input')
let country = document.querySelectorAll('#country-checkbox input')
let size = document.querySelectorAll('#size-checkbox input')

buttonFilter.addEventListener("click", () => {
  let a = [...color].filter( e => e.checked)
  color = a.map( e => e.value)

  let b = [...country].filter( e => e.checked)
  country = b.map( e => e.value)
 
  let c = [...brand].filter( e => e.checked)
  brand = c.map( e => e.value)

  let s = [...size].filter( e => e.checked)
  size = s.map( e => Number(e.value))

  console.log(x);
  // let x = t.filter( e => 
  // (from.value.length > 0 ? e.price > Number(from.value) : true )&& 
  // (to.value.length > 0 ? e.price < Number(to.value) : true) && 
  // (color.length > 0 ? color.includes(e.color) : true ) && 
  // (country.length > 0 ? country.includes(e.country) : true) && 
  // (brand.length > 0 ? brand.includes(e.brand) : true))

  // console.log(x);
})

// function colorF() {
//   color.forEach((a) => {
//     if (a.checked == true) {
//       checkboxValue.push(a.value)
//     }
//   })
//   if (checkboxValue.length !== 0) {
//     for (let i = 0; i < checkboxValue.length; i++) {
//       for (let j = 0; j < t.length; j++) {
//         if (checkboxValue[i] == t[j].color) {
//           rightDiv.innerHTML=''
//           let saleprice = t[j].price - (t[j].price * t[j].sale) / 100
//                   rightDiv.innerHTML += `<div class="item-card">
//                 <div class="span"> <div>${t[j].status}</div>
//                 ${t[j].rating != '' ? `<div class="rating">${t[j].rating}</div>` : ''}
//               ${t[j].sale != '' ? `<div class="sale">Скидка -${t[j].sale}%</div>` : ''}
//                 </div>
//                  <div class="img-div">
//                     <div class="swiper productSlide" >
//                         <div class="swiper-wrapper">
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[0]
//                             }" alt=""></div>
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[1]
//                             }" alt=""></div>
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[2]
//                             }" alt=""></div>
//                         </div>
//                         <div class="swiper-pagination"></div>
//                     </div>
//                  </div>
//                  <div class="main">
//                  <span class="id">Код: ${t[j].id}</span>
//                  <h2>${t[j].title}
//                  </h2>
//                  <p>${t[j].description}</p></div>
//                 <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
//                   saleprice,
//                 )} p.</span> <span class="old-price">${
//                     t[j].price
//                   } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
//                </div>`
//         }
//       }
//     }
//   }
// }
// function brandF() {
//   let brandValue = []
//   brand.forEach((a) => {
//     if (a.checked == true) {
//       brandValue.push(a.value)
//     }
//   })
//   if (brandValue.length !== 0) {
//     for (let i = 0; i < brandValue.length; i++) {
//       rightDiv.innerHTML=''
//       for (let j = 0; j < t.length; j++) {
//         if (brandValue[i] == t[j].brand) {
          
//           let saleprice = t[j].price - (t[j].price * t[j].sale) / 100
//                   rightDiv.innerHTML += `<div class="item-card">
//                 <div class="span"> <div>${t[j].status}</div>
//                 ${t[j].rating != '' ? `<div class="rating">${t[j].rating}</div>` : ''}
//               ${t[j].sale != '' ? `<div class="sale">Скидка -${t[j].sale}%</div>` : ''}
//                 </div>
//                  <div class="img-div">
//                     <div class="swiper productSlide" >
//                         <div class="swiper-wrapper">
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[0]
//                             }" alt=""></div>
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[1]
//                             }" alt=""></div>
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[2]
//                             }" alt=""></div>
//                         </div>
//                         <div class="swiper-pagination"></div>
//                     </div>
//                  </div>
//                  <div class="main">
//                  <span class="id">Код: ${t[j].id}</span>
//                  <h2>${t[j].title}
//                  </h2>
//                  <p>${t[j].description}</p></div>
//                 <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
//                   saleprice,
//                 )} p.</span> <span class="old-price">${
//                     t[j].price
//                   } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
//                </div>`
//         }
//       }
//     }
//   }
// }
// function countryF() {
//   let countryValue = []
//   country.forEach((a) => {
//     if (a.checked == true) {
//       countryValue.push(a.value)
//     }
//   })
//   if (countryValue.length !== 0) {
//     rightDiv.innerHTML=''
//     for (let i = 0; i < countryValue.length; i++) {
//       for (let j = 0; j < t.length; j++) {
//         if (countryValue[i] == t[j].country) {
          
//           let saleprice = t[j].price - (t[j].price * t[j].sale) / 100
//                   rightDiv.innerHTML += `<div class="item-card">
//                 <div class="span"> <div>${t[j].status}</div>
//                 ${t[j].rating != '' ? `<div class="rating">${t[j].rating}</div>` : ''}
//               ${t[j].sale != '' ? `<div class="sale">Скидка -${t[j].sale}%</div>` : ''}
//                 </div>
//                  <div class="img-div">
//                     <div class="swiper productSlide" >
//                         <div class="swiper-wrapper">
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[0]
//                             }" alt=""></div>
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[1]
//                             }" alt=""></div>
//                             <div class="swiper-slide"><img src="${
//                               t[j].image[2]
//                             }" alt=""></div>
//                         </div>
//                         <div class="swiper-pagination"></div>
//                     </div>
//                  </div>
//                  <div class="main">
//                  <span class="id">Код: ${t[j].id}</span>
//                  <h2>${t[j].title}
//                  </h2>
//                  <p>${t[j].description}</p></div>
//                 <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
//                   saleprice,
//                 )} p.</span> <span class="old-price">${
//                     t[j].price
//                   } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
//                </div>`
//         }
//       }
//     }
//   }
// }
// function sizeF() {
//   let sizeValue = []
//   size.forEach((a) => {
//     if (a.checked == true) {
//       sizeValue.push(a.value)
//     }
//   })
//   if (sizeValue.length !== 0) {
//     rightDiv.innerHTML=''
//     for (let i = 0; i < sizeValue.length; i++) {
//       for (let j = 0; j < t.length; j++) {
//         for (let k = 0; k < t[j].size.length; k++) {
//           if (sizeValue[i] == t[j].size[k]) {
            
//             let saleprice = t[j].price - (t[j].price * t[j].sale) / 100
//                     rightDiv.innerHTML += `<div class="item-card">
//                   <div class="span"> <div>${t[j].status}</div>
//                   ${t[j].rating != '' ? `<div class="rating">${t[j].rating}</div>` : ''}
//                 ${t[j].sale != '' ? `<div class="sale">Скидка -${t[j].sale}%</div>` : ''}
//                   </div>
//                    <div class="img-div">
//                       <div class="swiper productSlide" >
//                           <div class="swiper-wrapper">
//                               <div class="swiper-slide"><img src="${
//                                 t[j].image[0]
//                               }" alt=""></div>
//                               <div class="swiper-slide"><img src="${
//                                 t[j].image[1]
//                               }" alt=""></div>
//                               <div class="swiper-slide"><img src="${
//                                 t[j].image[2]
//                               }" alt=""></div>
//                           </div>
//                           <div class="swiper-pagination"></div>
//                       </div>
//                    </div>
//                    <div class="main">
//                    <span class="id">Код: ${t[j].id}</span>
//                    <h2>${t[j].title}
//                    </h2>
//                    <p>${t[j].description}</p></div>
//                   <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
//                     saleprice,
//                   )} p.</span> <span class="old-price">${
//                       t[j].price
//                     } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
//                  </div>`
//           }
//         }
//       }
//     }
//   }
// }

// buttonFilter.addEventListener('click', () => {
//   colorF()
//   brandF()
//   countryF()
//   sizeF()
// })

// buttonFilter.addEventListener('click', () => {
//   let fromdata = from.value
//   let todata = to.value
//   range.setAttribute('value', parseInt(todata))
//   if (fromdata.length !== 0 && todata.length !== 0) {
//     rightDiv.innerHTML = ''
//     t.forEach((e) => {
//       if (e.price >= parseInt(fromdata) && e.price <= parseInt(todata)) {
//         let saleprice = e.price - (e.price * e.sale) / 100
//         rightDiv.innerHTML += `<div class="item-card">
//       <div class="span"> <div>${e.status}</div>
//       ${e.rating != '' ? `<div class="rating">${e.rating}</div>` : ''}
//     ${e.sale != '' ? `<div class="sale">Скидка -${e.sale}%</div>` : ''}
//       </div>
//        <div class="img-div">
//           <div class="swiper productSlide" >
//               <div class="swiper-wrapper">
//                   <div class="swiper-slide"><img src="${
//                     e.image[0]
//                   }" alt=""></div>
//                   <div class="swiper-slide"><img src="${
//                     e.image[1]
//                   }" alt=""></div>
//                   <div class="swiper-slide"><img src="${
//                     e.image[2]
//                   }" alt=""></div>
//               </div>
//               <div class="swiper-pagination"></div>
//           </div>
//        </div>
//        <div class="main">
//        <span class="id">Код: ${e.id}</span>
//        <h2>${e.title}
//        </h2>
//        <p>${e.description}</p></div>
//       <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
//         saleprice,
//       )} p.</span> <span class="old-price">${
//           e.price
//         } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
//      </div>`
//       }
//     })
//   }
// })
