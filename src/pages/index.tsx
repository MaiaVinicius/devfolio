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
            
            <h2><u>Software Engineering Leader</u></h2>
          </div>

        <p className={mainStyles.mainText}>
          Hey there, I'm <i>Vinicius !</i> &nbsp;
          
          With <strong>9+ years of professional experience</strong>, I specialize in solving big problems using cutting-edge technology 🚀.  <br/> 
          
          From designing AI-powered solutions that enhance healthcare efficiency to driving business growth through scalable SaaS applications passionate about using innovation to make a meaningful impact.
          
        </p>

        <div className={mainStyles.btnContainer}>
          <a className="btn btn__light btn__icon" href={"mailto:"+process.env.NEXT_PUBLIC_EMAIL}>
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
          {/* {process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL ? (<a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL}
          >
            <InstagramIcon />
            Instagram
          </a>): null} */}
          
        </div>

      </main>

      <SkillsSection />

      <ProjectSection />

      <TimelineSection />

      {/* <ContactSection /> */}
    </>
  );
};

export default Index;
