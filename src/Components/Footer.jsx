import '../Stylesheet/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
        <Link to='https://www.instagram.com'>    
          <InstagramIcon />
        </Link>
        <Link to='https://github.com/gitwitGreg'>
          <GitHubIcon />
        </Link>
        <Link to='https://www.linkedin.com/in/gregmen'>
          <LinkedInIcon />
        </Link>
        </div>
    </div>
  )
}

export default Footer
