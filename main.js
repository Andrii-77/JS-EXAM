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

//-------Створюю масив для наповнення інпутами-------
let arr = [];

// -------створюю функцію для кнопки Add-------

formInput.onsubmit = function (ev) {
    ev.preventDefault();
    let userInput = this.inputUser.value;
    if (!userInput.length === 0 || !!userInput.match(/^\s*[A-Za-z\d]+\s*=\s*[A-Za-z\d]+\s*$/)) {
        let splitUserInput = userInput.split('=');
        let userName = splitUserInput[0].trim();
        let userValue = splitUserInput[1].trim();
        let userNameValue = userName + '=' + userValue;
        let p = document.createElement('p');
        p.innerText = userNameValue;
        forSort.appendChild(p);
        arr.push(userNameValue);
        this.inputUser.value = '';
    } else {
        console.log('Not valid input!!!');
    }
};

//-------створюю функцію для кнопки Delete, вона буде використовуватись ще-------
function deleteAllP() {
    const pForDelete = forSort.querySelectorAll('p');
    pForDelete.forEach(item => item.remove());
}

butDelete.onclick = function () {
    deleteAllP();
    arr = [];
};

//-------створюю функцію для кнопки Sort by Name-------
function forNameSorting(a, b) {
    if (a.split('=')[0] > b.split('=')[0]) {
        return 1;
    }
    if (a.split('=')[0] < b.split('=')[0]) {
        return -1;
    }
    {
        return 0;
    }
}

function forPManipulation() {
    deleteAllP();
    for (const element of arr) {
        let p = document.createElement('p');
        p.innerText = element;
        forSort.appendChild(p);
    }
}

butSortByName.onclick = function () {
    arr.sort(forNameSorting);
    forPManipulation();
};

//-------створюю функцію для кнопки Sort by Value-------
function forValueSorting(a, b) {
    if (a.split('=')[1] > b.split('=')[1]) {
        return 1;
    }
    if (a.split('=')[1] < b.split('=')[1]) {
        return -1;
    }
    {
        return 0;
    }
}

butSortByValue.onclick = function () {
    arr.sort(forValueSorting);
    forPManipulation();
};
