import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';
import Card from "../components/Card";

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';

interface IPricingProps
{
    routeProps : RouteComponentProps<{}>
}

interface IPricingState
{
    
}

class Pricing extends Component<IPricingProps, IPricingState>
{
    constructor(props : IPricingProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="euro" color="dark"/> Cenník</Heading>

                <Content>
                    <p>Platné od 01.09.2023</p>
                    
                    <Subsection>
                        <Heading heading="H2"><BebasIcon>1X</BebasIcon> Jednorazový vstup</Heading>
                        <Prices>
                            <Card 
                            title="1x"
                            subtitle=""
                            text="3,00 €"
                            subtext="Časovo neobmedzený"
                            />
                        </Prices>
                    </Subsection>
                    
                    <Subsection>
                        <Heading heading="H2"><MaterialIcon icon="calendar_today"/> Permanentky</Heading>
                        <Prices>
                            <Card 
                            title="1"
                            subtitle="mesiac"
                            text="30,00 €"
                            subtext="30,00 €/mesiac"
                            />
                            
                            <Card 
                            title="3"
                            subtitle="mesiace"
                            text="78,00 €"
                            subtext="26,00 €/mesiac"
                            />
                            
                            <Card 
                            title="6"
                            subtitle="mesiacov"
                            text="138,00 €"
                            subtext="23,00 €/mesiac"
                            />
                            
                            <Card 
                            title="12"
                            subtitle="mesiacov"
                            text="249,00 €"
                            subtext="20,75 €/mesiac"
                            />
                        </Prices>
                    </Subsection>
                </Content>
            </div>
        );
    }
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subsection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Prices = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const BebasIcon = styled.span`
    margin: 5px;
    
    font-family: "Bebas Neue";
    font-size: 1.3em;
    color: ${props => props.theme.color.primary.normal};
`;

export default Pricing;