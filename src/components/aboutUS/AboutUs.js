import React from "react"
import styles from './aboutUS.module.css'
import {CardInLandingPage} from '../sharedComponents/fundingCard/fundingCardInLandingPage/card'
import { ListFundings } from './../listingFundings/ListingFundings';

export const AboutUs=()=>{
    return(
        <React.Fragment>
         <div className={styles.mainDivAboutUs} style={{backgroundColor:"blue"}}>
            <div className="p-3">
           <h2>About this project</h2>
           <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            <br/>
            <br/>
             Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand</p>
           </div>
           <ListFundings>
           <CardInLandingPage/>
           </ListFundings>
         </div>
        </React.Fragment>
    )
}