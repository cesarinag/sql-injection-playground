import React from 'react'

import { Container } from 'ui'
import { Children } from 'types/global'

import * as S from './styled'

type Props = {
  children: Children
}

const Layout = ({ children }: Props) => (
  <S.Wrapper>
    <Container>{children}</Container>
  </S.Wrapper>
)

export default Layout
