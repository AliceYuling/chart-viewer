import React, { Component } from 'react'
import './App.css'
import Sidebar from './components/layout/sidebar.js'
import { MainRoute } from './router'
import { Layout } from 'antd';

const {
  Content, Sider,
} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}>
            <Sidebar />
          </Sider>
        </Layout>
        <Layout style={{ marginLeft: 200 }}>
          <Content>
            <MainRoute />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
