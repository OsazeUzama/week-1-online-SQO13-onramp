function sumMix(arr) {
    let result = []
   for (let index = 0; index < arr.length; index++) {
       result =+ Number(arr[index]) + Number(result)
   } return result
}
 console.log(sumMix([9, 3, '7', '3']));
 console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
 console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));