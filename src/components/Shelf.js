import React, { useMemo, useState } from 'react'
import popular1 from "../wordCollections/popular/popular1.json";
import popular2 from "../wordCollections/popular/popular2.json";
import artists from "../wordCollections/artists/artists.json";
import animals from "../wordCollections/animals/animals.json";
import artStyle from "../wordCollections/artStyle.json";
import artMedium from "../wordCollections/artMedium.json";
import lighting from "../wordCollections/lighting.json";
import top from "../wordCollections/top.json";
import portrait from "../wordCollections/portrait.json";
import landscape from "../wordCollections/landscape.json";
import _3D from "../wordCollections/3D.json";
import Header from './Header';

const wordCollections = [
	{ name: 'Art Style', items: artStyle.concat(artMedium) },
	{ name: 'Animals', items: animals },
	{ name: 'Portrait', items: portrait },
	{ name: 'Lighting', items: lighting },
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
			<ul className='w-full mt-2 flex flex-row overflow-auto'>
				{collections.map((collection, idx) => (
					<li
						className={`
							btn py-1 my-0 ml-0 mr-0.5 whitespace-nowrap
							text-white border border-white border-b-0 rounded-b-none rounded-t-md
							hover:bg-white hover:text-black
							${activeIdx === idx && 'bg-white text-black'}
						`}
						key={idx}
						onClick={() => setActiveIdx(idx)}
					> {collection.name} </li>
				))}
			</ul>
			<ul className='w-full h-72 p-2 flex flex-wrap content-start overflow-auto border border-white'>
				{collections[activeIdx].items.map((item, idx) => (
					<li
						className={`
							btn
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
