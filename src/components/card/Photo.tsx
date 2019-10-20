import * as React from 'react';
import styled from 'styled-components';
import placeholderImage from './placeholder.png';


const StyledImg = styled.img`
    width: 160px;
    height: 100px;
`;

type ErrorHandler = () => void;


export type PhotoProps = React.HTMLAttributes<HTMLImageElement> & {
    src: string;
}

export const Photo: React.FC<PhotoProps> = ({ src, ...attrs }) => {
    const [image, setImage] = React.useState<string>(src);

    const [errorHandler, setErrorHandler] = React.useState <ErrorHandler | undefined>(() => () => {
        setImage(placeholderImage);
        setErrorHandler(undefined);
    });

    return <StyledImg src={image} onError={errorHandler} {...attrs} />;
};
