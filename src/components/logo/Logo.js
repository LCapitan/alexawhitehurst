import React, { Component } from 'react';
import './styles.scss';

class Logo extends Component {
    render() {
        return (
            <svg className="Logo" id="Layer_1" x="0px" y="0px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                <path d="M6.2,494h487l0-487L6.2,7L6.2,494z M75.7,424.5l0-69.5h69.5v69.5H75.7z M423,216.1v138.9v69.5h-69.5H214.6v-69.5h138.9 V216.1H423z M284.1,216.1v69.5h-69.5v-69.5H284.1z M423,77.2v69.5h-69.5V77.2H423z M145.2,77.2h138.9v69.5H145.2v138.9H75.7V146.6 V77.2H145.2z"/>
            </svg>
        );
    }
}

export default Logo;