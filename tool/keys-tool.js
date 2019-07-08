const fs = require('fs')

const key_num = 2048;
const key_length = 1024;
const key_char = 'qwertyuiopasdfghjkl;zxcvbnm,./1234567890-=QWERTYUIOPASDFGHJKLZXCVBNM'

let arr = []

for (let i = 0; i < key_num; i++) {
    let key = ''
    for (let j = 0; j < key_length; j++) {
        key += key_char[Math.floor(Math.random() * key_char.length)]
    }
    arr.push(key)
}

fs.writeFileSync('.keys', arr.join('\n'))


console.log('完成')