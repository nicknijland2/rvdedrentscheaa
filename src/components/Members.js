import Header from "./common/Header";
import { useGenericWrapper, useAboutStyles, useTableStyles } from "../styles/overRides";
import { Grid, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
const Members = () => {
    console.log("Members Loaded")
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    const tableClasses = useTableStyles();
    return (
        <div className={generics.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Header title={`Lidmaatschap en contributie`} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
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
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
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
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
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
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar tot en met 18 jaar (pony) volgend gezinslid
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
                                                15,00 €
                                            </TableCell>
                                            <TableCell>
                                                25,75 €
                                            </TableCell>
                                            <TableCell>
                                                3,50 €
                                            </TableCell>
                                            <TableCell align="right">
                                                44,25 €
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Donateurs
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                                25,00 €  per jaar
                            </Typography>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lessen
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                                € 120,00 per kwartaal voor 1x per week les in kleine groepen.
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            De lessen gaan het gehele jaar door met uitzonderlijk van 4 weken vakantie (1 week kerstvakantie en 3 weken zomervakantie).
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            De opzegtermijn van de lessen bedraagt 1 volledig kwartaal. Voorbeeld: wordt in februari opgezegd, dan worden de lessen en betaling stopgezet per 1 juli.
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                                De contributie en overige lidmaatschapskosten worden geïncasseerd via automatische incasso.
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                                Bij de bedragen het € voor het bedrag neerzetten en niet erna
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Members;