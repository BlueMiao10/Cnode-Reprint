<template>
  <div id="aside">
    <div class="panel">
      <div class="inner ads">
        <a
          href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs"
          target="_blank">
          <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""/>
        </a>
        <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank" data-label="qiniu-sidebar">
          <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""/>
        </a>
        <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank">
          <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
        </a>
      </div>
    </div>
    <ol class="panel">
      <li class="header">
        <span class="col_fade">友情社区</span>
      </li>
      <li class="inner">
        <ol class="friendship-community">
          <li>
            <a href="https://ruby-china.org/" target="_blank">
              <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""/>
            </a>
          </li>
          <li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt=""/>
            </a>
          </li>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="//static2.cnodejs.org/public/images/phphub-logo.png" alt=""/>
            </a>
          </li>
          <li>
            <a href="https://testerhome.com/" target="_blank">
              <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""/>
            </a>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>


<style lang="scss" scoped>
@media screen and (max-width: 1050px) {
  #aside {
    display: none;
  }
}

.panel {
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #121212;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  .sep10 {
    margin-bottom: 10px;
  }
}

.col_fade {
  display: inline-block;
  padding-bottom: 10px;
  margin-bottom: 4px;
}

.friendship-community {
  img {
    width: 300px;
    height: 100px;
    box-shadow: 0 0 0 1px rgba(34, 34, 34, 0.05);
  }

}
</style>
