//this variable commands the element 'name' to be set to focus when page is loaded 
let name=document.getElementById('name');
    name.focus();


    // this function will alllow the job role element to give you options of what job you are looking for and if chosen "other" then it will be 
    //displayed on the other side if selected and will be focused on instead of the regular job role options.
   let jobRole=document.getElementById('title'); 
    let otherJobRole=document.getElementById('other-job-role');

   otherJobRole.style.display='none';

   jobRole.addEventListener('change', (e) => {
       if (e.target.value==='other') {
           otherJobRole.style.display='block';
       }else{
           otherJobRole.style.display='none';
       }
       
   });

   //this function will allow you to focus on each area in the shirt section. This involves picking a size, picking the type of design and shirt colors.
   //the shirt colors are divided up by design through the event listnener. As you pick the design the colors are seperated into the appropriate group 
   //they belong to. Once a design has been picked that specific design and its colors will be displayed , while the other options will be hidden
   //by the removeAttribute element.
   
   let design = document.getElementById('design');
   let color = document.getElementById('color');
   let colorOption = document.getElementById('color').children;
   let shirtColorsDiv = document.getElementById('shirt-colors');

  
    shirtColorsDiv.style.display='none';

    design.addEventListener('change',(e) => {
        
        shirtColorsDiv.style.display='';    

for(let i=1; i < colorOption.length; i++){
    let value=e.target.value;
let shirtTheme = document.getElementById("color")[i].getAttribute("data-theme");

if (value === shirtTheme) {
    color[i].removeAttribute('hidden');

}else{
        color[i].setAttribute('hidden','hidden');
        color.selectedIndex = 0;
}

};

});

// this function allows you to select which activities seminar you would like to take along with giving you the price of what each activity will
//be. ALso will continue to add more if you choose to do multiples of classes.
    let registerForActivities=document.getElementById('activities');
    let activitiesCost=document.getElementById('activities-cost');
    let totalCost=0;


    registerForActivities.addEventListener('change', (e) => {
        let data_cost = e.target.getAttribute('data-cost');
    
        data_cost = +data_cost;

        if (e.target.checked){
            totalCost= totalCost + data_cost;
        }else{
                totalCost= totalCost - data_cost;
        }
        activitiesCost.innerHTML= `Total: $${totalCost}`;
    });    

    // this function allows you to pick which payment method you are using to purchase the things you are wanting in the activities package. 
    //by doing else and if statements it gives you options and once an option is picked the others disappear while form ogf the payment choden continues
    
    let paymentMethod=document.getElementById('payment');
    let creditCard=document.getElementById('credit-card');
    let paypal=document.getElementById('paypal');
    let bitcoin=document.getElementById('bitcoin');
    let secondChild=paymentMethod.children[1];
 
        paypal.style.display='none';
            bitcoin.style.display='none';

secondChild.setAttribute('selected','selected');

    paymentMethod.addEventListener('change', (e)=> {
    
        if (e.target.value==='credit-card'){
            creditCard.style.display='block'; 
            paypal.style.display='none';
            bitcoin.style.display='none';  
        }else if
            (e.target.value==='paypal') {
                paypal.style.display='block';
                creditCard.style.display='none';
                bitcoin.style.display='none';

            }else if
                (e.target.value==='bitcoin'){
                bitcoin.style.display='block';
                creditCard.style.display='none';
                paypal.style.display='none';
 }

});

let email=document.getElementById('email');
let cardNumber=document.getElementById('cc-num');
let zip=document.getElementById('zip');
let cvv=document.getElementById('cvv');
let form=document.querySelector('form');

            form.addEventListener('submit', (e) => {

    let nameValue= name.value;
    let nameTest= /^[a-zA-Z,.-]+$/i.test(nameValue);
        console.log(nameValue);

    let emailValue= emailAddress.value;
    let emailTest= /^[a-zA-Z0-9, !#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:|.[a-zA-Z0-9]+)$/i.test(emailValue);

    let cardValue= cardNumber.value;
    let cardNumberTest= /^\b\d(13,16)\b$/.test(cardValue); 

    let zipValue= zipCode.value;
    let zipTest= /^\d(5)$/.test(zipValue);

    let cvvValue=cvv.value;
    let cvvTest= /^\d(3)$/.test(cvvValue);


 if (nameTest) {
     e.preventDefault();
     name.parentNode.classList.remove('valid');
     name.parentNode.classList.add('not-valid');
     name.parentNode.lastElementChild.style.display='block';

 }else{
   
    name.parentNode.classList.remove('not-valid');
    name.parentNode.classList.add('valid');
    name.parentNode.lastElementChild.style.display='none';
 }
 
 

 let numberChecked=0;
  
    for(let i = 0; i< activities.length; i++) {
      if (activities[i].checked === true) {
          numberChecked += 1;
          registerForActivities.classList.remove('not-valid');
          registerForActivities.classList.add('valid');
          registerForActivities.lastElementChild.style.display ='none';
      }
    }
        if (numberChecked === 0) {
            e.preventDefault(); 
    registerForActivities.classList.remove('valid');
    registerForActivities.classList.add('not-valid');
    registerForActivities.lastElementChild.style.display='block';
        }
    

    let emailErrorSpan= document.getElementById('email-hint');
     
    if (emailValue==='') {
        e.preventDefault();        

        emailAdrress.parentNode.classList.remove('valid');
        emailAddress.parentNode.classList.add('not-valid');
        emailErrorSpan.textContent="In order to move forward an email address is required";
        emailErrorSpan.style.display='block';

    }else if (emailTest) {
        e.preventDefault(); 
        emailAddress.parentNode.classLsit.remove('valid');
        emailAddress.parentNode.classList.add('not-valid');
        emailErrorSpan.textCont='Email must be in the correct format';
        emailErrorSpan.style.display='block';

    }   else {
        emailAddress.parentNode.classList.remove('not-valid');
        emailAddress.parentNode.classList.add('valid');
        emailAddress.parentNode.lastElementChild.style.display='none';

    } 
    
    if (secondChild.selected===true) {
        
        if (cardNumberTest) {
            e.preventDefault(); 
            cardNumber.parentNode.classList.remove('valid');
            cardNumber.parentNode.classList.add('not-valid');
            cardNumber.parentNode.lastElementChild.style.display='block';

        }else{
            cardNumber.parentNode.classList.remove('not-valid');
            cardNumber.parentNode.classList.add('valid');
            cardNumber.parentNode.lastElementChild.style.display='none';
        }
    
        if (zipTest) {
            e.preventDefault(); 
            zipCode.parentNode.classList.remove('valid');
            zipCode.parentNode.classList.add('not-valid');
            zipCode.parentNode.lastElemetnChild.style.display='block';
        
        }else{
            zipCode.parentNode.classList.remove('not-valid');
            zipCode.parentNode.classList.add('valid');
            zipCode.parentNode.lastElementChild.style.display='none';
        }
         if (cvvTest) {
            e.preventDefault(); 
             cvv.parentNode.classList.remove('valid');
             cvv.parentNode.classList.add('not-valid');
             cvv.parentNode.lastElementChild.style.display='block';

         } else {
             cvv.parentNode.classList.remove('not-valid');
             cvv.parentNode.classList.add('valid');
             cvv.parentNode.lastElementChild.style.display='none';
         }
         
            }
        });
                
        function validInput(element) {
            element.parentElement.classList.remove('not-valid');
            element.parentElement.classList.add('valid');
            element.parentElement.lastElementChild.classList.remove('hint-display');
        }
        function invalidInput(element) {
            element.parentElement.classList.add('not-valid');
            element.parentELement.classList.remove('valid');
            element.parentElement.lastElementChild.classList.add('hint-display');
        } 
    

        let activities= document.querySelector('input[type="checkbox"]');

            console.log(activities);

            for (let i = 0; i < activities.length; i++) {
                activities[i].addEventListener('focus',(e) => {
                    e.target.parentNode.classList.add('focus');
                });
            
            activities[i].addEventListener('blur',(e) => {
                e.target.parentNode.classList.remove('focus');
            });
            };