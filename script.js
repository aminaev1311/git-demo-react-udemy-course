console.log("the script file works!");

const btn = document.getElementById("button");
console.log(btn);

const clickHander = () => {
  alert("button clicked!");
};

btn.addEventListener("click", clickHander);
