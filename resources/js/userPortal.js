$(document).ready(function () {
    const accountCheckerOptions = {
        alreadyHaveAccount: 'Already have an account',
        noAccount: 'Don’t have an account'
    }

    const userRedirectOptions = {
        login: 'Login',
        signUp: 'Sign Up'
    }

    function displayUserForm() {
        $('#page-loader').css('display','flex')

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
    }

    const sessionVisit = sessionStorage.getItem('visited');

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
    }

    $('#account-checker').html(`${accountCheckerOptions.alreadyHaveAccount}?`)
    $('#user-redirect').html(userRedirectOptions.login)
    $('#user-submit').html(userRedirectOptions.signUp)
})