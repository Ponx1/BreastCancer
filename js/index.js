var allVar = true;

function analise(){
  let dia = 0;
  let htmlString = "";

  let texture     = $("#texture").val();
  let area        = $("#area").val();
  let compactness = $("#compactness").val();
  let concabity   = $("#concabity").val();
  let symmetry    = $("#symmetry").val();
  let frac        = $("#frac").val();

  let radius      = $("#radius").val();
  let perimeter   = $("#perimeter").val();
  let smoothness  = $("#smoothness").val();
  let concavePoints= $("#concavePoints").val();

  if(allVar){
    dia = 7.36+2.05*radius-0.38*texture+0.07*perimeter-0.04*area-76.43*smoothness+1.46*compactness-8.47*concabity-66.82*concavePoints-16.28*symmetry+68.38*frac;
  }else{
    dia =  19.85 - 0.28*texture - 0.011*area - 12.79*compactness - 17.232*concabity - 28.78*symmetry + 31.80*frac;
  }

  let expAux = Math.pow(2.71,dia);

  let result = expAux/(1+expAux);

  if(result > 0.5){
    htmlString = "<div id='good'><span class='fa fa-heart'></span><br><b>Benigno</b><br> Se recomienda visitar a un especialista<br>el valor exacto es: "+result+"</div>";
  }else{
    htmlString = "<div id='bad'><span class='fa fa-plus-square'></span><br><b>Maligno</b><br>Se recomienda visitar a un especialista<br>el valor exacto es: "+result+"</div>";
  }

  $("#result").html(htmlString);
}

function toggleExtra(){
  $("#moreVariables").toggle();
  allVar = !allVar;
}