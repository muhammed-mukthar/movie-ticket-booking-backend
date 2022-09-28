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
exports.display_movies=async(req,res)=>{
    
  let all_movies= await movies.find().sort({movie:1})
   
  
   res.status(200).json(all_movies)
}