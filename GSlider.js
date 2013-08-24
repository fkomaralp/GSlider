/*
 * GSlider.js
 * Copyright (c) 2013, GAYRETSOFT (http://gayretsoft.com/)
 * is licensed under the MIT license.
 * http://opensource.org/licenses/MIT veya LICENSE.txt
 * 
 * Version: 1.0
 * Author : Fatih Komaralp
 */

(function($){
    var globals = {
        
        blockList : [],
        blockListLength : 0,
        GSClass : {},
        currentSlider : -1,
        timer : null
        
    }, options = {
        
        childElementTimeout : 800,
        sliderDelay : 5000,
        autoplay : false, // TODO
        startat : 0
        
    };

   function GSlider(){};
    
    GSlider.prototype.fire = function(index, action, callback){
        
        var currentBlock = globals.blockList[index];

            globals.currentSlider = index;
            
            $childElement       = $(currentBlock).children();
            $childElementLength = $(currentBlock).children().length;
            
            $childElement.each(function(index){
                
                    var $element = $(this);

                    var x           = $element.data("position").split(",")[0],
                        y           = $element.data("position").split(",")[1],
                        delay       = $element.data("delay"),
                        effect_name = $element.data("effect"),
                        direction;

                    if($element.data("direction") !== "undefined") direction = $element.data("direction");

                    $element.css({marginLeft : x + "px", marginTop : y + "px"});
                    
                    $(currentBlock).show();
                    
                    setTimeout(function(){
                        $element.effect(effect_name, 
                                   {mode : action, direction : direction},
                                   delay,function(){
                                       if(action==="hide") if(index === $childElementLength - 1)
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
     * @returns {undefined}
     */
    GSlider.prototype.start = function(){
        
        if(!options.autoplay) return;
        
        var $this = this, i;
        
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
     * @returns {undefined}
     */
    GSlider.prototype.stop = function(){
            clearInterval(globals.timer);
    };
    
    /**
     * Resume slider
     * @returns {undefined}
     */
    GSlider.prototype.resume = function(){
            this.start();
    };
    
    /**
     * Next slide
     * @returns {undefined}
     */
    GSlider.prototype.next = function(){
            
    };
    
    /**
     * Previus slide
     * @returns {undefined}
     */
    GSlider.prototype.prev = function(){
        
    };
    
    
var init = {
        /**
         * Private method
         * Setup slider elements
         * @param {type} customOptions Extra options
         */
        setup : function (_options){
            
            options = $.extend(options, _options);
                        
            globals.blockListLength = $(this).children().length;
            globals.blockList = $(this).children();
            
            globals.GSClass = new GSlider();
            
            //if(options.autoplay) methods.start();
            
        }
        
    }, 
    /**
     * Private methods
     */ 
    _methods = {
        fire    : function(index){ globals.GSClass.start(index); }, // Fire slider item
    },
            
    /**
     * Public methods
     */
    methods = {
        start   : function(){ globals.GSClass.start(); },           // Start slider
        stop    : function(){ globals.GSClass.stop(); },            // Stop slider
        resume  : function(){ globals.GSClass.resume(); },        // Resume slider
        next    : function(){ globals.GSClass.next(); },            // Next slide
        prev    : function(){ globals.GSClass.prev(); }             // Previus slider
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
