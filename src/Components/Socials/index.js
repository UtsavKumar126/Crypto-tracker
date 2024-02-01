import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./styles.css"


function Socials() {
    const style={
        color:"var(--white)"
    }
  return (
    <div className='icons-div'>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={style}/>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon sx={style}/>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={style}/>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={style}/>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <XIcon sx={style}/>
        </a>
    </div>
  )
}

export default Socials