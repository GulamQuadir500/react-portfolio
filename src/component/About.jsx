import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Gulam Quadir Parwez, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Hi there! I'm a passionate full stack web developer dedicated to crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I specialize in building dynamic web applications that marry form with function.

                            I thrive on solving complex problems and love collaborating with teams to create innovative solutions. When I'm not coding, you can find me exploring the latest in tech or enjoying the great outdoors.

                            Let's connect and bring your next project to life!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
