import cn from 'classnames'
import { FC, useState } from 'react'
import panelStyles from './Panel.module.scss'
import styles from './RatingPanel.module.scss'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import starIcon from '../../public/icon-star.svg'

type RatingPanelProps = {
	setSelectedRating: (rating: number | undefined) => void
}

export const RatingPanel: FC<RatingPanelProps> = ({ setSelectedRating }) => {
	const [currentRating, setCurrentRating] = useState<number | undefined>()

	useOnClickOutside(
		() => setCurrentRating(undefined),
		HTMLLabelElement,
		HTMLButtonElement
	)

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSelectedRating(currentRating)
	}

	return (
		<form className={panelStyles.panel} onSubmit={handleFormSubmit}>
			<img className={styles.star} src={starIcon} alt='star'/>
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
			<button type='submit' disabled={!currentRating} className={styles.submit}>
				Submit
			</button>
		</form>
	)
}
