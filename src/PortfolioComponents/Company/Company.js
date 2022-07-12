import React from 'react';
import ReactCardFlip from "react-card-flip";
import './Company.css'
import Data from "./Company.json";
import hcl from '../../assets/Company/hcl.png'

const Card = ({ project }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    // console.log(project);
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
                
                /* onMouseEnter={() => setIsFlipped((prev) => !prev)} */
                onClick={() => setIsFlipped((prev) => !prev)}
                className="company-card-front"
            >
                <img  src={project.image} alt="" />
            </div>
            <div
                onMouseLeave={() => setIsFlipped((prev) => !prev)}
                onClick={() => setIsFlipped((prev) => !prev)}
                className="company-card-back"
            >
                <i className='fa fa-star' />
                <h5>{project.position}</h5>
                <small className='experience'>{project.exp}</small>
            </div>
        </ReactCardFlip>
    );
};
export default function Company(props) {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return (
        <section id='company'>
            <h2>Organisations</h2>
            
            <div className='container company-container'>
            <small className='hint'>Click on the logos</small>
                <div className='company-cards'>
                

                    {Data.map((item, index) => (
                        <Card project={item} key={`card-${index}`} />
                    ))}
                    
                </div>

            </div>

        </section>
    )
}
