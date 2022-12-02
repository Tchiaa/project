const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
        <img src="img/sss.svg.png" class="logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search product">
                <button class="search-btn">search </button>
                </div>
                <a href="#"> <img src="img/bagg.png" alt=''></a>
                <a href="#">  <img src="img/user.png" alt=""> </a>
        </div>
        </div>
        
        <ul class="links-containet">
            <li class="link-item"> <a href="index.html" class="link">home</a></li>
            <li class="link-item"> <a href="index.html" class="link">women</a></li>
            <li class="link-item"> <a href="index.html" class="link">men</a></li>
            <li class="link-item"> <a href="index.html" class="link">kids</a></li>
            <li class="link-item"> <a href="index.html" class="link">accessories</a></li>
        </ul>
`;
}
createNav();