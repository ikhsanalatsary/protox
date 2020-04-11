'use strict';

const { spawn } = require('child_process');
const batfile = require.resolve('./gencert.bat');
const bat = spawn(batfile);

bat.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

bat.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

bat.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});