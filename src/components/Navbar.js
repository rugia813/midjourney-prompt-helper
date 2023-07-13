import React from 'react'

export default function Navbar() {
	return (
		<nav className='
			text-sm text-white p-1 w-fit
			xl:absolute xl:top-0 xl:left-0 xl:ml-1 xl:mt-1
		'>
			<ul className='xl:flex-col flex gap-2'>
				<li className='bg-gray-600 p-1 border-r-gray-700 border-r-8 rounded-r-xl hover:bg-gray-700 cursor-pointer rounded'>
					<a href="/">Home</a>
				</li>
				<li className='bg-gray-600 p-1 border-r-gray-700 border-r-8 rounded-r-xl hover:bg-gray-700 cursor-pointer rounded'>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	)
}
