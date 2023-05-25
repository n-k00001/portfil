//Icon of navbar
function display(id, word) {
    document.getElementById(id).style.display = "none";
    document.getElementById(word).setAttribute("style", "display: block !important; left:0; ");
}

let navList = document.getElementsByClassName('nav-item');
/*navabar activation*/
window.onscroll = function () {

    navList.forEach(nav => {
        if(nav.firstChild.classList.contains('active'))
            nav.classList.add('active');
        else nav.classList.remove('active');
    });
}

// card project hover
function change(id){
    let card  = document.getElementById(id)
    card.style.backgroundImage = 'none'
    card.style.backgroundColor = "#60adec"
}
function discard(id){
    let card  = document.getElementById(id)
    card.style.backgroundImage = `url('./imgs/${id}.png')`
    card.style.backgroundColor = "#60adec"
}


