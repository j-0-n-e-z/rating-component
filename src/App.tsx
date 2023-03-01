import './App.css'
import { useState } from 'react'
import { RatingPanel } from './components/RatingPanel'
import { ThankYouPanel } from './components/ThankYouPanel'

function App() {
  const [selectedRating, setSelectedRating] = useState<number | undefined>()

  return (
		<div className='App'>
			{!selectedRating ? (
				<RatingPanel
					setSelectedRating={setSelectedRating}
				/>
			) : (
				<ThankYouPanel selectedRating={selectedRating!} />
			)}
		</div>
	)
}

export default App
