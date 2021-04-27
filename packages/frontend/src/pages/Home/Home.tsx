import React, { useEffect, useMemo, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Post } from 'types/datamodel'
import { Search } from 'ui'

import { GET_POSTS } from 'apollo/queries'

import * as S from './styled'

type QueryType = { posts: Post[] }
type Category = 'Web' | 'Json' | 'Errors'

const Home = () => {
  const [category, setCategory] = useState<Category>('Json')
  const [search, setSearch] = useState<string>('')

  const [getPosts, { data, loading, error }] = useLazyQuery<QueryType>(
    GET_POSTS
  )

  const posts = useMemo(() => JSON.stringify(data?.posts || [], null, 2), [
    data,
  ])

  const errors = useMemo(() => JSON.stringify(error || 'no errors', null, 2), [
    error,
  ])

  useEffect(getPosts, [])

  return (
    <S.Wrapper>
      <Search
        value={search}
        handleChange={setSearch}
        onClick={() => getPosts({ variables: { ...(!!search && { search }) } })}
      />

      {!loading ? (
        <S.Result>
          <div>
            {['Web', 'Json', 'Errors']?.map((item: Category) => (
              <S.Link
                isActive={item === category}
                key={`link-${item}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </S.Link>
            ))}
          </div>

          <S.Scrollable>
            {category === 'Web' ? (
              <p>Web</p>
            ) : (
              <SyntaxHighlighter wrapLines language="json" style={atomOneDark}>
                {category === 'Json' ? posts : errors}
              </SyntaxHighlighter>
            )}
          </S.Scrollable>
        </S.Result>
      ) : (
        <p>Loading</p>
      )}
    </S.Wrapper>
  )
}

export default Home
