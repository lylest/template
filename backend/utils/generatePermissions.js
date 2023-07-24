const { modelsList  } = require("./modelsList")

function generatePermissions () {
    try {
        let permissions = [] 
         modelsList.map((model, index) =>{
             permissions.push({
                 id:index,
                 name:model,
                 list:['create', 'read', 'update', 'remove'] //if user has no permission this will be empty
             })
        })
        return permissions 
    } catch (err) {
        console.log(err)
    }
}

function generateOtherUserPermissions () {
    try {
        let permissions = [] 
         modelsList.map((model, index) =>{
             permissions.push({
                 id:index,
                 name:model,
                 list:[] //if user has no permission this will be empty
             })
        })
        return permissions 
    } catch (err) {
        console.log(err)
    }
}

module.exports = { generatePermissions, generateOtherUserPermissions } 