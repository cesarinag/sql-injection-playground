import React from 'react'

import { Children } from 'types/global'

import * as S from './styled'

type Props = {
  children: Children
}

const Container = ({ children }: Props) => <S.Wrapper>{children}</S.Wrapper>

export default Container
