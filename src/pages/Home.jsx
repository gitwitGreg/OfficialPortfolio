import profpic from '../assets/tech.jpg'
import '../Stylesheet/Home.css'

const Home = () => {
  return (
    <div className='hero'>
    <div className='leftside'>
      <h1>Hi, Im Gregory Mensah</h1>
      <h3>Full-Stack Developer</h3>
      <p className="summary">Proficient Graduate of computer science and eager software engineer with advanced expertise in Typescript and C programing and educational experience in app development as well as web design. Experience working with peers to develop over 20 projects on small teams. Looking for a role which allows for growth and continues learning.</p>
      <div className='btns'>
        <a href='/Contact'>Hire Me</a>
        <a href='/About'>Lets Talk</a>
      </div>
    </div>
    <div className='rightside'>
      <img src={profpic} height={600} width={800} />
    </div>
    </div>
  )
}

export default Home
