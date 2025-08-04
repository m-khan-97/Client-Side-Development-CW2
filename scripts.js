$(document).ready(function (){
    // Get TExt
    $('#gettext').click(function () {
        const text = $('.details').text();
        $('#output').text('Text is : ' + text);
    })

    // Set text
    $('#settext').click(function (){
        $('.details').text('Ulster University - London Campus')
    })

    $('#gethtml').click(function () {
        const htmlcontent = $('#info').html();
        $('#output').text('HTML content is:' + htmlcontent);
    });
})