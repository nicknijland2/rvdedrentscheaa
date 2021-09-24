import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles } from "../styles/overRides";
import { Grid, Typography,Paper } from "@material-ui/core";
const Lessons = () => {
    console.log("Lessons Loaded");
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    return (
        <div className={generics.root}>
          <Grid container spacing={4}>
              <Grid item xs={12}>
                  <Header title={`Lessen en lesindeling`} />
              </Grid>
              <Grid item xs={12}>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                              De verenigingslessen worden op donderdagavond gehouden in de professionele accommodatie Sunrise Stables te Assen. 
                           </Typography> 
                            <Typography className={classes.text} variant='body1'>
                               Uiteraard is deze accommodatie in het bezit van het veiligheidscertificaat. 
                               De ponylessen worden gegeven door Miranda Trip. De lessen voor volwassen worden gegeven door Menno Waninge.
                            </Typography>
                        </Paper>
                  </div>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                          <Typography className={classes.lessonHeader} gutterBottom variant="h4">
                             Pony’s
                          </Typography>
                            <Typography className={classes.text} variant='body1' >
                               Donderdag: 18:30 - 19:30  
                           </Typography> 
                        </Paper>
                  </div>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                          <Typography className={classes.lessonHeader} gutterBottom variant="h4">
                             Paarden
                          </Typography>
                            <Typography className={classes.text} variant='body1' >
                               Donderdag: 18:30 - 19:30  
                           </Typography> 
                           <Typography className={classes.text} variant='body1' >
                               Donderdag: 19:30 - 20:30  
                           </Typography> 
                           <Typography>
                           Bij inschrijving wordt eenmalig een bedrag van € 2,50 in rekening
                            gebracht. Word je lid van onze vereniging dan ontvang je een sjabrak met
                            verenigingslogo als ontvangstcadeau (eruit halen) Het wordt bijzonder
                            gewaardeerd als dit sjabrak door leden wordt gebruikt bij wedstrijden en
                            clubactiviteiten. Deze rode zin moet eruit (onze sponsor heeft zich teruggetrokken). 
                           </Typography>
                        </Paper>
                  </div>
             </Grid>      
          </Grid>
    </div>
    )
}

export default Lessons;