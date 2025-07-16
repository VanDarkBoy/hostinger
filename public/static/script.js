$(function () {
  $('#year').text(new Date().getFullYear());

  function smoothScroll(target) {
    $('html, body').animate({ scrollTop: $(target).offset().top }, 600);
  }

  $('#toProducts, #scrollDown').on('click', function () {
    smoothScroll('#products');
  });

  $('header a').on('click', function (e) {
    e.preventDefault();
    smoothScroll($(this).attr('href'));
  });

  function showToast(message) {
    const toast = $('<div class="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow pointer-events-none opacity-0"></div>').text(message).appendTo('body');
    anime({
      targets: toast[0],
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 300,
      easing: 'easeOutQuad',
      complete: function () {
        setTimeout(() => {
          anime({
            targets: toast[0],
            opacity: [1, 0],
            translateY: [0, 20],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => toast.remove()
          });
        }, 2000);
      }
    });
  }

  $('.learn-more').on('click', function () {
    showToast('🚧 此功能尚未实现');
  });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    showToast('询盘已提交，我们会尽快联系您。');
    this.reset();
  });

  if ($('#map').length && window.L) {
    const map = L.map('map').setView([22.5431, 114.0579], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);
    L.marker([22.5431, 114.0579]).addTo(map);
  }
});
