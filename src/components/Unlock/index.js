// Write your code here
import {useState} from 'react'
import {AppContainer, Text, CustomButton} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(false)

  const onToggleButton = () => setIsLocked(prevState => !prevState)
  return (
    <AppContainer>
      {isLocked ? (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Text>Your Device is Unlocked</Text>
          <CustomButton onClick={onToggleButton}>Lock</CustomButton>
        </>
      ) : (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Text>Your Device is Locked</Text>
          <CustomButton onClick={onToggleButton}>Unlock</CustomButton>
        </>
      )}
    </AppContainer>
  )
}

export default Unlock
