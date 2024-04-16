$(document).ready(function () {
    const selectedPositions = {
        1: '0%',
        2: 'calc(100% / 3)',
        3: 'calc(100% * 2 / 3)'
    }
    const quantityTypes = {
        passengers: 'Passengers',
        weight: 'Weight(KG)'
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
        if (selectedQuantity === quantityTypes.passengers && quantity >= 10) {
            return
        }
        quantity++
        updateQuantityCount()
    })

    $('.quantity-changer').click(function () {
        $('.quantity-changer').removeClass('quantity-click')
        void this.offsetWidth
        $(this).addClass('quantity-click')
    })

    $(document).click(function (numberClick) {
        const numberTarget = $(numberClick.target)

        if (numberTarget.is(activeQuantity)) {
            const newQuantity = prompt('Enter ' + selectedQuantity + ' Value')

            if (newQuantity !== null && newQuantity.trim() !== "") {
                if (!isNaN(newQuantity)) {
                    if (selectedQuantity === quantityTypes.passengers && parseFloat(newQuantity) < 1 || parseFloat(newQuantity) > 10) {
                        alert("Please enter a valid value between 1 and 10")
                    } else {
                        quantity = parseFloat(newQuantity)
                        updateQuantityCount()
                    }
                } else {
                    alert("Please enter a valid value")
                }
            } else {
                alert("Please enter a value")
            }
        }
    })
})