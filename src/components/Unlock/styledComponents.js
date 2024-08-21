// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  height:100vh;
  background-image:linear-gradient(to Bottom,#0b0c1e,#3c2940);
`
export const ImageandTextContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const Image = styled.img`
  height:100px;
`

export const Text = styled.p`

  font-family:'Roboto';
  font-size:20px;
  color:#fff;
`

export const ChangeButton = styled.button`
  margin-top:30px;
  height:40px;
  width:120px;
  color:#fff;
  background-color: #06b6d4;
  border:none;
  border-radius:10px;
`
