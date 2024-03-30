
import React, {useState, useEffect} from 'react';
import P from '../../atoms/Text/P/P'
import TextDivBond from '../../molecules/bond/TextDivBond';
const Copyright = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update state only on initial render
        setCurrentYear(new Date().getFullYear());
    }, []);

    const divStyle = {
        borderTop : '2px solid #947372',
        borderBottom : 'none',
        borderLeft : 'none',
        borderRight : 'none',
        paddingTop : '10px',

    }

    const textStyle = {
        fontFamily: 'Segoe UI',
        fontSize: '15px',
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
    }

    const copyrightText = `©${currentYear}. Hyeonwoo Jung. All rights reserved.`;
    return (
        <TextDivBond divStyle={divStyle} textStyle={textStyle} >
            {copyrightText}
        </TextDivBond> 
    )
};

export default Copyright;