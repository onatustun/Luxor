$(document).ready(function () {
    const pages = $('.page')
    let activePage = 0

    function switchPage(oldPage, newPage) {
        pages.eq(oldPage).fadeOut(175, function () {
            pages.eq(newPage).fadeIn(200).css('display', 'flex')
        })
    }

    $('.page-button').click(function () {
        const newPage = $(this).data('page-index')
        if (activePage !== newPage) {
            switchPage(activePage, newPage)
            activePage = newPage
        }
    })
})