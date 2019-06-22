let words = '';

['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach((letter) => {
    words = words + (require(`./letters/${letter}`)) + ',';
});

words = words + `
honda, hire, human, hover, hourse, horse, harm, have, how, however, hello, history, horizontal, happy, hole, help, hold, height, haven
handsome, have, has, host, hostname, hile, hat, hard, home,

icon, information, if, illegal, illness, important, insert, increase, install, input,

jest, jam, just, jungle, java, Japan, job,

kitchen, kind, kindness, keyboard, key, knife, kindom, king, Korea,

laptop, law, lawer, large, light, little, load, lazy, lady, layout, layer, last, lemon, like, length, list, late, land, lord, less, least, lease,
lion, line, light, love, laugh, lock, left,

math, memory, method, mountain, most, more, mock, model, mode, modal, moon, moto, myth, meat, meal, mongo, middle, margin, mechasim,
mask, max, mini, mine,

narrow, new, never, near, nearby, nest, negative, nut, noodle, north, noon, next,

often, omit, old, office, outline, obey, operation,

padding, package, pull, push, pollute, pillar, pick, paradise, put, puppy, people, person, package, plan, pixel, promotion, ping, peace,
play, playground, plain, physical, phone, premium, professional, pen, power, property, potato, plus, pay, paper, prototype, pool, pizza,
puppy, police,

queue, question, quick, quarter, quality,

recent, recall, reply, real, really, reduce, red, renew, right, rough, rotate, relation, roll, rotate, rectangle, read, reset, recall,
repository, related, road, rocket, Russia, rectangle,

stage, star, scroll, style, sheet, small, sea, season, select, schema, slot, sudden, spring, story, south, soft, shutdown,
seat, slow, smooth, string, state, storm, sense, stand, sum, some, sofa, string, start, service, server, security, secure, survey,
science, swim, size, status, school, sun, sunset, system,

tablet, thing, tiny, tired, traffic, tower, table, telephone, television, tell, that, this, those, these, then, task, transform, translate, the, test, think, thinking,
triangle, tick, table,

unique, update, urgent, unified, uninstall, united, upstair, United State, up, uniform, user,

visit, view, vehicle, visa, vote, vector, volumne,

water, waterfall，waiter, world, word, what, when, why, where, whether, west, warning, waste, width, week, weekend, work, would, wall,
we, win, wine, well, weather, will, willing, wish, wash, window, weak, weakness,

xerox,

year, yeal, yellow, yard,

zealot, zoo, zoom, zip, zipcode, zone,

`;

const knowns = Array.from(new Set(words.split(',').map((x) => x.replace(/\n/g, '')))).sort();
console.log(`Total: ${knowns.length}`);