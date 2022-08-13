import './App.css';

function App() {
  return (
    <div className="App">
      <div className="skills">
          <h1 style={{ color: 'white'}}>Skills</h1>
          <div className="skills-item">
            <p className="skills-text">HTML</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '90%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">CSS</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '90%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">JavaScript</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '90%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">PHP</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '60%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">Java</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '60%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">React</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '80%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">Next</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '80%', height: '20px'}}></div>
          </div>
          <div className="skills-item">
            <p className="skills-text">AWS</p>
            <div style={{display: 'inline-block', backgroundColor: 'rgb(81 245 222)', width: '55%', height: '20px'}}></div>
          </div>
          <p style={{ color: "#FFFFFF" }}>**Not all skills are listed**</p>
        </div>
        <div className="main-content">
          <div style={{ paddingTop: '5%', width: '90%', paddingLeft: '5%' }}>
          <div className="circular_image">
            <img alt="profile picture" src="https://media-exp1.licdn.com/dms/image/C4E03AQEAPHikt3TykA/profile-displayphoto-shrink_200_200/0/1614729694733?e=1665619200&v=beta&t=wLMtcJvaYcQU1aApLIWxQ4PySICYtxZakb53JHgKGqM"/>
          </div>
            <h1 className="intro-name">Hey There!</h1>
            <h2 className="name">I'm Albert.</h2>
            <div style={{color: 'white'}}>
              <p>I'm a Software Developer based in Barrie, Ontario.</p>
              
              <div><a style={{ color: '#ffbc6a' }} href="https://www.linkedin.com/in/albert-calamatta-bb81b3162/">LinkedIn</a> |&nbsp;
                <a style={{ color: '#ffbc6a'}}  href="mailto:albert.calamatta@gmail.com">albert.calamatta@gmail.com</a> |&nbsp;
                <span style={{ color: '#ffbc6a' }}>519-803-2269</span>
              </div>
              {/* <ul style={{ 
                listStylePosition: 'inside', 
                listStyleType: 'square', 
                color: '#ffbc6a', 
                textAlign: 'center'}}>
                <li>I'm a very curious person, and I love figuring out how things work</li>
                <li>I love solving problems, and I love optimizing solutions just as much</li>
                <li>I value teamwork as much as I value my own success</li>
                <li>I'm always learning</li>
              </ul> */}
              <div style={{ fontSize: '24px', textAlign: 'left' }}>Experience</div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block', float: 'left', width: '75%' }}>Software Developer - RYCOM, Woodbridge, ON</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Aug 2021 - Present</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                ⬜	Lead developer on major projects including third party data integrations <br />
                ⬜	Integral in development of software solutions for business requirements <br />
                ⬜	Consume and mutate big data into readable front-end dashboards <br />
                ⬜	Architect AWS workflow solutions for rapid application development <br />
                ⬜	Design and implement database relational models <br />
                ⬜	Current technology stack: React with Redux, Next.js, Python, AWS lambda, EC2 Code deploy, Express, Node.js 
                </p>
              </div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%',display: 'inline-block', float: 'left', width: '75%' }}>Full Stack Software Developer - Caredove, Orilla, ON</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Apr 2020 – Aug 2021</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                ⬜	Developed testable, reliable and reusable code for back-end and front-end solutions <br />
                ⬜	Worked closely with development and operations team to identify and solve business problems <br />
                ⬜	Debugging of a variety of applications both frontend and backend <br />
                ⬜	Developed using strict FHIR standards for rapid healthcare data exchange <br />
                ⬜	Technology stack: React with Redux, Next.js, Node.js, Java, PHP, Laravel
                </p>
              </div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%',display: 'inline-block', float: 'left', width: '75%' }}>Information Technology Intern - C.C. Tatham & Associates, Collingwood, ON</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Feb 2018 - May 2018</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                ⬜	Offered technical support to employees and conducted software and hardware repairs <br />
                ⬜	Formulated and introduced web application solutions on Linux environment <br />
                ⬜	Identified and implemented new technologies within the company’s work environment <br />
                ⬜	Developed website ticketing system for the Information Technology Department to monitor work progress <br />
                ⬜	Repaired local intranet site content management system, while updating backend Linux environment <br />
                </p>
              </div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block', float: 'left', width: '75%' }}>Web Developer - Freelance, Barrie, ON</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Apr 2017 - Oct 2018</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                ⬜	Developed web applications for small-medium sized businesses<br />
                ⬜	Created designs for UI/UX <br />
                ⬜	Documented client resources for updating website content<br />
                ⬜	Work closely with stakeholders to develop scopes of work and provide estimates<br />
                ⬜	Technology stack: WordPress, HTML, CSS, PHP, Linux, MySQL, Apache <br />
                </p>
              </div>
              <div style={{ fontSize: '24px', textAlign: 'left' }}>Education</div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block', float: 'left', width: '75%' }}>Bachelor of Science in Computer Science with Specialization in Artificial Intelligence</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Apr 2021</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                  Davenport University, Grand Rapids, MI <br />
                  GPA: 3.85 | President's List | Community Gold Standard Award
                </p>
              </div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block', float: 'left', width: '75%' }}>Computer Programming Diploma</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Apr 2019</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                  Georgian College, Barrie, ON <br />
                  Dean's List
                </p>
              </div>
              <div class="experience-box">
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block', float: 'left', width: '75%' }}>Civil Engineering Technology Diploma</p>
                <p style={{color: '#ffbc6a', textAlign: 'left', paddingLeft: '2%', paddingBottom: '0%', paddingTop: '2%', display: 'inline-block' }}>Apr 2016</p>
                <p style={{ textAlign: 'left', paddingLeft: '2%', paddingBottom: '2%', paddingTop: '0%'}}>
                  Georgian College, Barrie, ON <br />
                  Dean's List
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
