const tests = [
  ['list', ['int-map', 'int-object', 'string', 'symbol']],
  ['object', ['int-map', 'int-object', 'string', 'symbol']],
  ['map', ['int-map', 'int-object', 'string', 'symbol']],
];

import { markdownTable } from 'markdown-table';
import { spawnSync } from 'child_process';
import { parameters } from './parameters.mjs';

for (const numOfInstances of parameters.instances) {
  console.log(`## Instances: ${numOfInstances}\n`);

  for (const [test, cenarios] of tests) {
    console.log(`### ${test}\n`);

    const table = [['Instances', 'Type', 'N. of IDs', 'ID Size', 'Memory (mb)', 'Time Spent (ms)']];

    for (const stringSize of parameters.stringSize) {
      for (const run of parameters.runs) {
        for (const cenario of cenarios) {
          // ref: https://stackoverflow.com/a/54466812/8741188
          const maxItensOnMap = Math.pow(2, 27) / (3 * stringSize * 13);

          if (cenario === 'int' && run > maxItensOnMap) {
            table.push([cenario, run, stringSize * 13, 'Out of Memory', 0]);
            continue;
          }

          const now = performance.now();
          const { stdout: output, stderr } = spawnSync(process.execPath, [
            '--expose-gc',
            `test-generic-${cenario}-memory.mjs`,
            test,
            numOfInstances,
            run,
            stringSize,
          ]);
          const spentTime = performance.now() - now;

          try {
            table.push([numOfInstances, cenario, run, stringSize * 13, JSON.parse(output.toString()).mb.toFixed(2), spentTime.toFixed(2)]);
          } catch (e) {
            table.push([numOfInstances, cenario, run, stringSize * 13, 'Error', 0]);
          }
        }
      }
    }

    console.log(markdownTable(table));
    console.log('');
  }
}
