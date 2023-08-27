//Tes Github (Clone)
// - Git clone url-repo
// - Kalo uda buka di vs code
// - Bikin file baru , isi apa aja
// - Buka terminal:
//     - Git add .
//     - Git commit -m “init”
//     - Git push origin main
//     - (alternatif Git push -u origin main)

// import { API } from "./url";

// console.log(API.BASE_URL);

// const API1 = {
//     BASE_URL : "http://example.com",
//     MOVIES : {
//         MOVIES_ALL: "...",
//         MOVIE_DETAIL: "...",
//     }
// }

let number = [1,2,3];
let newNumber = [4,5,6];

for (let i = 0; i < newNumber.length; i++) {
    number.push(newNumber[i]);
}

// const result = {...number};
// console.log(result);

// console.log([...number, ...newNumber]);

// console.log([...number, 4,5,6]);

let nama = 'Lala';
let umur = 20;

// console.log(`${nama}, ${umur}`);

function hitung(x, n) {
    let hasil = 1;

    for (let i = 0; i < n; i++) {
        hasil *= x;
    }
    return hasil;
}

console.log(hitung(5, 3));


function hitungPangkat(x, n) {
    if (n === 1) {
        return x
    }else{
        return x * hitungPangkat(x, n-1);
    }
}

// console.log(hitungPangkat(2,4));