'use strict';

const { delimiter, join, resolve } = require('path');
const shell = require('shelljs');
const rimraf = require('rimraf');
const os = require('os');
const { existsSync, mkdirSync } = require('fs');

function normalize(str) {
  return `"${str}"`;
}

function escapedString(str) {
  return str.replace(/(\s+)/g, '\\$1');
}

if (os.platform() !== 'win32') {
  // https://github.com/shelljs/shelljs/issues/469
  process.env.PATH += (delimiter + join(process.cwd(), 'node_modules', '.bin'));
  const ROOT = resolve(__dirname, '..');
  const PROTO_DIR = normalize(resolve(ROOT, 'pbs'));
  const dir = __dirname + '/generated';
  const GENERATED_DIR = normalize(resolve(escapedString(ROOT), dir));
  const PROTOC_GEN_TS_PATH = normalize(resolve(escapedString(ROOT), 'node_modules', '.bin', 'protoc-gen-ts'));
  if (!existsSync(dir)){
    mkdirSync(dir);
  }
  rimraf.sync(`${GENERATED_DIR}/*`);
  shell.exec('grpc_tools_node_protoc '
    + `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" `
    + `--grpc_out="${GENERATED_DIR}" `
    + `--js_out="import_style=commonjs,binary:${GENERATED_DIR}" `
    + `--ts_out="${GENERATED_DIR}" `
    + `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`);
}