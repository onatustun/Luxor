$(document).ready(function () {
    const routeTypes = {
        oneWay: 'One-Way',
        roundTrip: 'Round-Trip'
    }
    const routeButton = $('.route-button')
    const selectedRoute = $('#selected-route')
    let currentRoute = routeTypes.oneWay
    let routeToggle = false

    selectedRoute.html(currentRoute)
    routeButton.first().addClass('active-route')

    routeButton.click(function () {
        const routeIndex = $(this).data('route-index')
        currentRoute = routeIndex === 1 ? routeTypes.oneWay : routeTypes.roundTrip
        selectedRoute.html(currentRoute)
        routeButton.removeClass('active-route')
        $(this).addClass('active-route')
    })

    function arrowRotate() {
        const deg = routeToggle ? '45deg' : '225deg'
        const style = document.createElement('style')
        style.innerHTML = '#selected-route::after{transform: rotate(' + deg + ')}'
        document.head.appendChild(style)
    }

    function toggleRouteMode() {
        arrowRotate()
        $('#route-modes').fadeToggle(250)
        routeToggle = !routeToggle
    }

    $(document).click(function (routeClick) {
        const routeTarget = $(routeClick.target)
        if (routeTarget.is(routeButton)) {
            setTimeout(function () {
                toggleRouteMode()
            }, 125)
        } else if (routeTarget.is(selectedRoute) || routeToggle) {
            toggleRouteMode()
        }
    })
})