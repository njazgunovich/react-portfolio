import {useState} from 'react'
import { Menu, Segment,Header,Icon} from 'semantic-ui-react'
import {useHistory} from "react-router-dom" 
export default function NavBar () {
 const history=useHistory()
const [activeItem,setActiveItem]= useState("About")
 const handleItemClick = (e, { name }) => {
   setActiveItem(name)
   if(name==="About"){
     history.push("/")
   } else if (name==="Contact"){
     history.push("/contact")
   } else if (name==="Portfolio"){
     history.push("/portfolio")
   }
   
 }


    return (
      <Segment inverted>
        <Menu inverted secondary>
            <Menu.Item>
                <Header as='h1' color='yellow' size ="massive">
                    NICHOLAS JAZGUNOVICH
                </Header>
        </Menu.Item>
        <Menu.Menu position ="right">
        <Menu.Item href="https://github.com/njazgunovich" target="blank">
           
            <Icon name="github" color="blue" size="big" link inverted></Icon>
            </Menu.Item>
            <Menu.Item href="https://www.linkedin.com/in/nicholas-jazgunovich-942a57b/" target="blank">
            <Icon name="linkedin" color="blue" size="big" link inverted></Icon>
            </Menu.Item>
           
        <Menu.Item
        style={{fontSize:"20px"}}
            name='About'
            active={activeItem === 'About'}
            onClick={handleItemClick}
          />
          <Menu.Item
            style={{fontSize:"20px"}}
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={handleItemClick}
          />
          <Menu.Item
            style={{fontSize:"20px"}}
            name='Portfolio'
            active={activeItem === 'Portfolio'}
            onClick={handleItemClick}
          />
        </Menu.Menu>

         
        </Menu>
      </Segment>
    )
  
}