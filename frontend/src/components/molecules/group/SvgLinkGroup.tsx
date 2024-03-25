import React from 'react';

import A from '../../atoms/A/A';
import Svg from '../../atoms/Svg/Svg';

export interface SvgLink {
  href: string,
  icon?: React.ReactNode;
  color?: string,
  type?: string,
  className: string,
  size : number,
}

interface SvgLinkGroupProps{
    links : SvgLink[],
}

const SvgLinkGroup = (props : SvgLinkGroupProps) => {
    return (
        <div>
          {props.links.map((link) =>(
            <A key={link.href}
            href={link.href}
            rel="noopener noreferrer">
                
              <Svg className={link.className} size={link.size}></Svg>
            </A>
            
          ))}
        </div>
    );
    
};

export default SvgLinkGroup;