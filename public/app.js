let animes = [
    {
        "id": 1,
        "anime": "One Piece",
        "resumo": "Luffy navega com amigos buscando liberdade; desafiam Governo Mundial, Século Perdido e a Vontade do D, buscando One Piece.",
        "imagem": "img/OnePiece2.jpg",
    },
    {
        "id": 2,
        "anime":"Hunter X Hunter",
        "resumo": "Gon viaja em busca do pai, enfrenta perigos, amizade, dilemas morais, explorando ambição, poder e a essência da humanidade.",
        "imagem": "img/HxH.jpg",
    },
    {
        "id": 3,
        "anime": "Demon Slayer",
        "resumo": "Tanjiro luta contra demônios após tragédia familiar, buscando cura para Nezuko, explorando dor, esperança, sacrifício e a fragilidade da vida.",
        "imagem": "img/DemonSlayer.jpg",
    },
    {
        "id": 4,
        "anime": "Tokyo Ghoul",
        "resumo": "Kaneki, após virar meio-ghoul, enfrenta identidade fragmentada, violência, preconceito e a dolorosa busca por aceitação e humanidade.",
        "imagem": "img/TokyoGhoul.webp",
    },
    {
        "id": 5,
        "anime": "JoJo",
        "resumo": "Família Joestar enfrenta gerações de inimigos sobrenaturais, explorando destino, coragem, poder e laços que transcendem tempo e legado.",
        "imagem": "img/JoJo.png",
    },
    {
        "id": 6,
        "anime": "Black Clover",
        "resumo": "Asta, sem magia, busca tornar-se Rei Mago; enfrenta desigualdade, demônios e rivalidades, mostrando perseverança, amizade e superação do impossível.",
        "imagem": "img/BlackClover.jpg",
    }
];

function criarCards(lista, idContainer) {
    
    //cria o container dos cards
    const container = document.getElementById(idContainer);
    container.innerHTML = "";

    lista.forEach(item => {
        
        //declaração dos elementos dos cards

        const card = document.createElement("article");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.imagem;
        img.alt = item.anime;

        const titulo = document.createElement("h3");
        titulo.textContent = item.anime;

        const resumo = document.createElement("p");
        resumo.textContent = item.resumo;

        //montagem dos cards
        card.append(img, titulo, resumo);

        //Carrega os cards
        container.appendChild(card);

    });
}

    document.addEventListener("DOMContentLoaded", () =>{
        criarCards(animes, "container_animes");
    });
