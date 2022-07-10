import React, { useMemo, useState } from 'react'
import popular1 from "../wordCollections/popular/popular1.json";
import popular2 from "../wordCollections/popular/popular2.json";
import artists from "../wordCollections/artists/artists.json";
import _3D from "../wordCollections/3D/3D.json";
import Header from './Header';

console.log('popular1: ', popular1.length);
console.log('popular2: ', popular2.length);

const wordCollections = [
	{ name: 'Artists', items: artists },
	{ name: '3D', items: _3D },
	{ name: 'Popular1', items: popular1.slice(0, 200) },
	{ name: 'Popular2', items: popular2.slice(0, 200) },
]

export default function Shelf({ customCollections = [], addDeskItem }) {
	const collections = useMemo(() => wordCollections.concat(customCollections), [customCollections])
	const [activeIdx, setActiveIdx] = useState(0)
	return (
		<div className='w-full h-96 flex flex-wrap content-start'>
			<Header>Pick words that you might use</Header>
			<ul className='w-full m-2 flex flex-row'>
				{collections.map((collection, idx) => (
					<li
						className={`
							text-white border border-white rounded
							m-1 py-1 px-2 w-fit cursor-pointer
							hover:bg-white hover:text-black
							${activeIdx === idx && 'bg-white text-black'}
						`}
						key={idx}
						onMouseEnter={() => setActiveIdx(idx)}
					> {collection.name} </li>
				))}
			</ul>
			<ul className='w-full h-full p-2 flex flex-wrap content-start max-h-96 overflow-auto border border-slate-600'>
				{collections[activeIdx].items.map((item, idx) => (
					<li
						className='
							text-neutral-400 text-sm
							p-2 py-0 m-1 w-fit h-fit flex-initial cursor-pointer
							border border-neutral-400 rounded
							hover:bg-neutral-400 hover:text-white
							active:bg-neutral-400 active:text-white
						'
						key={idx}
						onClick={() => addDeskItem(item)}
					> {item} </li>
				))}
			</ul>
		</div>
	)
}
