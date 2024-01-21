const arrow=document.querySelectorAll('.arrow1')
const arrowLeft=document.querySelectorAll('.arrow2')
const movieItems=document.querySelectorAll('.movie-wrapper')
const home=document.querySelector('.home')
const homeContainer=document.querySelector('.content-container')
const ball=document.querySelector('.ball')
const toggles=document.querySelectorAll('.sidebar,.navbar,.ball, .sidebarlist,.mode,.movie-list-heading')
const searchImg=document.querySelector('.search-img')
const popText=document.querySelector('.popularity-text')
const searchTitle=document.querySelector('.og-title')
const searchBtn=document.querySelector('.search-btn')
const search=document.querySelector('.movie-name')
const date1=document.querySelector('.date-of-release')
const adult=document.querySelector('.adult')
const searchIcom=document.querySelector('.search-icon')
const searchContainer=document.querySelector('.search-movie')
const modalClose=document.querySelector('.modal-close')

// console.log(arrow);
let clickCounter=0
arrow.forEach((element,i) => {
    const length=movieItems[i].querySelectorAll('.movie-items').length;
    element.addEventListener('click',function(){
       
        clickCounter++
const ratio=Math.floor(window.innerWidth/270)-1

        if(length-(4+clickCounter) + (4-ratio)>=0){
            // console.log(clickCounter);
            movieItems[i].style.transform=`translateX(${movieItems[i].computedStyleMap().get('transform')[0].x.value-320}px)`
            // clickCounter++
            console.log('ratio:' + ratio);
            // console.log(movieItems[i].computedStyleMap().get('transform')[0].x.value-270);
            // console.log(movieItems[i].style.transform=`translateX(${movieItems[i].computedStyleMap().get('transform')[0].x.value-300}px)`);
            
        }
        else{
            movieItems[i].style.transform='translateX(0)'
            clickCounter=0;
        }
   
     
    })
    // console.log(movieItems);
});


arrowLeft.forEach((element,i) => {
    
    element.addEventListener('click',function(){
        if(movieItems[i].computedStyleMap().get('transform')[0].x.value<-100){
            movieItems[i].style.transform=`translateX(${movieItems[i].computedStyleMap().get('transform')[0].x.value+300}px)`
            console.log(movieItems[i].computedStyleMap().get('transform')[0].x.value);
            console.log(movieItems[i].computedStyleMap().get('transform')[0].x.value+300);
         
            // clickLeft--
        }

   

      
    
    //   console.log(movieItems[i]);
    })
    
});




// console.log(toggles);


ball.addEventListener('click',function(){
toggles.forEach(el=>{
    el.classList.toggle('active')
})
})


// clip.addEventListener('mouseover',function(){
//     clip.play()

//     // clip.style.display='block'
// })

// clip.addEventListener('mouseout',function(){
//     clip.pause()
// })



searchBtn.addEventListener('click',function(){
    
    document.querySelector('.modal').style.display='block'
    document.querySelector('.modal').style.opacity='0.9'
    if(search.value==='') return alert('Please Give A Movie')
   
    const abc=async function(movie){
        movie=search.value;
        const res=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=290942fa03ebe9748fbaaed32e31d1a1`)
        const data =await res.json()
        console.log(data);


    searchImg.src=`http://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;

    document.querySelector('.search-movie-poster').style.background=`url(http://image.tmdb.org/t/p/w500/${data.results[0].backdrop_path}) no-repeat`
    document.querySelector('.search-movie-poster').style.backgroundRepeat='none'
 
    // document.querySelector('.modal').style.z='0.9'

    document.querySelector('.search-container').style.display='none'
    document.querySelector('.modal').style.transform='scale(1)'

    document.querySelector('.desrow').textContent=data.results[0].overview;
    popText.textContent=`${data.results[0].popularity} views per day`
    searchTitle.textContent=data.results[0].original_title;
    date1.textContent=data.results[0].release_date
    const rating=data.results[0].adult?'18+' : '18-'
        adult.textContent=rating

       searchContainer.scrollIntoView({behavior:'smooth'})

    }

    
    
    abc()
})


searchIcom.addEventListener('click',function(){
    searchContainer.scrollIntoView({behavior:'smooth'})
})
// const abc=async function(){
//     // movie=search.value;
//     const res=await fetch(`https://api.themoviedb.org/3/search/movie?query=her&api_key=290942fa03ebe9748fbaaed32e31d1a1`)
//     const data =await res.json()
//     console.log(data.results);

//     searchImg.src=`http://image.tmdb.org/t/p/w500/${data.results[0].backdrop_path}`;

// }



// abc()
// let prom=function (){
//     fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=290942fa03ebe9748fbaaed32e31d1a1').then(res=>
//     res.json()).then(data=>{
//         console.log(data);
//     })
// }
// prom()



modalClose.addEventListener('click',function(){

    document.querySelector('.search-container').style.display='flex'
    document.querySelector('.modal').style.display='none'
    document.querySelector('.modal').style.opacity='0'
    search.value=''
    document.querySelector('.modal').style.transform='scale(0)'
    
})



home.addEventListener('click', function(){
homeContainer.scrollIntoView({behavior:'smooth'})
})