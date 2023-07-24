import { TbSmartHome} from "react-icons/tb"
import { BiUser } from "react-icons/bi"

export const menulist = {
    user:{
        role:'user',
        role_id: 2,
        menu:[
            {
                name:'Home',
                path:'/',
                icon:TbSmartHome
            },
            {
                name:'Profile',
                path:'/profile',
                icon:BiUser
            },
        ]
    },
    admin:{
        role:"admin",
        role_id: 1,
        menu:[
            {
                name:'Home',
                path:'/',
                icon:TbSmartHome
            },
            {
                name:'Profile',
                path:'/profile',
                icon:BiUser
            },
        ]
    },
}