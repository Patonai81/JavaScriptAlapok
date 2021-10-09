import {calculateSum} from "./calculator.js";

export const initLesson= () =>
    document.querySelector("#saveButton").addEventListener('click', event => console.log(event));

//export const initLessons2 = () => {document.getElementById("saveButton").onclick= function() { alert("Hello"); }};
export const initLessons2 = () => {document.getElementById("saveButton").onclick= event => {
    lessons.forEach(l => console.log(l));
}};



const placeHolder = "placeHolder string";

const lesson1 = {
    name: `Modern JavaScript és webfejlesztés alapok ismétlése ${placeHolder}`,
    duration: 75,
    isCompleted: false
}

const lesson2 = {
    name: 'Modern JavaScript gyakorlás',
    duration: 90,
    isCompleted: false
}

const lesson3 = {
    name: 'HTTP és aszinkronitás',
    duration: 88,
    isCompleted: false
}

const lesson4 = {
    name: 'HTTP és aszinkronitás gyakorlás',
    duration: 93,
    isCompleted: false
}

const lesson5 = {
    name: 'Haladó CSS (FlexBox és Grid)',
    duration: 80,
    isCompleted: false
}

const lesson6 = {
    name: 'WebComponents',
    duration: 76,
    isCompleted: false
}

const lesson7 = {
    name: 'Időjárás alkalmazás 1.',
    duration: 70,
    isCompleted: false
}

const lesson8 = {
    name: 'Időjárás alkalmazás 2.',
    duration: 84,
    isCompleted: true
}

const lessons = [lesson1,lesson2,lesson3,lesson4,lesson5,lesson6,lesson7,lesson8];

export const createList = () =>{
    const containerElement = document.querySelector("#tmbLista");
    lessons.forEach(listElement => {

        containerElement.innerHTML = containerElement.innerHTML +`<div>
            <input type="checkbox" ${listElement.isCompleted ===true ? "checked":""}>${listElement.name} óra neve ${listElement.duration} perc</input></div>`;

    });

    const sum = calculateSum(lessons.map(item => item.duration) );
   document.querySelector("#hossz").textContent = sum;
}

document.querySelector("#saveButton").addEventListener("click", event =>{
    const inputs=document.querySelectorAll("input");
    inputs.forEach((element,index) => {
        lessons[index].isCompleted=element.checked;

    });
    console.log(lessons);
})


export const createList2 = () => {
    const containerElement = document.getElementById("tmbLista");
    lessons.forEach(listElement => {
        const div = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        div.appendChild(checkbox);
        containerElement.appendChild(div);

  //     const child = document.createTextNode(`<div> <input type="checkbox" ${listElement.isCompleted === true ? "checked" : ""}>aaa</input></div>`);
  //     containerElement.appendChild(child);
    });
}