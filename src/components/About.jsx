import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Hello and welcome to my portfolio page! I'm a passionate and dedicated full-stack developer ready to take on exciting challenges and contribute to innovative projects. With a strong foundation in programming languages and a keen eye for design, I strive to deliver high-quality and user-friendly solutions.


                </p>


                <br />

                <p className="text-xl">
                    In short span of time i have acquired a solid understanding of modern web development technologies, including HTML, CSS, JavaScript, and frameworks like React and Node.js. I am continuously expanding my knowledge and staying up-to-date with the latest industry trends to ensure my skills are at the cutting edge.
                </p>
                <br />
                <p className="text-xl">
                    If you are looking for a committed and enthusiastic full-stack developer, I would be delighted to discuss potential opportunities to work together.

                    Thank you for visiting my portfolio page, and I look forward to connecting with you soon!
                </p>
            </div>
        </div>
    );
};

export default About;