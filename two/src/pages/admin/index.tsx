import React from "react";
import { Descriptions } from "antd";
import {UserInfo} from "./components/UserInfo";
import {Record} from "./components/Record";

import "./index.css";

export function Admin() {
  
  return (
    <div className="admin p-5 bg-gray-100">
      <Descriptions title="用户详情" />
      <UserInfo />

      <Descriptions title="历史记录" />
      <Record />
    </div>
  );
}
