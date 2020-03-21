module.exports = function countCats(matrix) {
  let cat = matrix.flat().filter(function(element){
    return element == '^^';
  }, 0);
  return cat.length;
};
