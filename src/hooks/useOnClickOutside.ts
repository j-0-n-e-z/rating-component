import { useEffect } from 'react'

export function useOnClickOutside(handler: () => void) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			const isClickedOutside = !(
				e.target instanceof HTMLLabelElement ||
				e.target instanceof HTMLButtonElement
			)

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
