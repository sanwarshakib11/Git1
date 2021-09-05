$(function(){
    //$('#hide').hide();

   // $('#show').show();

    $('#hide').on('click',function(){
        $('#hide_show_toggle').hide(1000,function(){
            //alert('hide')
        });
    })

    $('#show').on('click',function(){
        $('#hide_show_toggle').show(500);
    })

    $('#toggle').on('dblclick',function(){
        $('#hide_show_toggle').toggle(2000);
    })

    $('#slide_up').on('click',function(){
        $('#slide').slideUp(1000);
    })

    $('#slide_down').on('click',function(){
        $('#slide').slideDown(1000);
    })

    $('#slide_toggle').on('click',function(){
        $('#slide').slideToggle(1000);
    })

    $('#fade_in').on('click',function(){
        $('#fade').fadeIn(3000);
    })

    $('#fade_out').on('click',function(){
        $('#fade').fadeOut(3000);
    })

    $('#fade_toggle').on('click',function(){
        $('#fade').fadeToggle(3000);
    })

    $('#fade_to').on('click',function(){
        $('#fade').fadeTo(2000,.3);
    })

    $('#flip').on('click',function(){
        $('#panel').slideDown(10000);
    })

    $('#stop').on('click',function(){
        $('#panel').stop();
    })

    $('#animation').on('click',function(){
       $('#animate').animate({
         width: '100px',
         height: '100px',
         borderRadius: '50%'   
        })
    })
    
    $('#animation_two').on('click',function(){
        $('#animate_two').animate({
         width: '100px',
         height: '100px',
         borderRadius: '50%'   
        }).fadeTo(1000,.3);
    })
})
