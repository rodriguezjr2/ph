requirejs.config({
  paths: {
    jquery: 'jquery/v3/jquery',
    'jquery-v3': 'jquery/v3/jquery',
    lodash: 'lodash/v4/lodash',
    'lodash-v4': 'lodash/v4/lodash',
    base: 'base/v0.9.10/base',
    dropzone: 'dropzone/v4.3.0/dropzone',
    hand: 'hand/v1.3.8/hand',
    handlebars: 'handlebars/v4.0.5/handlebars',
    hogan: 'hogan/v3.0.2/hogan',
    moment: 'moment/v2/moment-with-fi-sv',
    'moment-v2': 'moment/v2/moment-with-fi-sv',
    nouislider: 'nouislider/v9.1.0/nouislider',
    picturefill: 'picturefill/v2.3.1/picturefill',
    'react-redux': 'react-redux/v4.4.5/react-redux',
    'react-with-addons': 'react/v15.3.2/react-with-addons',
    redux: 'redux/v3.6.0/redux',
    velocity: 'velocity/v1.2.3/velocity',
    'velocity-ui': 'velocity/v1.2.3/velocity.ui',
    caroufredsel: 'jquery-caroufredsel/v6.2.1/caroufredsel',
    chosen: 'jquery-chosen/v1.4.2/chosen',
    'jquery-cookie': 'jquery-cookie/v1.4.1/cookie',
    datatables: 'jquery-datatables/v1.10.12/datatables',
    'datatables-i18n': 'jquery-datatables/v1.10.12/i18n',
    'datatables.net': 'jquery-datatables/v1.10.19/datatables',
    'datatables-responsive': 'jquery-datatables-responsive/v2.1.0/responsive',
    'datatables-responsive.net':
      'jquery-datatables-responsive/v2.2.2/responsive',
    'datatables-fixedHeader':
      'jquery-datatables-fixedHeader/v3.1.4/fixedheader',
    'jquery-migrate': 'jquery-migrate/v1.3.0/migrate',
    'jquery-ui': 'jquery-ui/v1.11.1/jquery-ui',
    'jquery-ui-amd': 'jquery-ui/v1.11.1',
    'jquery-serialize-object':
      'jquery-serialize-object/v2.4.3/serialize-object',
    parsley: 'jquery-parsley/v2.6.0/parsley',
    'parsley-lang': 'jquery-parsley/v2.6.0/i18n/',
    touchswipe: 'jquery-touchswipe/v1.6.18/touchswipe',
    text: 'requirejs-text/v2.0.14/text',
    hgn: 'requirejs-hgn/v0.3.0/hgn',
    css: 'requirejs-css/v0.1.8/css',
    opux: 'op/opux-classic/v2/bundle',
    awesomplete: 'awesomplete-1.1.0/awesomplete',
    dotdotdot: 'jquery-dotdotdot/v1.8.3/dotdotdot',
    ffonload: 'fontfaceonload/v0.1.1/fontfaceonload.custom',
    pikaday: 'pikaday/v1.4.0/pikaday.custom',
  },
  shim: {
    awesomplete: { exports: 'Awesomplete' },
    caroufredsel: { exports: 'carouFredSel', deps: ['jquery'] },
    chosen: { exports: '$.fn.chosen', deps: ['jquery'] },
    dotdotdot: ['jquery'],
    lodash: { exports: '_' },
    velocity: { deps: ['jquery'] },
  },
  map: {
    '*': {
      '@op/opux-classic': 'opux',
      'parsley-remote': 'parsley',
      underscore: 'lodash',
    },
  },
});

