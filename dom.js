const firstParagraph = document.querySelector("p");
console.log(firstParagraph);


const firstPara = document.getElementById("firstPara");
const secondPara = document.getElementById("secondPara");
const thirdPara = document.getElementById("thirdPara");

console.log(firstPara);
console.log(secondPara);
console.log(thirdPara);


const allPara = document.querySelectorAll("p");
console.log(allPara);

for(let i = 0; i < allPara.length; i++){
    console.log(allPara[i]);
}


allPara[0].setAttribute("class", "fp");
allPara[0].setAttribute("id", "firstPara");
allPara[1].className = "sp";
allPara[1].id = "secondPara";
allPara[2].className = "tp";
allPara[2].id = "thirdPara";
allPara[3].className = "lp";
allPara[3].id = "lastPara";


firstPara.style.color = "red";
secondPara.style.color = "blue";
thirdPara.style.color = "green";
lastPara.style.color = "yellow";


firstPara.style.background ="green";
secondPara.style.background = "white";
thirdPara.style.background = "brown";
lastPara.style.background = "black";


firstPara.style.border = "solid1px";
secondPara.style.border = "solid2px";
thirdPara.style.border = "solid3px";
lastPara.style.border = "solid4px";


firstPara.style.fontSize = "15px";
secondPara.style.fontSize = "20px";
thirdPara.style.fontSize = "25px";
lastPara.style.fontSize = "10";


firstPara.style.fontFamily = "poppins";
secondPara.style.fontFamily = "poppins";
thirdPara.style.fontFamily = "poppins";
lastPara.style.fontFamily = "poppins";


firstPara.style.color = "green";
thirdPara.style.color = "green";
secondPara.style.color = "red";
lastPara.style.color = "red";


for(let i = 0; i < allPara.length; i++){
console.log(allPara[i]);
}


