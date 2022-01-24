import React from 'react'
import './Header.css';

function Header() {
    return (
    <section className='header'>
     <div className='header-container'>
      <div className='header-text'>
         <h1>Earn a living doing something you love</h1>
          <p>
            Earn a living doing something you love
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Venenatis scelerisque at 
            quam congue posuere libero in sit quam. Consequat, 
            scelerisque non tincidunt sit lectus.
         </p>
      </div>

      {/* width="814" height="458" 
      
        accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      */}

      <div className='ut-thomb-play'>
        <iframe 
          src="https://www.youtube.com/embed/GlrxcuEDyF8" 
          title="YouTube video player" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>

      <button className="header-mobile-btn">Discover More</button>
     </div>
    </section>
    )
}

export default Header;