var { spawn } = require("child_process");
var ip = require("ip");
var qrcode = require("qrcode-terminal");
const ipv4 = ip.address();

function parcelIp(pathToFile, port, qr) {
  if (qr) {
    qrcode.generate(`${ipv4}:${port}`, { small: true });
  }
  const child = spawn(
    `parcel serve ${pathToFile} --host ${ipv4} --port ${port}`,
    {
      shell: true,
      stdio: "inherit",
    }
  );
}

module.exports.parcelIp = parcelIp;
