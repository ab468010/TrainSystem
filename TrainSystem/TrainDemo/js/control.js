function toButtom() {
    speed = 2000;
    var windowHeight = parseInt(document.body.clientHeight);//整个页面的高度
    $('html,body').animate({ 'scrollTop': 100000 }, speed);
}