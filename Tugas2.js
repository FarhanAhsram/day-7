function hapusSimbol(string) {
    let hasil = "";
    
    for (let i = 0; i < string.length; i++) {
        let karakter = string[i];

        if ((karakter >="a" && karakter <="z") || (karakter >="0" && karakter <="9")) {
            hasil += karakter;
        }
    }

    return hasil;
}


// TEST CASE
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100