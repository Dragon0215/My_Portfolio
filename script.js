const statisticNum1 = document.querySelector(".statistics__number1"),
    statisticNum2 = document.querySelector(".statistics__number2"),
    statisticNum3 = document.querySelector(".statistics__number3"),
    items = document.querySelectorAll(".main-navigation__item"),
    age = document.querySelector(".age");

let num1 = 0,
    num2 = 0,
    num3 = 0;

setInterval(
    function() {
        if(statisticNum1.innerHTML == 150+"+"){
            clearInterval()
        } else {
            num1++;
            statisticNum1.innerHTML = num1 + "+";
        }
    }
,10)

setInterval(
    function() {
        if(statisticNum2.innerHTML == 300+"+"){
            clearInterval()
        } else {
            num2++;
            statisticNum2.innerHTML = num2 + "+";
        }
    }
,5)
setInterval(
    function() {
        if(statisticNum3.innerHTML == 9+"/10"){
            clearInterval()
        } else {
            num3++;
            statisticNum3.innerHTML = num3 + "/10";
        }
    }
,160)

age.innerHTML = new Date().getFullYear()-2004;

items.forEach((item)=> {
    item.addEventListener("click", ()=>{
        remove();
        item.classList.add("active");
    })
})

function remove(){
    items.forEach(i => {
        i.classList.remove('active');
    })
}