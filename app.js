Mustang = {
    id: 'Ford Mustang',
    name: 'Classic',
    power:"	2.3L EcoBoost 309 hp 407 nm tork (2015), 3.7L V6 300 hp(2015), 3.8L V6 290 hp, 4.0L V8 320 hp",

    yas: "69 Model",

}
Mazereti = {
    id: 'Mazereti',
    name: 'Ghibli',
    power:"	 çok güçlü üç motor seçeneği bulunmakta olup bunlar; 410 HP güç üreten 3 litrelik Twin Turbo V6 ve 530 HP güç üreten benzinli 3.8 litrelik Twin Turbo V8 motorun yanı sıra olağanüstü bir şekilde 275 HP güç üreten 3 litrelik kuvvetli V6 Turbo dizel motor seçenekleri şeklinde sıralanabilmektedir.",

    yas: "2021 Model",

}
Doch = {
    id: 'Doch Charger',
    name: 'Challengers',
    power:"	4-Vites Nesil; Charger II Segment; S Silindir; V8 Silindir Hacmi; 7206cm3 Valf Sayısı; 16 Beygir Gücü; 375 HP / 4600 rpm Maksimum Tork; 654 Nm / 3200 rpm Maksimum Hız; 211 Km 0-100 Km Hızlanma; 5.9 s Ani Hızlanma ile 60-100 Km arası; 3.2 s Şanzıman Tipi; Düz Vites Vites Sayısı; 4",

    yas: "70 Model",

}


function showUser(value) {

    document.querySelector('.user-id').innerHTML += `
        id: ${Mustang.id}
    `

    document.querySelector('.user-infos').innerHTML += `
       <span>Model : ${Mustang.name}</span> 
       <span>Yıl : ${Mustang.yas}</span> 
       
    `

    document.querySelector('.user-picture').innerHTML += `
    <span>Motor Gücü:${Mustang.power}</span>
    `
    document.getElementById("btn").disabled = true;

}
function showUser2(value) {

    document.querySelector('.user-id2').innerHTML += `
        id: ${Mazereti.id}
    `

    document.querySelector('.user-infos2').innerHTML += `
       <span>Model : ${Mazereti.name}</span> 
       <span>Yıl : ${Mazereti.yas}</span> 
       
    `

    document.querySelector('.user-picture2').innerHTML += `
    <span>Motor Gücü:${Mazereti.power}</span>
    `
    document.getElementById("btn2").disabled = true;
}
function showUser3(value) {

    document.querySelector('.user-id3').innerHTML += `
        id: ${Doch.id}
    `

    document.querySelector('.user-infos3').innerHTML += `
       <span>Model : ${Doch.name}</span> 
       <span>Yıl : ${Doch.yas}</span> 
       
    `

    document.querySelector('.user-picture3').innerHTML += `
    <span>Motor Gücü:${Doch.power}</span>
    `
document.getElementById("btn3").disabled = true;
}




