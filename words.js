const words = `
accord, apple, apply, application, arm, auto, almost,

build, base, brave, baker, big, but, because,

cute, cow, collection, coach, coast, core, cost, code, cool, cold, com, cake, car, cast, career, convert, celebrate,
catch, camera, case, cafe, coffee, cell, carbon, calendar, cause

dog, delete

eye, editor, edit, else, empty

front, float, floor, forgive, for, force, forever, fragment, fire, figure, french, favourite, farewell, foundation, framework,
firework, follow, family

grade, grow, garden, give, gift, gather, go, get, glad

honda, hire, human, hover, housr, horse, harm, have, how, however, hello, history, horizontal, happy, hole

icon, information, if, illegal, illness, important, insert,

jest, jam, just, jungle

kitchen, kind, kindness,

large, light, load, lazy, layout, layer, last, like, length

memory, mountain, most, more, model, modal, moto,

new, never, near, nearby, nest,

often, omit, old,

pull, push, pollute, pillar, pick, paradise, put, puppy, people, person, package, plan

queue,

recent, recall, reply, real, really, reduce, red, renew, right, rough,

stage, star, scroll, style, sheet, small, sea, season, select, schema, slot, sudden,

thing, tiny, tired, traffic, tower, table, that, this, those, these, then,

unique, update, urgent

visit, view, vehicle, visa,

world, word, what, when, why, where, whether

xerox,

year, yeal,

zoo, zoom

`;

const knowns = new Set(words.split(','));

console.log(`Total: ${knowns.size}`);