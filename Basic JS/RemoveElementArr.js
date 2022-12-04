function removeArr(arr, index){
    let newArr = arr.splice(0, index-1)
    let newArr2 = arr.splice(1, arr.length)
    return newArr.concat(newArr2)
}

// contoh :
arr = [1, 2, 3, 4, 5]
arr = removeArr(arr, 2)
// arr = [1, 2, 4, 5]
