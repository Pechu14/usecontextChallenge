import React from 'react';
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
 const { toogleTheme } = useTheme();

 return (
    <button onClick={toogleTheme}>Light/Dark</button>
 )
};

export default Button;
