import React, { useState } from 'react'
import DeskItemButton from './DeskItemButton'

const delimiters = [' ', ', ']
export default function Desk({deskItems, addWord}) {
	const [delimiterIdx, setDelimiterIdx] = useState(0)
	const btnStyle = 'flex-initial border border-blue-500 hover:bg-blue-300 active:bg-blue-200 p-2 rounded text-lg text-white'
	const btnStyleActive = 'bg-blue-500'

	return (
		<div className='flex'>
			{/* Desk Items */}
			<ul className='flex flex-wrap p-2 border border-dashed m-1 w-full min-h-[120px]'>
				{deskItems.map((word, i) =>
					<li key={i}>
						<DeskItemButton initialText={word} addWord={(text) => addWord(text + delimiters[delimiterIdx])} />
					</li>
				)}
			</ul>
			{/* Delimiter Buttons */}
			<div className='flex flex-col justify-around'>
				<button
					className={`${btnStyle} ${delimiterIdx === 0 && btnStyleActive}`}
					onClick={() => setDelimiterIdx(0)}
				>—</button>
				<button
					className={`${btnStyle} ${delimiterIdx === 1 && btnStyleActive}`}
					onClick={() => setDelimiterIdx(1)}
				>,</button>
				{/* <button
					className='flex-initial bg-blue-500 hover:bg-blue-300 active:bg-blue-200 p-2 rounded text-lg'
				>::</button> */}
			</div>
		</div>
	)
}
