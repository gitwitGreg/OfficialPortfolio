import ppic from '../assets/ppic.jpg'
import '../Stylesheet/About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='intro'>
            <h1>Gregory Mensah</h1>
            <h3>Full-Stack Developer</h3>
            <img src={ppic} width={400} height={400} className='ppic' id='prof'/>
        </div>
        <div className='description'>
            <h1>Summary</h1>
            <p>I am a passionate software developer who recently graduated from the University of Delaware. Throughout my academic journey, I've gained a strong foundation in software development principles and techniques. Since graduating, I've eagerly delved into personal projects that showcase my creativity and problem-solving skills. My journey doesn't stop at graduation; I'm continuously expanding my skill set by diving into new frameworks and databases. The ever-evolving nature of technology excites me, and I am committed to staying at the forefront of innovation in the software development field.</p>
        </div>
        <div className='education'>
            <h1>Education</h1>
            <p>During my pursuit of a computer science degree, I embarked on a transformative journey that equipped me with a versatile skill set. I honed my problem-solving abilities by immersing myself in the intricacies of various programming languages, mastering algorithms, and comprehending the intricacies of data structures. This comprehensive education provided me with a robust toolkit to approach challenges from diverse angles. As I tackled complex projects and collaborated with peers, I gained a profound appreciation for the importance of efficient coding practices and elegant solutions. My academic venture not only granted me technical proficiency but also instilled in me a deep-seated passion for innovation within the realm of computer science.</p>
        </div>
        <div className='skills'>
            <h1 className='pink'> Technical Skills</h1>
            <h1 className='blue'>Soft Skills</h1>
            <div className='pink'>
                <ul id='tskills'>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>AWS</li>
                    <li>SQL</li>
                    <li>Github</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className='blue'>
                <ul id='sskills'>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                    <li>Leadership</li>
                    <li>Determination</li>
                    <li>Flexibility</li>
                </ul>
            </div>
        </div>
        <div className='experience'>
            <h1>Experience</h1>
            <div className='econtains'>
                <div className='Cheesecake Factory'>
                    <h1>Cheesecake Factory</h1>
                    <p>Server Newark,DE 19713</p>
                    <p>June 2022 - Present</p>
                    <ul>
                        <li>Build relationships and communicate with guest.</li>
                        <li>Exemplify time manage during peak operating hours</li>
                        <li>Responsible for maintaining a clean and hospitable environment</li>
                        <li>Ensure essential inventory is re stocked and ready for the next workday</li>
                    </ul>
                </div>
                <div className='Deluxe cooperation'>
                    <h1>Deluxe cooperation</h1>
                    <p>Check Processor Newark,De</p>
                    <p>September 2020 - June 2022</p>
                    <ul>
                        <li>Process payments for clients</li>
                        <li>Organize processed checks to ensure payments could be logged accurately</li>
                     <li>Distribute and processed payments to associating departments</li>
                    </ul>
                </div>
                <div className='Chick-Fil-A'>
                    <h1>Chick-fil-A</h1>
                    <p>Front-of-house Newark,De</p>
                    <p>June 2017 - September 2020</p>
                    <ul>
                        <li>Assisted customers with the checkout process </li>
                        <li>Served on the prep line when necessary</li>
                        <li>Maintain guest relations while providing quick and efficient service </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
