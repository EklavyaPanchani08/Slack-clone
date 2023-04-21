import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import "../scss/Chat.scss"
import db from "../firebase"
import Message from './Message'

const Chat = () => {
  const { channelId } = useParams()
  const [channelDetails, setChannelDetails] = useState()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {

      // GET CHANNEL NAME //
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setChannelDetails(snapshot.data()))

      // GET MESSAGES //
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy('time', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs?.map((doc) => doc.data()))
        )
    }

  }, [channelId])

  return (
    <div className='chat-main'>
      <div className='chat-header'>
        <h2># {channelDetails?.name}</h2>
      </div>

      {messages && messages?.map((message) => (
        <Message message={message?.message} time={message?.time} useravatar={message?.useravatar} username={message?.username} />
      ))}

    </div>
  )
}

export default Chat