import { Component } from "react";
import styled from 'styled-components';

import {  } from "../utilities/restApi"
import {  } from '../utilities/helpers';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Field from '../components/Field';
import LoadingSceen from "../components/LoadingSceen";
import Checkbox from "../components/Checkbox";
import Button, { ButtonType } from "../components/Button";

interface IReservationReportProps
{
    
}

interface IReservationReportState
{
    id : string
}

class ReservationReport extends Component<IReservationReportProps, IReservationReportState>
{
    constructor(props : IReservationReportProps)
    {
        super(props);
        this.state = 
        {
            id : ""
        }
        
        this.handleIdChange = this.handleIdChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    handleIdChange(event : any)
    {
        const newId = event.target.value;
        this.setState({ id: newId });
    }

    submit()
    {
        
    }
    
    render() : JSX.Element
    {
        const { id } = this.state;
        
        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Výpis rezervacií</Heading>
                
                <Container>
                    <Field type="text" name="Identifikáčný kľúč" icon="fingerprint" value={id} onChange={this.handleIdChange}/>
                    <Button type={ButtonType.CONFIRM} onClick={this.submit}>Odoslať</Button>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default ReservationReport;