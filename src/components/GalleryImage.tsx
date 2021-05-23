import { Component } from "react";
import styled from 'styled-components';

interface IGalleryImageProps
{
    src : string
    index : number
    onClick : (event : any) => void
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
        return (
            <Image src={this.props.src} loading="lazy" onClick={() => this.props.onClick(this.props.index)}/>
        );
    }
}

const Image = styled.img`
    width: 300px;
    height: 168px;
    
    margin: 20px;
    
    object-fit: cover;
    transition: transform 0.5s;
    cursor: pointer;
    
    &:hover
    {
        transform: scale(1.1);
    }
`;

export default GalleryImage;