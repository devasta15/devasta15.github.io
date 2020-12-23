$(document).ready(() => {
    setTimeout(() => {
        $('body').css({
            overflow: 'auto'
        });
        $('.banner').hide();
    }, 5000);

    $('.toggle').click(() => {
        $('.toggle').toggleClass('toggle-light');
        $('span', '.toggle').toggleClass('fa fa-moon fa fa-sun');
        if($('.main').css('background-color') == 'rgb(50, 50, 50)')
        {
            $('.main').css('background-color', '#FFFFFF')
            $('.row').css({
                'background-color': '#FFFFFF',
                'color': '#323232'
            })
        }
        else
        {
            $('.main').css('background-color', '#323232')
            $('.row').css({
                'background-color': '#323232',
                'color': '#FFFFFF'
            })
        }
    });
});
