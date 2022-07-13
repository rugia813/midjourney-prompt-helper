let res = []
let map = {}

for (let i = 1;i < 25;i++) {
	setTimeout(() => {
		fetch(

		).then(e => e.json()).then(e => console.log(res = res.concat(e.map(e => e.event.textPrompt))))
	}, 1000 * i)
}

res.forEach(arr => {
	try {
		(typeof arr === 'object' ? arr.join(', ') : arr).split(', ').forEach(key => {
			map[key] = map[key] ? map[key] + 1 : 1
		})
	} catch (e) {
		console.log(arr)
	}
})

let ranked = Object.entries(map)
	.map(([key, val]) => ({ key, count: val }))
	.filter(e => e.count > 150 && e.key)
	.sort((a, b) => b.count - a.count)
	.map(item => item.key)

ranked