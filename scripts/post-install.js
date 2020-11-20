/* eslint-disable no-console */
const chalk = require("chalk");
const fs = require("fs");

console.log("running post-install");

const moveDarwinConfig = async (folder, file) => {
  if (process.platform === "darwin") {
    try {
      // Because node-usb is not properly getting the config.h on MacOS to set
      // PLATFORM_POSIX & other constants for building the bindings_usb.node file
      // @TODO fix this on https://github.com/lightspeedretail/node-usb
      fs.createReadStream(`libusb/Xcode/config.h`).pipe(
        fs.createWriteStream(`libusb_config/config.h`)
      );

      console.log(chalk.blue("file moved"));
    } catch (err) {
      console.log(err);
    }
  }
};

moveDarwinConfig();
