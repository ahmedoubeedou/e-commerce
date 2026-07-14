export function reducer(stateMaintenance , {type,payload})
{
switch(type)
{
case "getAll":
    {
   return payload.response;
}
default:{
    return   new Error("type n'existe pas "+type);
    
}
}
}