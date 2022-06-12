let userleBaza = [];
let userler = localStorage.getItem('userler');

if (userler != null) {
    userleBaza = JSON.parse(userler);
}


$('#close').on('click', function () {
    $('.popup').addClass('gizlet');
});
$('#go-to-signup').on('click', () => {
    $('.popup').removeClass('gizlet');
});
$('#signup').on('click', () => {
    let user = $('#signup-user').val();
    let password = $('#signup-password').val();
    let obj = { user, password };

    console.log({ userleBaza })
    userleBaza.push(obj);

    let userlerstring = JSON.stringify(userleBaza);

    localStorage.setItem('userler', userlerstring);

    $('#signup-user').val("");
    $('#signup-password').val("");
    $('#close').click();
});

$('#login-button').on('click', () => {
    let user = $('#login-user').val();
    let password = $('#login-password').val();

    let userler = localStorage.getItem('userler');
    userleBaza = JSON.parse(userler);

    let yeniarray = userleBaza.filter(x => {
        if (x.user == user && x.password == password) {
            return true;
        } else {
            return false;
        }
    });

    if (yeniarray.length > 0) {
        localStorage.setItem('user', user)
        window.location.href = "../ders9/ders9.html"
    } else {
        alert('user ve ya password yanlis')
    }
})