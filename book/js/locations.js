$(document).ready(function () {
    const locationInput = $('.location-input')

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
            const fromInput = $('input[name="from-location"]')
            const toInput = $('input[name="to-location"]')
            const fromLabel = fromInput.siblings('.location-label')
            const toLabel = toInput.siblings('.location-label')

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

    locationInsideClick()
    locationOutsideClick()
})