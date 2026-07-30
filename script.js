// Mobile nav toggle
document.getElementById('mobileToggle').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('mobile-open');
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    const group = item.closest('.faq-category');
    group.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null;});
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// Scroll reveal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); } });
  }, {threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
}

// Contact form — submits silently via Web3Forms
const contactForm = document.getElementById('contactForm');
if(contactForm){
  const submitBtn = document.getElementById('contactSubmitBtn');
  const statusEl = document.getElementById('formStatus');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    statusEl.style.display = 'none';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(contactForm)
    })
      .then(res => res.json())
      .then(data => {
        statusEl.style.display = 'block';
        if(data.success){
          statusEl.style.color = 'var(--green)';
          statusEl.textContent = "Thanks — your message was sent. We'll get back to you within one business day.";
          contactForm.reset();
        } else {
          statusEl.style.color = 'var(--red)';
          statusEl.textContent = 'Something went wrong sending your message. Please try again or email admin@conleybookkeepingllc.com directly.';
        }
      })
      .catch(() => {
        statusEl.style.display = 'block';
        statusEl.style.color = 'var(--red)';
        statusEl.textContent = 'Something went wrong sending your message. Please try again or email admin@conleybookkeepingllc.com directly.';
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
  });
}
