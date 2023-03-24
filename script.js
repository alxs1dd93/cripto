// document.addEventListener("DOMContentLoaded", () => {
//   let result = document.getElementById("result");
//   url =
//     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let html = "";
//       const titleCoin = [];

//       for (let key in data) {
//         titleCoin.push({
//           name: key,
//           value: data[key],
//         });

//         // let obj = titleCoin;
//       }

//       titleCoin.forEach((item) => {
//         html += `<div>
//           <strong>${item.name}</strong><br>
//           <span>usd:</span> ${item.value.usd}<br>
//           <span>За день:</span> ${item.value.usd_24h_change}
//         </div>`;
//       });

//       result.innerHTML = html;
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   let result = document.getElementById("result");
//   let info = {};
//   url =
//     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let html = '';

//       for (let key in data) {
//         let obj = {
//             name: key,
//             value: data[key]
//           };

//           html += `<div>
//           <strong>${obj.name}</strong><br>
//           <span>usd:</span> ${obj.value.usd}<br>
//           <span>За день:</span> ${obj.value.usd_24h_change}
//         </div>`;
//       }
//       result.innerHTML = html;
//     })
// });

// bitcoin,ethereum,dogecoin

// rus, usd

// const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd%2Crub';
// let result = document.getElementById("result");
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//   const arr = [];
//   html = '';
//   for(let key in data) {
//     arr.push({
//       name: key,
//       value: data[key]
//     })
//   }
//   arr.forEach((item) => {
//     html += `
//     <div>${item.name}</div>
//     `
//   })
//   result.innerHTML = html
// })

// const url = 'https://sparch.loymax.tech/publicapi/v1/PhoneSettings/Active';
// let result = document.getElementById("result");
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//   if(data.result.state === 'Success') {
//     // const arr = [];
//     html = '';

//     data.data.forEach((item) => {
//       html += `
//       <div>${item.id}</div>
//       `
//     })
//     result.innerHTML = html;

//   }
// })

// const url = "https://sladkoezka.loymax.tech/publicapi/api/Merchants";
// let result = document.getElementById("result");
// fetch(url)
//   .then((response) => response.json())
//   .then((response) => {
//     if (response.result.state === "Success") {
//       html = "";
//       response.data.forEach((item) => {
//         html += `
//         <h3>${item.title}</h3>
//         <div><span>${item.location.id}</span> ${item.location.description}</div>
//         `;

//         item.scheduleModel.mon.forEach((day) => {
//           html += `<div>${day.from} - ${day.to}</div>`;
//         })
//       });
//     }

//     // console.log(response.data);
//     result.innerHTML = html;
//   });

// let obj = {
//   id: 2,
//   uid: "1a9a60b2-778e-7f2a-59cb-784f7b1ef386",
//   title: "Сладкоешька-3",
//   internalTitle: "Сладкоешька г.Брянск Димитрова 43",
//   cheduleModel: {
//     "mon": [
//       {
//       "to": "21:00",
//       "from": "09:00"
//     }
//     ],
//     "tue": [{
//       "to": "21:00",
//       "from": "09:00"
//     }],
//     "wed": [{
//       "to": "21:00",
//       "from": "09:00"
//     }],
//     "thu": [{
//       "to": "21:00",
//       "from": "09:00"
//     }],
//     "fri": [{
//       "to": "21:00",
//       "from": "09:00"
//     }],
//     "sat": [{
//       "to": "21:00",
//       "from": "09:00"
//     }],
//     "sun": [{
//       "to": "21:00",
//       "from": "09:00"
//     }]
//   },
// };

// console.log(obj)

// var country = {

//   name: "Швейцария",
//   languages: ["немецкий", "французский", "итальянский"],
//   capital: {

//     name: "Берн",
//     population: 126598
//   },
//   cities: [
//     {
//       name: "Цюрих",
//       population: 378884
//     },
//     {
//       name: "Женева",
//       population: 188634
//     },
//     {
//       name: "Базель",
//       population: 164937
//     }
//   ]
// };

// // вывод всех элементов из country.languages
// console.log("<h3>Официальные языки Швейцарии</h3>");
// for (var i = 0; i < country.languages.length; i++)
// console.log(country.languages[i] + "<br/>");

// // вывод всех элементов из country.cities
// console.log("<h3>Города Швейцарии</h3>");
// for (var i = 0; i < country.cities.length; i++)
// console.log(country.cities[i].name + "<br/>");

// const url = "1https://sladkoezka.loymax.tech/publicapi/api/Merchants";
// let result = document.getElementById("result");
// fetch(url)
//   .then((response) => response.json())
//   .then((response) => {
//     if (response.result.state === "Success") {
//       html = "";
//       response.data.forEach((item) => {
//         html += `
//       <div>
//       <h4>${item.title}</h4>
//         <div>
//           <span>${item.location.id})</span>
//           <span>${item.location.description}</span>
//           <p>${item.contacts}</p>
//         </div>
//       </div>
//       `;
//       item.scheduleModel.mon.forEach((time) => {
//         html += `
//         <div>
//         <span>Понедельник:</span>
//         <span>${time.from} - ${time.to}</span>
//         </div>
//         `
//       })
//       item.scheduleModel.tue.forEach((time) => {
//         html += `
//         <div>
//         <span>Вторник: </span>
//         <span>${time.from} - ${time.to}</span>
//         </div>
//         `
//       })
//       item.scheduleModel.wed.forEach((time) => {
//         html += `
//         <div>
//         <span>Среда: </span>
//         <span>${time.from} - ${time.to}</span>
//         </div>
//         `
//       })
//       item.scheduleModel.thu.forEach((time) => {
//         html += `
//         <div>
//         <span>Четверг: </span>
//         <span>${time.from} - ${time.to}</span>
//         </div>
//         `
//       })
//       item.scheduleModel.fri.forEach((time) => {
//         html += `
//         <div>
//         <span>Пятница :</span>
//         <span>${time.from} - ${time.to}</span>
//         </div>
//         `
//       })
//       });
//       result.innerHTML = html;
//     }
//   })
//   .catch((error) => {
//     result.innerHTML = `<div>
//     <p>Сасай писос</p>
//     </div>`
//   })
//   ;



































const url = `https://sladkoezka.loymax.tech/publicapi/v1.1/offer/?filter.count=2147483647&filter.offerState=Active&filter.type=Original`;
let result = document.getElementById("result");

fetch(url)
.then((response) => response.json())
.then((response) => {
  let html = '';
  response.data.forEach((item, index) => {
    html += `
    <div>
    <span>${ index }</span>
    <h4>${ item.title }</h4>
    </div>
    `
    item.brands.forEach((brand) => {
      html += `
      <span>${ brand.code }</span>
      `
    })
  })
  result.innerHTML = html;
})

const img = document.getElementById('img');
console.log(typeof(img))
img.setAttribute('src', 'https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg')
// img.src = img.src.replace('', 'https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg')