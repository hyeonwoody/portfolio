import React from 'react';

import A from '../../atoms/A/A';
import Svg from '../../atoms/Svg/Svg';

export interface SvgLink {
  icon?: React.ReactNode;
  color?: string,
  type?: string,
  className: string,
  size? : number,
  aStyle? : {
    href?: string,
  }
  svgStyle : {
    color: string,
    size?: number
  }
  onMouseEnter? : ()=>void,
  onMouseLeave? : ()=>void,
}

interface SvgLinkGroupProps{
    links : SvgLink[],
}

const SvgLinkGroup = (props : SvgLinkGroupProps) => {
    return (
        <div>
          
          {props.links.map((link) =>(
            <A key={link.aStyle?.href}
              href={link.aStyle?.href}
              rel="noopener noreferrer"
              mouseEnter={link.onMouseEnter}
              mouseLeave={link.onMouseLeave}
              >
              <Svg className={link.className} 
              size={link.svgStyle.size? link.svgStyle.size : 30} 
              color={link.svgStyle.color}
              ></Svg>
            </A>
            
          ))}
        </div>
    );
    
};

export default SvgLinkGroup;