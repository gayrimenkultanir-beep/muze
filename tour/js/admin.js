export function doLog(){

  const pass = document.getElementById('ap').value;

  if(pass === 'darussifa1488'){
    document.getElementById('acon').classList.add('on');
  } else {
    alert('Şifre yanlış');
  }
}
