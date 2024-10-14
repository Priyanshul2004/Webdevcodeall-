function generateQR() {
    const qrImage = document.getElementById("qrImage");
    const qrText = document.getElementById("qrText").value;
    if (qrText.trim() !== "") {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText);
    } else {
        alert("Please enter text or URL");
    }
}