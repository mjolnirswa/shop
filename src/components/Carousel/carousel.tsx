import { useState, useEffect, Children, cloneElement} from "react";
import { FaChevronRight, FaChevronLeft  } from 'react-icons/fa' ;
import './carousel.css';

interface Props {
    children?: React.ReactNode,
}

const ELEM_HEIGHT = 650;
const ELEM_WIDTH = 435;

const Carousel = ({ children, ...props }: Props) => {
    const [pages, setPages] = useState<React.ReactNode[] | null | undefined>([]);
    const [offset, setOffset] = useState<number>(0);

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + ELEM_WIDTH;

            if (newOffset > 0){
                return -ELEM_WIDTH*2;
            }

            return newOffset;
        })
    }

    const handleRightArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - ELEM_WIDTH;

            if (newOffset < -ELEM_WIDTH*2){
                return 0;
            }

            return newOffset;
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child: any) => {
                return cloneElement(child, {
                    style: {
                        height: `${ELEM_HEIGHT}px`,
                        minWidth: `${ELEM_WIDTH}px`,
                        maxWidth: `${ELEM_WIDTH}px`,
                    },
                })
            })
        )
    }, []);

    useEffect(() => {
        setTimeout(handleRightArrowClick, 5000)
    }, [offset]);


    return (<>
                <div className="main-container">
                    <FaChevronLeft  onClick={handleLeftArrowClick} className='arrow arrow-left'/>
                    <div className="window">
                        <div className="all-elems-container"
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}
                        >
                            {pages}
                        </div>
                    </div>
                    <FaChevronRight onClick={handleRightArrowClick} className='arrow arrow-right'/>
                </div>
            </>);
}

export default Carousel;