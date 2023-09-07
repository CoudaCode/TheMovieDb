const ApiKey = "api_key=6b6342d98c3af7838cc4b3f723a531bc"
const BASE_URL = "https://api.themoviedb.org/3"
const API_URL =`${BASE_URL}/discover/movie?sort_by=popularity.desc&${ApiKey}`

const searchUrl = `${BASE_URL}/search/movie?${ApiKey}`

content = document.querySelector('.content')
container = document.querySelector('.container')

Divsearch =document.getElementById('form')
search = document.getElementById('search')
   let  movies = []
const ImgUrl = "https://image.tmdb.org/t/p/w500"

recupApi(API_URL)

function recupApi(Url) {
   
   for (let i = 1; i <=5; i++) {
       fetch(`${Url}&page=${i}`)
       .then(response => response.json())
       .then((data)=> {
           console.log(data.results)
           movies.push(data.results)
           AfficheIme(data.results)
           console.log(movies);
       })

   }
}

function AfficheIme(imge) {
        imge.forEach(ele => {

               let {title, poster_path, vote_average} = ele
               
               let mov = `<div class="content-item">
               <div class="movieImg">
                   <img width="100%" height="100%" src="${ImgUrl+poster_path}" alt="${title}">
               </div>
               <div class="movieTile">
               <p>${title}</p>
               <span class="${getColor(vote_average)}">${vote_average}</span>
               </div>
           </div>`
            content.innerHTML += mov
        })

}


function getColor(color){
        if (color >=8) {
                return 'green'
        } else if (color >=5) {
            return "orange"
        }else{
            return "red"
        }   
}


Divsearch.addEventListener('submit', function(e){
   e.preventDefault()
   const searThe = search.value;
   if(searThe){
       recupApi(`${searchUrl}&query=${searThe}`)      
   }else{
       recupApi(API_URL)    
   }
})



content.addEventListener('scroll', function(e){
   // console.log(document.documentElement)
    console.log(e.currentTarget.scrollTop)
    let scrollTop = e.currentTarget.scrollTop;
    let scrollHeight = e.currentTarget.scrollHeight;
    let clientHeight = e.currentTarget.clientHeight;
    let clientWidth = e.currentTarget.clientWidth;
    console.log('result',e.currentTarget.scrollTop + e.currentTarget.clientHeight)
    console.log('scrollHeight :',e.currentTarget.scrollHeight,'scrollTop :',e.currentTarget.scrollTop,'ClientHeight', e.currentTarget.clientHeight,'ClientWidth', e.currentTarget.clientWidth)
   
   // if(e.currentTarget.clientHeight + e.currentTarget.scrollTop >= e.currentTarget.clientHeight ) {
   //   count = count == tabElement.length -1 ? 0 : count+1
   //   console.log(count)
   //   container.textContent += tabElement[count]
   // }
   console.log(e);
 })