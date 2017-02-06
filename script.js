window.onload = function () {
    var selectedSlot;
    for (var i = 0; ; i++) { // Add click listener for timeSlot click
        var slot = document.getElementsByClassName('timeSlot')[i];
        if (!slot) break;
        slot.addEventListener('click', function (e) {
            selectedSlot = e.target;
            document.querySelector('#name').value = document.querySelector('#phone').value = '';
            document.getElementsByClassName('modal')[0].style.display = 'block';
            document.getElementsByClassName('overlay')[0].className += ' active';
        });
    }
    document.getElementsByClassName('modalSubmit')[0].addEventListener('click', function (e) {
        if (!selectedSlot) return;
        if(!document.querySelector('#name').value || !document.querySelector('#phone').value) return;
        if (!selectedSlot.className.match(/occupied/)) selectedSlot.className += ' occupied';
        var overlay = document.getElementsByClassName('overlay')[0];
        overlay.className = overlay.className.replace(/active/, '');
        document.getElementsByClassName('modal')[0].style.display = 'none';
    });
};