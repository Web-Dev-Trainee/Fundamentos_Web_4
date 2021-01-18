const  ano_bissexto  =  function ()  {

    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        write ("O ano é bissexto")
    }
    else{
        write ("O ano não é bissexto")
    }
}