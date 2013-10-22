# GSlider #

Flexible slider.

## Options ##

```javascript
var options = {
    //Varsayılan değerler 
    childElementTimeout : 800, // Child element delay
    sliderDelay : 5000, // Total delay
    autoplay : false, // Auto start
    startat : 0 // Start index
}
```
## Html code properties ##

`data-effect` Show or hide effect

Ex : data-effect="drop"

`data-delay` Child element delay

Ex : data-delay="500"

`data-position` Child element position. `x,y` = `horizontal,vertical`

Ex : data-pozition="100,35"

`data-direction` Effect direction

Ex : data-position="left"

-- Notes --
`data-effect` is supporting by jquery ui (<=1.6)
`data-direction` Values are : `left`, `right`, `up` and `down`

```html

<!-- Slider container -->
<div class="slider_container">
        <div id="slider">
            
            <!-- 1th block -->
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

           </div>
           
           <!-- 2th block -->
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

           </div>

        </div>
</div><!-- End of slider container -->
```
### How to call GSlider? ###
```javascript
var gslider = $("#slider").gslider({ autostart = true });
```

OR

```javascript
var gslider = $("#slider").gslider();
gslider.start();
```

### Metodlar ###
```javascript
gslider.start();    // Start slider
gslider.stop();     // Stop slider
gslider.resume();   // Resume stoped slider
gslider.next();     // Next slider
gslider.prev();     // Previous slider
```

### Lisans ###

The MIT License (MIT)
