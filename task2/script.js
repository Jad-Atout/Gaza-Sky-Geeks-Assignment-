//task2
function array_math(array){
    let sum = 0
    let number_of_items = array.length;
    for(let item of array){
        sum += item
    }
    let avg = sum / number_of_items;
    console.log(`the average is ${avg}`)
    console.log(`the sum is ${sum}`)
}


array_math([1,2,3,4,5,6,7,8,9,10])