
  document.getElementById('mainPage').style.display = 'block';
 
  function selectRole(card) {
    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    document.getElementById('roleBtn').classList.add('ready');
  }
 
  function showRolePage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('rolePage').style.display = 'flex';
  }
 
  document.querySelectorAll('.btn-p, .btn-s, .nav-cta, .cta-p, .cta-s').forEach(btn => {
    btn.addEventListener('click', showRolePage);
  });
