const deskItemsSaveKey = 'deskItems'

export function saveDeskItems(items = {}) {
	localStorage.setItem(deskItemsSaveKey, JSON.stringify(items))
}
export function loadDeskItems() {
	return JSON.parse(localStorage.getItem(deskItemsSaveKey) || '[]')
}