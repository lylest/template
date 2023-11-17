import React, { useEffect, useState } from 'react'
import { Tag } from 'primereact/tag'
const StatusTemplate =({ item })=> {
    const [ status, setStatus ] = useState({ color: "#333", icon: ""})

function getStatus(item) {
  switch(item.status_id){
    case "Pending":
       return setStatus({ color: "#F3BB1B", icon: "pi pi-clock", name: "Pending", code: 1 });
    
    case "Sent":
       return setStatus({ color: "#B57BFF", icon: "pi pi-send", name: "Sent", code: 8 });

    case "Accepted":
       return setStatus({ color: "#0074A2", icon: "pi pi-thumbs-up", name: "Accepted", code: 9 });

    case "Delivered":
       return setStatus({ color: "#65A75D", icon: "pi pi-check", name: "Delivered", code: 10 });
       
    case "Rejected":
       return setStatus({ color: "#DD3333", icon: "pi pi-thumbs-down", name: "Rejected", code: 11 });

    case "Undelivered":
       return setStatus({ color: "#444", icon: "pi pi-hourglass", name: "Undelivered", code: 12 });

    case "Failed":
       return setStatus({ color: "#444", icon: "pi pi-times-circle", name: "Failed", code: 13 });

    case "Unsupported":
       return setStatus({ color: "#7CBBFF", icon: "pi pi-shield", name: "Unsupported", code: 14 });

    case "Error":
       return setStatus({ color: "#FF2A9C", icon: "pi pi-shield", name: "Error", code: 15 });

     default: 
       return setStatus({ color: "#666", icon: "pi pi-shield", name: "Unknown error" });
  }
}


    useEffect(()=>{
        getStatus(item)
    },[])
   //console.log(status)
    return (
      <Tag style={{background: status.color }} rounded value={status.name}
       icon={status.icon} />
    )
}

export default StatusTemplate
