// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  ImageandTextContainer,
  Image,
  Text,
  ChangeButton,
} from './styledComponents'

const lockImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

const unLockImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const ChangeLockbtn = () => {
    setIsUnlocked(prevState => !prevState)
  }

  const imageUrl = isUnlocked ? unLockImage : lockImage
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttontext = isUnlocked ? 'Lock' : 'Unlock'

  return (
    <AppContainer>
      <ImageandTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageandTextContainer>

      <ChangeButton type="button" onClick={ChangeLockbtn}>
        {buttontext}
      </ChangeButton>
    </AppContainer>
  )
}

export default Unlock
