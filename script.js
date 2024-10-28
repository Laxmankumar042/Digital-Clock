const timeBox = document.querySelector(".container");
const showCurtTime = ()=>{
    let curtTime = new Date().toLocaleTimeString();
    timeBox.innerText = curtTime;
}
setInterval(showCurtTime,1000); 