const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');

    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabContents.forEach(c => c.classList.remove('show'));
    document.getElementById(target).classList.add('show');
  });
});
