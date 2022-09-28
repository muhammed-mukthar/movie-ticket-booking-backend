

const theaters=require('../model/theaters')

/* ------------------------------- add theatre ------------------------------ */

exports.add_Theatre=async(req,res)=>{
    try{
        let { theater, city,state} =req.body;
        let New_Theatre=new theaters({
            theater:theater,
            City:city,
            State:state
        })
        await New_Theatre.save()
        res.json('theatre added succesfully')
    }catch(err){
        res.json(err,'error happened while addding theatre')
    }
}


exports.display_theatre=async(req,res)=>{
    try{
        let search='';
        if(req.query.search){
          search=req.query.search
        }
        console.log(search);
      let all_theatre= await theaters.find({$or:[
        {
        theater:{$regex:'.*'+search+'.*',$options:'i'} 
        }
      ]})
      res.json(all_theatre,)
    }catch(err){
        res.status(500).json(err,'error happened at list theatres');
    }}