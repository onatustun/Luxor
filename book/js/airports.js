var searchInput = $('.location-input');

document.addEventListener('DOMContentLoaded', function () {
    var autocomplete = new google.maps.places.Autocomplete(searchInput, {
        types: ['airport'],
        componentRestrictions: { country: 'us' }
    });

    autocomplete.addListener('place_changed', function () {
        var near_place = autocomplete.getPlace();
    });
});
