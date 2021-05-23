import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import GalleryImage from "../components/GalleryImage";
// import styled from 'styled-components';

import Heading from '../components/Heading';
import ImageBrowser from "../components/ImageBrowser";
import MaterialIcon from '../components/MaterialIcon';
import Overlay from "../components/Overlay";

interface IGalleryProps
{
    routeProps : RouteComponentProps<{}>
}

interface IGalleryState
{
    isImagePreviewVisible : boolean
    imageBrowserStartingIndex : number
}

class Gallery extends Component<IGalleryProps, IGalleryState>
{
    constructor(props : IGalleryProps)
    {
        super(props);
        this.state = 
        {
            isImagePreviewVisible : false,
            imageBrowserStartingIndex : 0
        }
        
        this.openOverlay = this.openOverlay.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
    }
    
    openOverlay(index : number)
    {
        this.setState({isImagePreviewVisible : true, imageBrowserStartingIndex : index});
    }
    
    closeOverlay()
    {
        this.setState({isImagePreviewVisible : false});
    }

    render() : JSX.Element
    {
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="image" color="dark"/> Galéria</Heading>
                
                <Images>
                    {ImageUrls.map((imageUrl, index) => <GalleryImage src={imageUrl} index={index} onClick={this.openOverlay} key={"image" + index}/>)}
                </Images>
                
                {this.state.isImagePreviewVisible && 
                    <Overlay closeOverlay={this.closeOverlay}>
                        <ImageBrowser imageUrls={ImageUrls} startingImage={this.state.imageBrowserStartingIndex}/>
                    </Overlay>
                }
            </Container>
        );
    }
}

const Container = styled.div`
    text-align: center;
`;

const Images = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const ImageUrls = 
[
    "https://i.imgur.com/3tg7Afx.jpg", 
    "https://i.imgur.com/lXGnm5g.jpg", 
    "https://i.imgur.com/p7a8WCv.jpg"
];


export default Gallery;