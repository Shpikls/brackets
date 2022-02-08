module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let i = 0;

  while (i < str.length) {
    for (let config of bracketsConfig) {
      if (
        str[i] == config[0] 
        && config[0] == config[1] 
        && stack[stack.length - 1] == config[0]
      ) {
        stack.pop();
        break;
      }
      
      if (str[i] == config[0]) {
        stack.push(str[i]);
      }

      if (str[i] == config[1] && config[0] != config[1]) {
        if (stack.length == 0) {
          return false;
        }
        
        if (stack.length != 0 && stack[stack.length - 1] == config[0]) {
          stack.pop();
        }
      }
        
    }

    i++;

  }
  if (stack.length) {
    return false;
  }
  return true;
}