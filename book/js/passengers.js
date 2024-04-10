$(document).ready(function () {
    let quantity = 1

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
        quantity++
        updateQuantityCount()
    })

    $('.quantity-changer').click(function () {
        $('.quantity-changer').removeClass('quantity-click')
        void this.offsetWidth
        $(this).addClass('quantity-click')
    })
})
