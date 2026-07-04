var posts=["articles/Starryblu 注册与使用指南：全球账户、多币种支付、银行卡申请全流程整理/","articles/Webshare代理服务深度测评：性价比之王，低成本尝试住宅ip首选/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };