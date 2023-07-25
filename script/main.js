// const intro = document.getElementsByTagName('h2');
// const intro = document.getElementsByClassName('cat');
// const intro = document.getElementById('cat');
const intro = document.querySelector('.cat');
intro.innerHTML = 'Hello World, this is JavaScript DOM practice!'
const x = document.getElementById('dom');

// x.innerText = 'We mean business with fullstacj development. I intend to be a fullstack MERN delevoloper.'

x.style.background = 'yellow'

// const matche1 = document.getElementsByClassName('intro');
// matche1[0].innerHTML += ' We are here too'
// console.log(matche1)
// for(let mat of matche1) {
//     mat.style.color = 'green';
//     mat.style.background ='black'
// }

// for (let mat in matche1){
//     matche1[mat].style.background = 'black'
//     matche1[mat].style.color = 'green';
// }
// matche1[0].style.fontWeight = 'bold'
// matche1[matche1.length-1].style.fontStyle ='italic'

// const match = document.getElementsByTagName('p');
// // match[0].innerText = "We love cars"
// // for(let elem in match){
// //     match[elem].innerHTML += ' We love cars too!'
// // }

// const match = document.querySelector('p')
// match.innerHTML += ' Tech guys love cars too!'
// match.style.fontStyle = 'italic'
const newPara = document.createElement('p');
newPara.innerHTML = 'Cars are very fascinating especially when they are <strong>beautifully</strong> designed'

const firstH2 = document.querySelector('.cat');

// firstH2.prepend(newPara);

const firstUL = document.querySelector('#things');

firstUL.append(newPara);

const match = document.getElementsByTagName('p')
match[0].innerHTML += ' Tech guys love cars too!'
match[0].style.fontStyle = 'italic'
for (let elem of match) {
    elem.style.background = 'black'
    elem.style.color = 'red'
};

const btns = document.getElementById("myBtn");

// btns.removeAttribute('id');

btns.setAttribute("disabled", "");

const foot = document.querySelector('#foot'); //get foot id
const newElement = document.createElement('p'); //create p element
newElement.innerHTML = 'We make good cars at affordable price'
foot.appendChild(newElement); //append p element to the foot div

const newh2 = document.createElement('h2');
newh2.innerHTML = 'Give our product a try, we will cherish your feedback'
foot.appendChild(newh2); //append h2 to the foot div

const myImg = document.createElement('img');
myImg.src='/images/mercedes.jpeg'
myImg.alt='Mercedes car'
myImg.style.width = '300px'
foot.appendChild(myImg) //append img element to the foot div.

//CREATE AM NEW AND IMG ELEMENTS AND APPEND TO THE BROWSER
const carDiv = document.createElement('div')//Create div element
carDiv.setAttribute('id', 'cars') //set id attribute
const myImg2 = document.createElement('img'); //create img element
// myImg2.setAttribute('src', '/images/lambor.jpeg')
myImg2.setAttribute('alt', 'Lambor Car')
myImg2.src='/images/lambor.jpeg' //set src attibute
// myImg2.alt='lambor car'
// myImg2.style.width='300px'
carDiv.appendChild(myImg2); //append img to div
const script = document.querySelector('script')
document.body.insertBefore(carDiv, script); //append div to the body

// carDiv.removeChild(myImg2);

const myImg3 = document.createElement('img'); //create img element
myImg3.src='/images/rolls.jpeg' //set src attribute
myImg3.setAttribute('alt', 'rolls car'); //set alt attribute
foot.appendChild(myImg3)
 //append img to the body.
myImg3.remove();
const btn = document.createElement('button');
btn.innerHTML = `Click to see text`
btn.innerHTML = `Click to see text`
btn.style.backgroundColor = 'black';
btn.style.color = 'white';
btn.setAttribute('type', 'button');
btn.setAttribute('onClick', 'seeText()')

const seeText = () => {
const newH6 = document.createElement('h6');
newH6.innerHTML = 'We\'r the new <em>Champions!</em> of the world.'
foot.appendChild(newH6);
const em = document.querySelector('em');
em.style.color = 'purple'
}
foot.appendChild(btn)


function greetWorld () {
    alert('Hello Car Lovers')
}

const btn2 = document.querySelector('#carLovers');

btn2.addEventListener('click', greetWorld);

// btn2.removeEventListener('click', greetWorld);

btn2.addEventListener('mouseover', function() {
    btn2.innerHTML= 'Claim your car!'
});

btn2.addEventListener('mouseout', function() {
    btn2.innerHTML = 'Click Here'
});


const UL = document.querySelector('#things');

const newLI = document.createElement('li');
newLI.innerHTML = 'Any other thing can follow.';

UL.insertAdjacentElement('beforebegin', newLI)
UL.insertAdjacentElement('afterbegin', newLI)
UL.insertAdjacentElement('beforeend', newLI)
UL.insertAdjacentElement('afterend', newLI)

// foot.removeChild(btn)
// btn.remove()




// const currentDiv = document.getElementById('foot')

// document.body.insertBefore(carDiv, currentDiv)