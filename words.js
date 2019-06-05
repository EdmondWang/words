const words = `
accord, apple, apply, application, arm,
build, base, brave, baker, big
cute, cow, collection, coach, coast, core, cost, code, cool, cold, com, cake, car, cast, career, convert, celebrate, catch, camera, case, cafe, coffee, cell, carbon,
dog,
eye,
front, float, floor, forgive, for, force, forever, fragment, fire, figure, french, favourite, farewell, foundation, framework, firework
grade,
honda, hire, human, hover, housr, horse, harm, have, how, however, hello, history, horizontal, happy,
icon, information, illegal, illness, important,
jest, jam,
kitchen,
large, light, load, lazy, layout, layer, last,
memory, mountain, most, more,
new, never, near, nearby, nest,
often, omit,
pull, push, pollute, pillar, pick, paradise, put
queue,
recent, recall, reply, real, really, reduce, red, renew, right, rough,
stage, star, scroll, style, sheet, small, sea, season
thing, tiny, tired, traffic, tower, table,
unique,
visit, view,
world,
xerox,
year,
zoo, zoom
`;

const knowns = new Set(words.split(','));

console.log(`Total: ${knowns.size}`);