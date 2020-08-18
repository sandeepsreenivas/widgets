//import React, { useState } from 'react';
//import Accordion from './components/Accordion';
import React from 'react';
import Search from './components/Search';
//import Dropdown from './components/Dropdown';
//import Translate from './components/Translate';

/*const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }

]*/

/*const items = [
    {
        title: 'What is React ?',
        content: 'React is JavaScript Front End Framework'
    },
    {
        title: 'Why use React ?',
        content: 'For Frontend Development'
    },
    {
        title: 'What is JavaScript',
        content: 'Client-Side Programming Language'
    }
]*/

export default () => {

    //const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Search />
        </div>
    );
}