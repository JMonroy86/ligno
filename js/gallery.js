window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 20) nav.className = 'navbar navbar-expand-lg navbar-light bg-transparent'; else nav.className = 'scroll navbar navbar-expand-lg navbar-light';
  };


  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

let gImgs = document.querySelectorAll(".gImg");
gImgs.forEach((item) => {
  item.addEventListener("click", function(e){
    //alert(e.target.src);
    let modalImg = document.getElementById("img01");
    modalImg.src = e.target.src;
    modal.style.display = "block";
  })
});

