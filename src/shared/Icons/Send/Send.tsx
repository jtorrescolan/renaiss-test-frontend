import React, { FC } from 'react';
import { Icon } from 'shared/Icons';

const Send: FC<Icon> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.6975 2.74277C19.0025 4.0477 14.7109 17.5001 12.7784 17.5001C11.3479 17.5001 9.49897 12.581 9.49898 10.9413C9.49898 10.9413 2.94019 9.09236 2.94019 7.66187C2.94019 5.7293 16.3924 1.43782 17.6975 2.74277Z" stroke={color} strokeWidth="1.25" strokeLinejoin="round"/>
    <path d="M9.60681 10.8334L13.7735 6.66672" stroke="#F97316" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Send;
