function MajoritySweeper(arr) {
    let munculTerbanyak = [];

    for (let i = 0; i < arr.length; i++) {
        if (banyakAngka === arr[i]) {
            banyakAngka = arr[i].banyakAngka++;
        }
        
        for (let j = 0; j < banyakAngka.length; j++) {
            if (banyakAngka[j] > munculTerbanyak) {
                hasil = munculTerbanyak;
            }
        
        }
    }

    return hasil;
}
  
// TEST CASES
console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])) // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]
