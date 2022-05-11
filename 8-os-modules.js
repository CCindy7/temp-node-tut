// OS module

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);
// node app dans le terminal => info

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);
// node app dans le terminal => seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);
// node app dans le terminal => infos du système