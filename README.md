# GSlider #

Flexible slider.

## Ayarlar ##

```javascript
var options = {
    //Varsayılan değerler 
    childElementTimeout : 800, // Blok içlerinde bulunan div taglarının ne kadar süre boyunca bekletileceği
    sliderDelay : 5000, // Toplam blok süresi
    autoplay : false, // Otomatik oynatma
    startat : 0 // Başlangıç pozisyon index'i
}
```
## Html Kod Bloğu ##

`data-effect` Elemente ait efekt ayarı
`data-delay` Elementin görünme ile kaybolma arasındaki süre
`data-position` Elementin posizyonu. `x,y` = `yatay,dikey` Pozisyon ayarları
`data-direction` Elementin yön bilgisi

-- Not --
`data-effect` Belirteçi için JQuery UI kütüphanesinin .effect() metodu kullanılmıştır. Buna bağlı olarak bu method desteği dahilindeki tüm efekt özellikleri desteklenmektedir.
`data-direction` Belirteçi için sadece `left`, `right`, `up`, `down` kullanılabilir.

```html
<div class="slider_container">
        <div id="slider">
            
            <!-- 1'inci element -->
            <div class="block">                
                <div class="title"
                     data-effect="bounce" 
                     data-delay="500" 
                     data-position="50,50">Başlık
                </div>

                <div class="content"
                     data-effect="drop" 
                     data-delay="500" 
                     data-position="50,100" >Kısa içerik
                </div>

                <div class="button"
                     data-effect="drop" 
                     data-direction="right"
                     data-delay="100" 
                     data-position="50,300">Konu erişim butonu
                </div>
                
                <div class="image" 
                     data-effect="fade" 
                     data-delay="200" 
                     data-position="720,50"><img src="resim.png"> Konuya bağlı resim
                </div>

           </div> <!-- .block tag sonu -->
           
           <!-- 2'inci element -->
           <div class="block">                
                <div class="title"
                     data-effect="bounce" 
                     data-delay="500" 
                     data-position="50,50">Başlık
                </div>

                <div class="content"
                     data-effect="drop" 
                     data-delay="500" 
                     data-position="50,100" >Kısa içerik
                </div>

                <div class="button"
                     data-effect="drop" 
                     data-direction="right"
                     data-delay="100" 
                     data-position="50,300">Konu erişim butonu
                </div>
                
                <div class="image" 
                     data-effect="fade" 
                     data-delay="200" 
                     data-position="720,50"><img src="resim.png"> Konuya bağlı resim
                </div>

           </div> <!-- .block tag sonu -->

        </div><!-- .slide tag sonu -->
</div><!-- .slider_container tag sonu -->
```
### GSlider Çağrılması ###

var gslider = $("#slider").gslider({ autoplay : true });

### Metodlar ###

gslider.start();    // Başlat 
gslider.stop();     // Durdur
gslider.resume();   // Kaldığın yerden devam et

### Lisans ###

The MIT License (MIT)

Copyright (c) 2013, GAYRETSOFT [http://gayretsoft.com]

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.