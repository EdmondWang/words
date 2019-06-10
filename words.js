const words = `
accord, apple, apply, application, arm, auto, almost, animation, advertisement, alert, autumn, army, ask, automatic, airplane,
aircraft,

build, base, brave, baker, big, but, because, bubble, bump, bundle, bag, badge, budget, ball, blue, bootstrap, bus, busy,
boom, bug, buffet, ban, boolean,

cute, cow, collet, collection, coach, coast, core, cost, code, cool, cold, com, cake, car, cast, career, convert, celebrate,
catch, camera, case, cafe, coffee, cell, carbon, calendar, cause, confirm, computer, class, classified, classification, category,
collaboration, choose, choice, charm, corp, cover,

data, date, damage, definition, delegate, distation, die, dog, delete, degree, disagree, dig, device, door, dart, down, do, dial,
door,

eye, editor, edit, else, empty, effect, east, estimate,

far, fast, father, further, front, float, floor, flower, forgive, for, force, forever, fragment, fire, figure, french, favourite, farewell, foundation, framework,
firework, follow, family, fade, fell, finger, fly,

grade, grow, garden, give, gift, gather, go, get, glad, gallery, gentle,

honda, hire, human, hover, housr, horse, harm, have, how, however, hello, history, horizontal, happy, hole, help, hold,

icon, information, if, illegal, illness, important, insert, increase,

jest, jam, just, jungle,

kitchen, kind, kindness, keyboard, key,

laptop, law, lawer, large, light, load, lazy, layout, layer, last, lemon, like, length, list, late, land, lord, less, least, lease,

math, memory, method, mountain, most, more, mock, model, mode, modal, moon, moto, myth,

new, never, near, nearby, nest,

often, omit, old, office,

pull, push, pollute, pillar, pick, paradise, put, puppy, people, person, package, plan, pixel, promotion, ping, peace,
play, playground, plain, physical, phone, premium, professional, pen, power, property, potato, plus,

queue, question, quick,

recent, recall, reply, real, really, reduce, red, renew, right, rough, rotate, relation, roll, rotate, rectangle, read,

stage, star, scroll, style, sheet, small, sea, season, select, schema, slot, sudden, spring, story, south, soft, shutdown,
seat, slow, smooth, string,

thing, tiny, tired, traffic, tower, table, that, this, those, these, then, task, transform, translate, the, test,

unique, update, urgent,

visit, view, vehicle, visa,

water, waterfall，waiter, world, word, what, when, why, where, whether, west, warning, waste,

xerox,

year, yeal,

zoo, zoom

`;

const knowns = new Set(words.split(','));

console.log(`Total: ${knowns.size}`);