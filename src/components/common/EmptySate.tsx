import React from 'react'

interface MesssageEmpty {message:string}
const EmptyState:React.FC<MesssageEmpty> = (message) => {
  return (
    <label>
       {message.message}
    </label>
  )
}

export default EmptyState