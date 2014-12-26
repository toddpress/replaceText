(function($){
  $.fn.replaceText = function(search, replace) {
    return this.each(function(i, el) {
        var n, text, dendroid;
        
        search.constructor === Array && 
          (search = new RegExp(search.join('|'), 'g')); // support multiple replacements
  
        dendroid = document.createTreeWalker(el, 4, null, false); // it's alive
      
        while(n=dendroid.nextNode())
          n.nodeValue = n.nodeValue.replace(search, replace);
    });
  };
})(jQuery);
