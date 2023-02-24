import { useState } from 'react'
import './App.css'
import { RatingPanel } from './components/RatingPanel'
import { ThankYouPanel } from './components/ThankYouPanel'

function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  return (
		<div className='App'>
			{selectedRating === null ? (
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
