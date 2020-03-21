module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  for(let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim();
      members[i] = members[i][0].toUpperCase();
    } else {
      delete members[i];
    }
  }
  
  return members.sort().join('');
};