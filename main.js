//------створюю обгортку------
const divWrap = document.createElement('div');
divWrap.classList.add("cl_wrap");
document.body.appendChild(divWrap);

//-------створюю header зі слово Test------
const header = document.createElement('header');
header.classList.add("cl_header");
header.innerText = 'Test';
divWrap.appendChild(header);

//-------створюю поле для вводу від клієнта-------
let formInput = document.forms[0];
divWrap.appendChild(formInput);


//-------створюю label_2 для опису другого вікна------
let label_2 = document.createElement('div');
label_2.classList.add("cl_label_2");
label_2.innerText = 'Name/Value Pair List';
divWrap.appendChild(label_2);

//-------створюю поле main-------
const main = document.createElement('main');
main.classList.add("cl_main");
const forSort = document.createElement('div');
forSort.classList.add("cl_forSort");
const forButtons = document.createElement('div');
forButtons.classList.add("cl_forButtons");
divWrap.appendChild(main);
main.append(forSort, forButtons);

//-------створюю buttons в поле forButtons------
const butSortByName = document.createElement('button');
butSortByName.innerText = "Sort by Name";
const butSortByValue = document.createElement('button');
butSortByValue.innerText = "Sort by Value";
const butDelete = document.createElement('button');
butDelete.innerText = "Delete";
butDelete.classList.add("cl_butDelete");
forButtons.append(butSortByName, butSortByValue, butDelete);

//-------створюю функцію для кнопки Add-------
formInput.onsubmit = function (ev) {
    ev.preventDefault();
    // прописати захист від пустого поля вводу і без =!!!!!!!!!!!!!!!!!!!!!!
    let userInput = this.inputUser.value;
    let splitUserInput = userInput.split('=');
    let userName = splitUserInput[0].trim();
    let userValue = splitUserInput[1].trim();
    if (!!userName.match((/[^A-Za-z\d]+/g)) || !!userValue.match((/[^A-Za-z\d]+/g))) {
        console.log('Wrong symbol!!!')
    } else {
        let userNameValue = userName + '=' + userValue;
        let p = document.createElement('p');
        p.innerText = userNameValue;
        forSort.appendChild(p);
    }
};

//-------створюю функцію для кнопки Delete-------
butDelete.onclick = function () {
    const pForDelete = forSort.querySelectorAll('p');
    pForDelete.forEach(item => item.remove());
};

//-------створюю функцію для кнопки Sort by Name-------
butSortByName.onclick = function () {
    console.log('NAME!!!');
};

//-------створюю функцію для кнопки Sort by Value-------
butSortByValue.onclick = function () {
    console.log('VALUE!!!');
};
