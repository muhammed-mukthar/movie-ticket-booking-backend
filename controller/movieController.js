const movies=require('../model/movies')

exports.add_Movies=async(req,res)=>{
    try{
        let { movie_Name, genre_Name} =req.body;
        let new_movie=new movies({
            movie:movie_Name,
            genre:genre_Name
        })
        await new_movie.save()
        res.json('movie added successfully')

    }catch(err){
        res.json(err,'error happened while addding theatre')
    }
  
}
//passing query parameter and filtering according though movie name it out 
exports.display_movies=async(req,res)=>{

    let search='';
    if(req.query.search){
      search=req.query.search
    }
    console.log(search);
  let all_movies= await movies.find({$or:[
    {
    movie:{$regex:'.*'+search+'.*',$options:'i'} 
    }
  ]})
   
  
   res.status(200).json(all_movies)
}

exports.d