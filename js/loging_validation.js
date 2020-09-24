function validate()
{

	let f=false;
	let name=$('#name_field').val();
	console.log(name)

		if(name=='' || name==undefined)
		{


			$('.name-msg-field')
			 .html('Name is Required !! ')
			 .addClass('text-danger');
			 f=false;
		}
		else
		{
	
			$('.name-msg-field')
			 .html('OK ')
			 .removeClass('text-danger')
			 .addClass('text-success'); 
			 
			}

//Email Validation
		let email=$('#email_field').val();
		console.log(email)
		let exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(email== ""|| email==undefined )
		{
			$(".email-msg-field")
			  .html('Email is required !!')
			  .addClass('text-danger');
			  f=false;
		}
		
		 else if(exp.test(email)==false)
		{
		 $('.email-msg-field')
			.html('Invalid Email ,Email format (Example@gmail.com) ')
			.addClass('text-danger');
			f=false;
		}

		else
		{
		
			$('.email-msg-field')
			 .html('OK ')
			 .removeClass('text-danger')
			 .addClass('text-success'); 
			 f=true; 
		}
//Phone Number Validation....

		let phone=$('#phone_field').val();
		console.log(phone)
		var phonevalid = /^\d{10}$/;
		
		if(phone== ""|| phone==undefined )
		{
			$(".phone-msg-field")
			  .html('Phone Number is required !!')
			  .addClass('text-danger');
			  f=false;
		}
		
		 else if(phonevalid.test(phone)==false)
		{
		 $('.phone-msg-field')
			.html('Invalid Phone Number ')
			.addClass('text-danger');
			f=false;
		}

		else
		{
		
			$('.phone-msg-field')
			 .html('OK ')
			 .removeClass('text-danger')
			 .addClass('text-success'); 
			 f=true; 
		}
	

// 		//password validation....

		let password=$('#Password_field').val();
		let passcompare= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		//let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
		if(password== ""|| password==undefined)
		{
			$(".password-msg-field")
			  .html("Password is required")
			  .addClass('text-danger');
			  f=false;
		}
		 else if(passcompare.test(password)==false)
		{
		 $('.password-msg-field')
			.html('Invalid Password,it must contain atleast 1 Uppercase char,1 Lowercase,1 special char ,1 digit and length must be in 6-20 char')
			.addClass('text-danger');
			f=false;
		}

		else
		{
		
			$('.password-msg-field')
			 .html('OK ')
			 .removeClass('text-danger')
			 .addClass('text-success'); 
			 f=true; 
		}



//confirm password Validation....


		let confirm_pass=$('#re_password_filed').val();
		console.log(confirm_pass)
			if(confirm_pass==""|| confirm_pass==undefined )
			{
				$(".repassword-msg-field")
				  .html('confirmation Password is required !!')
				  .addClass('text-danger');
				  f=false;
			}
			
	
			 else if(password==(confirm_pass)==false)
			{
				 $('.repassword-msg-field')
				.html('Password do not Match !! ')
				.addClass('text-danger');
				f=false;
			}
			else
			{
			
				$('.repassword-msg-field')
				.html('OK ')
				.removeClass('text-danger')
				.addClass('text-success'); 
				f=false; 
			}





	
			f=false;
	
			return f; 
}
		











	

