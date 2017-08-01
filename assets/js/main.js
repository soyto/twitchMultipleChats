$(function() {

  $('.input-channel').on('keydown', function($evt) {
    if($evt['keyCode'] != 13) { return; }

    _addIframe($('.input-channel').val());
    $('.input-channel').val(null);
  });

  $('.btn-add').on('click', function(){
    _addIframe($('.input-channel').val());
    $('.input-channel').val(null);
  });

  $('.append-row').on('click', '.btn-delete', function() {
    $(this).parents('.col-without-padding').remove();
  });

  function _addIframe(_twitchChannel) {
    $('.append-row').append(
      $('<div>')
        .addClass('col-md-3 col-without-padding')
        .append(
        $('<div>').addClass('row').append(
          $('<div>').addClass('col-md-12 text-center').append(
            $('<button>').addClass('btn-delete btn btn-danger').text('Borrar')
          )
        ),
        $('<iframe>')
          .addClass('full-width')
          .attr({
            'frameborder': 0,
            'scrolling': 'true',
            'src': _twitchChannel + '/chat?darkpopout'
          })
      )
    );
  }
});