let div = document.getElementsByTagName("div")[0];

console.log(div);
let h3 = div.firstElementChild
console.log(h3);
let niv3 = document.getElementsByTagName("h3")[2];

console.log(niv3);

let precedent = niv3.previousElementSibling;

console.log(precedent);

let suivant = niv3.nextElementSibling;

console.log(suivant);

let li = document.getElementsByClassName("important")[0];

let ul = li.parentElement
console.log(ul);


let textGeneral = document.getElementById('textGeneral').nextElementSibling.nextElementSibling;

console.log(textGeneral);


let p = document.getElementsByTagName("span")[1].parentElement.nextElementSibling;

console.log(p);

let primo = document.getElementsByTagName("b")[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild

console.log(primo);

let grandPara = document.querySelector('p.grandParagraphe')
console.log(grandPara);


let li_li = document.querySelectorAll('li');
console.log(li_li);
li_li.forEach(element => {
    console.log(element);
});