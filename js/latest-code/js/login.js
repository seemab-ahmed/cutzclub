const proBtn     = document.getElementById('proBtn');
const clientBtn  = document.getElementById('clientBtn');
const roleInput  = document.getElementById('roleInput');
const email      = document.getElementById('email');
const password   = document.getElementById('password');
const loginBtn   = document.getElementById('loginBtn');
const form       = document.getElementById('loginForm');
const err        = document.getElementById('err');
const togglePw   = document.getElementById('togglePw');

const savedRole = localStorage.getItem('cc_role');
if (savedRole === 'client') setRole('client');

proBtn.addEventListener('click', ()=> setRole('professional'));
clientBtn.addEventListener('click', ()=> setRole('client'));

function setRole(role){
  const isPro = role === 'professional';
  proBtn.setAttribute('aria-pressed', String(isPro));
  clientBtn.setAttribute('aria-pressed', String(!isPro));
  roleInput.value = role;
  localStorage.setItem('cc_role', role);
  email.placeholder    = isPro ? 'Email (Pro account)' : 'Email (Client account)';
}

function validate(){
  const emOK = email.validity.valid;
  const pwOK = password.value.length >= 6;
  loginBtn.disabled = !(emOK && pwOK);
  err.style.display = 'none';
}
email.addEventListener('input', validate);
password.addEventListener('input', validate);
validate();

togglePw.addEventListener('click', ()=>{
  const shown = password.type === 'text';
  password.type = shown ? 'password' : 'text';
  togglePw.textContent = shown ? 'Show' : 'Hide';
  togglePw.setAttribute('aria-label', shown ? 'Show password' : 'Hide password');
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if (loginBtn.disabled){
    err.style.display = 'block';
    return;
  }
  const payload = {
    role: roleInput.value,
    email: email.value.trim(),
    password: password.value
  };
  console.log('Submitting login:', payload);
  const next = payload.role === 'professional' ? '/dashboard/pro' : '/dashboard/client';
  window.location.href = next;
});

[proBtn, clientBtn].forEach(btn=>{
  btn.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setRole(btn === proBtn ? 'client' : 'professional');
    }
  });
});
