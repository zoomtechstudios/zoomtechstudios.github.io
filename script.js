function openNav(){
    let x = document.getElementById("navId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function updateYear(){
    let y = new Date().getFullYear();
        document.getElementById("yr").innerHTML = y;

}
