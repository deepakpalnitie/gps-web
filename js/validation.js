	function validate(obj)
	{
		var str = obj.value;
		if( /[^a-zA-Z\ \/\s]/.test( str ))
		{
			$('#valid_'+obj.id).text('Only Letters');
			vals =  str.substr(0, str.length - 1);
			$('#'+obj.id).val(vals);
			return false;
		}
		else{
			$('#valid_'+obj.id).text('');
		}
		return true;
	}  
	

	function chk_phoneno(obj)
		{
			var phone =obj.value;
			if( /[^0-9\ \/\s]/.test( phone ))
			{
				$('#valid_'+obj.id).text('Only Numbers');
				vals =  phone.substr(0, phone.length - 1);
				$('#'+obj.id).val(vals);
				return false;
			}
			else{
				if(phone.length<10){
				$('#valid_'+obj.id).text('Enter Full Mobile No.');
				return false;
				}else{				
				$('#valid_'+obj.id).text('');
				}
			}
		}
	//chk aadhar no	
	function chk_aadhar(obj)
		{
			var aadhar =obj.value;
			if( /[^0-9\ \/\s]/.test( aadhar ))
			{
				$('#valid_'+obj.id).text('Only Numbers');
				vals =  aadhar.substr(0, aadhar.length - 1);
				$('#'+obj.id).val(vals);
				return false;
			}
			else{
				if(aadhar.length<12){
				$('#valid_'+obj.id).text('Enter Full Aadhar Card No.');
				return false;
				}else{				
				$('#valid_'+obj.id).text('');
				}
			}
		}	
		

		function chk_numbers(obj)
		{
			var num = obj.value;
			 if( /[^0-9\-\/\s]/.test( num ) ) {
				$('#valid_'+obj.id).text('Only Numbers');
				vals =  num.substr(0, num.length - 1);
				$('#'+obj.id).val(vals);
				return false;
			}
			else{
				$('#valid_'+obj.id).text('');
			}
		}
		
		function chk_batchname(obj){
			var batchname = obj.value;
			 if( /[^0-9\-\/\s]/.test( batchname ) ) {
				$('#valid_'+obj.id).text('Only Numbers');
				vals =  batchname.substr(0, batchname.length - 1);
				$('#'+obj.id).val(vals);
				return false;
			}
			else{
				if(batchname.length<9){
				$('#valid_'+obj.id).text('Enter Full Batch');
				return false;
				}else{				
				$('#valid_'+obj.id).text('');
				}
			}
		}
		
		
		
		function chk_amount(obj)
		{
			var num = obj.value;
			 if( /[^0-9.]/.test( num ) ) {
				$('#valid_'+obj.id).text('Only Numbers');
				vals =  num.substr(0, num.length - 1);
				$('#'+obj.id).val(vals);
				return false;
			}
			else{
				$('#valid_'+obj.id).text('');
			}
		}

		 function MoveNext(next_ctrl,_key) {
                /*if (_key == 13) {
                    var _next = document.getElementById(next_ctrl);
                    _next.focus();
                    alert(document.getElementById(next_ctrl).value);
                    return false;
                }*/
             }

         function CalculateAge(obj,obj1,agedisp)
		{
			fecha = obj.value;
        	if(fecha.trim()!='')
        	{
                dob = new Date(fecha);
                var today = new Date();
                var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
                console.log('age='+age);
                if(age==0 || age<0 || age==NaN)
                {
					//alert(age);
				$("#valid_"+obj.id).html("Select Proper Date of Birth");
				$('#'+agedisp).val(0);
                }else {
                	$("#valid_"+obj.id).hide();
                $('#'+agedisp).focus();
                $('#'+agedisp).val(age);
            }
        	}
		
    	}

  	function validatesplchar(obj){
		var textboxname = obj.value;

		if( /[^a-zA-Z0-9\-\/\s]/.test( textboxname ) ) {
			//alert('No Special Characters');
			$('#valid_'+obj.id).text('No Special Characters');
			vals =  textboxname.substr(0, textboxname.length - 1);
			$('#'+obj.id).val(vals);
			return false;
		}
		else{
			$('#valid_'+obj.id).text('');
		}

		return true;     
	}  


		function email_Check(obj){
			var chkemail = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;
			var current_value = obj.value;
			if(!current_value.match(chkemail))
			{
				//alert("Invalid Email Address")
				//vals =  current_value.substr(0, current_value.length - 1);
			   //$('#memberemail').val(vals);
			   $('#valid_'+obj.id).text('Not A valid Email Address');
				
			}
			else{
				$('#valid_'+obj.id).text('');
			}
		}
		
		
		function chk_ifsccode(obj)
	{
		var ifsccode = obj.value;
		 if( /[^a-zA-Z0-9\-\/\s]/.test( ifsccode ) ) {
			$('#valid_'+obj.id).text('Special Characters Not Allowed');
			vals =  ifsccode.substr(0, ifsccode.length - 1);
			$('#'+obj.id).val(vals);
			return false;
		}
		else{
			if(ifsccode.length<11){
			$('#valid_'+obj.id).text('Enter Full IFSC Code');
			return false;
		}else{
			$('#valid_'+obj.id).text('');
		}
		}  
	}
    	
$(document).on('keypress', 'input,select,textarea', function (e) {
   if (e.which == 13) {
       e.preventDefault();
       var $next = $('[tabIndex=' + (+this.tabIndex + 1) + ']');
       console.log(this.tabIndex+$next.length);
       if (!$next.length) {
           $next = $('[tabIndex=1]');
       }else {
       $next.focus();}
   }
});