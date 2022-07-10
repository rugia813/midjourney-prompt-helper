const fs = require('fs')

const res = fs.readFileSync('artists.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
})
fs.writeFileSync('artists.json', JSON.stringify(res.split('\r\n')))