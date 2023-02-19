import { FC } from 'react'
import styles from './RatingPanel.module.scss'

export const ThankYouPanel: FC<ThankYouPanelPropsType> = ({
	selectedRating
}) => {
	return (
		<div className={`${styles.panel} ${styles.center}`}>
			<img src='./illustration-thank-you.svg' alt='thank-you' />
			<p className={styles['selected-rating']}>
				You selected {selectedRating} out of 5
			</p>
			<h1 className={styles.title}>Thank you!</h1>
			<p className={styles.text}>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don't hesitate to get in touch!
			</p>
		</div>
	)
}

type ThankYouPanelPropsType = {
	selectedRating: number
}
