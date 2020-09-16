import React, { Component } from 'react';
import { ToggleContainer, ToggleButton } from './styled';

class DarkModeToggle extends Component {

    render() {

        return (
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                <p>Dark mode:</p>
                <ToggleContainer>
                    <ToggleButton />
                </ToggleContainer>
            </div>
        );

    }

}

export default DarkModeToggle