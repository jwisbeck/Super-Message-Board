let fs = require('file-system')

let test = {
    'firstName': 'Elijah',
    'lastName': 'Chanakira',
    'roomNumber': 240,
    'courseTitle': 'CMSC423'
}


fs.writeFile('./test.json', JSON.stringify(test), function (err) {})