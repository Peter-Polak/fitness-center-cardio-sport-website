import { Component } from "react";
import styled from 'styled-components';
import MaterialIcon from "./MaterialIcon";

interface IImageBrowserProps
{
    imageUrls : Array<string>
    startingImage : number
}

interface IImageBrowserState
{
    currentImage : number
}

class ImageBrowser extends Component<IImageBrowserProps, IImageBrowserState>
{
    constructor(props : IImageBrowserProps)
    {
        super(props);
        this.state = 
        {
            currentImage : this.props.startingImage
        }
        
        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }
    
    canShowNextImage()
    {
        let nextImage = this.state.currentImage + 1;
        if(nextImage >= this.props.imageUrls.length) return false;
        
        return true;
    }
    
    canShowPreviousImage()
    {
        let previousImage = this.state.currentImage - 1;
        if(previousImage < 0) return false;
        
        return true;
    }
    
    previousImage()
    {
        let previousImage = this.state.currentImage - 1;
        if(!this.canShowPreviousImage()) return;
        
        this.setState({currentImage : previousImage});
    }
    
    nextImage()
    {
        let nextImage = this.state.currentImage + 1;
        if(!this.canShowNextImage()) return;
        
        this.setState({currentImage : nextImage});
    }
    
    render() : JSX.Element
    {   
        return (
            <Container>
                <Button onClick={this.previousImage} disabled={!this.canShowPreviousImage()}><MaterialIcon icon="arrow_left" size="60px"/></Button>
                <Image src={this.props.imageUrls[this.state.currentImage]} key={"image" + 0}/>
                <Button onClick={this.nextImage} disabled={!this.canShowNextImage()}><MaterialIcon icon="arrow_right" size="60px"/></Button>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 75%;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Button = styled.button`
    &:disabled
    {
        opacity: 25%;
        cursor: not-allowed;
    }
`;

export default ImageBrowser;