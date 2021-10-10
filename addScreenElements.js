export const renderPercentage = (itemList) => {
    const containerDivItem = document.querySelector("#summa");
    containerDivItem.innerHTML = `A bevásárlólista <span id="summa" style="font-size: ${percentage(itemList) / 2 > 0 ? percentage(itemList) / 2 : 10}px"> ${percentage(itemList)} </span> %-át teljesítetted`;
    const summa = document.getElementById("summa");
    summa.style.color = `${createColor(Number(percentage(itemList)))}`;


}

const createColor = (percentage) => {
    if (0 <= percentage && percentage < 40) return "red"
    if (40 <= percentage && percentage < 80) return "blue"
    else return "green"

}

export const renderImage = (number) => {
    const containerDivItem = document.querySelector("#pipa");
    if (number === 100) {
        containerDivItem.innerHTML = '<img src="https://www.tekportal.net/wp-content/uploads/2018/11/tick-off.jpg">';
    } else {
        containerDivItem.innerHTML = '';
    }

}
