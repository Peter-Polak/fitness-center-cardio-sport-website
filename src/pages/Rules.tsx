import { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import styled from "styled-components";
// import styled from 'styled-components';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';

interface IRulesProps
{
    routeProps : RouteComponentProps<{}>
}

interface IRulesState
{
    
}

class Rules extends Component<IRulesProps, IRulesState>
{
    constructor(props : IRulesProps)
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
                <Heading heading="H1"><MaterialIcon icon="gavel" color="dark"/> Vnútorný poriadok</Heading>
                
                <div>
                    <Required>
                        <Heading heading="H2"><MaterialIcon icon="priority_high"/> Návštevníci fitness centra sú povinní</Heading>
                        <ul>
                            <li>pri vstupe do fitness centra uhradiť vstupné v stanovenej hodnote alebo preukázať sa platnou permanentkou (nevzťahuje sa na zamestnancov TUKE počas pracovného týždňa v čase od 15:00 do 17:00, ktorí sa preukážu zamestnaneckým preukazom)</li>
                            <li>vykonávať športové aktivity vo vhodnej športovej obuvi a odeve (pozostávajúcom zo športových nohavíc a trička)</li>
                            <li>udržiavať čistotu (pri cvičení na posilňovacích lavičkách používať uterák na prikrytie plochy s ktorou cvičiaci prichádza do priameho kontaktu)</li>
                            <li>po cvičení uviesť stroje a náradie do pôvodného stavu (odložiť posilňovacie kotúče na stojany k tomu určené, zložiť závažia z posilňovacích strojov)</li>
                            <li>pri odchode odovzdať kľúče od šatne a skrinky</li>
                            <li>nechávať poháre s nápojmi na barovom pulte</li>
                            <li>rešpektovať pokyny zamestnancov fitness centra</li>
                            <li>nahlásiť zamestnancom každý úraz, ktorý sa stal počas cvičenia vo fitnescentre</li>
                            <li>všímať si stav športového naradia a náčinia a v prípade poškodenia to bezodkladne nahlásiť obsluhujúcemu personálu</li>
                        </ul>
                    </Required>
                    
                    <Forbidden>
                        <Heading heading="H2"><MaterialIcon icon="cancel"/> Návštevníkom fitness centra je zakázané</Heading>
                        <ul>
                            <li>
                            vstupovať do fitness centra:
                                <ul>
                                    <li>so zdravotným stavom, ktorý vylučuje bezpečne prevádzkovať športovú alebo fyzicky namáhavú činnosť</li>
                                    <li>v podnapitom stave</li>
                                    <li>pod vplyvom akýchkoľvek omamných alebo psychotropných látok</li>
                                    <li>so zvieratami</li>
                                    <li>s bicyklom a kolieskovými korčuľami</li>
                                    <li>v znečistenom oblečení alebo zjavne nevhodnom oblečení</li>
                                </ul>
                            </li>
                            <li>akýmkoľvek spôsobom poškodzovať majetok fitness centra (hádzanie posilňovacích kotúčov a jednoručných činiek)</li>
                            <li>obsluhovať a manipulovať s elektronickým zariadením fitness centra s výnimkou športového náradia (bežecké pásy, eliptory)</li>
                        </ul>
                    </Forbidden>
                </div>
            </div>
       );
    }
}

const Required = styled.div`
    margin-bottom: 30px;
    padding: 15px;

    border: 2px solid ${props => props.theme.color.succes.normal};
    border-radius: 10px;
`;

const Forbidden = styled.div`
    margin-bottom: 30px;
    padding: 15px;

    border: 2px solid ${props => props.theme.color.warning.normal};
    border-radius: 10px;
`;

export default Rules;