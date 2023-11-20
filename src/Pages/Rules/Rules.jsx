import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const Rules = () => {


    const mainPoints = [
        {
            heading: "Soft Balls",
            details: "Use soft or foam cricket balls instead of hard cricket balls to minimize the risk of injury and property damage.",
        },
        {
            heading: "Indoor-Friendly Equipment",
            details: "Choose equipment suitable for indoor play. Use lightweight plastic or foam bats and wickets designed for indoor use.",
        },
        {
            heading: "Playing Area",
            details: "Designate a specific area within the building for cricket play. Make sure the space is free from fragile or valuable items to prevent accidental damage.",
        },
        {
            heading: "Clear Boundaries",
            details: "Clearly define the boundaries of the playing area to avoid disputes and ensure that players are aware of where the ball can and cannot go.",
        },
        {
            heading: "No-Go Zones",
            details: "Identify specific areas within the building where playing cricket is not allowed to prevent accidents or damage. This might include areas with breakable objects or sensitive equipment.",
        },
        {
            heading: "Limited Overs",
            details: "Consider playing shorter overs to keep the game more manageable and minimize disruptions in the building.",
        },
        {
            heading: "No Full Swings",
            details: "Restrict full swings while batting to prevent accidental hits to walls, ceilings, or other objects.",
        },
        {
            heading: "Soft Shots",
            details: "Encourage players to play softer shots to reduce the force with which the ball is hit.",
        },
        {
            heading: "Bowling Style",
            details: "Adopt underarm bowling or gentle overarm bowling to minimize the force of the ball.",
        },
        {
            heading: "Wearing Safety Gear",
            details: "Although soft balls are less likely to cause injury, consider wearing appropriate protective gear, such as lightweight helmets and padding, especially if playing in a confined space.",
        },
        {
            heading: "Emergency Exits",
            details: "Ensure that emergency exits and pathways are kept clear at all times. Do not obstruct escape routes with cricket equipment.",
        },
        {
            heading: "Supervision",
            details: "Have a responsible person or supervisor present to ensure that the game is played safely and that players adhere to the modified rules.",
        },
        {
            heading: "Communication",
            details: "Establish clear communication among players to avoid collisions, accidental hits, or other safety hazards.",
        },
        {
            heading: "Respect for Property",
            details: "Emphasize the importance of respecting the building and its contents. Players should be aware of their surroundings and take care to avoid causing any damage.",
        },
        {
            heading: "Permission",
            details: "If playing in a shared or public space, obtain permission from the relevant authorities or property owners to ensure that playing cricket is allowed.",
        },
    ];




    return (
        <div className='mt-12 mb-28 px-12 text-justify'>
            <SectionTitle heading={'Rules & Regulations'} subHeading={'Please follow terms and conditions '}></SectionTitle>

            <h1 className='text-2xl mb-8'>

                Playing cricket in a building or confined space requires certain modifications to traditional cricket rules to ensure safety and prevent damage to property. Here are some general rules and regulations for playing cricket in such a setting:
            </h1>

            {
                mainPoints.map(data =>
                    <div className='mb-4 '>
                        <p> <span className='font-bold text-xl text-yellow-600'>{data.heading}</span> : <span className='text-xl'> {data.details}</span></p>
                         
                    </div>
                )
            }

        </div>
    );
};

export default Rules;