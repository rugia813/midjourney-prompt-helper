import React from 'react'
import DeskItemButton from './DeskItemButton'

export default function Desk({deskItems, addWord}) {

	return (
		<ul className='flex flex-wrap p-20 border border-dashed m-3 w-full'>
			{deskItems.map((word, i) =>
				<li key={i}>
					<DeskItemButton initialText={word} addWord={addWord} />
				</li>
			)}
		</ul>
	)
}
