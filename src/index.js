
const shell = require("shelljs");
const versions = shell.exec("npm info zilly-ui dist-tags.latest").stdout;
const oldVersion = shell.exec("npm ls shelljs --json").stdout;

try {
    const oldVs = JSON.parse(oldVersion).version;
    if (oldVs < versions) {
        shell.exec("npm install  zilly-ui");
    }
} catch (error) {
    console.error(error);
}
