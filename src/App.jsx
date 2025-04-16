import Footer from "./components/footer";
import Header from "./components/header";
import Movie from "./components/movie";


export default function App(){

  const movies = [
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg"
    },
    {
      title: "Star Wars: A New Hope",
      image: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
    },
    {
      title: "Back to the Future",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg"
    },
    {
      title: "Cast Away",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Cast_Away_poster.jpg"
    },
    {
      title: "Citizen Kane",
      image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Citizenkane.jpg"
    },
    {
      title: "Thor",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg"
    },
    {
      title: "Willy Wonka & the Chocolate Factory",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Willy_Wonka_%26_the_Chocolate_Factory.jpg"
    },
    {
      title: "Inception",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg"
    },
    {
      title: "The Maltese Falcon",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Maltese-Falcon-Falcon.jpg"
    }
  ];
  


  return(
    <div>
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        {
          movies.map(items=>
            <Movie item={items} key={items.title}/>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}