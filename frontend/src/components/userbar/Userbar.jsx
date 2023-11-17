import './userbar.css'
import  user from '../../assets/user.svg'
import toast from 'react-hot-toast'
import React,{ useRef} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useGlobalContextHook } from '../../hook/useGlobalContextHook'
import { MdNotificationsNone }from 'react-icons/md'
import { Badge } from 'primereact/badge'
import { Menu } from 'primereact/menu'
import { Avatar } from 'primereact/avatar'



function Userbar({title}) {
  const popoverRef = useRef(null)
  const navigate = useNavigate()
  const { currentUser, dispatch, isEnglish } = useGlobalContextHook()

  let menuItems = [
    {
     items:[
        { 
        command: () => { },
        template: (item, options) => {
            return (
                <button onClick={(e) => options.onClick(e)} className={(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                    <Avatar image={user} className="mr-2" shape="circle" />
                    <div className="flex flex-column align">
                        <span className="font-bold">John doe</span>
                        <span className="text-sm">Staff</span>
                    </div>
                </button>
            )
           }},
         { label: isEnglish ? "Profile" : "Akaunti", icon: 'pi pi-user', command:()=> navigate('/profile')
         },
         { label: "Kiswahili", icon: 'pi pi-language',
           command:()=>  dispatch({ type:'set_language', payload: isEnglish ? false : true })
         },
         { separator: true},
         { label: isEnglish ? "Logout": "Ondoka", icon: 'pi pi-sign-out',
          command:()=> logout()
         },

     ]
    }
  ]
  

  return (
    <div className="top-bar-wrapper">
    <h3 style={{ padding: '20px 15px 15px 30px' }}>{title}</h3>
    <div className='far-container' id="far-container">
        <div className='badge-box'>
         </div>
           <div className='user-circle' id='touchable' onClick={(e) => popoverRef.current.toggle(e)}>
                <img src={user} loading="lazy" className='user-small-profile-photo' />
             </div>
             <Menu model={menuItems}  popup ref={popoverRef} id="popup_menu_right" popupAlignment="right" />
        </div>
    </div>
  )
}

export default Userbar