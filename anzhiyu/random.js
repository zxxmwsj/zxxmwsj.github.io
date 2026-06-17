var posts=["articles/2026-06-17/","articles/2026香港银行开户终极指南：汇丰、中银、ZA Bank 怎么选？/","articles/Webshare代理服务深度测评：性价比之王，低成本尝试住宅ip首选/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };