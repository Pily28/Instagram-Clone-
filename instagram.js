

 function likeButton() {
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if (heart.src.match("./assets/heart_red.png")) {
        heart.src = "./assets/heart_red.png";
        likes.innerHTML = "151 likes";
    } 
    else {
        heart.src = "./assets/heart_red.png"
        likes.innerHTML = "150 likes";
    }
}