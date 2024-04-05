$(document).ready(function () {
    var searchInput = $('.location-input');

    var autocomplete = new google.maps.places.Autocomplete(searchInput[0], {
        types: ['airport']
    });

    autocomplete.addListener('place_changed', function () {
        var near_place = autocomplete.getPlace();
        console.log(near_place);
    });
});