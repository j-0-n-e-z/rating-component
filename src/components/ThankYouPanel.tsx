import { FC } from 'react'
import panelStyles from './Panel.module.scss'
import styles from './ThankYouPanel.module.scss'

type ThankYouPanelProps = {
	selectedRating: number
}

export const ThankYouPanel: FC<ThankYouPanelProps> = ({
	selectedRating
}) => {
	return (
		<div className={`${panelStyles.panel} ${styles.center}`}>
			<img src='./illustration-thank-you.svg' alt='thank-you' />
			<p className={styles['selected-rating']}>
				You selected {selectedRating} out of 5
			</p>
			<h1 className={panelStyles.title}>Thank you!</h1>
			<p className={panelStyles.text}>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don't hesitate to get in touch!
			</p>
		</div>
	)
}
