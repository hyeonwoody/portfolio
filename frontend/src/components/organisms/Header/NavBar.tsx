import React, {useEffect, useState} from "react";
import H2 from "../../atoms/Text/H2/H2";
import OrganismTitle from "./Title"
import Button from "../../atoms/Button/Button";
import { accent, black } from "../../../styles/Colors";

export interface NavBarProps{
    className : string,
    menu : string[],
    menuTextStyle? : React.CSSProperties
    onClick? : React.MouseEventHandler
    style? : React.CSSProperties
    
}

const NavBar = (props : NavBarProps) => {

    const [menuSelected, setMenu] = useState<number>();
    const onClickButton = (index : number) => {
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

    console.log("aaa",props)
    return (
        <nav id="header-navBar" style={props.style}>
            {props.menu.map ((one, index)=>{
                return (
                <Button key={index} 
                style={menuSelected === index? {...buttonStyle, color : accent, borderBottom: '0.125rem solid'} : 
                                                buttonStyle}
                onClick={()=>onClickButton(index)}>
                <OrganismTitle text={one} style={{...props.menuTextStyle}}/>
                </Button>
            )})
            }
        </nav>
    );
    
};

export default NavBar;