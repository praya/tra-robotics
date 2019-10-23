import * as React from 'react';
import styled from 'styled-components';


const ToggleButton = styled.button`
    position: sticky;
    top: 0;
    left: 0;
    outline: none;
    border: 1px solid #dddddd;
    border-radius: 3px;
    background: #eeeeee;
    margin-bottom: 10px;
    
    &:active {
        background: #f5f5f5;
    }
`;

const mockImg = (mockup: string) => <img alt="mockup" srcSet={`${mockup} 2x`} />;


interface CompareProps {
    mockup: string;
    children: React.ReactNode;
}

export const Compare: React.FC<CompareProps> = ({ mockup, children }) => {
    const [showMockup, setShowMockup] = React.useState(false);

    return (
        <div>
            <ToggleButton
                onMouseDown={() => setShowMockup(true)}
                onMouseUp={() => setShowMockup(false)}
            >
                Show mockup
            </ToggleButton>
            <div style={{ display: showMockup ? 'block' : 'none' }}>
                {mockImg(mockup)}
            </div>
            <div style={{ display: showMockup ? 'none' : 'block' }}>
                {children}
            </div>
        </div>
    )
}
