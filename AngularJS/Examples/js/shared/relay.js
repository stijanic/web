(function () {

  var scripts = [
    'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
  , 'http://external-production.codecademy.com/assets/jquery.expect.js'
  ];

  var loadScripts = function(scripts, index) {
    if (index < scripts.length) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      document.querySelector('body').appendChild(s);
      s.onload = function() {
        loadScripts(scripts, index + 1);
      };
      s.src = scripts[index];
    } else {
      window.parent.postMessage({ location: window.location.href }, '*');
    }
  };

  loadScripts(scripts, 0);

  window.addEventListener('message', function (e) {
    if (e.data.event === 'webSCT:request') {
      var error;

      try {
        window.eval(e.data.code);
      } catch(err) {
        error = err.message;
      }

      window.top.postMessage({
        event: 'webSCT:response'
      , error: error
      }, '*');
    }
  });
})();
