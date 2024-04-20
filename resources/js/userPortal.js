$(document).ready(function () {
    const accountCheckerOptions = {
        alreadyHaveAccount: 'Already have an account',
        noAccount: 'Don’t have an account'
    }

    const userRedirectOptions = {
        login: 'Login',
        signUp: 'Sign Up'
    }

    let userToggle = false

    function displayUserForm() {
        $('#page-loader').css('display', 'flex')

        setTimeout(function () {
            $('#page-loader').css('background-image', 'url(/resources/css/css-media/user-portal-bg-blur.jpg)')
        }, 3999)

        setTimeout(function () {
            $('#user-form').fadeIn(300).css('display', 'flex')
        }, 1500)

        setTimeout(function () {
            $('#luxor-logo').fadeIn(105)
        }, 500)

        setTimeout(function () {
            $('#luxor-logo').css({
                'height': '3.5rem',
                'top': '5%',
                'fill': 'var(--bright-blue)'
            })
        }, 1500)

        setTimeout(function () {
            $('#page-content').show()
        }, 700)
    }

    const sessionVisit = sessionStorage.getItem('visited')

    if (!sessionVisit) {
        displayUserForm()
        sessionStorage.setItem('visited', 1)
    } else {
        $('#luxor-logo').css({
            'display': 'block',
            'height': '3.5rem',
            'top': '5%',
            'fill': 'var(--bright-blue)',
            'animation':'none'
        })

        $('#page-content').fadeIn(300)
    }

    $('#account-checker').html(`${accountCheckerOptions.alreadyHaveAccount}?`)
    $('#user-redirect').html(userRedirectOptions.login)
    $('#user-submit').html(userRedirectOptions.signUp)

    $('#user-redirect').click(function () {
        const accountCheckerHTML = userToggle ? accountCheckerOptions.noAccount : accountCheckerOptions.alreadyHaveAccount
        const redirectButtonHTML = userToggle ? userRedirectOptions.signUp : userRedirectOptions.login
        const submitButtonHTML = userToggle ? userRedirectOptions.login : userRedirectOptions.signUp

        $('#account-checker').fadeOut(150, function () {
            $(this).html(`${accountCheckerHTML}?`).fadeIn(150)
        })
        $('#user-redirect').fadeOut(150, function () {
            $(this).html(redirectButtonHTML).fadeIn(150)
        })
        $('#user-submit').fadeOut(150, function () {
            $(this).html(submitButtonHTML).fadeIn(150)
        })

        userToggle = !userToggle
    })

    $('#guest-option').click(function (){
        $('#page-loader').fadeOut(300)
    })

    $("#user-submit").click(function(event) {
        event.preventDefault()
        
        if ($("#user-form")[0].checkValidity()) {
            $('#page-loader').fadeOut(300)
        } else {
            $("#user-form")[0].reportValidity()
        }
    })
})