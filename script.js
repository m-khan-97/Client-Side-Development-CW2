$(document).ready(function () {
    // Get text
    $('#gettext').click(function () {
        const text = $('.details').text();
        $('#output').text('Text is :' + text);

    });
    // Set Text
    $('#settext').click(function () {
        $('.details').text('Ulster University - London Campus');
    });

    //Get Html()
    $('#gethtml').click(function () {
        const htmlcontent = $('#info').html();
        $('#output').text('HTML content is :' + htmlcontent)
    })
    
    // Set Html()
    $('#sethtml').click(function () {
        $('#info').html('<p> New Content <strong> with bold text </strong></p>')
    })
    
    // Get Attribute
    $('#getattr').click(function () {
        const link = $('#ulink').attr('href');
        const imgalt = $('#ulogo').attr('alt');
        $('#output').text('Link is :' + link + 'Image Alt is :' + imgalt);
    });

    //Set Attribute
    $('#setattr').click(function () {
        $('#ulink').attr('href', 'https://www.ulster.ac.uk/courses');
        $('#ulink').text('Visit Ulster Courses');
        $('#ulogo').attr ({
            src: 'newlogo.png',
            alt: 'New Ulster Logo'
        });
    });

    // Get Value()
    $('#getVal').click(function () {
        const val = $('#nameInput').val();
        $('#output').text('Input Value is :' + val)
    });

    // Set Value()
    $('#setVal').click(function () {
        $('#nameInput').val('Hari');
    })

})