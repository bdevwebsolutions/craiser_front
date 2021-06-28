import React from 'react'
import { Container, Title, Description } from './styles';


const InfoContent: React.FC = () => {
    return (
    <Container>
        <Title>
            <h1>CRAISER_.</h1>
            <h2>WEB3 BASED FUNDRAISING</h2>
        </Title>
        <Description>
            <h3>WHAT IS CRAISER_.</h3>
            <p>
                <span>Craiser_.</span> is a web3 based fundraising platform that integrates a fundraiser contract on the <span> Ethereum Blockchain </span>. This way we can deliver a <span>decentralized</span> way for you to create and maintain fundraiser projects with a strong eye on <span>community agreement</span>.
                <br></br>
                <br></br>
                No man in the middle means <span>no manipulation</span>, our platform delivers an easy to use <span>UI</span> that supports the fundraiser smart contract. Once a contract is deployed the deployer is the owner, he can access and use the generated funds.
                <br></br>
                <br></br>
                <span>Craiser_.</span> only does what it needs to do. This can be seen in our strategy.
                <br></br> 
                <br></br>
                Some examples:<br></br> we opted to not implement an <span>explorer</span> page or a way for people to promote their projects, marketing is not something we wanted to implement to prevent project spam. A project can only be <span>accessed by using it's reference code</span>, deliverd by the team behind a fundraiser.
                <br></br>
                <br></br>
                We did <span>not</span> create a token alongside our DAPP, alot of DAPP's have functionality locked behind a propriatery token. We did not want to go this route because it takes away ease-of-use.
                <br></br>
                <br></br>
                
            </p>
            <h3>WHAT MAKES OUR FUNDRAISING PLATFORM DIFFERENT ?</h3>
            <p>
                The power of smart contracts and defi gives us the possibility to bring a way of fundraising where funds are not blindy transferd to the people behind the fundraiser. We implemented a <span>community agreement</span> functionality.
                <br></br>
                Once a fundraiser has passed it's funding period a <span>spending request</span> can be created by the team behind the project.
                <br></br>
                Now the community <span>get's the vote</span>. Only if at least half of people who have donated agree to a spending request the funds will be transferd.
                <br></br>
                <br></br>
                We also integrated a <span>refund</span> ability. During a <span>7 day period</span> of time between the fundraiser deadline and the inital spending request the backer has the choice to refund his donations, losing his or hers voting ability but still leaving him in control if his or hers funds.
            </p>
            <h3>HOW DOES IT WORK ?</h3>
            <p>
                A project can be launched by signing and deploying a new instance of the <span>smart contract</span>.
            </p>
            <p>
                A fundraiser get's signed and deployed with 2 important parameters
                <ul>
                    <li><span>GOAL</span>: The goal that has to be reached before funds are deployed (in ETH)</li>
                    <li><span>TIME</span>: Duration of the fundraising (min 1 week)</li>
                </ul>
                <br></br>
            </p>
            <h3>HOW DO WE MAINTAIN AND PROVIDE THIS PLATFORM ?</h3>
            <p>
                <span>Craiser_.</span> is a bussiness as any other, so yes we do have development and deployement cost's. Included in the smart contract is a <span>1% fee</span>. With every payout request, 1% of the funds are transferd to our wallet.
             </p>
        </Description>
    </Container>
    )
}

export default InfoContent;