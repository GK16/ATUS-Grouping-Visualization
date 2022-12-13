import React from 'react';
import { theme } from 'antd';
const Card = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return (
        <div
          style={{
            padding: 24,
            minHeight: 60,
            background: colorBgContainer,
            borderRadius: 8,
            margin: 36,
            marginTop: 0,
            marginBottom: 24
          }}
        >
          
        </div>
    )
}
export default Card;