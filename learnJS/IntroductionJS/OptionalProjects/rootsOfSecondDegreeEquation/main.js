function root(){
    var a = document.querySelector("#value_a").value;
    var b = document.querySelector("#value_b").value;
    var c = document.querySelector("#value_c").value;

    var delta = (b*b - 4*a*c);

    if (delta > 0){
        var showRoot = document.querySelector(".showRoot");
        showRoot.innerHTML = "<p> Delta is positive and we have two roots </p>X1 = " + (((b*-1)-(Math.sqrt(delta)/2*a))/2*a) + "<br>X2 = " + (((b*-1)+(Math.sqrt(delta)/2*a))/2*a);
    }
    else if (delta == 0){
        var showRoot = document.querySelector(".showRoot");
        showRoot.innerHTML = "<p> Delta is equal zero and we have one root </p>X = " + (((b*-1)/2*a));
    }
    else{
        var showRoot = document.querySelector(".showRoot");
        showRoot.innerHTML = "<p> Delta is less zero means we don't have solution in R </p>"
    }
}