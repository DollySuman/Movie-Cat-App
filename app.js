// const movies = ["Frozen2","Toy Story 3","Iron Man 2"]
const movies = [{
    name: "Frozen 2",
    desc: "About Frozen 2",
    img: "https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg"
},

{
    name: "Barbie",
    desc: "A great movie",
    img: "https://images-cdn.ubuy.co.in/660f9e73afccd7049644a2bc-poster-2023-movie-posters-prints-bedroom.jpg"
},

{
    name: "Zootopia",
    desc: "A movie for kids",
    img: "https://m.media-amazon.com/images/I/71hWkxTBHRL.jpg"
}


]

const title = () =>{
    movies.forEach(movie =>{

        
        
        document.querySelector(".head").innerHTML += `<div class="card">
        <div class="moviename">
        <h1>${movie.name}</h1>
        <p>
        ${movie.desc}
        </p>
        </div>
        
        <div class="image">
        <img  src=${movie.img} alt="poster">
        </div>
        </div>`
        })
    }

    title();

    console.log(movies)


    //Dynamically add karna seekh gyi ab you have to learn how to handle apis