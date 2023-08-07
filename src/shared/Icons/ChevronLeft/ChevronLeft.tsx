import React, { FC } from 'react';
import { Icon } from 'shared/Icons';

const ChevronLeft: FC<Icon> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 5.50003L7.5 10.5L12.5 15.5" stroke={color} strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ChevronLeft;
