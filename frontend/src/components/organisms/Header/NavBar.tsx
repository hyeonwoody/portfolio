import React, {useEffect, useState} from "react";
import H2 from "../../atoms/Text/H2/H2";
import OrganismTitle from "./Title"
import Button from "../../atoms/Button/Button";
import { accent} from "../../../styles/Colors";

import {Link} from 'react-router-dom';
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
    const onClickButton = (index : number) => {
        console.log ("BB",props.menu[index].title)
        setMenu(index);
    }

    useEffect(()=> {
        setMenu(0);
    }, []);

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