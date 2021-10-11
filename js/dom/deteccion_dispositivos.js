const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      windows: () => ua.match(/windows nt/i),
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      any: function () {
        return this.windows() || this.linux() || this.mac();
      },
    },
    Browser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  //console.log(ua); userAgent
  /*   console.log(isMobile.android());//evaluar movil android
  console.log(isMobile.ios());//evaluar mobile ios
  console.log(isMobile.windows());//evaluar movil window phone
  console.log(isMobile.any());//evaluar any mobile */

  /*   console.log(isDesktop.windows());//evaluar movil android
  console.log(isDesktop.linux());//evaluar mobile ios
  console.log(isDesktop.mac());//evaluar movil window phone
  console.log(isDesktop.any());//evaluar any mobile */

  /*  console.log(Browser.chrome());//evaluar navegador chrome
  console.log(Browser.safari());//evaluar navegador safari
  console.log(Browser.firefox());//evaluar navegador firefox
  console.log(Browser.opera());//evaluar navegador opera
  console.log(Browser.ie());//evaluar navegador ie
  console.log(Browser.edge());//evaluar navegador edge
  console.log(Browser.any());//evaluar any navegador  */

$id.innerHTML = `
<ul>
<li>User Agent:<b>${ua}</b></li>
<br>
<li>Plataforma:<b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
<li>Navegador:<b>${Browser.any()}</b></li>
</ul>
  `;

/* Contenido exclusivo */
//se valida de acuerdo al dispositivo,  plataforma y navegador

if(Browser.chrome()){
    $id.innerHTML += `<p><mark>Este contenido solo se vé en Chrome</mark></p>`;
}
if(Browser.firefox()){
    $id.innerHTML += `<p><mark>Este contenido solo se vé en Firefox</mark></p>`;
}
if(isDesktop.windows()){
    $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
}
if(isDesktop.linux()){
    $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
}
if(isDesktop.mac()){
    $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
}

/* REDIRECCIONES */

/* if(isMobile.android()){
    window.location.href = "http://www.kprichosnails.store";
} */

}
