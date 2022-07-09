const arr = require('./response.json')
const fs = require('fs')

const map1 = {}
const map2 = {}

arr.forEach(user => {
	user.ngram_1.forEach(key => {
		map1[key] = map1[key] ? map1[key] + 1 : 1
	})
	user.ngram_2.forEach(key => {
		map2[key] = map2[key] ? map2[key] + 1 : 1
	})
})

const res1 = Object.entries(map1)
	.map(([key, val]) => ({key, count: val}))
	.sort((a,b) => b.count - a.count)
	.map(item => item.key)
const res2 = Object.entries(map2)
	.map(([key, val]) => ({ key, count: val }))
	.sort((a, b) => b.count - a.count)
	.map(item => item.key)

fs.writeFileSync('popular1.json', JSON.stringify(res1))
fs.writeFileSync('popular2.json', JSON.stringify(res2))