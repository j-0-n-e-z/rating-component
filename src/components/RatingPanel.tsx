import { FC, ReactElement, useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import styles from './RatingPanel.module.scss'
import panelStyles from './Panel.module.scss'
import cn from 'classnames'

type RatingPanelProps = {
	setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>
}

export const RatingPanel: FC<RatingPanelProps> = ({ setSelectedRating }) => {
	const [currentRating, setCurrentRating] = useState<number | null>(null)

	const submitButtonRef = useRef(null)
	useOnClickOutside(submitButtonRef, () => setCurrentRating(null))

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSelectedRating(currentRating)
	}

	return (
		<form onSubmit={handleFormSubmit} className={panelStyles.panel}>
			<img className={styles.star} src='./icon-star.svg' alt='star'></img>
			<h1 className={panelStyles.title}>How did we do?</h1>
			<p className={panelStyles.text}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<div className={styles.ratings}>
				{[1, 2, 3, 4, 5].map(rating => (
					<label
						key={rating}
						className={cn(styles.rating, {
							[styles.selected]: rating <= (currentRating ?? 0)
						})}
					>
						<input
							type='radio'
							name='rating'
							onChange={() => setCurrentRating(rating)}
							checked={rating === currentRating}
							hidden
						/>
						{rating}
					</label>
				))}
			</div>
			<button
				ref={submitButtonRef}
				type='submit'
				disabled={!currentRating}
				className={styles.submit}
			>
				Submit
			</button>
		</form>
	)
}
