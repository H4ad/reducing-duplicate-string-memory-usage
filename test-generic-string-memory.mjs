import { generateString, getInstancesByCenario, insertByCenario, printMemoryUsage, runs } from './utils.mjs';

const instances = getInstancesByCenario();

for (let i = 0; i < runs; i++) {
  const id = generateString();

  insertByCenario(id, instances);
}

printMemoryUsage(instances);
