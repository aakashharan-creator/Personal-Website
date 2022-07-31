import React from 'react'
import Profile from '../../assets/images/profile.jpeg'
import SkillBar from 'react-skillbars';
import { language_skills, framework_skills } from './SkillsConstants';

export default function AboutMe() {     
    return (
        <div id='about_me' style={{ height: 'auto', minHeight: '100vh'}}>
            <div class="container">
                <div class='row' style={{textAlign: 'center'}}>
                    <div class='col-12'>
                        <img className='profile-img' src={Profile}/>
                    </div>
                </div>
                <div class="row" style={{textAlign: 'center'}}>
                    <div class='col-12'>
                        <h2>
                            Let me tell you about myself
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class='col-12'>
                        <h4>
                            I'm a computer science major seeking a summer 2023 technical internship.
                            I'm graduating in spring of 2024 from TAMU with a minor in statistics.
                            I have a strong interest in data science and financial technology and would love
                            to pursue projects in those fields.
                        </h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5 >
                            AT A GLANCE
                        </h5>
                        <h6 style={{paddingTop: '5%', paddingBottom: '3%'}}>Major - Computer Science</h6>
                        <h6 style={{paddingBottom: '3%'}}>Minor - Statistics</h6>
                        <h6 style={{paddingBottom: '3%'}}>Graduation Date - Spring 2024</h6>
                        <h6 style={{paddingBottom: '3%'}}>GPA - 3.76</h6>
                        <h6 style={{paddingBottom: '3%'}}>Work Experience - 1.5 years</h6>
                        <h6><a href="https://drive.google.com/file/d/1i4Em7_lY0wI2mq9_NuipPuyVR0ztUPPk/view?usp=sharing" target="_blank" rel="noopener noreferrer">Full Resume</a></h6>
                    </div>
                    <div class="col-6">
                        <h5 >
                            SKILLS
                        </h5>
                        <h6 style={{paddingTop: '5%', paddingBottom: '5%'}}>
                            I'm an experienced coder with a strong ability for problem-solving. I'm confident
                            that I'll be an asset to any project I'm fortunate enough to be a part of.
                        </h6>
                        <h5 style={{paddingBottom: '5%'}} >
                            FRAMEWORKS AND LIBRARIES
                        </h5>
                        <SkillBar skills={framework_skills} animationDelay={1000}/>
                        <h5 style={{paddingBottom: '5%'}} >
                            LANGUAGES
                        </h5>
                        <SkillBar skills={language_skills} animationDelay={1000}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
