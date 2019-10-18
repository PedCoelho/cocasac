

var containerIMG = document.querySelector(".rotation").getElementsByTagName('img');

function imagem(produto){

    if(produto == 'coca'){
        var numero = 0;
        for(let filho in containerIMG){
            containerIMG[filho].src = './imgs/'+ produto +'/' + numero + '.png';
            numero++;
        } 
    }
        else if(produto == 'yas'){
        var numero = 1;
        for(let filho in containerIMG){
            containerIMG[filho].src = './imgs/'+ produto +'/' + numero + '.jpg';
            numero++;
        } 

    }

}