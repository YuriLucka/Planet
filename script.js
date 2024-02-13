const mercurio = {
    nome: "Mercúrio",
    foto: "Mercúrio.png",
    curiosidades: "Mercúrio é o planeta mais próximo do Sol e o menor do sistema solar, sem atmosfera significativa.",
    luas: "Mercúrio não possui luas.",
    temperatura: "Cerca de -173°C durante a noite e 427°C durante o dia.",
    diametro: "Aproximadamente 0,38 vezes o diâmetro da Terra.",
    massa: "Aproximadamente 0,06 vezes a massa da Terra.",
    distancia: "Cerca de 58 milhões de quilômetros." 
}
const venus = {
    nome: "Vênus",
    foto: "Vênus.png",
    curiosidades: 'Vênus é conhecido como o "gêmeo da Terra" devido ao seu tamanho semelhante. É o planeta mais quente do sistema solar, com uma atmosfera densa de dióxido de carbono.',
    luas: "Vênus não possui luas.",
    temperatura: "Permanece em torno de 462°C devido ao efeito estufa.",
    diametro: "Aproximadamente 0,95 vezes o diâmetro da Terra.",
    massa: "Aproximadamente 0,82 vezes a massa da Terra.",
    distancia: "Cerca de 108 milhões de quilômetros." 
}
const terra = {
    nome: "Terra",
    foto: "Terra.png",
    curiosidades: 'Nosso planeta é o único conhecido por abrigar vida. É o terceiro planeta a partir do Sol e possui uma atmosfera rica em oxigênio.',
    luas: "A Terra tem uma lua.",
    temperatura: "Varia significativamente, mas em média, a temperatura é de cerca de 15°C.",
    diametro: "Aproximadamente 12.742 quilômetros.",
    massa: "A massa da Terra é a unidade de massa igual à da Terra. A melhor estimativa atual para a massa da Terra é MTerra = 5.9722×10²⁴ kg.",
    distancia: "Cerca de 150 milhões de quilômetros." 
}
const marte = {
    nome: "Marte",
    foto: "Marte.png",
    curiosidades: 'Conhecido como o "Planeta Vermelho", Marte é o quarto planeta do sistema solar. Possui uma atmosfera fina e é o local de diversas missões espaciais.',
    luas: "Marte tem dois satélites naturais, Fobos e Deimos.",
    temperatura: "Varia de -143°C a 35°C.",
    diametro: "Aproximadamente 0,53 vezes o diâmetro da Terra.",
    massa: "Aproximadamente 0,11 vezes a massa da Terra.",
    distancia: "Cerca de 228 milhões de quilômetros." 
}
const jupiter = {
    nome: "Júpiter",
    foto: "Júpiter.png",
    curiosidades: 'Júpiter é o maior planeta do sistema solar, conhecido como um gigante gasoso. Ele possui um sistema complexo de anéis e diversas luas.',
    luas: "Júpiter tem mais de 80 luas conhecidas. Novas luas estão sendo descobertas em Júpiter e Saturno!",
    temperatura: "Variação significativa, mas em média -145°C.",
    diametro: "Cerca de 11 vezes o diâmetro da Terra.",
    massa: "Aproximadamente 318 vezes a massa da Terra.",
    distancia: "Cerca de 778 milhões de quilômetros." 
}
const saturno = {
    nome: "Saturno",
    foto: "Saturno.png",
    curiosidades: 'Saturno é famoso por seus impressionantes anéis, compostos principalmente de partículas de gelo e poeira.',
    luas: "Saturno tem mais de 80 luas conhecidas. Novas luas estão sendo descobertas em Júpiter e Saturno!",
    temperatura: "Varia de -178°C a -139°C.",
    diametro: "Cerca de 9,5 vezes o diâmetro da Terra.",
    massa: "Cerca de 9,5 vezes o diâmetro da Terra.",
    distancia: "Cerca de 1,43 bilhão de quilômetros." 
}
const urano = {
    nome: "Urano",
    foto: "Urano.png",
    curiosidades: 'Urano é um gigante congelado, o planeta mais frio do sistema solar que se destaca por sua inclinação única no eixo, girando de lado em relação aos outros planetas.',
    luas: "Urano tem 27 luas conhecidas.",
    temperatura: "Varia de -224°C a -197°C.",
    diametro: "Aproximadamente 4 vezes o diâmetro da Terra.",
    massa: "Aproximadamente 14,5 vezes a massa da Terra.",
    distancia: "Cerca de 2,87 bilhões de quilômetros." 
}
const netuno = {
    nome: "Netuno",
    foto: "Netuno.png",
    curiosidades: 'Netuno é o último planeta do sistema solar, conhecido por seus ventos extremamente rápidos e atmosfera dinâmica.',
    luas: "Netuno tem 14 luas conhecidas.",
    temperatura: "Varia de -214°C a -201°C.",
    diametro: "Aproximadamente 3,9 vezes o diâmetro da Terra.",
    massa: "Aproximadamente 17 vezes a massa da Terra.",
    distancia: "Cerca de 4,5 bilhões de quilômetros." 
}

const planetas = [mercurio,venus,terra,marte,jupiter,saturno,urano,netuno]
let indice = 0

const namePlanet= document.getElementById('namePlanet')
const planetImg= document.getElementById('planetImg')
const description = document.getElementById("description")
const prev= document.getElementById('prev')
const next = document.getElementById('next')

function anterior(){
    if (indice === 0){
        indice = 7
        atualizar(indice)
    } else {
        indice = indice - 1
        atualizar(indice)
    }
}

function proximo(){
    if (indice === 7){
        indice = 0
        atualizar(indice)
    } else {
        indice = indice + 1
        atualizar(indice)
    }
}

function atualizar(indice){
    namePlanet.innerHTML = planetas[indice]["nome"]
    planetImg.src = `imgs/${planetas[indice]["foto"]}`
    description.innerHTML = `Curiosidade(s): ${planetas[indice]["curiosidades"]}
    \nTemperatura: ${planetas[indice]["temperatura"]}
    \nDiâmetro: ${planetas[indice]["diametro"]}
    \nLuas: ${planetas[indice]["luas"]}
    \nMassa: ${planetas[indice]["massa"]}
    \nDistância do Sol: ${planetas[indice]["distancia"]}`
}



prev.addEventListener('click', anterior);
next.addEventListener('click', proximo);

atualizar(indice)