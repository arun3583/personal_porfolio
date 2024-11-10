// JavaScript for simple interactions
document.addEventListener("DOMContentLoaded", () => {
    // Scroll-to-top button example
    const toTopButton = document.createElement("button");
    toTopButton.innerText = "Top";
    toTopButton.id = "toTopButton";
    document.body.appendChild(toTopButton);

    toTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    // Target the updated "About Me" button
    const aboutMeButton = document.getElementById("aboutMeButton");
    const aboutMePopup = document.getElementById("aboutMePopup");
    const closeButton = document.querySelector(".close-btn");

    // Show popup when "About Me" is clicked
    aboutMeButton.addEventListener("click", () => {
        console.log("About Me button clicked"); // This logs to the console when the button is clicked
        aboutMePopup.style.display = "flex";
    });

    // Hide popup when close button is clicked
    closeButton.addEventListener("click", () => {
        console.log("Close button clicked"); // This logs to the console when the close button is clicked
        aboutMePopup.style.display = "none";
    });

    // Hide popup when clicking outside of popup content
    window.addEventListener("click", (event) => {
        if (event.target === aboutMePopup) {
            console.log("Clicked outside popup"); // Logs if clicking outside of the popup
            aboutMePopup.style.display = "none";
        }
    });
});
