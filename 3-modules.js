// CommonJS, chaque fichier est un module (par défaut)
// Modules - partie de code (on partage uniquement le minimum)

const names = require('./4-names');
// console.log(names)

const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor')
// console.log(data)

require('./7-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)