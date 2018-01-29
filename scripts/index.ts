document.write('YO TSawdaw!');

const longLine: string = `lorem awdaw dawd awd awdawdawdawd
     awdaw dawd awda wdawd awd awdaw dawd awd awd awd awd awd
     awdaw dawdaw dawdaw dawd awd awda wdaw  awd awdawdawd
     awd awdawdawdawdawd awd awdaw dawd awdaw dawd awd awdaw daw d`;

document.write(longLine);

console.warn('Yey', 'aw');

const arr = [1, 2, 3, 4, 5];

for (const item of arr) {
    document.write(item);
}

const prom = Promise.resolve(1);

async function test() {
    console.warn('await prom', await prom);
}

test();
