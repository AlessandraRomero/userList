import { Alien, Users } from "phosphor-react";
import {CardUser} from "./components/CardUser/"
import {Header} from "./components/Header"

import './global.css'
function App() {
  let users = [
    {
      img:'https://randomuser.me/api/portraits/women/66.jpg',
      name:'Cassandra Wilson',
      id:1
    },
    {
      img:'https://randomuser.me/api/portraits/men/20.jpg',
      name:'Henry Dean',
      id:2
    },
    {
      img:'https://randomuser.me/api/portraits/women/29.jpg',
      name:'Nina Freeman',
      id:3
    }
  ]
  const logo = <Users size={60} color="#f5f5f5" weight="duotone" />
  return (
    <div className="App">
      <Header title="Lista de Usuários" logo={logo}/>
      {
       users.map(user=><CardUser key={user.id} user={user} textButton="Ver Perfil" />)
      }
       
    </div>
  )
}

export default App
