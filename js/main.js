$(document).ready(function (){

    let $btnSend = $('.inputBtn').find('button')
    let $inputEmail = $('.inputBtn').find('input')
    let $imgError = $('.imgError')
    let $txtError = $('.txtError')

    function inputInvalid(message){
        $inputEmail.css('border','2px solid hsl(0, 93%, 68%)')
        $imgError.css('visibility','visible')
        $txtError.css('visibility','visible').css('color','hsl(0, 93%, 68%)') 
        $txtError.html(message)
    }

    // On click, remove all errors
    $inputEmail.on('click', function (){
        $inputEmail.css('border','1px solid hsl(0, 6%, 24%)')
        $imgError.css('visibility','hidden')
        $txtError.css('visibility','hidden')        
    })

    // Validate if input is Empty
    $btnSend.on('click', function(){
        if( $inputEmail.val().length === 0 ){           
            inputInvalid()                      
        }
    })


    // Validate email 
    $inputEmail.blur(function (){
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if(testEmail.test(this.value)){
            $txtError.html('Message Sent').css('color','green')
            $inputEmail.css('border','2px solid green')
            $txtError.css('visibility','visible')   
        }else{
            inputInvalid('Please provide a valid email') 
            $txtError.css('visibility','visible')             
        }
    })

})