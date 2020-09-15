function showMenu() {
    console.log("Hello")
    var x = document.querySelector(".nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

    // Add active class to the current button (highlight it)
    var header = document.querySelector(".nav-links");
    var btns = header.querySelectorAll(".nav-link");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }

    document.onkeypress = (e) => {
        e = e || window.event
        if (e.keyCode == 13) {
            document.documentElement.classList.toggle('dark-mode')
            document.querySelector('.service-title').classList.toggle('invert')

            // document.querySelectorAll('.inverted').forEach(result)=>{
            //     result.classList.toggle('invert')
            // }
        }
    }