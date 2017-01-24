let items: any[] = [];

console.error(typeof items);

items.push('one');
items.push('two');
items.splice(1, 0, 'bars');

console.error(items);