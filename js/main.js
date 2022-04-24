const elForm = document.getElementById("form");
const elName = document.getElementById("name");
const elEmail = document.getElementById("email");
const elNumber = document.getElementById("number");
const elSelect = document.getElementById("select");
const elCity = document.getElementById("city");
const elModal = document.getElementById("exampleModal");
const addBtn = document.getElementById("addBtn");
const elList = document.getElementById("list");
const newArr = [];
let count = 1;
form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  let elFname = elName.value;
  let elMail = elEmail.value;
  let elNum = elNumber.value;
  let elCategory = elSelect.value;


  newArr.push(
    {
      id: count,
      name: elFname,
      mail: elMail,
      number: elNum,
      cate: elCategory
    });

    console.log(newArr);


  let li = document.createElement("li");
  for(let i = 0; i < newArr.length; i++) {
    li.className = `result__item`;
    li.innerHTML = `
    <p class="result__text">${newArr[i].name}</p>
    <p class="result__text">${newArr[i].mail}</p>
    <p class="result__text">${newArr[i].number}</p>
    <p class="result__text">${newArr[i].cate}</p>
    <div>
      <button class="result__edit border-0" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class='bx bx-edit-alt'></i></button>
      <button id="remove" class="result__del border-0"><i class='bx bx-x' ></i></button>
    </div>
    `;
  }

  elList.appendChild(li);

  count++;
  elName.value = "";
  elEmail.value = "";
  elNumber.value = "";
  elCity.value = "";  

  const elRemove = document.querySelectorAll("#remove");

  elRemove.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.parentNode.remove();
      newArr.forEach(item => {
        delete item.name;
        delete item.mail;
        delete item.number;
        delete item.cate;
      })
    });
  });

}

// let count = 1

// form.addEventListener('submit', addItem);

// function addItem(e) {
//   e.preventDefault();

//   let elFname = elName.value;
//   let elMail = elEmail.value;
//   let elNum = elNumber.value;
//   let elCategory = elSelect.value;


//   newArr.push(
//     {
//       id: count,
//       name: elFname,
//       mail: elMail,
//       number: elNum,
//       cate: elCategory
//     });

//     console.log(newArr);

//     updateBaza()

//     count++;
//     elName.value = "";
//     elEmail.value = "";
//     elNumber.value = "";
//     elCity.value = "";
// }


// const elRemove = document.querySelectorAll("#remove");

//   elRemove.forEach((item) => {
//     item.addEventListener("click", () => {
//       let ids = item.parentNode.parentNode.id;
//       // console.log(item);

//       newArr.forEach(item => {
//         if(ids == item.id) {
//           newArr = newArr.filter(indexs = indexs != item)
//         }

//         updateBaza()
//       })
//     });
//   });


// function updateBaza() {
//   for(let i = 0; i < newArr.length; i++) {
//     let li = document.createElement("li");
//     li.className = `result__item`;
//     li.id = newArr.id;
//     li.innerHTML = `
//     <p class="result__text">${newArr[i].name}</p>
//     <p class="result__text">${newArr[i].mail}</p>
//     <p class="result__text">${newArr[i].number}</p>
//     <p class="result__text">${newArr[i].cate}</p>
//     <div>
//       <button class="result__edit border-0"><i class='bx bx-edit-alt'></i></button>
//       <button id="remove" class="result__del border-0"><i class='bx bx-x' ></i></button>
//     </div>
//     `;

//     elList.appendChild(li);
//   }
// }

const elSearch = document.getElementById("search");

elSearch.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = elList.getElementsByTagName('li');
  console.log(items);

  for (let i = 0; i < Array.from(items).length; i++) {
    let itemName = items[i].textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      items[i].className = "result__item"
    } else {
      items[i].className = "result__item d-none";
    }
  }
}
