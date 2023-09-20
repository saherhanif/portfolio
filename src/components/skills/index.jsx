import React from "react";
import "./index.css";
import pythonIcon from "../skills/skillsIcons/python.svg";
import reactIcon from "../skills/skillsIcons/react.svg";
import htmlIcon from "../skills/skillsIcons/html.svg";
import cssIcon from "../skills/skillsIcons/css.svg";
import sassIcon from "../skills/skillsIcons/sass.svg";
import javascriptIcon from "../skills/skillsIcons/javascript.svg";
import typescriptIcon from "../skills/skillsIcons/typescript.svg";
import figmaIcon from "../skills/skillsIcons/figma.svg";
import nodejsIcon from "../skills/skillsIcons/nodejs.svg";
import gitIcon from "../skills/skillsIcons/git.svg";
import vscodeIcon from "../skills/skillsIcons/vs-code.svg";
import postgresqlIcon from "../skills/skillsIcons/postgresql.svg";
import mongodbIcon from "../skills/skillsIcons/mongodb.svg";

// import skillsBg from "./temp.png"
import skillsBg2 from "./temp2.png"


export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-top">
        <h1>SKILLS AND TECHNOLOGIES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          deleniti maiores pariatur assumenda quas magni et, doloribus quod
          voluptate
        </p><br/><br/>
      </div>
      <div className="skillsAndImage">
      <div class="skills__container container grid">
        <h2>LANGUAGES: </h2>
        <div className="languages">
          <div class="skills__container-box">
            <img
              class="skills__container-img"
              src={javascriptIcon}
              alt="javascript"
            />
            <div class="skills__container-name">JavaScript</div>
          </div>

          <div class="skills__container-box">
            <img
              class="skills__container-img"
              src={typescriptIcon}
              alt="typescript"
            />
            <div class="skills__container-name">TypeScript</div>
          </div>

          <div class="skills__container-box">
            <img class="skills__container-img" src={htmlIcon} alt="html" />
            <div class="skills__container-name">HTML</div>
          </div>

          <div class="skills__container-box">
            <img class="skills__container-img" src={cssIcon} alt="css" />
            <div class="skills__container-name">CSS</div>
          </div>

          <div class="skills__container-box">
            <img class="skills__container-img" src={sassIcon} alt="sass" />
            <div class="skills__container-name">SASS</div>
          </div>
          <div class="skills__container-box">
            <img class="skills__container-img" src={pythonIcon} alt="python" />
            <div class="skills__container-name">Python</div>
          </div>
        </div>

        <h2>FRAMEWORKS: </h2>
        <div className="frameworks">
          <div class="skills__container-box">
            <img class="skills__container-img" src={reactIcon} alt="react" />
            <div class="skills__container-name">React</div>
          </div>

          <div class="skills__container-box">
            <img class="skills__container-img" src={nodejsIcon} alt="vue" />
            <div class="skills__container-name">nodeJs</div>
          </div>
          <div class="skills__container-box">
            <img
              class="skills__container-img"
              src={postgresqlIcon}
              alt="firebase"
            />
            <div class="skills__container-name">postgreSQL</div>
          </div>
          <div class="skills__container-box">
            <img
              class="skills__container-img"
              src={mongodbIcon}
              alt="firebase"
            />
            <div class="skills__container-name">Mongodb</div>
          </div>
        </div>
        <h2>OTHER TECH: </h2>
        <div className="otherTech">
          <div class="skills__container-box">
            <img class="skills__container-img" src={figmaIcon} alt="firebase" />
            <div class="skills__container-name">Figma</div>
          </div>
          <div class="skills__container-box">
            <img class="skills__container-img" src={gitIcon} alt="firebase" />
            <div class="skills__container-name">Git</div>
          </div>
          <div class="skills__container-box">
            <img
              class="skills__container-img"
              src={vscodeIcon}
              alt="firebase"
            />
            <div class="skills__container-name">VS code</div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={skillsBg2} alt="skills"/>
      </div>
      </div>
    </section>
  );
}
