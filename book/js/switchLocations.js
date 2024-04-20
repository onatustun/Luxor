$(document).ready(function () {
    const fromInput = $('input[name="from-location"]')
    const toInput = $('input[name="to-location"]')

    let rotationCount = 90

    $('#switch').click(function () {
        const fromValue = fromInput.val()
        const toValue = toInput.val()

        fromInput.fadeTo(150, 0)
        toInput.fadeTo(150, 0, function () {
            fromInput.val(toValue).fadeTo(150, 1)
            toInput.val(fromValue).fadeTo(150, 1)
        })

        rotationCount += 180
        $(this).find('svg').css('transform', 'rotate(' + rotationCount + 'deg)')
    })
})