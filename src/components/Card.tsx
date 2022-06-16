import { Component } from "react";
import styled from "styled-components";

interface ICardProps
{
    title : string
    subtitle : string
    text : string
    subtext : string
}

interface ICardState
{
    
}

class Card extends Component<ICardProps, ICardState>
{
    constructor(props : ICardProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { title, subtitle, text, subtext } = this.props;
        
        return (
            <Container>
                <Content>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    
                    <HorizontalRule/>
                    
                    <Text>{text}</Text>
                    <Subtext>{subtext}</Subtext>
                </Content>
                
            </Container>
        );
    }
}

const Container = styled.div`
    margin: 15px;
    
    border-radius: 10px;
    overflow: hidden;
    background-color: #202020;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 10px 50px;
    margin: 20px;
    
    border-radius: 10px;
    overflow: hidden;
    background-color: #202020;
`;

const Title = styled.div`
    font-family: "Bebas Neue";
    font-size: 40px;
    color: ${props => props.theme.color.primary.normal};
`;

const Subtitle = styled.div`
    font-family: "Bebas Neue";
    font-size: 24px;
    color: ${props => props.theme.color.primary.normal};
`;

const HorizontalRule = styled.hr`
    width: 100%;
`;

const Text = styled.div`
    padding: 10px 0;
    
    font-size: 1.2em;
    color: ${props => props.theme.color.text};
`;

const Subtext = styled.div`
    font-size: 0.8em;
    color: ${props => props.theme.color.text};
`;

export default Card;