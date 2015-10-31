//CSS
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"

//PEGA Project Open & Close
var pp = document.querySelector(".pegaProject")

var statusPpC = 0
function showPpC(){
    if(statusPpC === 0){
        document.querySelector(".pegaProjectContents").style.display='block'
        statusPpC = 1
    }
    else if(statusPpC === 1){
        document.querySelector(".pegaProjectContents").style.display='none'
        statusPpC = 0
    }
}
pp.addEventListener("click", showPpC)

var statusPpI = 1
function showPpI(){
    if(statusPpI === 0){
        document.querySelector("#imgDownBlackPega").style.display='none'
        document.querySelector("#imgUpBlackPega").style.display='inline-block'
        statusPpI = 1
    }
    else if(statusPpI === 1){
        document.querySelector("#imgDownBlackPega").style.display='inline-block'
        document.querySelector("#imgUpBlackPega").style.display='none'
        statusPpI = 0
    }
}
pp.addEventListener("click", showPpI)

//pp.addEventListener("mOver", showPpIG)
//pp.addEventListener("mOut", showPpIbG)

//NTU Project Open & Close
var Np = document.querySelector(".ntuProject")

var statusNpC = 0
function showNpC(){
    if(statusNpC === 0){
        document.querySelector(".ntuProjectContents").style.display='block'
        statusNpC = 1
    }
    else if(statusNpC === 1){
        document.querySelector(".ntuProjectContents").style.display='none'
        statusNpC = 0
    }
}
Np.addEventListener("click", showNpC)

var statusNpI = 1
function showNpI(){
    if(statusNpI === 0){
        document.querySelector("#imgOpenNpI").style.display='none'
        document.querySelector("#imgCloseNpI").style.display='inline-block'
        statusNpI = 1
    }
    else if(statusNpI === 1){
        document.querySelector("#imgOpenNpI").style.display='inline-block'
        document.querySelector("#imgCloseNpI").style.display='none'
        statusNpI = 0
    }
}
Np.addEventListener("click", showNpI)


