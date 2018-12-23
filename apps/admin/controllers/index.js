var apps=require("n-gnol");
module.exports={
    url:"",
    template:"index.html",
    actions:{
        get:(sender)=>{
            return new apps.view(sender,{});
        }
    }
}