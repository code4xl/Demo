document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Demo/public/treasure.zip"; // Add /Demo before deploying....
    link.download = "oioioioiiii.zip";
    link.click();
});



let enterPressCount = 0;
        let timer;

        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                enterPressCount++;
                if (timer) clearTimeout(timer);
                timer = setTimeout(() => {
                    enterPressCount = 0;
                }, 2000);
                if (enterPressCount === 5) {
                    downloadFile();
                    enterPressCount = 0;
                }
            }
        });

        function downloadFile() {
            const link = document.createElement("a");
            link.href = "public/treasure.zip";
            link.download = "oioioioiiii.zip";
            link.click();
        }