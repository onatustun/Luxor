$(document).ready(function () {
    const selectedPositions = {
        0: '0%',
        1: '50%'
    }

    const historyPages = $('.history-pages')
    const historyButton = $('.history-button')
    const highlightedHistory = $('#highlighted-history')

    let activeHistory = 0

    historyButton.first().css('color', 'var(--white)')
    highlightedHistory.css('left', selectedPositions[0])

    function switchPage(oldPage, selectedIndex) {
        historyPages.eq(activeHistory).fadeOut(175, function () {
            historyPages.eq(selectedIndex).fadeIn(200).css('display', 'block')
        })
    }

    historyButton.click(function () {
        const selectedIndex = $(this).data('history-index')
        const historyPosition = selectedPositions[selectedIndex]

        if (activeHistory !== selectedIndex) {
            historyButton.css('color', '')
            $(this).css('color', 'var(--white)')
            highlightedHistory.css('left', historyPosition)

            switchPage(activeHistory, selectedIndex)
            activeHistory = selectedIndex
        }
    })
})