import React, { FC } from 'react';
import { Icon } from 'shared/Icons';

const Sidebar: FC<Icon> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 3.12503C16.0937 3.12503 18.4271 3.63545 19.8646 5.02086C21.3021 6.40627 21.875 8.8021 21.875 12.5C21.875 16.0104 21.3958 18.3125 20.0729 19.7917C18.75 21.2708 16.2812 21.875 12.5 21.875C8.71875 21.875 6.25 21.2916 4.85417 19.6771C3.59375 18.2292 3.125 15.9479 3.125 12.5C3.125 8.85418 3.64583 6.51044 5.07292 5.08336C6.5 3.65628 8.85417 3.12503 12.5 3.12503Z" stroke="white" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5833 21.6146V3.38544" stroke={color} strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.4166 8.33334H7.29163" stroke={color} strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.4166 12.5H7.29163" stroke={color} strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Sidebar;
