import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
    return (
        <div name='resume' className='w-full md:h-screen bg-[#0a192f]'>
        

            <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
                <h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Resume</h2>
                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                    <h2 className='text-center text-black font-bold'>Gulam Quadir Parwez</h2>
                    <div className='flex'>
                        <a
                            href='https://www.linkedin.com/in/gulam-quadir-parwez-5694a122a/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a
                            href='https://github.com/GulamQuadir500'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={20} style={{ marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
                <div className='text-center text-white py-4 text-xl font-bold uppercase tracking-wider'>
                    <div className='hidden sm:block'>
                        <p>
                            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
                            <span className='px-1'>|</span> Complex Problem Solving
                        </p>
                    </div>
                    <div className='block sm:hidden'>
                        <p>Proven Leadership</p>
                        <p className='py-2'>Web Development</p>
                        <p>Complex Problem Solving</p>
                    </div>
                </div>
                <p className='text-white'>
                    Analytical, innovative, and motivated web development professional
                    with experience in customer service, team leadership, and
                    organizational effectiveness in fast-paced and challenging
                    environments. Adept at developing strategies and driving streamlined
                    operations. Diverse analytical skills, team collaboration, and
                    relationship building. Consummate professional, and motivated leader,
                    with solid interpersonal abilities and complex problem-solving skills.
                    Effective and proven track record of critical thinking, idea
                    generation, and optimizing efficiencies.
                </p>

                {/* Skills */}
                <div className='text-center py-4'>
                    <h5 className='text-center underline text-[18px] py-2 text-white text-bold'>Skills</h5>
                    <p className='py-2 text-white'>
                        <span className='font-bold'>Technical Skills</span>
                        <span className='px-2'>|</span>Front-End Web Developer
                        <span className='px-2'>|</span> HTML
                        <span className='px-2'>|</span>CSS
                        <span className='px-2'>|</span>Javascript
                        <span className='px-2'>|</span>React
                        <span className='px-2'>|</span>Next JS
                        <span className='px-2'>|</span>SQL
                        <span className='px-2'>|</span>NoSQL
                        <span className='px-2'>|</span>Redux
                        <span className='px-2'>|</span>Tailwind
                        <span className='px-2'>|</span> Bootstrap
                        <span className='px-2'>|</span> RESTAPI
                    </p>
                </div>
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1VThdA92p53dsoCEL7ojn18mYe8BPMgmm/view?usp=sharing'>
                    <button className='w-full p-4 text-gray-100 mt-4 bg-blue-500'>
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
};

export default resume;
