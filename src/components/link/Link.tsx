import React from 'react';

import './Link.css';

export const Link = ({ href, text, className }: { href: string, text: string, className?: string }) =>
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{text}</a>
