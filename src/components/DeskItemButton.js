import React, { useState } from 'react'

export default function DeskItemButton() {
	const [text, setText] = useState('ggg')
	const [edditable, setEdditable] = useState(false)
	return (
		<div className='relative flex'>
			<button
				className='border border-neutral-400 p-3'
				contentEditable={edditable}
				onBlur={e => setText(e.target.textContent)}
				onClick={e => console.log(text)}
			>{text}</button>
			<div onClick={e => setEdditable(edditable => !edditable)}>E</div>
		</div>
	)
}
