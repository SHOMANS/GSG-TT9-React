import React from 'react';
import { Outlet } from 'react-router-dom';

const AsideLAyout = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <aside
        style={{
          width: '20%',
        }}
      >
        <h1>Aside</h1>
        This is the aside layout. It can be used for navigation, links to other
        pages or sections
      </aside>

      <Outlet />
    </div>
  );
};

export default AsideLAyout;
