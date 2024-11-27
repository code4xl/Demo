document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "public/your-file.zip"; // Path to the file
    link.download = "your-file.zip";   // Name for the downloaded file
    link.click();
});
