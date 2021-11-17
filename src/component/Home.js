import { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'
import 'remixicon/fonts/remixicon.css'

const imgLink = "https://source.unsplash.com/random/874x1240?sig=186"

const Home = () => {
    return (
        <>
            <div id="main">
                <nav>
                    <Link to="/" className="menu"><i class="ri-bar-chart-horizontal-line"></i>Menu</Link>
                    <div className="nright">
                        <Link to="/">ENG</Link>
                        <Link to="/">FR</Link>
                    </div>
                </nav>

                <div className="hero">
                    <div className="left">
                        <div className="chlft">
                            <h5>01 <span className="line"></span> 03</h5>
                            <div className="txt">
                                <div className="txtlft">
                                    <h5>Spring Summer <br/>2020</h5>
                                </div>
                                <div className="txtrgt">
                                    <h1>A New<br/>Beginning.</h1>
                                    <div className="icons">
                                        {/* <IonIcon icon={chevronBackOutline} stroke-width="30"/>
                                        <IonIcon icon={chevronForwardOutline}/> */}
                                        <i class="ri-arrow-left-s-line"></i>
                                        <i class="ri-arrow-right-s-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="imgcenter">
                            <img src={imgLink} alt="" />
                            <i class="ri-add-line"></i>
                        </div>
                        <div className="rgtlinks">
                            <Link to="/">FB</Link>
                            <Link to="/">TW</Link>
                            <Link to="/">PIN</Link>
                            <Link to="/">IG</Link>
                        </div>
                    </div>
                </div>

                <div className="btmlnks">
                    <Link to="/">A New Beginning</Link>
                    <Link to="/">The Campaign</Link>
                    <Link to="/">New Rewards Project</Link>
                    {/* <Link to="/">Link 1</Link>
                    <Link to="/">Link 2</Link>
                    <Link to="/">Link 3</Link> */}
                </div>
            </div>
        </>
    )
}

export default Home
