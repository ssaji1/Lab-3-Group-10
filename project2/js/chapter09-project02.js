/* add code here */
window.addEventListener('load', function(){// creating event handler after loading window
    var featuredImg = document.querySelector('#featured img');
    var imageClick = document.querySelector('#thumbnails'); 
    imageClick.addEventListener("click", function () {
        //changing image size on clicking and showing their figure caprtion.
        var splited = event.target.src.split("images/small/");
        featuredImg.src = "images/medium/" + splited[1];
        featuredImg.title = event.target.title;
        featuredImg.alt = event.target.alt;
        var figuretitle = document.querySelector("#featured > figcaption")
        figuretitle.innerHTML = event.target.title;
    })
    
    //adding mouse hover and mouseout events.
   
    featuredImg.addEventListener("mouseover", function(event){
    var figuretitle = document.querySelector("#featured > figcaption");
    figuretitle.style.opacity = "75%";
    })

    featuredImg.addEventListener("mouseout", function(event){
    var figuretitle = document.querySelector("#featured > figcaption");
    figuretitle.style.opacity = "0%";
    })
})