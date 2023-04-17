import { ClockCircleOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Col, Avatar } from 'antd'
import React from 'react'
import { Input } from 'antd';
import '../scss/Header.scss'



const Header = () => {

  return (
    <Row className='header' justify='center'>
      <Col className='search-header'>
        <ClockCircleOutlined />
      </Col>
      <Col>
        <SearchOutlined className='search-icon' />
        <Input className='search-input' placeholder="Search codingblocks" />
      </Col>
      <Col>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Col>
    </Row>
  )
}

export default Header
