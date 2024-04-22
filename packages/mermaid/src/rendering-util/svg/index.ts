import type { IconLibrary } from '../svgRegister.js';
import database from './database.js';
import server from './server.js';
import disk from './disk.js';
import internet from './internet.js';
import cloud from './cloud.js';
import unknown from './unknown.js';

const defaultIconLibrary: IconLibrary = {
  database: database,
  server: server,
  disk: disk,
  internet: internet,
  cloud: cloud,
  unknown: unknown,
};

export default defaultIconLibrary;