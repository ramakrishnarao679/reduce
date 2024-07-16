let arr = [10, 20, 30, 40, 50, 60];

function sumOfArray(sum, num){
    return sum + num;
}

function myAdd(item){
    console.log(arr.reduce(sumOfArray));
}

myAdd();