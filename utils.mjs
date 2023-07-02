export const cenario = process.argv[2];
export const numOfInstances = +process.argv[3];
export const runs = +process.argv[4];
export const stringSize = +process.argv[5];

export const generateString = () => Math.random().toString(16).slice(2).repeat(stringSize);

export const printMemoryUsage = (instances) => {
  gc();

  console.log(JSON.stringify({ mb: process.memoryUsage().heapTotal / 1024 / 1024 }));

  globalThis.avoidGc = instances;
};

export function getInstancesByCenario() {
  const instances = new Array(numOfInstances).fill(0);

  switch (cenario) {
    case 'list': {
      return instances.map(() => []);
    }
    case 'object': {
      return instances.map(() => ({}));
    }
    case 'map': {
      return instances.map(() => new Map());
    }
  }
}

export function insertByCenario(id, instances) {
  for (const instance of instances) {
    switch (cenario) {
      case 'list': {
        instance.push(id);
        break;
      }
      case 'object': {
        instance[id] = true;
        break;
      }
      case 'map': {
        instance.set(id, true);
        break;
      }
    }
  }
}
