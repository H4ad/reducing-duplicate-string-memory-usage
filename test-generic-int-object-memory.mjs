import { generateString, getInstancesByCenario, insertByCenario, printMemoryUsage, runs } from './utils.mjs';

const instances = getInstancesByCenario();

const stringToIntId = {};
let currentId = 0;

const getId = s => {
  const id = stringToIntId[s];

  if (id) {
    return id;
  }

  const nextId = currentId++;
  stringToIntId[s] = nextId;
  return nextId;
};

for (let i = 0; i < runs; i++) {
  const id = generateString();
  const intId = getId(id);

  insertByCenario(intId, instances);
}

printMemoryUsage(instances);
