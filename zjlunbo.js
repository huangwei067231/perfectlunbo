let $buttons=$('#btn > button');
let $slides=$('#slides'); 
let $images=$slides.children('img');


let current=0;
makeFakeSlide()
$slides.css({transform:'translateX(-730px)'})
bindEvents()

$('#next').on('click',function(){
    goToslides(current+1)
})
$('#perviours').on('click',function(){
    goToslides(current-1)
})



let timer=setInterval(function(){
    goToslides(current+1)
},2000)

$('#container').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer=setInterval(function(){
    goToslides(current+1)
},2000)
})




function bindEvents(){
    $('#btn').on('click','button',function(e){
    let $button=$(e.currentTarget)
    let index=$button.index()
    goToslides(index)
 })
}



function goToslides(index){ 
    if(index>$buttons.length-1){
        index=0
    }else if(index<0){
        index=$buttons.length-1
    }
        if(current === $buttons.length-1 && index === 0){

            $slides.css({transform:`translateX(${-($buttons.length + 1)*730}px)`}).one('transitionend',function(){
                $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index + 1)*730}px)`}).show()
         })

            }else if(current===0 && index===$buttons.length-1){
            $slides.css({transform:`translateX(0px)`}).one('transitionend',function(){
                $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index + 1)*730}px)`}).show()
         })

            }else{
            $slides.css({transform:`translateX(${-(index + 1)*730}px)`})
        }
            current = index         
}

function makeFakeSlide(){
        let $firstCopy=$images.eq(0).clone(true);
        // let $lastCopy=$images.eq(3).clone(true)
        let $lastCopy=$images.eq($images.length-1).clone(true)

            $slides.append($firstCopy)
            $slides.prepend($lastCopy)

    }


// $buttons.eq(0).on('click', function(){
//     if(current==3){
//         console.log('从最后一张图到第一张图')
//         $slides.css({transform:'translateX(-3650px)'}).one('transitionend',(e)=>{
//             $slides.hide().offset()
//         $slides.css({transform:'translateX(-730px)'}).show()
//         })
//     }else{
//         $slides.css({transform:'translateX(-730px)'})
//     }
//     current=0
// })

// $buttons.eq(1).on('click',function(){
//        $slides.css({transform:'translateX(-1460px)'})
//        current=1
// })

// $buttons.eq(2).on('click',function(){
//        $slides.css({transform:'translateX(-2190px)'})
//        current=2
// })

// $buttons.eq(3).on('click', function(){
//     if(current==0){
//         console.log('从第一张到最后一张图')
//         $slides.css({transform:'translateX(0px)'}).one('transitionend',(e)=>{
//             $slides.hide().offset()
//         $slides.css({transform:'translateX(-2920px)'}).show()
//         })
//     }else{
//         $slides.css({transform:'translateX(-2920px)'})
//     }
//     current=3
// })