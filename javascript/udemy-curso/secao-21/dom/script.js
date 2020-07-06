var dom  = lacaros.$$('p');


Array.prototype.forEach.call(dom, (p) => console.log(p));

lacaros.each('li', (p) => console.log('Teste:',  p));