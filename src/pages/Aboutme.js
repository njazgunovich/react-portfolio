import {Grid, Image} from "semantic-ui-react"
import Profile from "../Personel-Shot.png"

export default function AboutMe(){
    return (
    <Grid>
        <Grid.Column width = {8}>
            <Image src= {Profile} circular size="large"></Image>
        </Grid.Column>
    </Grid> 

    )
}