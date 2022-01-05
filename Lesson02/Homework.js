var array1 = [10];
var array2 = [10];
array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function sum(array1, array2) {
    var array3 = new Array(10);
    for (var i = 0; i < 10; i++) {
        array3[i] = array1[i] + array2[i];
    }
    return array3;
}
console.log(sum(array1, array2));
var array4 = [14];
array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var odd = [];
var even = [];
var j = 0, k = 0;
for (var i = 0; i < array4.length; i++) {
    if (i % 2 == 0)
        odd[j++] = array4[i];
    else
        even[k++] = array4[i];
}
console.log(even);
console.log(odd);
var array8 = ["J", "b", "C", "d", "E", "f", "Z"];
var array9 = [];
var array10 = [];
for (var i = 0; i < array8.length; i++) {
    if (array8[i].charAt(0) >= 'A' && array8[i].charAt(0) <= 'Z') {
        array9[i] = array8[i];
    }
    else {
        array10[i] = array8[i];
    }
}
console.log("Array 9 = " + array9);
console.log("Array 10 = " + array10);
