export function goTo(id){
  const o = document.getElementById('ol');

  o?.classList.add('on');

  setTimeout(()=>{
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');

    o?.classList.remove('on');
    window.scrollTo(0,0);
  },280);
}

export function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}
