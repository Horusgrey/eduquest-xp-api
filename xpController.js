import { readXP, writeXP } from './xpData.js';

export function getXP() {
  return readXP();
}

export function updateXP(data) {
  writeXP(data);
}