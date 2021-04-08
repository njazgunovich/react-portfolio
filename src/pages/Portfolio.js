import {Grid} from "semantic-ui-react"
import Project from "../components/Project"
import WeatherScreen from "../Images/weatherScreen.png"
import BostonEats from "../Images/boston-eats-project.png"
import Employee from "../Images/employy.png"
import Burger from "../Images/burger.png"
import Notetaker from "../Images/notetaker.png"
import Workday from "../Images/workday.gif"
export default function Portfolio(){
    return (
    <Grid>
        <Grid.Column width = {8}>
          <div>portfolio</div>
          <Project title="Weaher app" imgSrc={WeatherScreen}/>
          <Project title="Boston Eats" imgSrc={BostonEats}/>
          <Project title="Employee" imgSrc={Employee}/>
          <Project title="Burger" imgSrc={Burger}/>
          <Project title="Notetaker" imgSrc={Notetaker}/>
          <Project title="Workday" imgSrc={Workday}/>
    

    
        </Grid.Column>
    </Grid> 

    )
}