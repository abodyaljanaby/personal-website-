let icon_menu_color = document.querySelector(".toggol-menu-color");
let list_menu = document.querySelector(".icon-menu");
let menu = document.querySelector(".menu");
let menu_color = document.querySelector(".colors")
let icon_dark = document.querySelector(".dark")
let change_color = document.querySelectorAll(".color span");

(function whenload(){
  if(localStorage.getItem("main-color") !== null){
    document.body.style.cssText = `--main-color:${localStorage.getItem("main-color")};`
  }

  if(localStorage.getItem("mode") === "dark"){
    icon_dark.classList.remove("fa-moon");
    icon_dark.classList.add("fa-sun");
    document.body.className = "dark"
  }
}())


change_color.forEach((color)=>{
  color.onclick = function(){
  localStorage.setItem("main-color",this.dataset.color)
    document.body.style.cssText = `--main-color:${this.dataset.color};`
  }
})


icon_dark.onclick = function(){
  document.body.classList.toggle("dark")
  icon_dark.classList.toggle("fa-moon")
  icon_dark.classList.toggle("fa-sun")
  localStorage.setItem("mode",document.body.className)
}
icon_menu_color.onclick = function (){
  if(menu_color.style.right === "10px"){
    menu_color.style.removeProperty("right")
  } else{
    menu_color.style.right = "10px"
  }

  onscroll = function(){
    if(menu_color.style.right !== ""){
      menu_color.style.removeProperty("right")
    }
  }
}
list_menu.onclick = function(){
  if(menu.style.left === "0px"){
    menu.style.removeProperty("left")
  } else {
    menu.style.left = "0"
  }
}