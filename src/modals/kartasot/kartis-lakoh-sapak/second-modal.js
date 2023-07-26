import React from 'react';

const SecondModal = ({onRequestClose}) => {

    const exit = ()=>{
        onRequestClose();
    }
    return (
        <div className="SecondModal">
            <h2>Hello</h2>
            <button onClick={exit}>close</button>
            <div>I am a modal</div>
        </div>
    );
};

export default SecondModal;
