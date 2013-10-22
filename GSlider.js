/*
 * GSlider.js
 * Copyright (c) 2013, GAYRETSOFT (http://gayretsoft.com/)
 * is licensed under the MIT license.
 * http://opensource.org/licenses/MIT or LICENSE.txt
 * 
 * Version: 2.0
 * Author : Fatih Komaralp
 */

(function($){
    
    var globals = {
        
        blockList : [],
        blockListLength : 0,
        GSClass : {},
        currentSlider : -1,
        timer : null,
        $this : null
        
    }, options = {
        
        childElementTimeout : 800,
        sliderDelay : 5000,
        autoplay : false,
        startat : 0
        
    };

   function GSlider(){};
    
    GSlider.prototype.fire = function(index, action, callback){
                
        if(index < 0) index = 0;
                
        var currentBlock = globals.blockList[index];

            globals.currentSlider = index;
            
            $childElement       = $(currentBlock).children();
            $childElementLength = $(currentBlock).children().length;
                        
            $childElement.each(function(index){
                
                    var $element = $(this);
                    
                    var $elPosition = $element.data("position") + "";
                                
                    var arr = $elPosition.split(",");

                    var x           = arr[0],
                        y           = arr[1],
                        delay       = $element.data("delay"),
                        effect_name = $element.data("effect"),
                        direction;

                    if($element.data("direction") !== "undefined") direction = $element.data("direction");

                    $element.css({marginLeft : x + "px", marginTop : y + "px"});

                    $(currentBlock).show();

                    setTimeout(function(){
                        $element.effect(effect_name, 
                                        {mode : action, direction : direction},
                                        delay,
                                        function(){
                                            if(action==="hide" && action !== null)
                                                if(index === $childElementLength - 1)
                                             {
                                                 callback();
                                                 $(currentBlock).hide();
                                             }
                                        });
                    },options.childElementTimeout * index);
            });
            
    };
    
    /**
     * Initialize slider elements and start slider
     */
    GSlider.prototype.start = function(){
        
        //console.log(globals.currentSlider);
        
        if(!options.autoplay) return;
        
        var $this = this, i;
        
        globals.$this = $this;
        
        (options.startat > globals.blockListLength - 1) ? 
                i = options.startat = 0 : 
                        i = options.startat;
        
        // Fire the first slide
        if(globals.currentSlider === -1){
            $this.fire(i, "show", null);
        } 
        
        globals.timer = setInterval(function(){
            i++;
            
            if(i >= globals.blockListLength) i = 0;

                $this.fire(globals.currentSlider, "hide", function(){
                    $this.fire(i, "show", null);
                });
                
        }, options.sliderDelay * globals.blockListLength);
        
    };
    
    /**
     * Stop slider
     */
    GSlider.prototype.stop = function(){
            clearInterval(globals.timer);
    };
    
    /**
     * Resume slider
     */
    GSlider.prototype.resume = function(){
            this.start();
    };
    
    /**
     * Next slide
     */
    GSlider.prototype.next = function(){
        
        if(globals.blockListLength === 1) return;
        
        var $this = globals.$this;
        
        var blockLength = globals.blockListLength;
        
        $this.fire(globals.currentSlider, "hide", function(){
                    var next = globals.currentSlider + 1;
                    var i;
                    
                    (next >= blockLength) ? i = 0 : i = next;
                    
                    //console.log(next +":"+ blockLength +":"+i);
                    
                    $this.stop();
                    
                    $this.fire(i, "show", null);
                    
                    $this.resume();
        });
        
    };
    
    /**
     * Previus slide
     */
    GSlider.prototype.prev = function(){
        
        if(globals.blockListLength === 1) return;
        
        var $this = globals.$this;
                        
        $this.fire(globals.currentSlider, "hide", function(){
                    var i = globals.currentSlider - 1;
                    
                    $this.stop();
                    
                    $this.fire(i, "show", function(){
                        $this.resume();
                        
                    });
                    
        });
        
    };
    
    /**
     * Setup
     */    
    init = {
        
        /**
         * Private method
         * Setup slider elements
         * @param {object} customOptions Extra options
         */
        setup : function (_options){
            
            options = $.extend(options, _options);
                        
            globals.blockListLength = $(this).children().length;
            globals.blockList = $(this).children();
            
            globals.GSClass = new GSlider();
            
        }
    }, 
            
    /**
     * Private methods
     */ 
    _methods = {
        fire    : function(index){ globals.GSClass.start(index); }, // Fire slider item with index/without index
    },
            
            
    /**
     * Public methods
     */
    methods = {
        start   : function(){ globals.GSClass.start();  },          // Start slider
        
        stop    : function(){ globals.GSClass.stop();   },          // Stop slider
        resume  : function(){ globals.GSClass.resume(); },          // Resume slider
        
        next    : function(){ globals.GSClass.next();   },          // Next slide
        prev    : function(){ globals.GSClass.prev();   }           // Previus slider
    };
    
    /**
     * Caller
     * @param {object} customOptions Extra options
     * @returns {object} Returning GSlider object for the some public methods
     */
    $.fn.gslider = function(options){
        init.setup.call(this, options);
        return methods;
    };
    
}(jQuery));
