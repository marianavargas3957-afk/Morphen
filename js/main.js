(function(){
  var container = document.getElementById('heroParticles');
  if(!container) return;
  for(var i = 0; i < 25; i++){
    var p = document.createElement('div');
    p.className = 'particle';
    var size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.opacity = Math.random() * 0.5 + 0.3;
    container.appendChild(p);
  }
})();
(function(){
  var slider=document.getElementById('slider'),handle=document.getElementById('handle'),
      clip=document.getElementById('beforeClip'),dragging=false;
  function update(x){
    var r=slider.getBoundingClientRect(),p=Math.max(0,Math.min(1,(x-r.left)/r.width));
    handle.style.left=(p*100)+'%';clip.style.width=(p*100)+'%';
  }
  slider.addEventListener('mousedown',function(e){dragging=true;update(e.clientX)});
  document.addEventListener('mousemove',function(e){if(dragging)update(e.clientX)});
  document.addEventListener('mouseup',function(){dragging=false});
  slider.addEventListener('touchstart',function(e){dragging=true;update(e.touches[0].clientX)},{passive:true});
  slider.addEventListener('touchmove',function(e){if(dragging){e.preventDefault();update(e.touches[0].clientX)}},{passive:false});
  slider.addEventListener('touchend',function(){dragging=false});
})();
(function(){
  document.querySelectorAll('.faq-item').forEach(function(item){
    item.querySelector('.faq-q').addEventListener('click',function(){
      var open=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open')});
      if(!open)item.classList.add('open');
    });
  });
})();
(function(){
  var els=document.querySelectorAll('.reveal'),
      obs=new IntersectionObserver(function(entries){
        entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
      },{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
  els.forEach(function(el){obs.observe(el)});
})();
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var id=this.getAttribute('href');
    if(id.length>1){var t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}
  });
});
document.getElementById('videoBtn').addEventListener('click',function(){alert('Video player would open here.')});
(function(){
  var btn=document.getElementById('signInBtn');
  function upd(){btn.style.display=window.innerWidth>=768?'inline-flex':'none'}
  upd();window.addEventListener('resize',upd);
})();
