<template>
  <div class="home">
    <div id="main_container">
      <div>
        <div class="androidpage">
          <div><img class="goback" @click="$router.push('/')" src="@/images/stable/hlw/ic_back.png" /></div>
          <div class="androidpage-info">
            <div>因App包含成人内容，容易被杀毒软件误判为恶</div>
            <div>意软件。本App绝对不含任何恶意程序，</div>
            <div>请放心安装使用</div>
          </div>
          <div class="androidpage-baodu">点此查看【恶性病毒】提示解决方法</div>
          <div style="position: relative">
            <div class="androidpage-kefubtn">在线客服帮助您</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

@media screen and (min-width: 500px) {
  html {
    font-size: 100px;
  }
}
@media screen and (max-width: 500px) {
  html {
    font-size: 100px;
  }
}
@media screen and (max-width: 415px) {
  html {
    font-size: 70px;
  }
}
@media screen and (max-width: 330px) {
  html {
    font-size: 60px;
  }
}

.home {
  width: 5.40rem;
  margin: 0 auto;
  background-image: url(~@/images/stable/hlw/img_1.png);
  background-repeat: no-repeat;
  padding-top: 0rem;
}
.androidpage {
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    background-image: url(~@/images/stable/hlw/img_android.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 12.573rem;
}

.goback {
    position: absolute;
    left: 0.2rem;
    top: 0.3rem;
    width: 0.3rem;
  }
  .androidpage-info {
    position: absolute;
    top: 2.9rem;
    width: 10rem;
    color: #8974AC;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.3rem;
    left: 50%;
    transform: translateX(-5rem);
  }
  .androidpage-baodu {
    position: absolute;
    top: 4.093rem;
    width: 10rem;
    text-align: center;
    color: #C77E4C;
    font-size: 0.18rem;
        left: 50%;
    transform: translateX(-5rem);
}
.androidpage-kefubtn {
    position: absolute;
    width: auto;
    top: 11.44rem;
    left: 3.267rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    padding: 0.08rem 0.2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #AA8AFF;
    font-size: 0.18rem;
    border-radius: 1.5rem;
    background-color: white;
    border: 0.01rem solid #A987FF;
}
</style>
