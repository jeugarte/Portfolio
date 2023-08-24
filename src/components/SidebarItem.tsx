import React from 'react';

const SidebarItem = ({label, onClick, isActive}: {label: string, onClick: React.MouseEventHandler<HTMLDivElement>; isActive: boolean}) => {

    return (
        <div onClick={onClick} className={isActive ? 'active' : ''}>
            {label}
        </div>
    )
}

export default SidebarItem;