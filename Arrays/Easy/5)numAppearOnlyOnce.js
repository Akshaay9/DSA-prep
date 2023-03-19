// XOR Operator

// https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/

function numApperaOnlyOnce(arr) {
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        num = arr[i] ^ num;
    }
    return num;
}

const arr = [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];

console.log(numApperaOnlyOnce(arr));
