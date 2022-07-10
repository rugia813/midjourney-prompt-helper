import React from 'react'

export default function Header({children}) {
	return (
		<h1 className='bg-blue-600 text-white p-1 border-r-blue-800 border-r-8 rounded-r-xl w-fit'>
			{children}:
		</h1>
	)
}
