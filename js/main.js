// MENU PANEL ACTIVE
let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function(){
        sidebar.classList.toggle("active");
        }
// MENU PANEL ACTIVE END

// Animation Start
AOS.init({
        once: "true",
        offset: 400,
        duration: 1000
});

// Animation End

//TOGGLE START
function toggle(){
        var header = document.getElementById("Header")
        header.classList.toggle('active')
    }
//TOGGLE END
