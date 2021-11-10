window.onscroll = function() {
    var top = window.scrollY;
    console.log(top)
    if(top>=1){
        let header = document.querySelector('.header_Information_Holder');
        header.style['background-color'] = 'white'
        header.style['color'] = 'black'
        header.style['border-bottom'] = '1px solid black'
        header.style['box-shadow'] = '1px 1px 5px black'
    }
    else if(top==0){
        let header = document.querySelector('.header_Information_Holder');
        header.style['background-color'] = 'transparent'
        header.style['color'] = 'white'
        header.style['border'] = '0px solid black'
        header.style['box-shadow'] = '0px 0px 0px black'
        
    }
    
}
