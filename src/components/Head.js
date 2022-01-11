import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function Head() {
  return (
    <Layout >
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">
            <Link className="nav-text" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="populars">
            <Link className="nav-text" to="/populars">
              Populars
            </Link>
          </Menu.Item>
          <Menu.Item key="latest">
            <Link className="nav-text" to="/latest">
              Get Latest
            </Link>
          </Menu.Item>
          <Menu.Item key="playing">
            <Link className="nav-text" to="/now-playing">
              Get Now Playing
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Head;
