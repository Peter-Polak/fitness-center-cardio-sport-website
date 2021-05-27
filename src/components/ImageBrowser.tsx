import { Component } from "react";
import styled from 'styled-components';
import MaterialIcon from "./MaterialIcon";

interface IImageBrowserProps
{
    imageUrls : Array<string>
    startingImage : number
    className? : string
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
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    
    componentDidMount()
    {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    
    componentWillUnmount()
    {
        document.removeEventListener("keydown", this.handleKeyDown);
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
    
    handleKeyDown(event : any)
    {
        event.preventDefault();
        
        const { imageUrls } = this.props;
        
        switch (event.keyCode)
        {
            case 37:
                this.previousImage();
                break;
            case 38:
                this.setState({currentImage : imageUrls.length - 1});
                break;
            case 39:
                this.nextImage();
                break;
            case 40:
                this.setState({currentImage : 0});
                break;
        }
    }
    
    render() : JSX.Element
    {   
        const {  imageUrls, className, } = this.props;
        const {  currentImage } = this.state;
        
        return (
            <Container className={className}>
                <ImageContainer>
                    <Button onClick={this.previousImage} disabled={!this.canShowPreviousImage()}><MaterialIcon icon="arrow_left" size="60px"/></Button>
                    <Image src={imageUrls[currentImage]} onClick={() => window.open(imageUrls[currentImage], "_blank")} key={"image" + 0}/>
                    <Button onClick={this.nextImage} disabled={!this.canShowNextImage()}><MaterialIcon icon="arrow_right" size="60px"/></Button>
                </ImageContainer>
                <ImageDetails>
                    {`${currentImage + 1}/${imageUrls.length}`}
                </ImageDetails>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 80%;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: zoom-in;
`;

const ImageDetails = styled.div`
    margin: 20px;
`;

const Button = styled.button`
    &:disabled
    {
        opacity: 25%;
        cursor: not-allowed;
    }
`;

export default ImageBrowser;