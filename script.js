const showNews = id => {
  document.getElementById(id).style.display = 'block';
  document.getElementById('background').style.display = 'block';
};

const hideNews = () => {
  const blocks = Array.from(document.getElementsByClassName('news-block'));
  blocks.forEach(block => block.style.display = 'none');
  document.getElementById('background').style.display = 'none';
};