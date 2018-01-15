import 'babel-polyfill';

console.warn('works');

const x = 2;
const y = [5, 3, 6, 8, 12];

console.warn('x', x);
for (const item of y) {
    const div = document.createElement('div');
    div.innerText = item;
    document.body.appendChild(div);
    console.warn('item', item);
}

const dialog = document.querySelector('#js-dialog');
const openDialog = document.querySelector('#js-open-dialog');
const closeDialog = document.querySelector('#js-close-dialog');

console.warn('dialog', dialog);
console.warn('openDialog', openDialog);
console.warn('closeDialog', closeDialog);

openDialog.addEventListener('click', () => {
    dialog.showModal();
});

closeDialog.addEventListener('click', () => {
    dialog.close();
});
