import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: blue;
`

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}
