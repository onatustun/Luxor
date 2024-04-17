$(document).ready(function () {
    setTimeout(function () {
        $('#loading-form').fadeIn(400).css('display', 'flex')
    }, 1600)

    setTimeout(function () {
        $('#loading-logo').css({
            'height': '4rem',
            'top': '5%',
            'opacity': '100%'
        })
    }, 1500)
    
    $('#loading-submit').click(function () {
        $('#loading-screen').fadeOut(400)
    })
})