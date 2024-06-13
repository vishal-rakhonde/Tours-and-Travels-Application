/* eslint-disable react/prop-types */
import React from 'react';

const profiles = [
    {
        imgSrc: "pranoti.jpg",
        name: "Pranoti Koshti",
        location: "C-DAC Juhu",
        mobile: "XXXXXXXXXX",
        email: "pranotikoshti2904@gmail.com",
        technicalSkills: "MySQL, MongoDB, Linux, Node JS, React JS, Express JS, Core Java",
    },
    {
        imgSrc: "ruchita.PNG",
        name: "Ruchita Yerpude",
        location: "C-DAC Kharghar",
        mobile: "XXXXXXXXXX",
        email: "ruchitayerpude2811@gmail.com",
        technicalSkills: "MongoDB, MySQL, Linux, Node JS, React JS, Express JS",
    },
    {
        imgSrc: "vishal.jpeg",
        name: "Vishal Rakhonde",
        location: "C-DAC Kharghar",
        mobile: "XXXXXXXXXX",
        email: "vrakhondepatil@gmail.com",
        technicalSkills: "MySQL, MongoDB, Linux, Node JS, React JS, Express JS, Core Java",
    }
];

function AboutUs() {
    return (
        <div className="profileclass">
            <style>
                {`
                    .profileclass {
                        text-align: center;
                    }
                    .about {
                        font-size: 50px;
                        animation: fadeInDown 0.5s ease-out;
                    }
                    .row {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 20px; /* Added gap between cards */
                    }
                    .column {
                        flex: 1 0 21%; /* Adjust the flex-basis value to control the number of columns */
                        max-width: 300px;
                        min-width: 250px;
                        margin-right: 88px;
                        animation: fadeInScale 0.5s ease-out forwards;
                        opacity: 0;
                    }
                    .card {
                        border: 1px solid #ccc;
                        border-radius: 10px;
                        padding: 1rem;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        transition: transform 0.3s;
                    }
                    .card:hover {
                        transform: translateY(-10px);
                    }
                    .ii {
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                    }
                    .profile-details {
                        margin-top: 1rem;
                    }
                    .tour-price, .tour-name {
                        margin: 0.5rem 0;
                    }
                    .description {
                        margin-top: 0.5rem;
                    }

                    @keyframes fadeInDown {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeInScale {
                        from {
                            opacity: 0;
                            transform: scale(0.8);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}
            </style>
            <div>
                <h1 className="about">About Us</h1>
            </div>
            <div className="row">
                {profiles.map((profile, index) => (
                    <div className="column" style={{ animationDelay: `${index * 0.3}s` }} key={index}>
                        <div className="card">
                            <img src={profile.imgSrc} className="ii" height={200} alt={`${profile.name}`} />
                            <div className="profile-details">
                                <h2 className="tour-price">{profile.name}</h2>
                                <h2 className="tour-name">{profile.location}</h2>
                            </div>
                            <p>Mobile no: {profile.mobile}</p>
                            <p>Email ID: {profile.email}</p>
                            <div className="description"><b>Technical Skills:</b> {profile.technicalSkills}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
