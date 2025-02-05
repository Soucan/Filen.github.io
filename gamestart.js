window.addEventListener("load", function() {
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loadingScreen";
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.display = "flex";
    loadingScreen.style.flexDirection = "column";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.backgroundImage = "url('/storage/images/bg.gif')";
    loadingScreen.style.backgroundColor = "black";
    loadingScreen.style.backgroundSize = "cover";
    loadingScreen.style.color = "gold";
    loadingScreen.style.zIndex = "1000";
    loadingScreen.style.fontFamily = "'Comfortaa', cursive";

    const logo = document.createElement("img");
    logo.src = "/storage/images/logo2.png";
    logo.style.maxWidth = "150px";
    logo.style.marginBottom = "20px";
    loadingScreen.appendChild(logo);

    const text = document.createElement("p");
    text.textContent = "Loading";
    text.style.fontSize = "32px";
    text.style.fontWeight = "bold";
    loadingScreen.appendChild(text);

    const tipText = document.createElement("p");
    tipText.textContent = "(If your game does not load correctly try using the site outside of about:blank. If that doesn't work contact me on discord - @voucan)";
    tipText.style.fontSize = "18px";
    tipText.style.fontWeight = "normal";
    tipText.style.marginTop = "10px";
    tipText.style.textAlign = "center";
    tipText.style.maxWidth = "80%";
    loadingScreen.appendChild(tipText);

    const progressBarContainer = document.createElement("div");
    progressBarContainer.style.width = "80%";
    progressBarContainer.style.height = "30px";
    progressBarContainer.style.border = "2px solid gold";
    progressBarContainer.style.marginTop = "20px";
    progressBarContainer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    progressBarContainer.style.position = "relative";
    loadingScreen.appendChild(progressBarContainer);

    const progressBar = document.createElement("div");
    progressBar.style.height = "100%";
    progressBar.style.width = "0%";
    progressBar.style.backgroundColor = "gold";
    progressBarContainer.appendChild(progressBar);

    document.body.appendChild(loadingScreen);

    let loadingdots = 3;
    const loadingdotsmax = 3;

    const dotInterval = setInterval(() => {
        text.textContent = "Loading" + ".".repeat(loadingdots);
        loadingdots--;
        if (loadingdots < 1) loadingdots = loadingdotsmax;
    }, 500);

    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(progressInterval);
            clearInterval(dotInterval);
            setTimeout(() => {
                loadingScreen.remove();
            }, 1);
        }
    }, 30);
});

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Comfortaa&display=swap";
document.head.appendChild(fontLink);