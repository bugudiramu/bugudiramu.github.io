function showMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function resetActive() {
  const logo = document.querySelector("#logo");
  logo.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-links a")
      .forEach((link) => link.classList.remove("active"));
  });
}

// Add active class to the current button (highlight it)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-links a")
      .forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

document.onkeypress = (e) => {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.documentElement.classList.toggle("dark-mode");
    document.querySelector(".experience-title").classList.toggle("invert");

    // document.querySelectorAll('.inverted').forEach(result)=>{
    //     result.classList.toggle('invert')
    // }
  }
};
