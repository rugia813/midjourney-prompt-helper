import React, { useState } from 'react'
import DeskItemButton from './DeskItemButton'
import Header from './Header'

const delimiters = [' ', ', ', '::']
export default function Desk({ deskItems, addWord, removeWordAtIdx }) {
	const [delimiterIdx, setDelimiterIdx] = useState(0)
	const btnStyle = 'flex-initial border border-blue-500 hover:bg-blue-300 active:bg-blue-200 p-2 rounded text-lg text-white'
	const btnStyleActive = 'bg-blue-500'

	return (
		<>
			<Header>Use words you picked to form prompt</Header>
			<div className='flex w-full mb-1'>

				{/* Desk Items */}
				<ul className='flex flex-wrap p-2 border border-dashed w-full min-h-[120px] overflow-y-auto max-h-96'>
					{deskItems.map((word, i) =>
						<li key={word+i}>
							<DeskItemButton
								initialText={word}
								delimiter={delimiters[delimiterIdx]}
								addWord={addWord}
								removeWordAtIdx={() => removeWordAtIdx(i)}
							/>
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
					<button
						className={`${btnStyle} ${delimiterIdx === 2 && btnStyleActive}`}
						onClick={() => setDelimiterIdx(2)}
					>::</button>
					{/* <button
						className='flex-initial bg-blue-500 hover:bg-blue-300 active:bg-blue-200 p-2 rounded text-lg'
					>::</button> */}
				</div>

			</div>
		</>
	)
}
