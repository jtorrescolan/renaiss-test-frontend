import React, { FC } from 'react';
import { Icon } from 'shared/Icons';

const PlusCirle: FC<Icon> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.99997" cy="10.5" r="7.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66663 10.5H13.3333" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99997 13.8333L9.99997 7.16668" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default PlusCirle;
