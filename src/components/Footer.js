import { Grid,Link,Typography } from '@material-ui/core'

import { withRouter } from "react-router";
import { useFooterStyles } from "../styles/overRides";
import EXPERT from '../images/expert.jpg';
import ST from '../images/st.jpg';
import TR from '../images/tr.png';
import DR from '../images/dressage.jpg';
import NY from '../images/nyland.jpg';

import CV from '../images/camping-veenmeer.jpg';
import CO from '../images/coop.jpg';
import PN from '../images/pensionstal.jpg';
import EQ from '../images/equine.png';

const Footer = (props) => {
  const classes = useFooterStyles()
  
  const handleRoute = (route) => {
    props.history.push(route);
  }

return(
    <div className={ classes.footerWrapper } >
       <Grid  alignItems="center" justifyContent="space-around" container spacing={3}>
          <Grid item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={ST} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={EXPERT} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={TR} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={DR} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={CV} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={CO} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={PN} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={EQ} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={NY} />
              </div>
          </Grid>
       </Grid>
       <Grid alignItems="center" justifyContent="center" container spacing={3}>
           
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/')}>Home</Link></Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/about')}>Over ons </Link></Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/management')}>Bestuur</Link></Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/lessons')}>Lessen</Link>  </Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/members')}>Lidmaatschap</Link>  </Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/agenda')}>Agenda</Link>   </Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/rules')}>Reglement</Link>   </Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/sponsors')}>Sponsoren</Link>   </Grid>
           <Grid item><Link style={{fontFamily:'Mulish,cursive'}} href="" color="inherit" onClick={()=> handleRoute('/contact')}>Contact</Link></Grid>
           
       </Grid>
       <Grid alignItems="center" justifyContent="center" container spacing={3} style={{marginTop:'2em'}}>
            <Typography gutterBottom variant="body1">
                Website ontwikkeling door <a href="#"><img src="/nyland-thumb.jpg" alt="nyland thumb" /></a>
            </Typography>    
       </Grid>
    </div>
)} 

export default withRouter(Footer);