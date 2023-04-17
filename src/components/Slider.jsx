import React from 'react'
import { Col, Row } from 'antd'
import SliderOption from '../utils/SliderOption'
import EditIcon from '../assets/icons/edit.svg';
import MessageIcon from '../assets/icons/message.svg';
import AtSign from '../assets/icons/at-sign.svg';
import hashtagIcon from '../assets/icons/hash.svg';
import usersIcon from '../assets/icons/users.svg';
import plusIcon from '../assets/icons/plus.svg';
import userAvatar1 from '../assets/images/av.png';
import userAvatar2 from '../assets/images/ava.jpeg';
import '../scss/Slider.scss'

const Slider = () => {
    return (
        <div className='slider'>
            {/*======= HEADER =======*/}
            <Row justify="space-between" className='slider-header'>
                <Col>
                    <h3>codingblocks</h3>
                </Col>
                <Col>
                    <img src={EditIcon} className='new-message-icon' />
                </Col>
            </Row>

            {/*======= OPTION =======*/}
            <div className='slider-first-option'>
                <SliderOption icon={MessageIcon} title='Direct messages' />
                <SliderOption icon={AtSign} title='Mentions & reactions' />
                <SliderOption icon={hashtagIcon} title='All channels' />
                <SliderOption icon={usersIcon} title='People' />
            </div>

            <div className='slider-second-option'>
                <span>Channels</span>
                <SliderOption channel='general' />
                <SliderOption channel='JavaScript' />
                <SliderOption channel='React JS' />
                <SliderOption channel='Node JS' />
                <Row justify='start' className='slider-option'>
                    <Col>
                        <img className='slider-option-plus-icon' src={plusIcon} />
                    </Col>
                    <Col>
                        <span className='slider-option-add-channel'>Add Channels</span>
                    </Col>
                </Row>
            </div>

            <div className='slider-second-option'>
                <span>Direct messages</span>
                <SliderOption userAvatar={userAvatar1} userName='Eklavya Pancchani' />
                <SliderOption userAvatar={userAvatar2} userName='Vivek Dhaduk' />
                <SliderOption userAvatar={userAvatar1} userName='Kalio' />
                <SliderOption userAvatar={userAvatar2} userName='Yash Padsala' />
                <SliderOption userAvatar={userAvatar1} userName='Vagadiyo' />
                <SliderOption userAvatar={userAvatar2} userName='Munju Brothers' />
                <Row justify='start' className='slider-option'>
                    <Col>
                        <img className='slider-option-plus-icon' src={plusIcon} />
                    </Col>
                    <Col>
                        <span className='slider-option-add-channel'>Add Coworkers</span>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Slider