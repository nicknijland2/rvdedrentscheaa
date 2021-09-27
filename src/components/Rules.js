import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles } from "../styles/overRides";
import { Button, Grid, Typography,Paper } from "@material-ui/core";
const Rules = (props) => {
    console.log("Rules Loaded");
    const generics = useGenericWrapper()
    const classes = useAboutStyles();

    const openPdf = (file) =>{
        //window.location.href = file;
        var link = document.createElement('a');
        link.href = file;
        link.download = 'REGLEMENT.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    return (
        <div className={generics.root}>
          <Grid container spacing={4}>
              <Grid item xs={12}>
                  <Header title={`Reglement`} />
              </Grid>
              <Grid item xs={12}>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                            Via deze link vind je het reglement dat van toepassing is op je lidmaatschap. Voor vragen hierover kun je contact opnemen met de voorzitter, Nancy Bootsman. 
                           </Typography> 
                           <Typography className={classes.text} variant='body1' >
                           Wil je een afschrift van de statuten ontvangen, stuur dan een mail naar de secretaris, Marije de Vries. 
                           </Typography> 

                           <Button style={{marginTop:'20px'}} variant="contained" size="large" onClick={()=> openPdf('/download.pdf')}>Herunterladen Regelementen</Button>
                        </Paper>
                  </div>
             </Grid>      
          </Grid>
    </div>
    )
}

export default Rules;