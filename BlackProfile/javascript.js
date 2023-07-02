function redirectToWebsite() {
    window.location.href = "https://example.com"; // 将 "https://example.com" 替换为你想要跳转的网站的 URL
  }
  
  // 获取按钮元素
  var button = document.getElementById("myButton"); // 将 "myButton" 替换为你按钮的 ID
  
  // 添加点击事件监听器
  button.addEventListener("click", redirectToWebsite);