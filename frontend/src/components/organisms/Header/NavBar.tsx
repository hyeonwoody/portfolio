import React, {useEffect, useState} from "react";
import H2 from "../../atoms/Text/H2/H2";
import OrganismTitle from "./Title"
import Button from "../../atoms/Button/Button";
import { accent} from "../../../styles/Colors";

import {Link, useLocation} from 'react-router-dom';
export interface NavBarProps{
    className : string,
    menu : {
        id : number,
        title : string,
        link : string,
        element : React.JSX.Element,
    }[],
    menuTextStyle? : React.CSSProperties
    onClick? : React.MouseEventHandler
    style? : React.CSSProperties
    
}

const NavBar = (props : NavBarProps) => {

    const [menuSelected, setMenu] = useState<number>();
    const location = useLocation();
    const onClickButton = (index : number) => {
        setMenu(index);
    }

    useEffect(() => {
        // Find the index of the current link in the menu array
        const currentLinkIndex = props.menu.findIndex(
          (item) => item.link === location.pathname
        );
    
        // Set the menuSelected state if a match is found
        if (currentLinkIndex !== -1) {
          setMenu(currentLinkIndex);
        }
        else if (currentLinkIndex === -1){
            setMenu(0);
        }
      }, [location, props.menu]);

    const buttonStyle : React.CSSProperties = {
        cursor: 'pointer', 
        background: 'transparent',
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottom: 'none'
    }
    return (
        <nav className={props.className} style={props.style}>
            {props.menu.map ((one)=>{
                return (
                <Link to={one.link}>
                    <Button key={one.id} 
                    style={menuSelected === one.id? {...buttonStyle, color : accent, borderBottom: '0.125rem solid'} : 
                                                    buttonStyle}
                    onClick={()=>onClickButton(one.id)}>
                        <OrganismTitle text={one.title} style={{...props.menuTextStyle}}/>
                    </Button>
                </Link>
            )})
            }
        </nav>
    );
    
};

export default NavBar;