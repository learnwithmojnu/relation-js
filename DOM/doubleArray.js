function double(array){
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element % 2 == 0){
       newArray.push(element*2);
    }
    else{
        newArray.push(element);
    }
}
    return newArray;
}
const result = double([2, 3, 4, 5, 6]);
console.log(result);