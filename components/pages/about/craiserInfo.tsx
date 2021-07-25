import Link from 'next/link';
import React from 'react'

//STYLING
import styled from 'styled-components';
import { highlights } from '../../../styles/colors';
import { H2, H3, Span, Paragraph, Textblock, TextContainer, TitleContainer } from '../../global/markup';


const InfoContent: React.FC = () => {
    return (
    <TextContainer>
        <TitleContainer>
            <h1>CRAISER_.</h1>
            <H2>WEB3 BASED FUNDRAISING</H2>
        </TitleContainer>
        <Description>
            <H3>WHAT IS CRAISER_.</H3>
            <Textblock>
                <Paragraph>                
                    <Span>Craiser_.</Span> is a web3 based fundraising platform that integrates a fundraiser 
                    <Span> <Link href="/about/contract">smart contract</Link></Span> on the <Span> Ethereum Blockchain </Span>
                    . This way we can deliver a <Span>decentralized</Span> way for you to 
                    create and maintain fundraiser projects with <Span>community engagement</Span>.
                </Paragraph>
               <Paragraph>
                    A smart contract eliminates a man in the middle, funds can not be <Span>manipulated</Span>
                    , our platform delivers an easy to use <Span>UI</Span> that supports the smart contract. 
                    Once a contract is deployed the deployer is the owner, he can access and use the generated funds or reassign ownership.
                </Paragraph>
                <Paragraph>
                    <Span>Craiser_.</Span> only does what it needs to do. This can be seen in our strategy.
                </Paragraph>
                <Paragraph>
                    Some examples
                    <ul>
                        <li>
                            we opted to not implement an <Span>explorer </Span> 
                            page or a way for people to promote their projects, marketing is not something 
                            we wanted to implement to prevent project spam. A project can only be  
                            <Span> accessed by using it's reference code</Span>, deliverd by the team behind a fundraiser.
                        </li>
                        <li>
                            We did <Span>not</Span> create a token alongside our DAPP, alot of DAPP's have 
                            functionality locked behind a propriatery token. 
                            We did not want to go this route because it takes away ease-of-use.
                        </li>
                    </ul>
                </Paragraph>
            </Textblock>
            <H3>WHAT MAKES OUR FUNDRAISING PLATFORM DIFFERENT ?</H3>
            <Textblock>
                <Paragraph>
                    Our smart contract implements a <Span> community agreement clausule</Span>.
                    Once a fundraiser has passed it's funding period a <Span>spending request </Span> 
                    can be created by the team behind the project.
                    Now the community <Span>get's the vote</Span>. Only if at least half of people 
                    who have donated agree to a spending request the funds will be transferd.
                </Paragraph>
                <Paragraph>
                    We also integrated a <Span>refund</Span> period. A <Span>7 day period</Span> between the fundraiser's deadline 
                    and the inital spending request the backer has the choice to refund his donations, 
                    losing his or hers voting ability but still leaving him in control if his or hers funds.
                </Paragraph>
            </Textblock>
            <H3>HOW DOES IT WORK ?</H3>
            <Textblock>
                <Paragraph>
                    A project can be launched by signing and deploying a new instance of the <Span>smart contract</Span>.
                </Paragraph>
                <Paragraph>
                    A fundraiser get's signed and deployed with 2 important parameters
                    <ul>
                        <li><Span>GOAL</Span>: The goal that has to be reached before funds are deployed (in ETH)</li>
                        <li><Span>TIME</Span>: Duration of the fundraising (min 1 week)</li>
                    </ul>
                </Paragraph>
            </Textblock>
            <H3>HOW DO WE MAINTAIN AND PROVIDE THIS PLATFORM ?</H3>
            <Textblock>
                <Paragraph>
                    <Span>Craiser_.</Span> is a bussiness as any other, so yes we do have development and deployement costs. 
                    Included in the smart contract is a <Span>1% fee</Span>. With every payout request, 
                    1% of the funds are transferd to our dev wallet.
                </Paragraph>
            </Textblock>
        </Description>
    </TextContainer>
    )
}


const Description = styled.div`

`

export default InfoContent;