import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/PostItem.types'

// export type PostType = {
//   node: {
//     id: string
//     frontmatter: {
//       title: string
//       summary: string
//       date: string
//       categories: string[]
//       thumbnail: {
//         publicURL: string
//       }
//     }
//   }
// }

type PostListProps = {
  posts: PostType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 1024px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 70px 50px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
