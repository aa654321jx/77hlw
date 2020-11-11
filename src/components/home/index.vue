<template>
  <div>
    <div class="home">
    <div class="videopage-tabbar">
      <div>
        <img class="videopage-tabbar-logo" src="@/images/stable/hlw/logo.png">
        <div>
          <div class="videopage-tabbar-text1">Huluwa</div>
          <div class="videopage-tabbar-text2">下载并打开进入Huluwa</div>
        </div>
      
      </div>
      
      <div class="videopage-tabbar-btn" @click="$router.push('download')" id="liquid_download_btn">
    </div>
    </div>
      <ul  id="video">
        <li v-for="(item,index) in video" :key="index" >
          <div>
            <img v-show="item.type" :src="item.img">
            <video  controls></video>
          </div>
          <p>
            {{item.title}}
          </p>
        </li>
      </ul>
      <footer>
        <ul>
          <li>
            <div>
              <img src="@/images/stable/hlw/landing_icon_1.png" />
              <div>
                <p>官方网址</p>
                <p>http://77hlw.com</p>
              </div>
            </div>
            <div>
              <a @click="Copy('http://77hlw.com')" href="javascript:;">复制官网连接</a>
            </div>
          </li>
          <li>
            <div>
              <img src="@/images/stable/hlw/landing_icon_2.png" />
              <div>
                <p>官方网址</p>
                <p>http://77hlw.com</p>
              </div>
            </div>
            <div>
              <a target="_blank" href="https://github.com/huluwaservice/webapp/blob/master/README.md">收藏</a>
            </div>
          </li>
          <li>
            <div>
              <img src="@/images/stable/hlw/landing_icon_3.png" />
              <div>
                <p>官方网址</p>
                <p>http://77hlw.com</p>
              </div>
            </div>
            <div>
              <a  target="_blank" href="https://lynnconway.me/huluwa01">加入</a>
            </div>
          </li>
          <li>
            <div>
              <img src="@/images/stable/hlw/landing_icon_4.png" />
              <div>
                <p>官方网址</p>
                <p>huluwaservice@gmail.com</p>
              </div>
            </div>
            <div>
              <a @click="Copy('huluwaservice@gmail.com')" href="javascript:;">复制</a>
            </div>
          </li>
          <li></li>
        </ul>
        <div>
          <p>为避免因官网被封，导致您无法正常观影请收藏</p>
          <p>上列网址，我们第一时间发布最新网址</p>
        </div>
      </footer>
    </div>
    <div class="videopage-float">
        <div class="videopage-float-kefu"><a target="_blank" href="https://kf.mcdz35.com/#/init/JTdCJTIyaHR0cEhvc3QlMjI6JTIyaHR0cHM6Ly9qYy0xLm1jZHozNS5jb20lMjIsJTIyaW1Ib3N0JTIyOiUyMndzczovL2pjLTIubWNkejM1LmNvbSUyMiwlMjJhcHBGbGFnJTIyOiUyMmhsdzF5eWtmJTIyLCUyMmFwaUtleSUyMjolMjJobHcxeXlrZjM0aDEwaHJhc3VkajgxMiUyMiwlMjJzZWNyZXRLZXklMjI6JTIyMTIzZ3VzaGQzOGg0MTIzJTIyLCUyMnRoaXJkVXNlck5hbWUlMjI6JTIyY2xpZW50MTYwNTEyODAyNjA5MSUyMiwlMjJ0aGlyZFVzZXJJZCUyMjoxNjA1MTI4MDI2MDkxLCUyMmZvcldoYXQlMjI6JTIyaGVscCUyMiwlMjJhY3Rpb24lMjI6JTIyc2VydmljZSUyMiwlMjJzb3VyY2VDb2RlVmFsdWUlMjI6JTIyNiUyMiwlMjJ0aXRsZSUyMjolMjIlRTUlQkElOTQlRTclOTQlQTglRTUlOEYlOEQlRTklQTYlODglMjIlN0Q="></a></div>
        <div @click="qrcode=!qrcode" class="videopage-float-promoteqrcode"></div>
        <div class="videopage-float-installsetting" @click="$router.push('download')"></div>
    </div>
    <div v-show="qrcode" class="qrcode" @click="qrcode=!qrcode">
      <img src="@/images/stable/hlw/qrcode.png">
    </div>
  </div>
</template>

<script>
let Hls = require("hls.js");
export default {
  name: "",
  data() {
    return {
      qrcode:false,
      video: [
        {
          type:true,
          img:require("@/images/stable/hlw/xiuxiu.png"),
          title:"双马尾萌妹道具自慰，撩起衣服乳夹道具玩弄，厕所马桶上自摸无毛.mp4",
          url:"https://vvv.weinanwenyuke.com/vback_m/Keideal86/video/20201109/fcd15c6ecbee6a88b52f226f9a15be58_979ecbb520ad2e6acc0fa8b3fbf7167e.json/index.m3u8"
        },
        {
          type:true,
          img:require("@/images/stable/hlw/gg.png"),
          title:"杨幂被摸奶狠操，极品享受",
          url:"https://vvv.weinanwenyuke.com/vback_m/Keideal86/video/20200602/3312b1ed1bf50ec31b51bea771be32cd_8af30ae6e472003c4b7f2f0ed0a5794c.json/index.m3u8"
        },
        {
          type:true,
          img:require("@/images/stable/hlw/ss.png"),
          title:"约了一个大三舞蹈系的，小黑丝一字马",
          url:"https://vvv.weinanwenyuke.com/vback_m/Keideal86/video/20201109/dcd51dca6a887c7219171a43acf0cdd2_1b3695f5fd5a41a15b82c20784747f82.json/index.m3u8"
        },
        {
          type:true,
          img:require("@/images/stable/hlw/tutu.png"),
          title:"仿真飞机杯VS女神小穴情欲爆棚女神轮番上阵艾秋晴子",
          url:"https://vvv.weinanwenyuke.com/vback_m/Keideal86/video/20201110/0338c7784f4132f71b7d7b8c223a6b69_3e5b0ee312864ef1a26d915eb05c57d2.json/index.m3u8"
        }
      ]
      }
  },
  beforeCreate(){


  },
  mounted() {
    let dom=document.querySelectorAll("#video>li video")
    for(let video_key in this.video){
    this.getStream(this.video[video_key].url, dom[video_key]);
    dom[video_key].addEventListener("play",()=>{
      this.video[video_key].type=!this.video[video_key].type
    })
    }
  },
  methods: {
    getStream(source, dom) {
      if (Hls.isSupported()) {
        let vi = dom;
        let hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(vi);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("加载成功");
          vi.video.play();
        });
        hls.on(Hls.Events.ERROR, (event, data) => {
          console.log("加载失败"); // 监听出错事件
        });
      }
    },
    Copy(url){
      let Url2=url
      let oInput = document.createElement('input');
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = 'oInput';
      oInput.style.display='none';
      this.$layer.msg("复制成功");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "./index.css";

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
  padding-top: 1rem;
  /* background-color: #fff1f8; */
  background-image: url(~@/images/stable/hlw/img_1.png);
  background-repeat: no-repeat;
}
@media screen and (max-width: 540px) {
  .home {
    width: 100%;

  }
}
.home > ul li {
  width: 5.20rem;
  background-image: url(~@/images/stable/hlw/bg_blay.png);
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 0.15rem;
}
.home > ul li div {
  height: 2.70rem;
  background-image: url(~@/images/stable/hlw/bg_blay.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 0.23rem 0 0.13rem 0;
  position: relative;
  overflow: hidden;
}
.home > ul li div img{
position: absolute;
top: 0.22rem;
width: 4.72rem;
height: 2.65rem;
border-radius: 0.15rem;
object-fit: cover;
}
.home > ul li video {
  width: 4.72rem;
  border-radius: 0.15rem;
}
.home > ul li p {
  font-size: 0.24rem;
  color: #8974ac;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 0.30rem 0.30rem 0.30rem;
}
.home > ul li p {
  font-size: 0.24rem;
  color: #8974ac;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
footer {
  background-image: url(~@/images/stable/hlw/img_2.png);
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 1.27rem;
  padding-bottom: 0.20rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.18rem;
  color: rgba(137, 116, 172, 0.6);
}
footer>div{
  font-size: 0.18rem;
  margin-bottom: 0.2rem;
}
footer ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.20rem;
}
footer ul li img {
  width: 0.51rem;
  margin-right: 0.20rem;
}
footer ul li > div > div {
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
}
footer ul li > div > div > p:nth-of-type(1) {
  color: #8974ac;
}
footer ul li > div:nth-of-type(1) {
  display: flex;
}
footer ul li > div > a {
  color: #aa8aff;
  font-size: 0.20rem;
  border-radius: 0.50rem;
  background-color: white;
  border: 0.01rem solid #aa8aff;
  padding: 0.12rem 0.35rem;
}
.vl-notify.vl-notify-msg{
  font-size: 0.25rem!important;
  padding: 0.30rem 0.20rem;
}
.videopage-float {
    position: fixed;
    top: 25vh;
    right: 0;
    z-index: 8888;
    height: 3.00rem;
    width: 0.85rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.videopage-float-kefu {
    background-image: url(~@/images/stable/hlw/btn_servise.png);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 0.85rem;
}
.videopage-float-kefu a{
  display: block;
    width: 100%;
    height: 0.85rem;
}
.videopage-float-promoteqrcode {
    background-image: url(~@/images/stable/hlw/btn_code.png);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 0.85rem;
}
.videopage-float-installsetting {
    background-image: url(~@/images/stable/hlw/btn_tutorial.png);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 0.85rem;
}
.home .videopage-tabbar{
  position: fixed;
  top: 0;
  width: 5.4rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.18rem;
  box-sizing: border-box;
  background-color: #fff4fa;
  z-index: 99;
}
.home .videopage-tabbar>div:nth-of-type(1){

  display: flex;
  justify-content: space-between;
}
.home img{
  width: 0.53rem;
  margin-right: 0.1rem;
}
.home .videopage-tabbar-text1{
  font-size: 0.25rem;
  color:rgba(137, 116, 172, 0.6)
}
.home .videopage-tabbar-text2{
  font-size: 0.18rem;
  color:rgba(137, 116, 172, 0.6)
}
.videopage-tabbar-btn {

    width: 1.67rem;
    height: 0.63rem;
    background-image: url(~@/images/stable/hlw/btn_shadow.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.qrcode{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: url(~@/images/stable/hlw/pop_code.png);
  background-repeat: no-repeat;
  background-size: 4rem auto;
  background-position: 50% 50%;
  top: 0;
  left: 0%;
  z-index: 9999;
}
.qrcode img{
  margin-top: 50vh;
  transform: translateY(-1rem);
  width: 2rem;
}
</style>
