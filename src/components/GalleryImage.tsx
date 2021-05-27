import { Component } from "react";
import styled from 'styled-components';

interface IGalleryImageProps
{
    src : string
    index : number
    onClick : (event : any) => void
    className? : string
}

interface IGalleryImageState
{
    
}

class GalleryImage extends Component<IGalleryImageProps, IGalleryImageState>
{
    constructor(props : IGalleryImageProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { src, index, onClick, className } = this.props;
        
        return (
            <Image className={className} src={src} loading="lazy" onClick={() => onClick(index)}/>
        );
    }
}

const Image = styled.img`
    width: 300px;
    height: 168px;
    
    margin: 20px;
    
    object-fit: cover;
    transition: transform 0.5s;
    cursor: zoom-in;
    
    &:hover
    {
        transform: scale(1.1);
    }
`;

export default GalleryImage;