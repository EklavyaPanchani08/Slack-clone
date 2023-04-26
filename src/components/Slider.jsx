import React, { useEffect, useState } from 'react'
import { Col, Input, Modal, Row } from 'antd'
import SliderOption from '../utils/SliderOption'
import EditIcon from '../assets/icons/edit.svg';
import MessageIcon from '../assets/icons/message.svg';
import AtSign from '../assets/icons/at-sign.svg';
import hashtagIcon from '../assets/icons/hash.svg';
import usersIcon from '../assets/icons/users.svg';
import plusIcon from '../assets/icons/plus.svg';
import userAvatar1 from '../assets/images/av.png';
import userAvatar2 from '../assets/images/ava.jpeg';
import '../scss/Slider.scss';
import db from '../firebase'
import { toast } from 'react-toastify';

const Slider = () => {

    // ALL STATE //
    const [channel, setChannel] = useState([])
    const [addChannelName, setAddChannelName] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    // GET ALL CHANNELS //
    useEffect(() => {
        db.collection("channels").onSnapshot((querySnapshot) => {
            let newArr = []
            querySnapshot.forEach((doc) => {
                let dd = {
                    id: doc.id,
                    name: doc.data().name
                }
                newArr.push(dd)
                setChannel(newArr)
            })
        },
            (err) => {
                toast.error(err.message);
            }
        );
    }, [])

    // ADD CHANNEL //
    const addChannel = () => {
        setIsModalOpen(!isModalOpen);
        db.collection("channels").add({
            name: addChannelName
        })
        toast.success('Channel Added!')
        setAddChannelName("")
    };

    const handleCancel = () => {
        setIsModalOpen(!isModalOpen);
        setAddChannelName("")
    };

    const openModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className='slider'>
            {/*======= HEADER =======*/}
            <Row justify="space-between" className='slider-header'>
                <Col>
                    <h3>Eklavya Panchani</h3>
                </Col>
                <Col>
                    <img alt="" src={EditIcon} className='new-message-icon' />
                </Col>
            </Row>

            {/*======= OPTION =======*/}
            <div className='slider-first-option'>
                <SliderOption icon={MessageIcon} title='Direct messages' />
                <SliderOption icon={AtSign} title='Mentions & reactions' />
                <SliderOption icon={hashtagIcon} title='All channels' />
                <SliderOption icon={usersIcon} title='People' />
            </div>
            {/*======= ALL CHANNELS =======*/}
            <div className='slider-second-option'>
                <span>Channels</span>
                {channel?.map((channel) => (
                    <SliderOption channel={channel.name} channelId={channel.id} />
                ))}
                <div onClick={openModal}>
                    <Row justify='start' className='slider-option'>
                        <Col>
                            <img alt="" className='slider-option-plus-icon' src={plusIcon} />
                        </Col>
                        <Col>
                            <span className='slider-option-add-channel'>Add Channels</span>
                        </Col>
                    </Row>
                </div>
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
                        <img alt="" className='slider-option-plus-icon' src={plusIcon} />
                    </Col>
                    <Col>
                        <span className='slider-option-add-channel'>Add Coworkers</span>
                    </Col>
                </Row>
            </div>

            {/* ADD MODAL */}
            <Modal title="Add Channel" open={isModalOpen} onOk={addChannel} onCancel={handleCancel}>
                <Input onChange={(e) => setAddChannelName(e.target.value)} value={addChannelName} />
            </Modal>
        </div>

    )
}

export default Slider