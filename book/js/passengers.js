$(document).ready(function () {
    let quantity = 1
    const quantityTypes = {
        passengers: 'Passengers',
        weight: 'Weight(KG)'
    }
    let selectedQuantity = quantityTypes.passengers

    function updateQuantityCount() {
        $('#quantity-type').html(selectedQuantity + ' ' + quantity)
    }

    updateQuantityCount()

    $('#sub').click(function () {
        if (quantity > 1) {
            quantity--
            updateQuantityCount()
        }
    })

    $('#add').click(function () {
        quantity++
        updateQuantityCount()
    })

    $('.quantity-changer').click(function () {
        $(this).removeClass('quantity-click')
        void this.offsetWidth
        $(this).addClass('quantity-click')
    })
})
