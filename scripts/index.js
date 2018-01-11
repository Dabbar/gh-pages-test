import 'babel-polyfill';

console.warn('works');

const x = 2;
const y = [5, 3, 6, 8, 12 ];

console.warn('x', x);
for (const item of y) {
    const div = document.createElement('div');
    div.innerText = item;
    document.body.appendChild(div);
    console.warn('item', item);
}
