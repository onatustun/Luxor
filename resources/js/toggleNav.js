$(document).ready(function () {
    const pages = $('.page')
    const pageButtons = $('.page-button')
    const navIcons = $('.nav-icons')

    let activePage = 0
    pageButtons.first().css('color', 'var(--bright-blue)')
    pageButtons.first().find('.nav-icons').css('fill', 'var(--bright-blue)')

    function switchPage(oldPage, newPage) {
        pages.eq(oldPage).fadeOut(175, function () {
            pages.eq(newPage).fadeIn(200).css('display', 'flex')
        })
    }

    $('#buybuy').click(function () {
        const secondPageIndex = 1
        if (activePage !== secondPageIndex) {
            switchPage(activePage, secondPageIndex)
            activePage = secondPageIndex
            navIcons.css('fill', '')
            pageButtons.css('color', '')
            pageButtons.eq(secondPageIndex).find(navIcons).css('fill', 'var(--bright-blue)')
            pageButtons.eq(secondPageIndex).css('color', 'var(--bright-blue)')
        }
    })

    pageButtons.click(function () {
        const newPage = $(this).data('page-index')
        $('.quantity-changer').removeClass('quantity-click')
        if (activePage !== newPage) {
            navIcons.css('fill', '')
            pageButtons.css('color', '')

            $(this).find(navIcons).css('fill', 'var(--bright-blue)')
            $(this).css('color', 'var(--bright-blue)')

            switchPage(activePage, newPage)
            activePage = newPage
        }
    })
})