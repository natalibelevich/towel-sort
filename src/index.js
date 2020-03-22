// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) {
        return []
    }
    return matrix
        .flatMap((arr, i) => i % 2 === 0 ?
            arr.sort(Math.max) :
            arr.sort(Math.max).reverse()
        );
};
