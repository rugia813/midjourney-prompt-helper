import React, { useMemo, useState } from 'react'
import popular1 from "../wordCollections/popular/popular1.json";
import popular2 from "../wordCollections/popular/popular2.json";
import artists from "../wordCollections/artists/artists.json";
import animals from "../wordCollections/animals/animals.json";
import artStyle from "../wordCollections/artStyle.json";
import artMedium from "../wordCollections/artMedium.json";
import top from "../wordCollections/top.json";
import portrait from "../wordCollections/portrait.json";
import landscape from "../wordCollections/landscape.json";
import _3D from "../wordCollections/3D.json";
import Header from './Header';

const wordCollections = [
	{ name: 'Art Style', items: artStyle },
	{ name: 'Art Medium', items: artMedium },
	{ name: 'Animals', items: animals },
	{ name: 'Portrait', items: portrait },
	{ name: 'Landscape', items: landscape },
	{ name: 'Artists', items: artists },
	{ name: '3D', items: _3D },
	{ name: 'Top', items: top },
	{ name: 'Popular1', items: popular1 },
	{ name: 'Popular2', items: popular2 },
]

export default function Shelf({ customCollections = [], addDeskItem }) {
	const collections = useMemo(() => wordCollections.concat(customCollections), [customCollections])
	const [activeIdx, setActiveIdx] = useState(0)
	return (
		<div className='w-full h-96 overflow-hidden flex flex-wrap content-start'>
			<Header>Pick words that you might want to use</Header>
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
						onClick={() => setActiveIdx(idx)}
					> {collection.name} </li>
				))}
			</ul>
			<ul className='w-full h-72 p-2 flex flex-wrap content-start overflow-auto border border-slate-600'>
				{collections[activeIdx].items.map((item, idx) => (
					<li
						className={`
							text-neutral-400 text-md
							p-2 py-0 m-1 h-fit flex-initial cursor-pointer
							border border-neutral-400 rounded
							hover:bg-neutral-400 hover:text-white
							active:bg-neutral-400 active:text-white
							${item.startsWith('#') ? 'w-full font-bold' : 'w-fit '}
						`}
						key={idx}
						onClick={() => addDeskItem(item.replace(/^#/, ''))}
					> {item.replace(/^#/, '')} </li>
				))}
			</ul>
		</div>
	)
}
