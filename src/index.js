module.exports = function towelSort(matrix) {
    let newMatr = [];
    if (matrix === undefined || matrix.length === 0) {
        return [];
    } else {
        matrix.forEach((item, index) => {
            let sorting = index % 2 == 1 ? (a, b) => b - a : (a, b) => a - b;
            newMatr.push(item.sort(sorting));
        });
        let another = [].concat(...newMatr);
        return another;
    }
};
