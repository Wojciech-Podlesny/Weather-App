import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

type ScrollableListProps = {
    children: React.ReactNode;
};

const ScrollableList = ({ children }: ScrollableListProps) => {
    const scrollRef = useRef<HTMLUListElement>(null);
    const { events } = useDraggable(scrollRef as React.MutableRefObject<HTMLUListElement>);

    return (
        <ul
            className='mt-4 flex lg:flex-col overflow-x-auto lg:overflow-x-hidden cursor-grab hide-scrollbar'
            {...events}
            ref={scrollRef}
        >
            {children}
        </ul>
    );
};

export { ScrollableList };
