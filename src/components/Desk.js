import React, { useState } from 'react'
import DeskItemButton from './DeskItemButton'
import Header from './Header'

const delimiters = [' ', ', ', '::', ', by ', ', --no ']

export default function Desk({ deskItems, addWord, removeWordAtIdx, clearDeskItems }) {
	const [delimiterIdx, setDelimiterIdx] = useState(0)
	const btnStyle = 'flex-initial border border-blue-500 hover:bg-blue-300 active:bg-blue-200 p-2 rounded text-lg text-white'
	const btnStyleActive = 'bg-blue-500'

	return (
		<div className='relative'>
			<Header>Add words into the prompt</Header>
			<button title='Remove All' className='absolute top-2 right-10' onClick={clearDeskItems}>❌</button>
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
				<div className='flex flex-col'>
					{delimiters.map((delimiter, idx) => (
						<button
							className={`flex-1 text-xs whitespace-nowrap px-1 ${btnStyle} ${delimiterIdx === idx && btnStyleActive}`}
							onClick={() => setDelimiterIdx(idx)}
							key={idx}
						>{delimiter === ' ' ? '—' : delimiter}</button>
					))}
				</div>

			</div>
		</div>
	)
}
