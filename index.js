/// Start
(() => {
    document.getElementById("titleNo").innerHTML = Math.floor(Math.random() * 10000000);
    document.getElementById("sicilNo").innerHTML = Math.floor(Math.random() * 1000000) + "-" + Math.floor(Math.random() * 1000);
    document.getElementById("verilisTarihi").innerHTML = new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear();
})();

/// Input Events
// Name
document.getElementById("nameInput").addEventListener("keyup", (e) => {
    document.getElementById("name").innerHTML = e.target.value;
});
// Surname
document.getElementById("surnameInput").addEventListener("keyup", (e) => {
    document.getElementById("surname").innerHTML = e.target.value;
});
// Image
document.getElementById("upload").addEventListener("change", (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        document.getElementById("photo").src = reader.result;
    }
    document.getElementById('cancel').style.display = 'block'
});
// Reset Image
document.getElementById("cancel").addEventListener("click", (e) => {
    document.getElementById('photo').src = 'semih.png'
    document.getElementById('cancel').style.display = 'none'
});

/// Final
document.getElementById("download").addEventListener("click", () => {
    html2canvas(document.querySelector(".card")).then(canvas => {
        let image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        let link = document.createElement('a');
        link.download = "kart.png";
        link.href = image;
        link.click();
    });
});
