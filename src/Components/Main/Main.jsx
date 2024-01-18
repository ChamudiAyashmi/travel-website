import React, {useEffect} from 'react'
import './Main.css'
import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos, { init } from 'aos';
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle:'Bora Bora',
    location:'New Zeland',
    grade: 'CULTURAL RELAX',
    fees:'$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quaerat repellendus sit libero fugit, eos autem fugiat unde.'
},

  {
    id:2,
    imgSrc: img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade: 'CULTURAL RELAX',
    fees:'$600',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quaerat repellendus sit libero fugit, eos autem fugiat unde.'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle:'Great Barrier Reef',
    location:'Austrailia',
    grade: 'CULTURAL RELAX',
    fees:'$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quaerat repellendus sit libero fugit, eos autem fugiat unde.'

  },

  {
    id:4,
    imgSrc: img4,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade: 'CULTURAL RELAX',
    fees:'$800',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quaerat repellendus sit libero fugit, eos autem fugiat unde.'

  },

  {
    id:5,
    imgSrc: img5,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade: 'CULTURAL RELAX',
    fees:'$1100',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quaerat repellendus sit libero fugit, eos autem fugiat unde.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade: 'CULTURAL RELAX',
    fees:'$840',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quaerat repellendus sit libero fugit, eos autem fugiat unde.'
  },

  // {
  //   id:1,
  //   imgSrc: '',
  //   destTitle:'Bora Bora',
  //   location:'New Zeland',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description:''
  // },

  // {
  //   id:1,
  //   imgSrc: '',
  //   destTitle:'Bora Bora',
  //   location:'New Zeland',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description:''
  // },

  // {
  //   id:1,
  //   imgSrc: '',
  //   destTitle:'Bora Bora',
  //   location:'New Zeland',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description:''
  // }
];


const Main = () => {

  
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])



  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt=
                  {destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
