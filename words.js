let words = '';

['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].forEach((letter) => {
    words = words + (require(`./letters/${letter}`)) + ',';
});

const knowns = Array.from(new Set(words.split(',').map((x) => x.replace(/\n/g, '')))).sort();
console.log(`Total: ${knowns.length}`);