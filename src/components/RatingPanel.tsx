import { FC, useRef } from 'react'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import styles from './RatingPanel.module.scss'

export const RatingPanel: FC<RatingPanelPropsType> = ({
	selectedRating,
	setSelectedRating,
	setIsSubmitted
}) => {
	const handleFormSubmitted = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitted(true)
	}
	const ratingOrSubmitButton = useRef(null)
	useOnClickOutside(ratingOrSubmitButton, () => setSelectedRating(null))

	return (
		<form onSubmit={handleFormSubmitted} className={styles.panel}>
			<img className={styles.star} src={'/icon-star.svg'} alt='star'></img>
			<h1 className={styles.title}>How did we do?</h1>
			<p className={styles.text}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<div className={styles.ratings}>
				{[1, 2, 3, 4, 5].map(rating => (
					<button
						ref={ratingOrSubmitButton}
						key={rating}
						type='button'
						onClick={() => setSelectedRating(rating)}
						className={styles.rating}
					>
						{rating}
					</button>
				))}
			</div>
			<button
				ref={ratingOrSubmitButton}
				type='submit'
				disabled={!selectedRating}
				className={styles.submit}
			>
				Submit
			</button>
		</form>
	)
}

type RatingPanelPropsType = {
	selectedRating: number | null
	setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>
	setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}
