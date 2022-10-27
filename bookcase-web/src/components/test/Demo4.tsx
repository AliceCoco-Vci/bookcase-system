import React, { useState } from 'react'
import { StaggeredMotion, spring, Motion } from 'react-motion'
import './index.less'
const AnimatedGridContents = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseDown = () => {
        setIsOpen(!isOpen)
    };

    const handleTouchStart = (e: any) => {
        e.preventDefault();
        handleMouseDown();
    };
    return (
        <div>
            <button
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}>
                Toggle
            </button>

            <Motion style={{x: spring(isOpen? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>
        </div>
    );

}

export default AnimatedGridContents;