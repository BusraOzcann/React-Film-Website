import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function Head() {
  return (
    <Layout >
      <Header>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">
            <Link className="nav-text" to="/">
              Anasayfa
            </Link>
          </Menu.Item>
          <Menu.Item key="populars">
            <Link className="nav-text" to="/populars">
              Popülerler
            </Link>
          </Menu.Item>
          <Menu.Item key="top_rated">
            <Link className="nav-text" to="/top_rated">
              En Çok Oy Alanlar
            </Link>
          </Menu.Item>
          <Menu.Item key="playing">
            <Link className="nav-text" to="/now-playing">
              Gösterimdekiler
            </Link>
          </Menu.Item>
          <Menu.Item key="upcoming">
            <Link className="nav-text" to="/upcoming">
              Gelecek Olanlar
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Head;
