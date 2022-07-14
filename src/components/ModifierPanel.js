import React, { useEffect, useState } from 'react'

const sizeOptions = [
	{ label: ' ' },
	{ label: '--wallpaper', info: '--w 1920 --h 1024 --hd' },
	{ label: '--sl', info: '--w 320 --h 256' },
	{ label: '--ml', info: '--w 448 --h 320' },
	{ label: '--ll', info: '--w 768 --h 512 --hd' },
	{ label: '--sp', info: '--w 256 --h 320' },
	{ label: '--mp', info: '--w 320 --h 448' },
	{ label: '--lp', info: '--w 512 --h 768 --hd' },
	{ label: '--ar 4:3' },
	{ label: '--ar 16:9' },
	{ label: '--ar 2:1' },
	{ label: '--ar 3:4' },
	{ label: '--ar 9:16' },
	{ label: '--ar 1:2' },
]
const modifierOptions = [
	{ label: '--fast' },
	{ label: '--vibe' },
	{ label: '--vibefast' },
	{ label: '--hd' },
	{ label: '--no dof' },
	{ label: '--stop 20' },
	{ label: '--stop 50' },
	{ label: '--stop 80' },
	{ label: '--uplight' },
]

export default function ModifierPanel({modifiers, setModifiers}) {
	const [sizeIdx, setSizeIdx] = useState(0)
	const [modifierIdxs, setModifierIdxs] = useState([])
	useEffect(() => {
		const size = sizeIdx === null ? '' : sizeOptions[sizeIdx].label
		const mods = modifierOptions
			.filter((e, i) => modifierIdxs.includes(i))
			.map(e => e.label)
			.join(' ')

		setModifiers(`${size} ${mods}`)
	}, [sizeIdx, modifierIdxs, setModifiers])


	return (
		<div
			className='
				flex flex-col
				border border-white border-dashed h-32 p-3 text-neutral-400
			'
		>
			{/* Size */}
			<div className='flex flex-1 items-center'>
				<span className='font-bold mr-1'>Size: </span>
				<div className='w-max overflow-x-auto flex '>
					{sizeOptions.map((option, idx) => (
						<div key={idx} title={option.info} className='flex-1 flex whitespace-nowrap'>
							<input
								type='radio'
								className='hidden peer'
								id={option.label}
								value={idx}
								checked={sizeIdx === idx}
								onChange={e => setSizeIdx(idx)}
							/>
							<label
								htmlFor={option.label}
								className='
								border border-neutral-400 rounded p-2 mx-1 cursor-pointer
								peer-checked:bg-yellow-700 peer-checked:text-white peer-checked:active:bg-yellow-300 peer-checked:active:text-black
								hover:bg-yellow-700 hover:text-white hover:border-white active:bg-yellow-300 active:text-black
							'
							>
								{option.label}
							</label>
						</div>
					))}
				</div>
			</div>

			{/* Algo Modifiers */}
			<div className='flex flex-1 items-center'>
				<span className='font-bold mr-1'>Algorithm Modifiers: </span>
				<div className='w-max overflow-x-auto flex'>
					{modifierOptions.map((option, idx) => (
						<div key={idx} className='flex-1 flex whitespace-nowrap'>
							<input
								type='checkbox'
								className='hidden peer'
								id={option.label}
								value={idx}
								checked={modifierIdxs.includes(idx)}
								onChange={e => {
									if (modifierIdxs.includes(idx))
										setModifierIdxs(modifierIdxs.filter(e => e !== idx))
									else
										setModifierIdxs([...modifierIdxs, idx])
								}}
							/>
							<label
								htmlFor={option.label}
								className='
									border border-neutral-400 rounded p-2 mx-1 cursor-pointer
									peer-checked:bg-yellow-700 peer-checked:text-white peer-checked:active:bg-yellow-300 peer-checked:active:text-black
									hover:bg-yellow-700 hover:text-white hover:border-white active:bg-yellow-300 active:text-black
								'
							>
								{option.label}
							</label>
						</div>
					))}
				</div>
			</div>

		</div>
	)
}
