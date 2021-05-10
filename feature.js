$('.container').ripples({
    resolution:512,
    dropRadius:15,
    perturbance:0.04,
})

setInterval(function(){
    var $el = $('.container');
    var x = Math.random() *$el.outerWidth();
    var y = Math.random()*$el.outerHeight();
    var dropRadius = 10;
    var strength = 0.03 + Math.random()*0.01;
    $el.ripples('drop',x,y,dropRadius,strength)
},1000);
