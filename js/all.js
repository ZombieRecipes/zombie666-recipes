$(function() {
  function closeDropdowns(button){
    let whatNeedClose = $(button).next('.teleport').find('.uk-dropdown.uk-open');
    if (whatNeedClose.length !== 0){
      UIkit.dropdown(whatNeedClose).hide();
    };
    setTimeout(function() { teleportDropdown(button) }, 1000);
  }

  function teleportDropdown(button){
    UIkit.notification({
      message: '<div id="insertmove"></div>',
      status: 'primary',
      pos: 'top-right',
      timeout: 999999999
    });
    $(button).next('.teleport').clone().appendTo( "#insertmove" );
    $('#insertmove').removeAttr('id');
  }

  $(".affix").click(function(e) {
    e.preventDefault();
    closeDropdowns($(this));
  });

  $("#sidebar ul li").click(function() {
    $('#sidebar ul li').removeClass('uk-active');
    $(this).addClass('uk-active');
  });

  $("header form input").keyup(function(){
    _this = this;
    
    $.each($(".recipe .teleport h3"), function() {
      if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
        $(this).closest('.recipe').hide();
      } else {
        $(this).closest('.recipe').show();
      }
    });
  });

  // Текущий год в футере
  const year = document.getElementById("year");
  if (year !== undefined){
    year.innerText = new Date().getFullYear();
  }

  /* Поиск последнего элемента в линии и простановка ему класса */
  // Legacy-непонятно-что. Удалить если ненужно
  // var lastElement = false;
  // $(window).on('load resize', function () {
  //   $(".uk-card-body>.recipe").each(function() {
  //       $(this).removeClass('last');
  //       if (lastElement && lastElement.offset().top != $(this).offset().top) {
  //           lastElement.addClass("last");

  //           console.log(lastElement)
  //       }
  //       lastElement = $(this);
  //   }).last().addClass("last");
  // });

  // egg, write me if you find it :3
  const H=['\x62\x6f\x64\x79','\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x73\x69\x64\x65\x62\x61\x72','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x6c\x6f\x67','\u0412\u0437\u0433\u043b\u044f\u043d\u0438\x20\u0432\u043e\u043a\u0440\u0443\u0433\x2c\x20\u043e\u0433\u043b\u044f\u043d\u0438\u0441\u044c\x20\u043d\u0430\u0437\u0430\u0434\x20\x28\uff89\u25d5\u30ee\u25d5\x29\uff89\x2a\x3a\uff65\uff9f\u2727','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x64\x61\x74\x61\x2d\x61\x74\x74\x72\x73','\x64\x61\x74\x61\x2d\x75\x6b\x2d\x6c\x69\x67\x68\x74\x62\x6f\x78','\x63\x6c\x61\x73\x73','\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x77\x61\x74\x63\x68\x3f\x76\x3d\x6c\x69\x62\x63\x2d\x73\x2d\x4c\x75\x46\x4d','\x73\x72\x63','\x73\x63\x72\x69\x70\x74','\x73\x6f\x6d\x65\x74\x68\x69\x6e\x67','\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64','\x68\x72\x65\x66','\x72\x61\x6e\x64\x6f\x6d','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74','\x77\x69\x64\x74\x68\x3a\x20\x31\x32\x38\x30\x3b\x20\x68\x65\x69\x67\x68\x74\x3a\x20\x37\x32\x30\x3b','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x6a\x73\x2e\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x2e\x63\x6f\x6d\x2f\x61\x6a\x61\x78\x2f\x6c\x69\x62\x73\x2f\x75\x69\x6b\x69\x74\x2f\x33\x2e\x35\x2e\x39\x2f\x6a\x73\x2f\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x73\x2f\x6c\x69\x67\x68\x74\x62\x6f\x78\x2e\x6d\x69\x6e\x2e\x6a\x73','\x64\x69\x76','\x75\x6b\x2d\x70\x6f\x73\x69\x74\x69\x6f\x6e\x2d\x62\x6f\x74\x74\x6f\x6d'];(function(x,D){const P=function(N){while(--N){x['\x70\x75\x73\x68'](x['\x73\x68\x69\x66\x74']());}};P(++D);}(H,0x105));const x=function(D,P){D=D-0x0;let N=H[D];return N;};const U=x;setTimeout(()=>{const R=x,D=document[R('\x30\x78\x31\x32')](R('\x30\x78\x31\x31'));if(D!==undefined&&window[R('\x30\x78\x31\x35')]>=0x3c0){let P=document[R('\x30\x78\x61')](R('\x30\x78\x35'));P[R('\x30\x78\x31\x30')](R('\x30\x78\x34'),R('\x30\x78\x63')),document[R('\x30\x78\x66')][R('\x30\x78\x37')](P),setTimeout(()=>{const l=R;let N=document[l('\x30\x78\x61')](l('\x30\x78\x64'));N[l('\x30\x78\x31\x30')](l('\x30\x78\x30'),''),N[l('\x30\x78\x31\x30')](l('\x30\x78\x31'),l('\x30\x78\x65')),D[l('\x30\x78\x37')](N);let Q=document[l('\x30\x78\x61')]('\x61');Q[l('\x30\x78\x32')]=l('\x30\x78\x36'),Q[l('\x30\x78\x31\x30')](l('\x30\x78\x38'),l('\x30\x78\x33')),Q[l('\x30\x78\x31\x30')](l('\x30\x78\x31\x36'),l('\x30\x78\x62')),N[l('\x30\x78\x37')](Q),console[l('\x30\x78\x31\x33')](l('\x30\x78\x31\x34'));},0x2710);}},Math[U('\x30\x78\x39')]()*(0xf4240-0x2710)+0x2710);
});