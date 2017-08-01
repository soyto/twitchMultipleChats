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

  function _addIframe(_twitchChannel) {
    $('.append-row').append(
      $('<div>')
        .addClass('col-md-4')
        .append(
        $('<iframe>')
          .attr({
            'frameborder': 0,
            'scrolling': 'true',
            'src': _twitchChannel + '/chat',
            'height': 600
          })
      )
    );
  }
});