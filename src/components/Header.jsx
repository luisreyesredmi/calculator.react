import React from 'react';
import SelectTheme from './SelectTheme';
import Title from './Title';
import Control from './Control';
import Results from './Results'

const Header = () => {
    return (
        <>
            <Title />
            <SelectTheme />
            <Control />
            <Results />
        </>
    );
};

export default Header;