import {  BiIdCard} from "react-icons/bi"
import { FiUser,FiUsers } from "react-icons/fi"
import { BsGraphDownArrow, BsGrid, BsShop, BsJournalCheck } from "react-icons/bs"
import { TbSpeakerphone,TbReport } from "react-icons/tb"
import { LiaUserTieSolid } from "react-icons/lia"
import { GiTakeMyMoney } from "react-icons/gi"
import { MdOutlineInventory2, MdOutlineLocalLaundryService, MdOutlineDryCleaning } from "react-icons/md"
import { PiCurrencyDollar, PiFilePdf, PiTShirt } from "react-icons/pi"
import { useGlobalContextHook } from "../../hook/useGlobalContextHook"


export const useMenuList =()=> {
    const { isEnglish } = useGlobalContextHook()

    const menulist   =  {
        admin:{
        role:"super admin",
        role_id: 1,
        menu:[
            {
                name:'Campaign',
                path:"/campaign",
                icon:TbSpeakerphone
            },
            {
                name:'Reports',
                path:"/reports",
                icon:BsGraphDownArrow
            },
            {
                name:'Profile',
                path:"/profile/2",
                icon:FiUser
            },
            {
                name:'space',
                path:'null',
                icon:null
            },
            {
                name: isEnglish ? 'Orders': 'Oda',
                path:'/orders',
                icon:MdOutlineLocalLaundryService
            },
            {
                name: isEnglish ? 'Sales': 'Mauzo',
                path:'/sales',
                icon:PiCurrencyDollar
            },
            {
                name: isEnglish ? 'Report': 'Ripoti',
                path:'/report',
                icon:PiFilePdf
            },
        ]
    },
    manager:{
        role:'user',
        role_id: 2,
        menu:[
                        {
                name:'Campaign',
                path:"/campaign",
                icon:TbSpeakerphone
            },
            {
                name:'Reports',
                path:"/reports",
                icon:BsGraphDownArrow
            },
            {
                name:'Profile',
                path:"/profile/2",
                icon:FiUser
            },
            {
                name:'space',
                path:'null',
                icon:null
            },
            {
                name: isEnglish ? 'Orders': 'Oda',
                path:'/orders',
                icon:MdOutlineLocalLaundryService
            },
            {
                name: isEnglish ? 'Sales': 'Mauzo',
                path:'/sales',
                icon:PiCurrencyDollar
            },
            {
                name: isEnglish ? 'Report': 'Ripoti',
                path:'/report',
                icon:PiFilePdf
            },
        ]
    },
    staff:{
        role:'staff',
        role_id: 3,
        menu:[
                        {
                name:'Campaign',
                path:"/campaign",
                icon:TbSpeakerphone
            },
            {
                name:'Reports',
                path:"/reports",
                icon:BsGraphDownArrow
            },
            {
                name:'Profile',
                path:"/profile/2",
                icon:FiUser
            },
            {
                name:'space',
                path:'null',
                icon:null
            },
            {
                name: isEnglish ? 'Orders': 'Oda',
                path:'/orders',
                icon:MdOutlineLocalLaundryService
            },
            {
                name: isEnglish ? 'Sales': 'Mauzo',
                path:'/sales',
                icon:PiCurrencyDollar
            },
            {
                name: isEnglish ? 'Report': 'Ripoti',
                path:'/report',
                icon:PiFilePdf
            },
        ]
    },
  }
    return {
        menulist
    }
}