import { useEffect } from 'react'

export function useOnClickOutside(handler: () => void, ...allowedElements: any[]) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			const isClickedOutside = allowedElements.every(element => !(e.target instanceof element))
			
			if (isClickedOutside) {
				handler()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
}
