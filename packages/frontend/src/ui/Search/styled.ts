import styled from 'styled-components'
import { theme } from 'styles/variables'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin-bottom: 12px;

  & > div {
    width: 100%;
    display: flex;
    position: relative;

    & > input {
      flex: 1;
      padding: 14px 24px;
      padding-right: 130px;
      border: 0;
      border-radius: 18px;

      background-color: ${theme.color.foreground};
      box-shadow: ${theme.shadow.box};
      color: ${theme.color.white};

      &::placeholder {
        color: ${theme.color.grey};
        font-size: 13px;
      }

      font-weight: 700;
      font-size: 13px;
    }

    & > button {
      position: absolute;
      right: 0;

      background-color: ${theme.color.primary};
      color: ${theme.color.white};

      padding: 14px 32px;
      font-weight: 700;
      font-size: 13px;

      border-radius: 18px;
    }
  }
`

export const Highlighter = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 24px;
  font-weight: 600;
  line-height: 20px;

  & pre {
    overflow-x: visible !important;
  }
`
