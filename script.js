document.addEventListener("keypress",(e)=>{
  let name = document.querySelector(".key-name");
  let num = document.querySelector(".key-no");
  num.style.color = "green";
  num.style.margin ="50px 10px 20px 30px";
  num.style.padding ="30px 20px";
  num.style.fontSize ="3rem";
  num.style.boxShadow = "0px 2px 10px black";
  num.innerText = e.keyCode;
  name.innerText = `You pressed : ${e.key}`;
});



