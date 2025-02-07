var userLang = navigator.language || navigator.userLanguage; 
  if (userLang.includes('zh')) {
    window.location.href = 'index_zh.html';
  } else if (userLang.includes('ko')) {
    window.location.href = 'index_ko.html';
  } else if (userLang.includes('ja')) {
    window.location.href = 'index_jp.html';
  else {
    window.location.href = 'index_en.html'; // 默认英语
  }