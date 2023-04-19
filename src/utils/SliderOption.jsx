import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import hashtagIcon from '../assets/icons/hash.svg';
import '../scss/SliderOption.scss'

const SliderOption = ({ icon, title, channel, userAvatar, userName, channelId }) => {
    return (<>
        {icon &&
            <Row justify='start' className='slider-option'>
                <Col>
                    <img className='slider-option-icon' src={icon} />
                </Col>
                <Col>
                    <span className='slider-option-title'>{title}</span>
                </Col>
            </Row>
        }
        {channel &&
            <>
                <Link to={`/channel/${channelId}`}>
                    <Row justify='start' className='slider-option'>
                        <Col>
                            <img className='slider-option-icon' src={hashtagIcon} />
                        </Col>
                        <Col>
                            <span className='slider-option-channel'>{channel}</span>
                        </Col>
                    </Row>
                </Link>
            </>
        }
        {userName &&
            <Row justify='start' className='slider-option'>
                <Col>
                    <img className='slider-option-icon' src={userAvatar} />
                </Col>
                <Col>
                    <span className='slider-option-title'>{userName}</span>
                </Col>
            </Row>
        }
    </>
    )
}

export default SliderOption