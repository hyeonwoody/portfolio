
import React from 'react';
import OrganismTitle from '../organisms/Title'
import ContactBox from '../organisms/box/ContactBox';
import {ContactBoxProps} from '../organisms/box/ContactBox';

interface HeaderProps{
    author: string,
    menu: string[],
    contactBox : ContactBoxProps
}

const Header = (props : HeaderProps) => {
    console.log(props.contactBox.contacts[0])
    return (
        <header id="header">
            <OrganismTitle text={ props.author} size={40}/>
            {/* //menu */}
            <ContactBox {...props.contactBox}></ContactBox>
            {/* //깃허브 벨로그 */}
        </header>
    )
};
    

export default Header;