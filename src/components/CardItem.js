import React, { useState } from 'react';

export default function CardItem(props) {

  const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  return (
    <>
      <section className='cardItem'>
        <h1>{props.title}</h1>
        <strong>{props.points}</strong>
        <button 
        onClick={toggleModal}
        className='cardItem-btn'>
          Generate URL
        </button>
      </section>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
              <div className='share-sc'>
                <h1>Share Vie</h1>
                <div className='social-icon-sc'>
                  <span>
                  <i class="fab fa-facebook"></i>
                  </span>

                  <span>
                  <i class="fab fa-twitter"></i>
                  </span>

                  <span>
                  <i class="fab fa-instagram-square"></i>
                  </span>

                  <span>
                  <i class="fab fa-whatsapp"></i>
                  </span>

                  <span>
                  <i class="fas fa-paper-plane"></i>
                  </span>
                </div>
              </div>

              <div className='copy-link'>
                <h1>Copy Links</h1>
                <div className='user-link'>
                  <div className='ico-lk'><i class="fas fa-link"></i></div>
                  <input 
                  type='text'
                  placeholder='http://foodgital.com/referrer/Dav_scot' />
                  <button>Copy</button>
                </div>
              </div>

              <div 
              className='close-modal'
              onClick={toggleModal}>
                <i class="far fa-times-circle"></i>
              </div>
            </div>
          </div>
      )}
    </>
  );
};
