import React from 'react';
import { Avatar, Badge, Space } from 'antd';


export function UserInfo(){
    return (
        <div>
            <Badge count={1}>
      <Avatar shape="square" src="https://tuwaii.com/wp-content/themes/twentytwentyfour/assets/images/building-exterior.webp" />
    </Badge>
        </div>
    )
}