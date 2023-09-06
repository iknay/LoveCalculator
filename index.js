document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    var n = Math.random(1,100);
    var percent = Math.floor (n * 100);
    document.querySelector("button").classList.toggle("invisible"); 
    document.querySelector(".loader").classList.toggle("invisible");
    document.querySelector(".results").classList.toggle("invisible");

        setTimeout(function(){
            document.querySelector("#percentageValue").textContent = "You are " + percent + "% match";
            document.querySelector(".loader").classList.toggle("invisible");
        }, 2000);
}