module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw 'Это не массив !';
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr.length == 1) {
        return [];
      }
    // if (arr[i] == 'undefined') {
    //     arr.slice(i, 1);
    //     continue;
    // }
    let check = arr[i];
    if (typeof check == 'string' ) {
      switch(check) {
        case '--discard-next': arr.splice(++i, 1)
        arr.splice(i, 1);
        break;
        case '--discard-prev': arr.splice(--i, 1)
        arr.splice(i, 1);
        break;
        case '--double-next': arr.splice(++i, 0, arr[i])
        arr.splice(--i, 1);
        break;
        case '--double-prev': arr.splice(i, 1) 
        arr.splice(i, 0, arr[i]);
        break;
        default:
          arr.splice(i, 1);  
      }
    }
  }
  return arr.filter(element => element !== undefined);
};
