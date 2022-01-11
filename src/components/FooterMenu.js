import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterMenu() {
  return (
    <Footer style={{ textAlign: "center",  bottom: "0" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
}

export default FooterMenu;
