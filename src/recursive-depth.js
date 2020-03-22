module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1) {
        if(!Array.isArray(arr)) {
          return 0;
        }
        arr.forEach(element => {
          Array.isArray(element) ? calculateDepth(element, ++count) : count;
        });
        return count;
      }
};