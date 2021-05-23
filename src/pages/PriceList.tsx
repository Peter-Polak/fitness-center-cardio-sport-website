import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';

interface IPriceListProps
{
    routeProps : RouteComponentProps<{}>
}

interface IPriceListState
{
    
}

class PriceList extends Component<IPriceListProps, IPriceListState>
{
    constructor(props : IPriceListProps)
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
                    <p>Platné od 01.01.2021</p>
                    
                    <div>
                        <Heading heading="H2"><BebasIcon>1X</BebasIcon> Jednorazový vstup</Heading>
                        <div>
                            <p>Časovo neobmedzený: 2€</p>
                        </div>
                    </div>
                    
                    <div>
                        <Heading heading="H2"><MaterialIcon icon="calendar_today"/> Permanentky</Heading>
                        <div>
                            <p>1 mesiac: 20,00€</p>
                            <p>3 mesiace: 55,00€</p>
                            <p>6 mesiacov: 95,00€</p>
                            <p>12 mesiacov: 175,00€</p>
                        </div>
                    </div>
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

const BebasIcon = styled.span`
    margin: 5px;
    
    font-family: "Bebas Neue";
    font-size: 1.3em;
    color: ${props => props.theme.color.primary.normal};
`;

export default PriceList;