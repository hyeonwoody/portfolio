import React from 'react';

import A from '../../atoms/A/A';

export interface Link {
  href: string,
  icon?: React.ReactNode;
  color?: string,
  type?: string,
}

interface LinkGroupProps{
    links : Link[],
}

const LinkGroup = (props : LinkGroupProps) => {
    
    return (
        <div>
          {props.links.map((link) =>(
            <A key={link.href}
            href={link.href}
            rel="noopener noreferrer">
              
            </A>
          ))}
        </div>
    );
    
};

export default LinkGroup;