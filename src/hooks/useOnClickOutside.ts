import { useEffect } from 'react'

export function useOnClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: () => void
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				!['1', '2', '3', '4', '5', 'submit'].includes(
					(e.target as HTMLElement).innerText.toLowerCase()
				)
			) {
				handler()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
}
