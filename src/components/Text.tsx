import React, { FunctionComponent } from 'react'
interface TextProps {
  text: string
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return (
    <div>
      <div>{text}</div>
    </div>
  )
}

export default Text
