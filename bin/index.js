#!/usr/bin/env node
const { parcelIp } = require("../lib/parcel");
const args = require("minimist")(process.argv.splice(2), {
  boolean: ["--help"],
});
var BASE_PATH = "src/index.js";
var port = 8080;
if (args.help) {
  printHelp();
} else if (args.file) {
  BASE_PATH = args.file;
} else if (args._.length) {
  error("incorrect usage");
  console.log("");
  printHelp();
}
if (args.port) {
  port = args.port;
}
function printHelp() {
  console.log("pon:usage             --help");
  console.log("");
  console.log("--help                help for usage");
  console.log(
    "--file={FILENAME}     entry file for parcel(default to src/index.js)"
  );
  console.log(
    "--qr                  print a qr code of the generated url eg:198.168.19.42:8080"
  );
  console.log("--port={PORT}         specify the port (default to 8080)");
  console.log("");
}

function error(err) {
  console.log(err);
}

parcelIp(BASE_PATH, port, !!args.qr);
