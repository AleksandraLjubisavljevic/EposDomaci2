function rezervacija() {
    let x = document.forms["myform"]["firstname"].value;
    let y=document.forms["myform"]["lastname"].value;
    let z=document.forms["myform"]["date"].value;
    let k=document.forms["myform"]["time"].value;
    if(x=="" || y=="" || z.toString()==""|| k==""){
        return false;

    }
    else{
    alert("Uspešno ste rezervisali. Očekujemo vas!");
    }
  }

  function viserezervacija(){
      alert("Za više rezervacija ili iznajmljivanje celog objekta kontaktirajte nas.")
  }
