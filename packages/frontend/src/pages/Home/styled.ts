import styled from 'styled-components'
import { theme } from 'styles/variables'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Result = styled.article`
  display: flex;
  flex-direction: column;
  height: 600px;
  min-width: 674px;

  background-color: ${theme.color.foreground};
  box-shadow: ${theme.shadow.box};
  overflow: hidden;

  padding-top: 0;
  border-radius: 18px;

  & > div:first-of-type {
    display: flex;
    box-shadow: ${theme.shadow.box};
  }
`

export const Scrollable = styled.div`
  padding: 18px;
  overflow-x: hidden;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    display: none;
  }
`

export const Link = styled.a`
  flex: 1;
  padding: 24px 24px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;

  ${(p) => p.isActive && `background-color: ${theme.color.primary};`}
`
