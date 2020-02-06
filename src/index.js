
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || !matrix.length) return [];
    let result = [];
    for(let i = 0; i < matrix.length; i++){
        let arr = matrix[i];
        if(i%2) arr = arr.reverse()
        result = [...result, ...matrix[i]]
    } 
    return result;
}
