var { spawn } = require("child_process");
var ip = require("ip");
var qrcode = require("qrcode-terminal");
const ipv4 = ip.address();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const args = yargs(hideBin(process.argv)).argv;



qrcode.generate(`${ipv4}:8080`, { small: true });
function parcelIp (){
  const child = spawn(`parcel serve src/index.html --host ${ipv4} --port 8080`, {
    shell: true,
    stdio: "inherit",
  });
}


module.exports.parcelIp = parcelIp;
module.exports.sum = function (a,b){
  return a + b;
}
