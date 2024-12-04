import React, { useState } from "react";
import { Avatar, Badge } from "antd";

export function UserInfo() {
    const [userInfo, setUserInfo] = useState({
        
    })
  return (
    <div>
      <Badge count={1}>
        <Avatar
          shape="square"
          src="https://tuwaii.com/wp-content/themes/twentytwentyfour/assets/images/building-exterior.webp"
        />
      </Badge>
    </div>
  );
}
