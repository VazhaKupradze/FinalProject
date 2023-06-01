let burger = document.getElementById("burgerBar");
let navigation = document.getElementById("navBar");

burger.addEventListener("click", function () {
  navigation.classList.toggle("navActive");
});
