$(document).ready(function(){
    $("#formemail").validate({
            rules: {
            "email":{ 
                required: true  
            },
            "first":{
                required: true
            },
            "last":{
                required: true,
            }},
        messages:{
            "email":{
                required: "Please enter your email."
            },
            "first":{
                required: "Please enter your first name."
            },
            "last":{
                required: "Please enter your last name."
            }}
    
    });
    });

    $(document).ready(function(){
        $("#formcovenantenforcement").validate({
                rules: {
                "address":{ 
                    required: true  
                },
                "description":{
                    required: true
                },
                "first":{
                    required: true
                },
                "last":{
                    required: true
                },
                "phone":{
                    required: true
                },
                "email":{
                    required: true,
                }},
            messages:{
                "address":{
                    required: "Please enter your address."
                },
                "description":{
                    required: "Please describe complaint or request."
                },
                "first":{
                    required: "Please enter your first name."
                },
                "last":{
                    required: "Please enter your last name."
                },
                "phone":{
                    required: "Please enter your phone number."
                },
                "email":{
                    required: "Please enter your email."
                }}
        
        });
        });