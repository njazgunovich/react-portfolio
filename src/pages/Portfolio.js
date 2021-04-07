import {Grid} from "semantic-ui-react"
import Project from "../components/Project"
import WeatherScreen from "../Images/weatherScreen.png"
export default function Portfolio(){
    return (
    <Grid>
        <Grid.Column width = {8}>
          <div>portfolio</div>
          <Project title="Weaher app" imgSrc={WeatherScreen}/>
          <Project/>
        </Grid.Column>
    </Grid> 

    )
}