import { useHomeStyles, useGenericWrapper, useAboutStyles, useTableStyles } from '../styles/overRides'
import {Button ,Paper, Grid, Typography, Avatar,IconButton,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import FACEBOOK from '../images/SVG/facebook.svg';
import INSTAGRAM from '../images/SVG/instagram.svg';
import { lazy,Suspense } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//import PRESIDENT from '../images/members/president.jpg';
//import VICE from '../images/members/vice.png';
//import MARCEL from '../images/members/marcel.png';
//import MARIJKE from '../images/members/marijke.png';
//import NANCY from '../images/members/nancy.png';

const Video = lazy(()=> import('./common/Video'))

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Home = (props) => {
    console.log("Home Loaded")
    const classes = useHomeStyles()
    const generics = useGenericWrapper()
    const tableClasses = useTableStyles()
    const aboutclasses = useAboutStyles();
    
    
    const handleRoute = (route) => {
        props.history.push(route);
    }    

    const goToPage = (page) => {
        switch (page) {
            case 'instagram':
                window.open('https://www.instagram.com/rijvereniging_de_drentsche_aa','_blank') 
                break;
            case 'facebook':
                window.open('https://www.facebook.com/Rijvereniging-De-Drentsche-Aa-101992618870348','_blank');break;
            default:
                break;
        }
    }
    return (
        <div>
            <div className={classes.homeWrapper}>
                <Suspense fallback={<p>Video Loading....</p>} >
                    <Video></Video>
                </Suspense>
                <div className={classes.gridWrapper}>
                    <Grid justifyContent='center' container>
                        <Grid className={classes.homeGrid} md={6} item>
                            <Typography xs={6} className={classes.homeHeader} style={{fontSize:'3.6rem'}}>Welkom bij</Typography>
                            
                        </Grid>
                        <Grid className={classes.homeGrid}>
                            <div className={classes.banner} >
                            <Typography className={classes.homeHeader} variant="h2">RV De Drentsche Aa</Typography>
                            <div className={classes.avatarHolder}>
                                <IconButton onClick={()=> goToPage('instagram')} >
                                    <Avatar alt="instagram" name="instagram" className={classes.avatar} src={INSTAGRAM} />
                                </IconButton>
                                <IconButton onClick={()=> goToPage('facebook')}>
                                    <Avatar alt="facebook" name="facebook" className={classes.avatar} src={FACEBOOK} />
                                </IconButton>
                            </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.homeWrapper} style={{marginTop:'50px'}}>
                <Grid justifyContent='center' container spacing={0} m={4}>
                    <Grid item xs={12} md={5} style={{padding:'0px 10px 0px 0px'}}>
                        <Typography className={classes.homeHeader} variant="h2">Over Ons</Typography>
                        <Typography variant="body1" style={{textAlign:'justify'}}>Landelijke rijvereniging & ponyclub De Drentsche Aa is ontstaan uit de behoefte aan een ouderwetse rijvereniging van weleer. Een vereniging waar onderlinge verbondenheid en saamhorigheid de boventoon voeren. Waar de verenigingslessen een avondje uit zijn en in de kantine de sfeer hangt van een bruin café. Vanuit die gedachte heeft op woensdag 17 maart 2021 de eerste verkennende bespreking plaatsgevonden tussen de bestuursleden en vele vergaderingen later zag landelijke rijverenging & ponyclub De Drentsche Aa op 1 augustus het levenslicht.</Typography>
                        
                        <Typography variant="body1" style={{marginTop:'8px',textAlign:'justify'}} >Wij willen een actieve vereniging zijn waar de verenigingslessen en -activiteiten een plaats van ontmoeting en gezelligheid zijn. Naast gezelligheid is het aanbieden van kwaliteitsvolle lessen een belangrijk speerpunt. Gedreven en deskundige instructeurs geven les aan combinaties van alle leeftijden en niveaus in de disciplines dressuur en springen. Zowel de wedstrijdruiters als de recreanten zijn van harte welkom.</Typography>

                        <Typography variant="body1" style={{marginTop:'8px',textAlign:'justify'}} >
                        Ons voornemen is een actieve vereniging te worden als het gaat om het organiseren van wedstrijden en activiteiten.
                            Passend bij onze ambities hebben wij als uitvalsbasis de prachtige locatie van Sunrise Stables in Assen. Hier vinden onze verenigingslessen en overige activiteiten plaats.
                        </Typography>
                    </Grid>
                    <Grid item >
                        <img src="/office.jpg" alt="Office" style={{maxWidth:'99%'}}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.homeWrapper} style={{marginTop:'80px'}}>
                <Grid justifyContent='center' container style={{marginBottom:'20px'}}>
                <Typography className={classes.homeHeader} variant="h2">Bestuursleden</Typography>
                 </Grid>   
                <Carousel responsive={responsive} autoPlaySpeed={2000}  infinite={true} ssr={true} autoPlay={true}>
                    <div style={{textAlign:'center'}}>
                        <img src="/members/president.jpg" style={{width:'280px',height:'280px','borderRadius':'150px'}} alt="President"/>
                        <Typography className={classes.homeHeader} variant="h6">Chantal Wieringa</Typography>
                        <Typography className={classes.homeHeader} variant="body1">Algemeen bestuurslid</Typography>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/members/vice.jpg" style={{width:'280px',height:'280px','borderRadius':'150px'}} alt="vice president"/>
                        <Typography className={classes.homeHeader} variant="h6">Rolf Boer</Typography>
                        <Typography className={classes.homeHeader} variant="body1">Penningmeester</Typography>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/members/marcel.jpg" style={{width:'280px',height:'280px','borderRadius':'150px'}} alt="marcel"/>
                        <Typography className={classes.homeHeader} variant="h6">Marcel Hulzebosa</Typography> 
                        <Typography className={classes.homeHeader} variant="body1">Algemeen bestuurslid</Typography>   
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/members/marijke.jpg" style={{width:'280px',height:'280px','borderRadius':'150px'}} alt="marijke"/>
                        <Typography className={classes.homeHeader} variant="h6">Marije de Vries</Typography>
                        <Typography className={classes.homeHeader} variant="body1">Secretaris en vice-voorzitter</Typography>   
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/members/nancy.jpg" style={{width:'280px',height:'280px','borderRadius':'150px'}} alt="nancy"/>
                        <Typography className={classes.homeHeader} variant="h6">Nancy Bootsman</Typography>
                        <Typography className={classes.homeHeader} variant="body1">Voorzitter</Typography> 
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/members/miranda.jpg" style={{width:'280px',height:'280px','borderRadius':'150px'}} alt="nancy"/>
                        <Typography className={classes.homeHeader} variant="h6">Miranda Trip</Typography>
                        <Typography className={classes.homeHeader} variant="body1">Algemeen bestuurslid</Typography> 
                    </div>
                </Carousel>;
            </div>
            <div className={generics.root} style={{marginTop:'80px'}}>
            <Grid container spacing={4}>
                <Grid justifyContent='center' container style={{marginBottom:'0px'}}>
                    <Typography className={classes.homeHeader} variant="h2">Lidmaatschap en contributie</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={aboutclasses.paragraph}>
                        <Paper className={aboutclasses.paper} elevation={2} square >
                            <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar volwassene 1ste gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                25,00 €
                                            </TableCell>
                                            <TableCell>
                                                25,70 €
                                            </TableCell>
                                            <TableCell>
                                                3,50 €
                                            </TableCell>
                                            <TableCell align="right">
                                                54,25 €
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={aboutclasses.paragraph}>
                        <Paper className={aboutclasses.paper} elevation={2} square >
                            <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar tot en met 18 jaar (pony) 1ste gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                20,00 €
                                            </TableCell>
                                            <TableCell>
                                                25,75 €
                                            </TableCell>
                                            <TableCell>
                                                3,50 €
                                            </TableCell>
                                            <TableCell align="right">
                                                49,25 €
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={aboutclasses.paragraph}>
                        <Paper className={aboutclasses.paper} elevation={2} square >
                            <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar volwassene volgend gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                20,00 €
                                            </TableCell>
                                            <TableCell>
                                                25,75 €
                                            </TableCell>
                                            <TableCell>
                                                3,50 €
                                            </TableCell>
                                            <TableCell align="right">
                                                49,25 €
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    
                    <div className={aboutclasses.paragraph}>
                        <Paper className={aboutclasses.paper} elevation={2} square >
                            <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                                Donateurs
                            </Typography>
                            <Typography className={aboutclasses.text} gutterBottom variant="body1">
                                25,00 €  per jaar
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <Button variant="contained" size="large" onClick={()=> handleRoute('/members')}>Meer informatie</Button>
                </Grid>
            </Grid>
        </div>
        <div className={classes.homeWrapper} style={{marginTop:'80px'}}>
            <Grid justifyContent='center' item xs={3} container spacing={0} style={{marginBottom:'0px'}}>
                <Typography className={classes.homeHeader} variant="h2">Contact</Typography>
            </Grid>
            <Grid justifyContent='center' item container spacing={0}>
                <Grid item xs={12} md={11}>
                <div className={aboutclasses.paragraph}>
                            <Paper className={aboutclasses.paper} elevation={1} square>
                            <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                                Leden Contact
                            </Typography>
                                <Typography className={aboutclasses.text} gutterBottom variant="body1">
                                    <table>
                                        <tbody>
                                        <tr><td style={{width:'19%'}}><strong>Marije</strong></td><td><a href="mailto:secretaris.lrdedrentscheaa@gmail.com" >secretaris.lrdedrentscheaa@gmail.com</a></td></tr>
                                        <tr><td style={{width:'19%'}}><strong>Nancy</strong></td><td> <a href="mailto:info.lrdedrentscheaa@gmail.com">info.lrdedrentscheaa@gmail.com</a></td></tr>
                                        <tr><td style={{width:'19%'}}><strong>Rolf</strong></td><td> <a href="mailto:penningmeester.lrdedrentscheaa@gmail.com">penningmeester.lrdedrentscheaa@gmail.com</a></td></tr>
                                        <tr><td style={{width:'19%'}}><strong>Marcel</strong></td><td> <a href="mailto:info.lrdedrentscheaa@gmail.com">info.lrdedrentscheaa@gmail.com</a></td></tr>
                                        <tr><td style={{width:'19%'}}><strong>Miranda</strong></td><td><a href="mailto:info.lrdedrentscheaa@gmail.com"> info.lrdedrentscheaa@gmail.com</a></td></tr>
                                        <tr><td style={{width:'19%'}}><strong>Chantal</strong></td><td><a href="mailto:info.lrdedrentscheaa@gmail.com"> info.lrdedrentscheaa@gmail.com</a></td></tr>
                                        </tbody>
                                    </table>
                                </Typography>
                            </Paper>
                        </div>
                </Grid>
            </Grid>
            <Grid justifyContent='center' container>
                <Grid item xs={11}>
                    <iframe title="Address Google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.0391565968307!2d6.521129215824812!3d52.98369727990461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c824cd09a193b1%3A0xdb2a23baf4846d7b!2sBaggelhuizen%202%2C%209405%20VD%20Assen%2C%20Netherlands!5e0!3m2!1sen!2s!4v1632320353829!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>  
                </Grid>   
            </Grid>
        </div>
        </div>
    )
}

export default Home;