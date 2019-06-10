var imgs = document.getElementsByClassName('img')

var button = document.getElementsByClassName('serach-button')[0]

button.onclick = function() {
    var search = document.getElementsByClassName('search-input')[0]

    // alert(search.value)

    if (search.value === '') {
        for(var i = 0; i< imgs.length; ++i) {
            imgs[i].style.display = 'inline-block' 
        } 
        return
    }
    for(var i = 0; i< imgs.length; ++i) {
        if (imgs[i].getElementsByClassName('desc')[0].innerHTML.indexOf(search.value) === -1) {
            imgs[i].style.display = 'none' 
        }
    }
}
