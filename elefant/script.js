
fetch("https://elephant-api.herokuapp.com/elephants")
  .then(x => x.json())
  .then(y => megjelenit(y))
  


  function megjelenit(adatok){
    console.log(adatok)
    var sz="";
     var kepszam=1;
    for (elem of adatok){

        sz+='<div class="col-sm-3" style="padding:20px">';
        sz+='<div class="szegely">';
        sz+=elem.name;
        sz+='<br>';
        sz+='<img id="'+kepszam+'" data-toggle="modal" data-target="#myModal" src="'+elem.image+'" alt="Img'+kepszam+'" style="width:200px;padding:10px;cursor:pointer">';
        sz+='<br>';
        sz+='<a target="_blank" id="link" href="'+elem.wikilink+'">Wikilink</a>';
        sz+='</div>';
        sz+='</div>';
        kepszam++;

        

      }
    document.getElementById("gridek").innerHTML=sz; 

  }
