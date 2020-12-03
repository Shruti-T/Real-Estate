var preloader = document.getElementById('preloading');


function codeLoaded() {
    preloader.style.display = 'none';
}

$('.count').counterUp(
    {
        delay: 10,
        time: 3000,
    }
)



document.getElementById('search').onclick = function () {

    var searchValue = document.getElementById('searchInput').value.toLowerCase();


    if (searchValue == 'inwood bay' || searchValue == 'murky city' || searchValue == 'bed city' || searchValue == 'shell sea' || searchValue == 'rikers reef' || searchValue == 'sinkin square' || searchValue == 'green port' || searchValue == 'meadow sands' || searchValue == 'sea floria') {
        window.location.replace('Buy.html');
    }
    else if (searchValue == '') {
        alert('Please fill in the details');
    }
    else {
        alert('Sorry! We do not have homes available in this area. Try somewhere else.');
    }
}


var cost1 = 0, cost2 = 0, cost3 = 0, cost4 = 0;

document.getElementById('park').addEventListener('click', function () {

    var check1 = document.getElementById('park');

    if (check1.checked == true) {
        cost1 = 400;
    }
    else {
        cost1 = 0;
    }
    total();
});

document.getElementById('gym').addEventListener('click', function () {
    var check2 = document.getElementById('gym');


    //console.log(check.checked);
    if (check2.checked == true) {
        cost2 = 300;
    }
    else {
        cost2 = 0;
    }
    total();
});

document.getElementById('lib').addEventListener('click', function () {
    var check3 = document.getElementById('lib');


    //console.log(check.checked);
    if (check3.checked == true) {
        cost3 = 900;
    }
    else {
        cost3 = 0;
    }
    total();
});

document.getElementById('golf').addEventListener('click', function () {


    var check4 = document.getElementById('golf');
    if (check4.checked == true) {
        cost4 = 700;
    }
    else {
        cost4 = 0;
    }
    total();
});

function total() {
    var totalCost = 0;
    totalCost = cost1 + cost2 + cost3 + cost4;
    document.getElementById('approx').innerHTML = `Approx. Charges on monthly basis for desired amenities $ ${totalCost}.`;
}


document.getElementById('submitVisit').onsubmit = function () {
    alert('Your form has been submitted successfully. Further deatails have been sent on your email.');
}