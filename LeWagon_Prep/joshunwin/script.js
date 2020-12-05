window.addEventListener('scroll', () =>  {
    const scroll = this.scrollY;
    console.log(scroll);
    if (scroll < 100) {
        document.getElementsByClassName("header")[0].style.background = '';
    }
    else {
    document.getElementsByClassName("header")[0].style.animation = 'fade 1s';
    document.getElementsByClassName("header")[0].style.background = 'linear-gradient(150deg, rgba(227,26,55,1) 0%, rgba(227,25,99,1) 100%)';
    };
})