$(document).ready(function () {
    const transportButton = $('.transport-button')
    const highlightedTransport = $('#highlighted-transport')
    const selectedPositions = {
        1: '0%',
        2: 'calc(100% / 3)',
        3: 'calc(100% * 2 / 3)'
    }
    const quantityTypes = {
        passengers: 'Passengers',
        weight: 'Weight(KG)'
    }

    let selectedQuantity = quantityTypes.passengers
    $('#selected-quantity').html(selectedQuantity + '&nbsp;')

    transportButton.first().css('color', 'var(--white)')
    highlightedTransport.css('left', selectedPositions[1])

    transportButton.click(function () {
        const selectedIndex = $(this).data('transport-index')
        const transportPosition = selectedPositions[selectedIndex]

        if (transportPosition !== undefined) {
            transportButton.css('color', '')
            $(this).css('color', 'var(--white)')
            highlightedTransport.css('left', transportPosition)
        }

        if (selectedIndex === 3) {
            $('#selected-route').hide()
            $('#locations').css('margin-top', '0')
            $('#departure-return').html('Departure')
            selectedQuantity = quantityTypes.weight
        } else {
            $('#selected-route').show()
            $('#locations').css('margin-top', '')
            $('#departure-return').html('Departure - Return')
            selectedQuantity = quantityTypes.passengers
        }
        $('#selected-quantity').html(selectedQuantity + '&nbsp;')
    })
})