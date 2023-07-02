import { generateString, getInstancesByCenario, insertByCenario, printMemoryUsage, runs } from './utils.mjs';

const instances = getInstancesByCenario();

const stringToIntId = new Map();
let currentId = 0;

const getId = s => {
  const id = stringToIntId.get(s);

  if (id) {
    return id;
  }

  const nextId = currentId++;
  stringToIntId.set(s, nextId);
  return nextId;
};

for (let i = 0; i < runs; i++) {
  const id = generateString();
  const intId = getId(id);

  insertByCenario(intId, instances);
}

printMemoryUsage(instances);
