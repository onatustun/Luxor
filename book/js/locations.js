$(document).ready(function () {
    const locationInput = $('.location-input')
    const fromInput = $('input[name="from-location"]')
    const toInput = $('input[name="to-location"]')
    const fromLabel = fromInput.siblings('.location-label')
    const toLabel = toInput.siblings('.location-label')

    function resetLabel(label) {
        label.css({
            'font-size': '',
            'top': '',
            'opacity': ''
        })
    }

    function locationInsideClick() {
        locationInput.click(function () {
            const label = $(this).siblings('.location-label')
            const inputValue = $(this).val()

            const previousInput = $('.location-input').not(this).filter(function () {
                return $(this).val() === ''
            })
            previousInput.siblings('.location-label').each(function () {
                resetLabel($(this))
            })

            label.css({
                'font-size': '0.8rem',
                'top': '0.2rem',
                'opacity': '0.5'
            })
        })
    }

    function locationOutsideClick() {
        $(document).click(function (locationClick) {
            const locationTarget = $(locationClick.target)

            if (!locationTarget.is('.location-input') && !locationTarget.is('.location-label')) {
                if (fromInput.val() === '' && toInput.val() === '') {
                    $('.location-label').each(function () {
                        resetLabel($(this))
                    })
                } else {
                    if (fromInput.val() === '') {
                        resetLabel(fromLabel)
                    }
                    if (toInput.val() === '') {
                        resetLabel(toLabel)
                    }
                }
            }
        })
    }

    let rotationCount = 0

    $('#switch').click(function () {
        const fromValue = fromInput.val()
        const toValue = toInput.val()

        fromInput.fadeTo(150, 0);
        toInput.fadeTo(150, 0, function () {
            fromInput.val(toValue).fadeTo(150, 1);
            toInput.val(fromValue).fadeTo(150, 1);
        });

        if (fromInput.val() !== '') {
            fromLabel.css({
                'font-size': '0.8rem',
                'top': '0.2rem',
                'opacity': '0.5'
            })
        }

        if (toInput.val() !== '') {
            toLabel.css({
                'font-size': '0.8rem',
                'top': '0.2rem',
                'opacity': '0.5'
            })
        }

        rotationCount += 180
        $(this).css('transform', 'rotate(' + rotationCount + 'deg)')
    })

    locationInsideClick()
    locationOutsideClick()
})