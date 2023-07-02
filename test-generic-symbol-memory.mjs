import { generateString, getInstancesByCenario, insertByCenario, printMemoryUsage, runs } from './utils.mjs';

const instances = getInstancesByCenario();

for (let i = 0; i < runs; i++) {
  const id = generateString();
  const sym = Symbol.for(id);

  insertByCenario(sym, instances);
}

printMemoryUsage(instances);
