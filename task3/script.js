//task3
function remove_duplicates(arr) {
    const set = new Set(arr);
    return [...set]
}

console.log(remove_duplicates(['Jad', 'Ahmad', 'John', 'Jad', 'Renald','Renald']));