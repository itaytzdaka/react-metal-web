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


const KartisLakohSapak = ({ onRequestClose }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const exit = () => {
        onRequestClose();
    }


    const [formData, setFormData] = useState({
        customerNumber: '',
        accountName: '',
        sortCode: '',
        vat: '',
        businessNumber: '',
        type: '',
        city: '',
        address: '',
        postalCode: '',
        mobilePhone: '',
        phone: '',
        fax: '',
        contact: '',
        balance: '',
        creditCard: '',
        creditCardExpirationDate: '',
        details: '',
        email: '',
        site: '',
    });

    // Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, e.g., send it to a server or process it.
        console.log(formData);
    };

    return (
        <div className="Kartis-Lakoh-Sapak">



            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div>
                        <label htmlFor="customerNumber">מס.לקוח</label>
                        <input
                            type="text"
                            id="customerNumber"
                            name="customerNumber"
                            value={formData.customerNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="accountName">שם חשבון</label>
                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="sortCode">קוד מיון</label>
                        <input
                            type="text"
                            id="sortCode"
                            name="sortCode"
                            value={formData.sortCode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="vat">פטור מע"מ</label>
                        <input
                            type="text"
                            id="vat"
                            name="vat"
                            value={formData.vat}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="businessNumber">ע.מ</label>
                        <input
                            type="text"
                            id="businessNumber"
                            name="businessNumber"
                            value={formData.businessNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="type">סוג</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">עיר/ישוב</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="address">רחוב+מס'</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="postalCode">מיקוד</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="mobilePhone">פלאפון</label>
                        <input
                            type="text"
                            id="mobilePhone"
                            name="mobilePhone"
                            value={formData.mobilePhone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">טלפון</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="fax">פקס</label>
                        <input
                            type="text"
                            id="fax"
                            name="fax"
                            value={formData.fax}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact">איש קשר</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="balance">יתרה</label>
                        <input
                            type="text"
                            id="balance"
                            name="balance"
                            value={formData.balance}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="creditCard">אשראי</label>
                        <input
                            type="text"
                            id="creditCard"
                            name="creditCard"
                            value={formData.creditCard}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="creditCardExpirationDate">בתוקף עד</label>
                        <input
                            type="text"
                            id="creditCardExpirationDate"
                            name="creditCardExpirationDate"
                            value={formData.creditCardExpirationDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="details">פרטים</label>
                        <input
                            id="details"
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="site">כתובת אתר</label>
                        <input
                            type="url"
                            id="site"
                            name="site"
                            value={formData.site}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>


                <div className='options'>
                    <button type="submit">אישור</button>
                    <button onClick={exit}>יציאה</button>
                    <button onClick={openModal}>Open Modal</button>
                </div>

            </form>






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
