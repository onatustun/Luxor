$(document).ready(function () {
    $('.reorder').click(function () {
        const cloneTarget = $(this).closest('.flight-card')
        const clonedCard = cloneTarget.clone()

        clonedCard.find('.reorder').remove()

        $('#upcoming').append(clonedCard)
    })
})