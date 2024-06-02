$(document).ready(function () {
    const selectedPositions = {
        1: '0%',
        2: 'calc(100% / 3)',
        3: 'calc(100% * 2 / 3)'
    }

    const quantityTypes = {
        passengers: 'Passengers',
        weight: 'Weight(kg)'
    }

    const transportButton = $('.transport-button')
    const highlightedTransport = $('#highlighted-transport')
    const activeQuantity = $('#quantity')

    let quantity = 1
    let selectedQuantity = quantityTypes.passengers

    $('#selected-quantity').html(selectedQuantity + '&nbsp')

    transportButton.first().css('color', 'var(--white)')
    highlightedTransport.css('left', selectedPositions[1])

    transportButton.click(function () {
        const selectedIndex = $(this).data('transport-index')
        const transportPosition = selectedPositions[selectedIndex]
        const isCargo = selectedIndex === 3

        quantity = 1
        updateQuantityCount()

        if (transportPosition !== undefined) {
            transportButton.css('color', '')
            $(this).css('color', 'var(--white)')
            highlightedTransport.css('left', transportPosition)
        }

        selectedQuantity = isCargo ? quantityTypes.weight : quantityTypes.passengers
        $('#selected-route').toggle(!isCargo)
        $('#locations').css('margin-top', isCargo ? '0' : '')
        $('#departure-return').html(isCargo ? 'Departure' : 'Departure - Return')
        $('#quantity-numbers').css('top', isCargo ? '18rem' : '22rem')
        $('#selected-quantity').html(selectedQuantity + '&nbsp')
    })

    function updateQuantityCount() {
        $('#quantity-value').html(quantity)
    }

    updateQuantityCount()

    $('#sub').click(function () {
        if (quantity > 1) {
            quantity--
            updateQuantityCount()
        }
    })

    $('#add').click(function () {
        if (selectedQuantity === quantityTypes.passengers && quantity >= 8) {
            return
        }
        quantity++
        updateQuantityCount()
    })

    $('.submit-buttons').click(function (event) {
        event.preventDefault()
        var quantityInput = $('#enter-quantity').val()
        if ($(event.target).is('#done')) {
            if (quantityInput !== '' && !isNaN(quantityInput) && parseInt(quantityInput, 10) >= 1) {
                quantity = parseInt(quantityInput, 10)
                $('#quantity-blur-bg').fadeOut(300)
                updateQuantityCount()
            } else {
                alert('Please enter a valid number equal to or above 1.')
            }
        } else {
            $('#quantity-blur-bg').fadeOut(300)
        }
    })

    $('#departure-return').click(function () {
        $('#departure-return-bg').fadeIn(300).css('display', 'flex')
    })

    $('#hamburger-menu').click(function () {
        $('#departure-return-bg').fadeOut(300)
    })

    $('#quantity').click(function () {
        if (selectedQuantity === quantityTypes.weight) {
            $('#quantity-blur-bg').fadeIn(300).css('display', 'flex')
        }
    })

    $('.quantity-changer').click(function () {
        $('.quantity-changer').removeClass('quantity-click')
        void this.offsetWidth
        $(this).addClass('quantity-click')
    })
})