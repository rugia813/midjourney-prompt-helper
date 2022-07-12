const fs = require('fs')

const res = fs.readFileSync('animals.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
})
fs.writeFileSync('animals.json', JSON.stringify(res.split('\r\n')))