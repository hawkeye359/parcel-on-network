var { spawn } = require("child_process");
var ip = require("ip");
var qrcode = require("qrcode-terminal");
const ipv4 = ip.address();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const args = yargs(hideBin(process.argv)).argv;

console.log(args);

// console.log(process.argv);
// console.log(parseArgs(process.argv.slice(2)));
// qrcode.generate(`${ipv4}:8080`, { small: true });
function parcelIp (){
  const child = spawn(`parcel serve src/index.html --host ${ipv4} --port 8080`, {
    shell: true,
    stdio: "inherit",
  });
}

// process.stdin.pipe(child.stdin);
// process.stdout.pipe(child.stdin);

// child.stderr.on("data", (data) => {
//   console.error(`child stderr:\n${data}`);
// });

// child.stdout.on("data", (data) => {
//   console.log(`${data}`);
// });
// child.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// child.on("exit", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// child.on("error", (error) => {
//   console.log(`failed to start subprocess ${error}`);
// });
// child.on("message", (message) => {
//   console.log(message);
// });

module.exports = parcelIp;
