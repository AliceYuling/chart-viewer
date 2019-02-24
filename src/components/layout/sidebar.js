import React from 'react'
// import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { menu } from '../../utils/constant/menu.js'

const SubMenu = Menu.SubMenu

export class Sidebar extends  React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      current: 'home',
      menu
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect({item, key, selectedKeys}) {
    console.log(key)
    this.setState({
      current: key
    })
  }

  render() {
    return (
      <Menu
        theme={this.state.theme}
        onClick={this.handleClick}
        style={{width: 200}}
        defaultOpenKeys={['d3']}
        selectedKeys={[this.state.current]}
        mode="inline"
        onSelect={this.handleSelect}
      >
        {this.state.menu.map(item => (
          item.children ? 
            (
              <SubMenu
                key={item.id}
                title={<span>{item.name}</span>}>
                {item.children.map(child => (
                  <Menu.Item key={child.id}>
                    <Link to={child.path}>
                      {child.name}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            )
            :
            (
              <Menu.Item key={item.id}>
                <Link to={item.path}>
                  {item.name}
                </Link>
              </Menu.Item>
            )
          ))
        }
      </Menu>
    )
  }
}

export default Sidebar