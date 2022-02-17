import { Component } from "react";
import Heading from "../components/Heading";
import MaterialIcon from "../components/MaterialIcon";

interface IReservationSystemInfoProps
{
    
}

interface IReservationSystemInfoState
{
    
}

class ReservationSystemInfo extends Component<IReservationSystemInfoProps, IReservationSystemInfoState>
{
    constructor(props : IReservationSystemInfoProps)
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
                <Heading heading="H1"><MaterialIcon icon="home" color="dark"/> Rezervačný systém</Heading>
            </div>
        );
    }
}

export default ReservationSystemInfo;