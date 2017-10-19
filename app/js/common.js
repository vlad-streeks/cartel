$( document ).ready(function() {

    $( window ).resize(function() {
        $( ".size_indicator_w" ).text( $( window ).width() );
        $( ".size_indicator_h" ).text( $( window ).height() );
    });
});