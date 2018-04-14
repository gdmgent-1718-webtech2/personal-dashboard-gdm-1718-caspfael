const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
const ghentWeather = 'http://api.openweathermap.org/data/2.5/weather?q=Ghent,BE&APPID=94bb7df9549b5cb44260ed13d2df12ba&units=metric';
fetch(ghentWeather, {
  method: 'GET', 
  headers: new Headers({
      'Accept': 'application/json',
  })
  })



getJSON(ghentWeather,function(error,data){
  document.getElementById("defaultWeather").innerHTML= data.name +'<br>'+ data.weather[0].description +'<br>'+ data.main.temp+' °C';
});

let input = document.getElementById('veld');
let weatherDivs = document.getElementById('weatherBox')

  button.addEventListener('click',function addCity(){
    const weather = 'http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=94bb7df9549b5cb44260ed13d2df12ba&units=metric'
    getJSON(weather, function(error,data){
       document.getElementById("defaultWeather").innerHTML= data.name +'<br>'+ data.weather[0].description +'<br>'+ data.main.temp+' °C';
    })
  })
const gifAPI= "https://api.giphy.com/v1/gifs/random?api_key=Hyh8h2gK77e56YA3itW1ACX0Szy1D0CD&tag=&rating=G"
fetch(gifAPI, {
  method: 'GET', 
  headers: new Headers({
      'Accept': 'application/json',
  })
  })
  getJSON(gifAPI, function(error,data){
    document.getElementById("gif").src = data.data.images.original.url;
 })

  const trumpAPI = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  fetch(trumpAPI, {
    method: 'GET', 
    headers: new Headers({
        'Accept': 'application/json',
    })
    })
    
getJSON(trumpAPI, function(error,data){
document.getElementById("trumpQuote").innerHTML = data.message;
})
//Hier kreeg ik een error bij de CORS, ik had hiervoor een extensie voor chrome gedownload en dan werkte het wel 
const catAPI = "https://cat-fact.herokuapp.com/facts/random"
  fetch(trumpAPI, {
    method: 'GET', 
    headers: new Headers({
        'Accept': 'application/json',
    })
    })
    getJSON(catAPI, function(error,data){
      document.getElementById("catFact").innerHTML = data.text;
      })












  const newsAPI = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7c85d91f05e143e29d1dde9491f4ee8a';
fetch(newsAPI, {
  method: 'GET', 
  headers: new Headers({
      'Accept': 'application/json',
  })
  })
// Ik wou dit eerst in een forloop steken zodat hij dit zou doen voor elk artikel in de array maar het lukte mij maar niet dus heb ik gewoon 10 divs manueel gemaakt.
  getJSON(newsAPI,function(error,data){
    
     document.getElementById("title0").innerHTML= data.articles[0].title;
     document.getElementById("article0").innerHTML= data.articles[0].description;
     document.getElementById("articleImage0").src=data.articles[0].urlToImage;
     document.getElementById("hlink0").innerHTML= data.articles[0].url;
     document.getElementById("date0").innerHTML= data.articles[0].publishedAt;
     document.getElementById("author0").innerHTML= data.articles[0].author;

     document.getElementById("title1").innerHTML= data.articles[1].title;
     document.getElementById("article1").innerHTML= data.articles[1].description;
     document.getElementById("articleImage1").src=data.articles[1].urlToImage;
     document.getElementById("hlink1").innerHTML= data.articles[1].url;
     document.getElementById("date1").innerHTML= data.articles[1].publishedAt;
     document.getElementById("author1").innerHTML= data.articles[1].author;
     
     document.getElementById("title2").innerHTML= data.articles[2].title;
     document.getElementById("article2").innerHTML= data.articles[2].description;
     document.getElementById("articleImage2").src=data.articles[2].urlToImage;
     document.getElementById("hlink2").innerHTML= data.articles[2].url;
     document.getElementById("date2").innerHTML= data.articles[2].publishedAt;
     document.getElementById("author2").innerHTML= data.articles[2].author;

     document.getElementById("title3").innerHTML= data.articles[3].title;
     document.getElementById("article3").innerHTML= data.articles[3].description;
     document.getElementById("articleImage3").src=data.articles[3].urlToImage;
     document.getElementById("hlink3").innerHTML= data.articles[3].url;
     document.getElementById("date3").innerHTML= data.articles[3].publishedAt;
     document.getElementById("author3").innerHTML= data.articles[3].author;
     
     document.getElementById("title4").innerHTML= data.articles[4].title;
     document.getElementById("article4").innerHTML= data.articles[4].description;
     document.getElementById("articleImage4").src=data.articles[4].urlToImage;
     document.getElementById("hlink4").innerHTML= data.articles[4].url;
     document.getElementById("date4").innerHTML= data.articles[4].publishedAt;
     document.getElementById("author4").innerHTML= data.articles[4].author;

     document.getElementById("title5").innerHTML= data.articles[5].title;
     document.getElementById("article5").innerHTML= data.articles[5].description;
     document.getElementById("articleImage5").src=data.articles[5].urlToImage;
     document.getElementById("hlink5").innerHTML= data.articles[5].url;
     document.getElementById("date5").innerHTML= data.articles[5].publishedAt;
     document.getElementById("author5").innerHTML= data.articles[5].author;

     document.getElementById("title6").innerHTML= data.articles[6].title;
     document.getElementById("article6").innerHTML= data.articles[6].description;
     document.getElementById("articleImage6").src=data.articles[6].urlToImage;
     document.getElementById("hlink6").innerHTML= data.articles[6].url;
     document.getElementById("date6").innerHTML= data.articles[6].publishedAt;
     document.getElementById("author6").innerHTML= data.articles[6].author;

     document.getElementById("title7").innerHTML= data.articles[7].title;
     document.getElementById("article7").innerHTML= data.articles[7].description;
     document.getElementById("articleImage7").src=data.articles[7].urlToImage;
     document.getElementById("hlink7").innerHTML= data.articles[7].url;
     document.getElementById("date7").innerHTML= data.articles[7].publishedAt;
     document.getElementById("author7").innerHTML= data.articles[7].author;

     document.getElementById("title8").innerHTML= data.articles[8].title;
     document.getElementById("article8").innerHTML= data.articles[8].description;
     document.getElementById("articleImage8").src=data.articles[8].urlToImage;
     document.getElementById("hlink8").innerHTML= data.articles[8].url;
     document.getElementById("date8").innerHTML= data.articles[8].publishedAt;
     document.getElementById("author8").innerHTML= data.articles[8].author;

     document.getElementById("title9").innerHTML= data.articles[9].title;
     document.getElementById("article9").innerHTML= data.articles[9].description;
     document.getElementById("articleImage9").src=data.articles[9].urlToImage;
     document.getElementById("hlink9").innerHTML= data.articles[9].url;
     document.getElementById("date9").innerHTML= data.articles[9].publishedAt;
     document.getElementById("author9").innerHTML= data.articles[9].author;
   });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
