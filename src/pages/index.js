import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import Sider from '../components/post-sider'

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1>
        Hi, I'm Bae, a developer who is learning and growing everyday. I hope
        you enjoy my posts and docs. Feel free to explore!
      </h1>
    </Layout>
  )
}
