import React, { useEffect } from 'react';
import './customers-browsing.css';

const CustomerBrowsing = ({ onRequestClose, customersData }) => {

    const exit = () => {
        onRequestClose();
    }

    useEffect(() => {
        // This will be triggered whenever customersData prop changes
        console.log('Customers data has been updated:', customersData);
      }, [customersData]); 

    return (
        <div className="customers-browsing">

            <table>
                <thead>
                    <tr>
                        <th>מפתח</th>
                        <th>שם</th>
                        <th>טל</th>
                        <th>יתרה</th>
                        <th>קוד מיון</th>
                        <th>עיר</th>
                    </tr>
                </thead>
                <tbody>
                    {customersData?.map((data, index) => (
                        <tr key={index}>
                            <td>{data.customerNumber}</td>
                            <td>{data.accountName}</td>
                            <td>{data.phone}</td>
                            <td>{data.balance}</td>
                            <td>{data.sortCode}</td>
                            <td>{data.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={exit}>יציאה</button>
        </div>
    );
};

export default CustomerBrowsing;
