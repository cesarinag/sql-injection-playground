import React, { ChangeEvent, useCallback } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import * as S from './styled'

type Props = {
  value: string
  handleChange: (value: string) => void
  onClick: () => void
}

const Search = ({ value, handleChange, onClick }: Props) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      handleChange(event?.target?.value),
    [handleChange]
  )

  return (
    <S.Wrapper>
      <div>
        <input {...{ value, onChange }} type="text" placeholder="Search..." />
        <button onClick={onClick}>Submit</button>
      </div>

      <S.Highlighter>
        <SyntaxHighlighter wrapLines language="pgsql" style={atomOneDark}>
          {`SELECT * FROM posts${!!value ? '\n' : ' '}WHERE ${
            !!value ? `category = '${value}'\nAND ` : ''
          }published = true;`}
        </SyntaxHighlighter>
      </S.Highlighter>
    </S.Wrapper>
  )
}

export default Search
