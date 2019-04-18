/**
 * Test!
 * @param {Array} param
 */
function work(param) {
    var x =param.length;
    param.push(1,2);
    param.push(3,4);
    return param;
}

console.log(work([]));