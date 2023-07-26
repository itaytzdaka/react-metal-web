import React, { useState, useEffect } from 'react';
import { StyledMenuButton } from './styled/menu-button.styled';
import { StyledSubMenuButton } from './styled/sub-menu-button.styled';
import CloseWindowButton from './close-window-button';
import './menu.css';
import Modal from 'react-modal';
import { menuData, componentMapping } from './menuData';

// Create the mapping object


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
    const [selectedComponent, setSelectedComponent] = useState('');



    const handleSubMenuClick = (componentName) => {
        setSelectedComponent(componentName);
        setIsOpen(true);
    };

    const SelectedComponent = componentMapping[selectedComponent];


    function closeModal() {
        setIsOpen(false);
    }

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    //handle submenu top position
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

                        if (topPosition > subMenuHeight - 70) {
                            topPosition = topPosition - (topPosition - subMenuHeight - 70);
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
        <>
            <nav>
                <ul className='menu'>
                    {menuData.map((menuItem, index) => (

                        <li
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <StyledMenuButton className={hoveredItem === index ? 'active' : ''}>{menuItem.title}</StyledMenuButton>

                            {menuItem.subMenu.length > 0 && (
                                <ul className="submenu">
                                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                        <li key={subIndex} onClick={() => subMenuItem.component && handleSubMenuClick(subMenuItem.component)}><StyledSubMenuButton>{subMenuItem.title}</StyledSubMenuButton></li>
                                    ))}
                                </ul>
                            )}

                        </li>

                    ))}
                    <li><CloseWindowButton></CloseWindowButton></li>
                </ul>
            </nav>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {SelectedComponent && <SelectedComponent onRequestClose={closeModal} />}
            </Modal>
        </>


    );
};

export default Menu;