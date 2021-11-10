
import React from 'react'
import ContentLoader from 'react-content-loader'

const Loading = props => (
  <ContentLoader 
    speed={1}
    width={230}
    height={230}
    viewBox="0 0 230 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#5e369f"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="192" height="192" />
  </ContentLoader>
)

export default Loading;