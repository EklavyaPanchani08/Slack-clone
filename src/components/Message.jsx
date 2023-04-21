import { Col, Row } from 'antd'
import React from 'react'
import '../scss/Message.scss'
import defaultAvatar from "../assets/images/defualt-avatar.png"

const Message = ({ message, time, useravatar, username }) => {
    return (
        <Row className='message'>
            <Col span={2}><img className='useravatar' src={useravatar ? useravatar : defaultAvatar} alt={username} /></Col>
            <Col span={22} className='user-info'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className='username'>{username}</span>
                    <span className='time'>{new Date(time?.toDate()).toUTCString()}</span>
                </div>
                <p>{message}</p>
            </Col>
        </Row>
    )
}

export default Message