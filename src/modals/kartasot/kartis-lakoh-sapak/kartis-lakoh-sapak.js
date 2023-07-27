import React, { useEffect, useState } from 'react';
import CustomerBrowsing from './customers-browsing/customers-browsing';
import Modal from 'react-modal';
import './kartis-lakoh-sapak.css';
import api from '../../../api/axios';

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
    const [customers, setCustomers] = useState([]);
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
    const [kartisIndex, setKartisIndex] = useState(-1);


    useEffect(() => {
        // Fetch the customers data when the component mounts


        const getAllCustomers = async () => {
            try {
                // Make a GET request to the API endpoint that provides the customers data
                const response = await api.get('/customers'); // Replace '/api/customers' with your actual API endpoint
                setCustomers(response.data); // Update the state with the fetched customers data
                console.log(response.data);
                setKartisIndex(response.data?.length);

            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        }

        getAllCustomers();

    }, []);

    // Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            // Check if the customer already exists based on some unique identifier (e.g., customerNumber or businessNumber)


            if (formData._id) {
                const response = await api.put(`/customers/${formData._id}`, formData);
                console.log(response);

                setCustomers((prevCustomers) =>
                    prevCustomers.map((customer) => (customer._id === formData._id ? formData : customer))
                );

                setKartisIndex(customers.length);


                console.log("put response.data: ", response.data);
            }

            else {
                const response = await api.post('/customers', formData);
                console.log(response);

                setKartisIndex(customers.length + 1);

                setCustomers((prevCustomers) => [...prevCustomers, response.data]);

                console.log("post response.data: ", response.data);


            }


            setFormData({
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


        } catch (error) {
            console.log(error);
        }

    };

    const previeusCustomer = () => {
        if (kartisIndex > 0) {
            setKartisIndex(prevVal => prevVal - 1);
            setFormData(customers[kartisIndex - 1]);
        }

        else {
            alert('אין עוד כרטיסי לקוח');
        }



    }

    const nextCustomer = () => {

        if (kartisIndex < customers.length - 1) {
            setKartisIndex(prevVal => prevVal + 1);
            setFormData(customers[kartisIndex + 1]);
        }

        else {
            alert('אין עוד כרטיסי לקוח');
        }

    }

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const exit = () => {
        onRequestClose();
    }

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
                            value={formData?.customerNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="button" onClick={openModal}>חלון דפדוף</button>

                    <div>
                        <label htmlFor="accountName">שם חשבון</label>
                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            value={formData?.accountName}
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
                            value={formData?.sortCode}
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
                            value={formData?.vat}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="businessNumber">ע.מ</label>
                        <input
                            type="text"
                            id="businessNumber"
                            name="businessNumber"
                            value={formData?.businessNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="type">סוג</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={formData?.type}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">עיר/ישוב</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData?.city}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="address">רחוב+מס'</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData?.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="postalCode">מיקוד</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData?.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="mobilePhone">פלאפון</label>
                        <input
                            type="text"
                            id="mobilePhone"
                            name="mobilePhone"
                            value={formData?.mobilePhone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">טלפון</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData?.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="fax">פקס</label>
                        <input
                            type="text"
                            id="fax"
                            name="fax"
                            value={formData?.fax}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact">איש קשר</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData?.contact}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="balance">יתרה</label>
                        <input
                            type="text"
                            id="balance"
                            name="balance"
                            value={formData?.balance}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="creditCard">אשראי</label>
                        <input
                            type="text"
                            id="creditCard"
                            name="creditCard"
                            value={formData?.creditCard}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="creditCardExpirationDate">בתוקף עד</label>
                        <input
                            type="text"
                            id="creditCardExpirationDate"
                            name="creditCardExpirationDate"
                            value={formData?.creditCardExpirationDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="details">פרטים</label>
                        <input
                            id="details"
                            name="details"
                            value={formData?.details}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData?.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="site">כתובת אתר</label>
                        <input
                            type="url"
                            id="site"
                            name="site"
                            value={formData?.site}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>


                <div className='options'>
                    <div className='top'>

                        <button type="button" onClick={previeusCustomer}>&rarr;</button>
                        <button type="button" onClick={nextCustomer}>&larr;</button>
                        <button type="button" onClick={openModal}>היסטוריה</button>
                        <button type="button" onClick={openModal}>מידע</button>
                        <button type="button" onClick={openModal}>מחק</button>

                    </div>
                    <div className='bottom'>
                        <div className='right'>
                            <button type="submit" disabled={!document.forms[0]?.checkValidity()}>אישור</button>
                            <button type="button" onClick={exit}>יציאה</button>
                        </div>
                        <div className='left'>
                            <button type="button" onClick={openModal}>תנועות</button>
                            <button type="button" onClick={openModal}>דף</button>
                            <button type="button" onClick={openModal}>התחבר</button>
                            <button type="button" onClick={openModal}>המלצה</button>
                            <button type="button" onClick={openModal}>מחירון</button>
                            <button type="button" onClick={openModal}>מסמכים</button>
                        </div>

                    </div>

                </div>

            </form>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <CustomerBrowsing onRequestClose={closeModal} customersData={customers}></CustomerBrowsing>
            </Modal>

        </div>
    );
};

export default KartisLakohSapak;
