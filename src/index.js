const shell = require("shelljs");
const fs = require("fs");

const versions = shell.exec("npm info zilly-ui dist-tags.latest").stdout.replace("\n", "").replace(/\./g, "");
const oldVersion = shell.exec("npm ls zilly-ui --json").stdout;

const oldVs = JSON.parse(oldVersion).dependencies["zilly-ui"].version.replace(/\./g, "");

if (Number(oldVs) < Number(versions)) {
    try {
        shell.exec(`yarn upgrade zilly-ui --latest`);
    } catch (error) {
        shell.exec(`npm update zilly-ui`);
    }
}

