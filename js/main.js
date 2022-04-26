const elForm = document.getElementById("form");
const elFormEdit = document.getElementById("form-edit");
const elName = document.getElementById("name");
const elNameing = document.getElementById("nameing");
const elEmailing = document.getElementById("emailing");
const elNumbering = document.getElementById("numbering");
const elSelecting = document.getElementById("selecting");
const elCitying = document.getElementById("citying");
const elEmail = document.getElementById("email");
const elNumber = document.getElementById("number");
const elSelect = document.getElementById("select");
const elCity = document.getElementById("city");
const elModal = document.getElementById("exampleModal");
const addBtn = document.getElementById("addBtn");
const elList = document.getElementById("list");
const newArr = [];
let count = 1;

elForm.addEventListener('submit', addItem);

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
      <button class="result__edit border-0" onclick="editCard(${newArr[i].id})" data-bs-toggle="modal" data-bs-target="#editModal"><i class='bx bx-edit-alt'></i></button>
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
    item.addEventListener("click", (e) => {
      e.preventDefault();
      
      if(confirm("Are you sure you want to delete it?")){
        item.parentNode.parentNode.remove();
      }; 
    });
  });
}

// newArr.forEach(item => {
//   delete item.name;
//   delete item.mail;
//   delete item.number;
//   delete item.cate;
// })

function editCard(elId){
  console.log(elId);
  newArr.forEach(item => {
    if(elId === item.id){
      elNameing.value = item.name;
      elEmailing.value = item.mail;
      elNumbering.value = item.number;
      elSelecting.value = item.cate;
      editItem(elId);
    }
  });
}


function editUpdate() {
  elList.innerHTML = null;
  for(let i = 0; i < newArr.length; i++) {
    let li = document.createElement("li");
    li.className = `result__item`;
    li.innerHTML = `
    <p class="result__text">${newArr[i].name}</p>
    <p class="result__text">${newArr[i].mail}</p>
    <p class="result__text">${newArr[i].number}</p>
    <p class="result__text">${newArr[i].cate}</p>
    <div>
      <button class="result__edit border-0" onclick="editCard(${newArr[i].id})" data-bs-toggle="modal" data-bs-target="#editModal"><i class='bx bx-edit-alt'></i></button>
      <button id="remove" class="result__del border-0"><i class='bx bx-x' ></i></button>
    </div>
    `;
    elList.appendChild(li);
  }
}

function editItem(elId){
  let a = 1;
  elFormEdit.addEventListener("submit", (e) => {
    e.preventDefault();

    if(a == 1){
      newArr[elId - 1].name = elNameing.value;
      newArr[elId - 1].mail = elEmailing.value;
      newArr[elId - 1].number = elNumbering.value;
      newArr[elId - 1].cate = elSelecting.value;
      editUpdate(newArr);
      a++;
    }
  });
}

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


const elTxt = document.getElementById("txt");
elTxt.addEventListener("click", ()=> {
  newArr.sort((a, b) => {
    if(a.name > b.name) {
      return 1 
    }
    if(a.name < b.name) {
      return -1 
    }
    return 0
  })
  editUpdate()
})

const elTxting = document.getElementById("txting");
elTxting.addEventListener("click", ()=> {
  newArr.sort((c, e) => {
    if(c.mail > e.mail) {
      return 1 
    }
    if(c.mail < e.mail) {
      return -1 
    }
    return 0
  })
  editUpdate()
})

const elNuming = document.getElementById("numing");
elNuming.addEventListener("click", ()=> {
  newArr.sort((f, g) => {
    if(f.number > g.number) {
      return 1 
    }
    if(f.mail < g.mail) {
      return -1 
    }
    return 0
  })
  editUpdate()
})
// class Square {
//   constructor(_width){
//     this.width = _width;
//     this.height = _width;
//     this.num = 0;
//   }

//   get area(){
//     this.num++;
//     return this.width * this.height;
//   }

//   set area(value){
//     this.width = Math.sqrt(value);
//     this.height = this.width;
//   }
// }

// let Square1 = new Square(25);
// console.log(Square1.area);
// console.log(Square1.area);
// console.log(Square1);
// Square1.area = 100;
// console.log(Square1.width);