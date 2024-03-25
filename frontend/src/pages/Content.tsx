
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Introduction from './Introduction';
import Unknown from './Unknown';

export function Content () {

    return (
        <Routes>
            <Route path="/" element={<Introduction />}/>
            <Route path="*" element={<Unknown />}/>
        </Routes>
    )
};

export default Content;