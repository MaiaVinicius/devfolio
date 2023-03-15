import * as React from "react";
import { NextPage } from "next";
import TimelineSection from "@sections/TimelineSection";
import ProjectSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import SkillsSection from "@sections/SkillsSection";
import { ContactIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from "@icons/about";
import Seo from "@components/Seo";
import mainStyles from "css/main.module.scss";
import Typing from 'react-typing-animation';

const Index: NextPage = () => {
  const age = calculateAge();
  const startedAge = 15;

  function calculateAge() {
    return parseInt(((Date.now() - +new Date("12/04/1999")) / (60 * 60 * 24 * 365 * 1000))
      .toString()
      .split(".")[0]);
  }

  const monthsActive = age - startedAge;


  return (
    <>
      <main className={mainStyles.main} id="about">
        <Seo title="Vini Maia - CTO" />

          <div className={mainStyles.mainTitle}>
            <h1>
            
            <Typing speed={50} hideCursor={false}>
              <div>
                I'm <span className={mainStyles.textHighlight}> Vini Maia</span>.

              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />

              </div>

              <div>
                I'm a <span className={mainStyles.textHighlight}> creative </span> mind.


              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30}/>

              </div>

              <div>

                <span>I'm a <span className={mainStyles.textHighlight}> entrepreneur</span>.</span>


                <Typing.Delay ms={1000} />
                <Typing.Backspace count={30}/>

              </div>

              <div>

                <span>I'm a <span className={mainStyles.textHighlight}> problem solver</span>.</span>


                <Typing.Delay ms={1000} />
                <Typing.Backspace count={30}/>

              </div>

              <div>
                I'm <span className={mainStyles.textHighlight}> Vini Maia</span>.
              </div>

            </Typing>
            </h1>
            
            <h2><u>C-Level CTO</u></h2>
          </div>

        <p className={mainStyles.mainText}>
          Hey there, I'm <i>Vinicius !</i> &nbsp;
          
          My main goal is to solve <u>big problems</u> using technology 🚀.
          
          <br/>
          <br/>

          I live in Rio de Janeiro 🇧🇷 , <em>{age} years old</em> and dropped my first <em>"Hello World!"</em> 💻 at the age of {startedAge}. I'm a self taught
          developer, have been solving problems for <strong>~{monthsActive} years</strong> now and still learning new stuff
          every day. 
          
        </p>

        <div className={mainStyles.btnContainer}>
          <a className="btn btn__light btn__icon" href={"#contact"}>
            <ContactIcon />
            Contact
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          {process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL ? (<a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL}
          >
            <InstagramIcon />
            Instagram
          </a>): null}
          
        </div>

      </main>

      <SkillsSection />

      <ProjectSection />

      <TimelineSection />

      <ContactSection />
    </>
  );
};

export default Index;
