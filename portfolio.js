window.onscroll = function() {
    var top = window.scrollY;
    console.log(top)
    if(top>=1){
        let header = document.querySelector('.header_Information_Holder');
        header.style['background-color'] = 'rgb(49, 49, 49)'
        header.style['color'] = 'rgb(123, 251, 255)'
        header.style['border-bottom'] = '1px solid rgb(123, 251, 255)'
        header.style['box-shadow'] = '1px 1px 5px rgb(123, 251, 255)'
    }
    else if(top==0){
        let header = document.querySelector('.header_Information_Holder');
        header.style['background-color'] = 'transparent'
        header.style['color'] = 'white'
        header.style['border'] = '0px solid black'
        header.style['box-shadow'] = '0px 0px 0px black'
        
    }
    
}
