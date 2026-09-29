const button = document.getElementById("tip-button");
const tip = document.getElementById("tip");

if (button && tip) {
    button.addEventListener("click", function () {
        if (tip.style.display === "none") {
            tip.style.display = "block";
            button.textContent = "Hide tip";
        } else {
            tip.style.display = "none";
            button.textContent = "Show recovery tip";
        }
    });
}