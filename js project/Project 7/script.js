const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const genebtn = document.getElementById("genebtn");
const downbtn = document.getElementById("downbtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
genebtn.addEventListener('click', (e)=>{
   e.preventDefault();
   isEmptyInput();
});

sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput();
});

downbtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downbtn.setAttribute('href', imgAttr);
    }
    else{
        downbtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
       }
       else{
        alert("Enter the text or URL to generate your QR code");
       } 
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight: '#fff',
        colorDark: '#000',
    });
}
