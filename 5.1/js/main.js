function last(){
  var string = 'Hello, world';
  console.log('Последний символ строки "Hello, world": ', string.slice(-1));
}

last();

function nolast(){
  var string = 'Hello, world';
  console.log('Строка "Hello, world" без последнего символа: ', string.slice(0, -1));
}

nolast()

function reverse(){
  var string = 'Hello, world';
  console.log('Зерклаьно отражённая строка "Hello, world": ', string.split('').reverse().join(''));
}

reverse()

function extraSpaces(){
  var string = '  Hello,      World!';
  console.log('Строка "  Hello,      World!" без лишних пробелов: ', string.trim().replace(/\s+/g, ' '));
}

extraSpaces()
