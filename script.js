function play() {
  var startDisable = document.getElementById('start');
  startDisable.disabled=true;
  var  timer = setInterval("flash()", 2000)
}

function stop() {
  window.location.reload()
}

function flash() {
  // reset
  var elements=document.getElementsByClassName('block');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor="";
  }
   // alert(elements.length)
   // 3 random number
  var array=[];
  var i=0;
  while (i<3) {
    var num= Math.floor(9*Math.random());
    if (array.includes(num)) {
      continue;
    }
    array[i]=num;
    i++;
  }
  // alert(array)
  // random color
  var color=[];
  color[3]="#fea500";
  var i=0;
  while (i<3) {
    var num= Math.floor(0xFFFFFF*Math.random());
    if (color.includes(num)) {
      continue;
    }
    color[i]='#'+num.toString(16);
    i++;
  }
  // alert(color)
  // set background color
  for (var i = 0; i < array.length; i++) {
    elements[array[i]].style.backgroundColor=color[i];
  }
}
