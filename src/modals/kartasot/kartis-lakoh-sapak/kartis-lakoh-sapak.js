import React, { useState } from 'react';
import SecondModal from './second-modal';
import Modal from 'react-modal';
import './kartis-lakoh-sapak.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const KartisLakohSapak = ({onRequestClose}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const exit = ()=>{
        onRequestClose();
    }

    return (
        <div className="modal">
            <button onClick={exit}>close</button>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <SecondModal onRequestClose={closeModal}></SecondModal>
            </Modal>

        </div>
    );
};

export default KartisLakohSapak;
