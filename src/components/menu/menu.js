import React, { useState, useEffect } from 'react';
import { StyledMenuButton } from './menu-button.styled';
import { StyledSubMenuButton } from './sub-menu-button.styled';
import CloseWindowButton from './close-window-button';
import './menu.css';

const Menu = () => {

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
        // Function to calculate the position of the sub-menu
        const calculateSubMenuPosition = (menuItemIndex) => {
            const menuItems = document.querySelectorAll('.menu>li');
            console.log("menuItems: ", menuItems)
            const subMenu = menuItems[menuItemIndex].querySelector('.submenu');
            console.log("subMenu: ", subMenu)

            if (subMenu) {
                const menuItemRect = menuItems[menuItemIndex].getBoundingClientRect();
                console.log("menuItemRect:", menuItemRect);
                const subMenuRect = subMenu.getBoundingClientRect();
                console.log("subMenuRect:", subMenuRect);
                const bodyHeight = document.body.clientHeight;
                console.log("bodyHeight:", bodyHeight);

                const originalYPosition=menuItemRect.top + window.pageYOffset;
                const subMenuHeight = subMenuRect.height;


                console.log("originalYPosition:", originalYPosition);
                console.log("subMenuHeight:", subMenuRect.height);

                // Calculate the ideal top position of the sub-menu
                let topPosition = 0;
                
                if ((originalYPosition + subMenuHeight) > bodyHeight) {
                    // If the sub-menu goes beyond the window height, adjust the top position
                    topPosition =  bodyHeight - (subMenuHeight + originalYPosition) ;

                    if(bodyHeight<subMenuHeight){
                        topPosition = -subMenuHeight;
                    }

                    

                    // Set the position of the sub-menu
                    subMenu.style.top = topPosition-5 +'px';
                    console.log("-pos",topPosition);
                    

                }


            }
        };

        if (hoveredItem !== null) {
            calculateSubMenuPosition(hoveredItem);
        }
    }, [hoveredItem]);



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
                                    <li key={subIndex}><StyledSubMenuButton>{subMenuItem}</StyledSubMenuButton></li>
                                ))}
                            </ul>
                        )}

                    </li>

                ))}
                <li><CloseWindowButton></CloseWindowButton></li>
            </ul>
        </nav>
    );
};

export default Menu;