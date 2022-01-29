<template>
  <div class="asd">
        <!-- 头部模块开发start -->
    <header>
        <div class="header">
            <div class="img">
                <img src="./images/backdrop.jpg" alt="">
            </div>
            <!-- 搜索模块start -->
            <div class="search-index">
                <div class="search">搜索：您要的机器</div>
                <a href="#" class="user">我的账单</a>
            </div>
            <!-- 搜索模块ent -->
            <div class="rent">
                <div class="one">新农重器 <span style="padding-left:70px">限时八折起</span></div>
                <div class="two">最新机器发布</div>
                <a href="javascript:;" class="header_login">
                    <span>立即查看</span>
                </a>
                <div class="images">
                    <img src="./images/rent.jpg" alt="">
                </div>
            </div>
        </div>
    </header>

    <!-- 测导航栏模块start -->
    <div class="banner">
        <ul class="subnav-entry ">
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon "></span>
                    <span>有息分期</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon "></span>
                    <span>财产管理</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon "></span>
                    <span>财产保护</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon "></span>
                    <span>无息分期</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon "></span>
                    <span>政府补贴</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon "></span>
                    <span>小金卡</span>
                </a>
            </li>


        </ul>
    </div>
    <!-- 结束end -->

    <!-- 底部模块start -->
    <footer>
        <div class="footer">
            机器分期 &nbsp; 按需支付
        </div>
        <!-- 局部导航栏 -->
        <ul class="local-nav ">
            <li style="background-color: #fce470;">
                <a href="# " title="抵押快贷 ">
                    <span class="local-nav-icon-icon1 "></span>
                    <span>农租交易</span>
                    <span class="xiaozi">门槛低，免抵押，免担保</span>
                </a>
            </li>
            <li style="    background-color: #95d7f0;">
                <a href="# " title="高额快贷 ">
                    <span class="local-nav-icon-icon2 "></span>
                    <span>消费卷</span>
                    <span class="xiaozi">最高可贷100万元</span>
                </a>
            </li>
            <li style="    background-color:#7aee7a;">
                <a href="# " title="0利息 ">
                    <span class="local-nav-icon-icon3 "></span>
                    <span>0利息</span>
                    <span class="xiaozi">1万，月费50元起</span>
                </a>
            </li>
           
        </ul>
        <ul class="local-nav " style="height:150px;padding-bottom:60px;">
             <li style="background-color: #f6c8f2">
                <a href="# " title="灵活还款 ">
                    <span class="local-nav-icon-icon4 "></span>
                    <span>先用后还</span>
                    <span class="xiaozi">还款灵活，最高可贷36期</span>
                </a>
            </li>
            <li style="    background-color: #b2f4e8;">
                <a href="# " title="我的贷款 ">
                    <span class="local-nav-icon-icon5 "></span>
                    <span>支付方式</span>
                    <span class="xiaozi">条理清晰，随时查看</span>
                </a>
            </li>
        </ul>
    </footer>
    <!-- 底部模块end -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter";
export default {
components:{
    CommonFooter
}
}
</script>

<style lang="scss" scoped>
body {
    max-width: 540px;
    min-width: 320px;
    margin: 0 auto;
    font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
    color: #000;
    background: #f2f2f2;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    height: 9999px;
}

* {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: #222;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

img {
    width: 100%
}


/* 搜索模块 */

.search-index {
    z-index: 999;
    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    /* 固定的盒子应该有宽度 */
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    min-width: 320px;
    max-width: 540px;
    height: 44px;
    /* background-color: pink; */
    background-color: #f6f6f6;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.search {
    position: relative;
    font-size: 12px;
    line-height: 24px;
    color: #666;
    height: 26px;
    border: 1px solid #ccc;
    flex: 1;
    margin: 7px 10px;
    padding-left: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.search::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: url(./images/sprite.png) no-repeat 0 0;
    background-size: 21px auto;
}

.user {
    width: 60px;
    height: 44px;
    //  background-color: purple; 
    font-size: 12px;
    text-align: center;
    color: #2eaae0;
}

.user::before {
    content: "";
    display: block;
    width: 22px;
    height: 23px;
    background: url(./images/sprite.png) no-repeat 0 -76px;
    background-size: 21px auto;
    margin: 4px auto -2px;
    margin-bottom: 1px;
}

.one {
    font-size: 24px;
    color: #fff;
    margin-top: -160px;
    margin-left: 25px;
}

.two {
    color: #fff;
    margin-top: 10px;
}

.header_login {
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: pink;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    margin-top: 10px;
}

.images {
    width: 50px;
    height: 30px;
    background-color: pink;
    margin-top: -100px;
    margin-left: 180px;
}


/* 测导航栏 */

.banner {
    margin-top: 157px;
}

.subnav-entry {
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: #fff;
    margin: 0 4px;
    flex-wrap: wrap;
    padding: 5px 0;
    box-shadow: 2px 2px rgba(0, 0, 0, .2)
}

.subnav-entry li {
    flex: 33%;
    height: 80px;
}

.subnav-entry a {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subnav-entry-icon {
    width: 28px;
    height: 28px;
    background-color: pink;
    margin-top: 16px;
    background: url(./images/subnav-entry.png) no-repeat -1px -3px;
    background-size: 28px auto;
}


/* 底部模块 */

.footer {
    margin-top: 20px;
    margin-left: 10px;
    font-size: 24px;
    color: black;
}


/* 局部导航栏 */

.local-nav {
    display: flex;
    // height: 64px;
    background-color: #fff;
    margin: 3px 4px;
    border-radius: 8px;
}

.local-nav li {
    margin-top: 20px;
    margin-left: 3px;
    flex: 1;
    border-radius: 5%;
}

.local-nav a {
    display: flex;
    flex-direction: column;
    /* 侧轴居中对齐  因为是单行*/
    align-items: center;
}
.xiaozi{
        margin-top: 10px;
    font-size: 13px;
    line-height: 24px;
}

.local-nav li [class^=local-nav-icon] {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    margin-left: 8px;
    background-color: pink;
    margin-top: 8px;
    background: url(./images/localnav-bg.png) no-repeat -8px -6px;
    background-size: 32px auto;
}

.local-nav li .local-nav-icon-icon2 {
    background-position: 0 -32px;
}

.local-nav li .local-nav-icon-icon3 {
    background-position: 0 -64px;
}

.local-nav li .local-nav-icon-icon4 {
    background-position: 0 -96px;
}

.local-nav li .local-nav-icon-icon5 {
    background-position: 0 -128px;
}
</style>