var lagu = [
    ['Cahaya', 'Tulus', 4000, 8000], 
    ['Anyhting', 'Adrianne l', 5000, 9000, 'raz1'], 
    ['Everything u are', 'Hindia', 10000, 15000, 'miaw'],
    ['When I Was Your Man', 'Bruno Mars', 10000, 15000, 'A1'],
    ['K.', 'Cigarettes After Sex', 10000, 15000, 'A2'],
    ['I Wanna Be Yours', 'Arctic Monkeys', 10000, 15000, 'A3'],
];

var konten = document.getElementById("container");

lagu.forEach(item => {
   
    let imgName = item[4] ? item[4] : 'f4';

    
    var template = `
    <div class="lagu">
        <h2>${item[0]}</h2>
        <small><i>by ${item[1]}</i></small>
        <img src="${imgName}.jpeg" alt="">
        <div class="bawah">
            <div class="kanan">${item[2]}</div>
            <div class="kiri">${item[3]}</div>
        </div>
    </div>
    `;


    konten.innerHTML += template;
});

