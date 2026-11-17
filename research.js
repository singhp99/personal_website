const popup = document.getElementById("popup");

document.querySelectorAll(".topic").forEach(topic => {
    topic.addEventListener("click", () => {
        document.getElementById("popup-img").src = topic.querySelector("img").src;
        document.getElementById("popup-title").textContent = topic.querySelector("h2").textContent;
        document.getElementById("popup-desc").innerHTML = topic.querySelector(".desc").innerHTML;
        popup.showModal();
    });
});

popup.addEventListener("click", () => popup.close());   // click anywhere to close (Esc works too)

