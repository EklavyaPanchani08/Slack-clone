import React from 'react'
import { Row, Col } from 'antd'
import { useParams } from "react-router-dom"
import "../scss/Chat.scss"

const Chat = () => {
  const { channelId } = useParams()
  return (
    <div className='chat-main'>
      <div className='chat-header'>
        <h2># Channel name</h2>
      </div>
    </div>
  )
}

export default Chat