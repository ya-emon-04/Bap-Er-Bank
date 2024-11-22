let btn_d=document.getElementById("btn_d");
btn_d.addEventListener('click', () =>{
    let d_input=parseFloat(document.getElementById("d_input").value)
    
    if(d_input >=0)
    {
        
    //  Input adding with Withdraw balance
    let deposit=parseFloat(document.getElementById("deposit").innerHTML);

    let total_deposit= deposit + d_input;

    document.getElementById("deposit").innerHTML=total_deposit.toFixed(2);

    //  Input adding with main balance
    let main_balance =parseFloat(document.getElementById("main_balance").innerHTML);
    let total_main_balance= main_balance + d_input;

    document.getElementById("main_balance").innerHTML=total_main_balance.toFixed(2);


    //  it will make the input empty after taking 1st input
    document.getElementById("d_input").value=" ";

    }
    else
    {
        alert("Please enter a valid number or positive  number")
    }
})

let btn_w =document.getElementById("btn_w");
btn_w.addEventListener('click', () =>{

    let w_input =parseFloat(document.getElementById("w_input").value);
    let main_balance =parseFloat(document.getElementById("main_balance").innerHTML);

    if(w_input >= 0){
        if(main_balance >= w_input){
            

          // Adding input with withdraw balance
    let withdraw= parseFloat(document.getElementById("withdraw").innerHTML);
    let total_withdraw = w_input  + withdraw;

    document.getElementById("withdraw").innerHTML=total_withdraw.toFixed(2);

       // Substracking input from main balance
       let main_balance =parseFloat(document.getElementById("main_balance").innerHTML);
       let total_main_balance= main_balance - w_input;

      document.getElementById("main_balance").innerHTML=total_main_balance.toFixed(2);
      document.getElementById("w_input").value =" ";
    }
    else{
        alert(" Bank ot to tiya nai  😒")
    }


        }
        
        
     else
    {
        alert("Please enter a valid number or positive  number")
    }

})











