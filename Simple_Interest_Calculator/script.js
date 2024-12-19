function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    // ensure that the input taken as “No. of Years” is converted into an actual year (e.g. 2022).
    var year = new Date().getFullYear() + parseInt(years);

    // Validation for the principal
    if(principal == 0 || principal < 0)
    {
        alert("Enter a positive number !");
        // after clicking on ok of alert , it take the user back to the principal(amount) input
        document.getElementById("principal").focus();
    }
    else 
    {
        // show the result after we click on compute .
       result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
}
        