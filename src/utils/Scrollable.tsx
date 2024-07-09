import React, { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

interface ScrollableListProps {
    children: React.ReactNode;
}

const ScrollableList: React.FC<ScrollableListProps> = ({ children }) => {
    const scrollRef = useRef<HTMLUListElement>(null);
    const { events } = useDraggable(scrollRef as React.MutableRefObject<HTMLUListElement>);

    return (
        <ul className='mt-4 flex lg:flex-col overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto cursor-grab hide-scrollbar' {...events} ref={scrollRef}>
            {children}
        </ul>
    );
};

export default ScrollableList;
