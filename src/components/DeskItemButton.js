import React, { useRef, useState } from 'react'

export default function DeskItemButton({ initialText, addWord, removeWordAtIdx, delimiter }) {
	const [text, setText] = useState(initialText)
	const [edditable, setEdditable] = useState(false)
	const buttonRef = useRef(null)

	return (
		<div className='relative flex group mb-1'>

			<button
				className={`
					border border-neutral-400 text-neutral-400 rounded
					${!edditable && 'hover:bg-yellow-700 hover:text-white hover:border-white active:bg-yellow-300 active:text-black'}
					${edditable && 'bg-white text-neutral-900 cursor-text'}
				`}
				onClick={() => !edditable && addWord(delimiter + text)}
			>
				<span className={`${edditable ? 'invisible' : 'pl-3'}`}>{delimiter}</span>
				<span
					ref={buttonRef}
					className={edditable ? 'p-3' : 'pr-3'}
					contentEditable={edditable}
					onBlur={e => setText(e.target.textContent) & setEdditable(edditable => false)}
				>{text}</span>
			</button>

			<div className={`
				invisible group-hover:visible
				flex flex-col w-3
			`}>
				{/* Edit */}
				<div
					className={`text-blue-300 flex-1 cursor-pointer group-focus-within:invisible`}
					onClick={e => setEdditable(edditable => !edditable)}
				>🖍</div>
				{/* Delete */}
				<div
					className={`text-white flex-1 cursor-pointer group-focus-within:invisible`}
					onClick={e => removeWordAtIdx()}
				>❌</div>
			</div>

		</div>
	)
}
