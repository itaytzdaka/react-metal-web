import React, { useState, useEffect } from 'react';
import { StyledMenuButton } from './styled/menu-button.styled';
import { StyledSubMenuButton } from './styled/sub-menu-button.styled';
import CloseWindowButton from './close-window-button';
import './menu.css';
import Modal from 'react-modal';
import KartisLakohSapak from '../../../modals/kartasot/kartis-lakoh-sapak/kartis-lakoh-sapak';

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

const Menu = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }


    const menu = [
        {
            title: 'כרטסות',
            subMenu: [
                'כרטסת לקוחות/ספקים.',
                'כרטסת פריטים/מלאי.',
                'כרטסת קודי עבודה.',
                'מחירונים.',
                'כרטיסי הכנסות.',
                'כרטיסי קניות/הוצאות.',
                'כרטיסי בנק.',
                'כרטיסי קופה.',
                'כרטיסי מערכת.'
            ]
        },
        {
            title: 'מסמכים',
            subMenu: [
                'חשבונית מס.',
                'חשבונית מס קבלה.',
                'חש. זיכוי.',
                'תע.משלוח.',
                'דרישת תשלום',
                'השאלה.',
                'חש.ספק.',
                'חש.עסקה.',
                'חשבונית מרכזת יזומה',
                'מסמך נגדי',
                'חשבונית מרכזת אוטומטית',
            ]
        },
        {
            title: 'קופה',
            subMenu: [
                'קבלה.',
                'תשלום לספק.',
                'הפקדה.',
                'הוצאה מהקופה.',
                'שיק חוזר.',
                'ספר קופה.',
                'תזרים מזומנים.',
                'דוח תשלומים/קבלות.',
            ]
        },
        {
            title: 'העתקים',
            subMenu: [
                'העתק מסמך.',
                'העתקי מסמכים.',
                'העתקי קבלות.',
                'העתקי הפקדות.',
                'העתקי הוצאות.',
            ]
        },
        {
            title: 'טופס מורכב',
            subMenu: []
        },
        {
            title: 'דוחות',
            subMenu: [
                'דו"ח מעקב שיקים.',
                'דו"ח אינדקס.',
                'דו"ח מסמכים.',
                'דו"ח מחירון.',
                'דו"ח גיול חובות.',
                'דו"ח חייבים.',
                'דו"ח אובליגו.',
                'דו"ח מעקב.',
                'דו"ח סיכום.',
                'דוחות מלאי.',
            ]
        },
        {
            title: 'הנהלת חשבונות',
            subMenu: [
                'כרטסת הנה"ח.',
                'תנועת יומן בודדת.',
                'קליטת מנה זמנית.',
                'מאזן בוחן.',
                'דו"ח רווח והפסד.',
                'דו"ח תנועות יומן.',
                'דו"ח תנועה שנתית.',
                'סגירה תקופתית.',
                'מעקב תנועה חודשי.',
                'קובץ להנה"ח.',
                'דו"ח ניכוי במקור.',
                'דו"ח מע"מ.',
                'דו"ח מקדמות.',
                'דו"ח תקופתי.',
                'רציפות אסמכתאות.',
                'דיווח אחיד.',
            ]
        },
        {
            title: 'טבלאות',
            subMenu: []
        },
        {
            title: 'עיבוד תמלילים',
            subMenu: [
                'עריכת מסמך.',
                'מכתבים לכרטסת.',
                'מכתבים לבעלי מסמכים.',
                'עריכת טופס.',
                'הדפס מסמך.',
            ]
        },
        {
            title: 'שאילתות',
            subMenu: [
                'דפדוף מסמכים.',
                'דפדוף בלקוחות/ספקים.',
                'דפדוף בכרטסת מלאי/פריטים.',
                'איתור רכיבים בכרטסות.',
                'לוח שנתי.',
                'מנוע חיפוש.',
                'מידע סטטיסטי.',
                'איתור מידע.',
                'דף תנועות.',
            ]
        },
        {
            title: 'תצוגה גרפית',
            subMenu: [
                'התפלגות הכנסות',
                'התפלגות הוצאות.',
                'גרף רווח הפסד שנתי.',
            ]
        },
        {
            title: 'התאמות',
            subMenu: [
                'התאמות כרטיסים',
                'התאמת בנק',
            ]
        },
        {
            title: 'תחזוקת מערכת',
            subMenu: [
                'פרמטרים.',
                'לוגו.',
                'תמונה לכותרת.',
                'הגדרת מבנה מסמכים.',
                'איפוס מערכת.',
                'אינדקסים.',
                'שדות כותרת מסמכים.',
                'שמות טורים במבנה מסמך.',
                'טבלת מטבעות.',
            ]
        }
    ];

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    useEffect(() => {
        const calculateSubMenuPositions = () => {
            const menuLiItems = document.querySelectorAll('.menu>li');

            menuLiItems.forEach(li => {
                const subMenu = li.querySelector('.submenu');
                // console.log("subMenu", subMenu);

                if (subMenu) {
                    const menuLiRect = li.getBoundingClientRect();

                    subMenu.style.display = 'flex';
                    const subMenuRect = subMenu.getBoundingClientRect();
                    subMenu.style = '';

                    const bodyHeight = document.body.clientHeight;

                    const originalYPosition = menuLiRect.top + window.scrollY;

                    const subMenuHeight = subMenuRect.height;

                    let topPosition = 0;

                    if ((originalYPosition + subMenuHeight) > bodyHeight) {
                        // If the sub-menu goes beyond the window height, adjust the top position
                        topPosition = (subMenuHeight + originalYPosition) - bodyHeight;

                        console.log("-topPosition",-topPosition);
                        console.log("subMenuHeight",subMenuHeight);

                        if(topPosition>subMenuHeight-70){
                            topPosition=topPosition-(topPosition-subMenuHeight-70);
                        }

                        // Set the position of the sub-menu
                        subMenu.style.top = -topPosition - 5 + 'px';
                        console.log("-pos", topPosition);
                    }

                }
            });
        };

        calculateSubMenuPositions();

        const handleResize = () => {
            // Code to run when the window is resized
            calculateSubMenuPositions();
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
          };

    }, []);

  

    return (
        <nav>
            <ul className='menu'>
                {menu.map((menuItem, index) => (

                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <StyledMenuButton className={hoveredItem === index ? 'active' : ''}>{menuItem.title}</StyledMenuButton>

                        {menuItem.subMenu.length > 0 && (
                            <ul className="submenu">
                                {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                    <li key={subIndex} onClick={openModal}><StyledSubMenuButton>{subMenuItem}</StyledSubMenuButton></li>
                                ))}
                            </ul>
                        )}

                    </li>

                ))}
                <li><CloseWindowButton></CloseWindowButton></li>
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <KartisLakohSapak onRequestClose={closeModal}></KartisLakohSapak>
            </Modal>
        </nav>
        
    );
};

export default Menu;