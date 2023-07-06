const conteiner = document.querySelector(".conteiner");
let input = document.querySelector("#input");
let butao = document.querySelector("#bntInput");
let imagem = document.querySelector(".img");

butao.addEventListener("click",()=>{
    if (!input.value){
        alert("Nenhuma URL encontrada")
    }else {
        butao.innerText = "Gerando QRcode..."
        imagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;
        imagem.addEventListener("load", ()=>{
            butao.innerText = "Gerar QRcode"
            conteiner.classList.add("active")
        })
    }
    
});
input.addEventListener("keyup", ()=>{
    if(!input.value){
        conteiner.classList.remove("active");
    }
})