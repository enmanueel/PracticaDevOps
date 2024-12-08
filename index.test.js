
const fs = require('fs');

test('El archivo HTML contiene el texto "Hola Mundo"', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/Hola Mundo/);
});

test('El archivo HTML contiene el nombre del autor', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/Enmanuel De Jesús \(2022-1341\)/);
});
