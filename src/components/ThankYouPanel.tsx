import { FC } from 'react'
import styles from './ThankYouPanel.module.scss'
import panelStyles from './Panel.module.scss'

export const ThankYouPanel: FC<ThankYouPanelPropsType> = ({
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

type ThankYouPanelPropsType = {
	selectedRating: number
}
