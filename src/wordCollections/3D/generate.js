const fs = require('fs')

const res = fs.readFileSync('3D.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
})
fs.writeFileSync('3D.json', JSON.stringify(res.split('\r\n')))