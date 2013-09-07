var reposition = function() {
    wrapper = $("#wrapper");
    console.log(wrapper.innerWidth());
    pLeft = 0;
    pTop = 0;
    maxRowHeight = 0;
    $(".columns").each(function(){
        if($(this).data('active')) {
            $(this).data('top', pTop);
            $(this).data('left', pLeft);
        } else {
            $(this).stop(0,0).animate({
              'top' : pTop + 'px',
              'left' : pLeft + 'px'
            });
        }
            pLeft += $(this).outerWidth() + parseInt($(this).css('marginLeft'));
            if($(this).height() > maxRowHeight) maxRowHeight = $(this).outerHeight() + parseInt($(this).css('marginTop')); //Find out the longest block on the row

            if(pLeft + $(this).next().outerWidth() + parseInt($(this).next().css('marginLeft')) >= wrapper.innerWidth()) {
               pLeft = 0;
               pTop += maxRowHeight;
               maxRowHeight = 0;
            }

    });    
};

$(".columns").click(function() {

    $(this).siblings().slideToggle('slow'); //Toggle other blocks

    if(!$(this).data('active')){ //if the block is not active
        $(this).data('left', $(this).position().left); //sets its left
        $(this).data('top', $(this).position().top);   // and top position
        $(this).animate({ //animate at the top and bottom
            top:0,
            left:0
        },'slow');

        $(this).data('active',true);

    }else{

        $(this).animate({ //animate to its last known position
            top:$(this).data('top'),
            left:$(this).data('left')
        },'slow');

        $(this).data('active',false);
    }
});