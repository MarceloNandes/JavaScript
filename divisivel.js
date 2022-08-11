function div3 (num) {
    if (num % 3 != 0) {
        return false;
    }
    return true;
}

console.log(div3(6));
console.log(div3(15));
console.log(div3(30));
console.log(div3(50));