const words = `
accord, apple, apply, application, arm,
build, base, brave, baker, big
cute, cow, collection, coach, coast, core, cost, code, cool, cold, com, cake, car, cast, career, convert, celebrate, catch, camera, case, cafe, coffee, cell, carbon,
dog,
eye,
front, float, floor, forgive, for, force, forever, fragment, fire, figure, french, favourite,
grade,
honda, hire, human, hover, housr, horse, harm, have, how, however, hello, history, horizontal, happy,
icon,
jest,
kitchen,
large,
memory,
new,
often, omit,
pull, push, pollute, pillar, pick, paradise,
queue,
recent, recall, reply, real, really, reduce, red, renew,
stage, star, scroll, style, sheet, small
thing, tiny, tired,
unique,
visit,
world,
xerox,
year,
zoo, zoom
`;

const knowns = new Set(words.split(','));

console.log(`Total: ${knowns.size}`);