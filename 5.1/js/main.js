function last(string){
  return string.slice(-1);
}

function nolast(string){
  return string.slice(0, -1);
}

function reverse(string){
  return string.split('').reverse().join('');
}

function extraSpaces(string){
  return string.trim().replace(/\s+/g, ' ');
}

var lastInput = noLastInput = reverseInput = 'Hello, world';
var extraSpacesInput = '  Hello,      World!';

console.log('Последний символ строки "Hello, world":', last(lastInput));
console.log('Строка "Hello, world" без последнего символа:',nolast(noLastInput));
console.log('Зерклаьно отражённая строка "Hello, world":',reverse(reverseInput));
console.log('Строка "  Hello,      World!" без лишних пробелов:', extraSpaces(extraSpacesInput));
