$(document).ready(function () {
    const accountCheckerOptions = {
        alreadyHaveAccount: 'Already have an account',
        noAccount: 'Don’t have an account'
    }

    const userRedirectOptions = {
        login: 'Login',
        signUp: 'Sign Up'
    }

    $('#account-checker').html(`${accountCheckerOptions.alreadyHaveAccount}?`)
    $('#user-redirect').html(userRedirectOptions.login)
    $('#user-submit').html(userRedirectOptions.signUp)

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
})