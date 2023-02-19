import { useState } from 'react'
import './App.css'
import { RatingPanel } from './components/RatingPanel'
import { ThankYouPanel } from './components/ThankYouPanel'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  return (
		<div className='App'>
			{!isSubmitted ? (
				<RatingPanel
					selectedRating={selectedRating}
					setSelectedRating={setSelectedRating}
					setIsSubmitted={setIsSubmitted}
				/>
			) : (
				<ThankYouPanel selectedRating={selectedRating!} />
			)}
		</div>
	)
}

export default App
