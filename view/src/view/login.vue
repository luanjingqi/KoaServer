<template>
  <div id="container" class="login" style="height: 100%;text-align: center;  ">
    <canvas id="canvas"></canvas>
    <div style="text-align-last: center;">
      <Form v-if="!ZC" ref="formInline" class="formcss" :model="formInline" :rules="ruleInline">
        <!-- <img src="../assets/logo.png" /> -->
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username" :clearable="isX" />
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
            :clearable="isX"
          />
        </FormItem>
        <Button v-if="!doYZ" type="primary" @click="showYZ()" style="width: 100%;">{{this.test}}</Button>
        <slide-verify
          v-if="doYZ"
          :l="42"
          :r="10"
          :w="310"
          :h="155"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
          :slider-text="text"
        ></slide-verify>

        <FormItem style="margin-top:5%" inline>
          <Button type="primary" @click="Editnew()" style="width: 40%;margin-right: 20%;">{{num1}}</Button>

          <Button
            v-if="canSign"
            type="primary"
            @click="handleSubmit('formInline')"
            style="width: 40%;"
          >{{test}}</Button>
          <Button
            v-else
            disabled
            type="primary"
            @click="handleSubmit('formInline')"
            style="width:40%;"
          >{{my_num}}</Button>
        </FormItem>
      </Form>
      <Form v-if="ZC" :model="ZhuCe" class="formcss" :label-width="100">
        <FormItem id="lalala">
          <Input type="text" v-model="ZhuCe.nickname" placeholder="昵称" />
        </FormItem>
        <FormItem>
          <Input type="text" v-model="ZhuCe.username" placeholder="用户名" />
        </FormItem>
        <FormItem>
          <Input type="password" v-model="ZhuCe.pw1" placeholder="密码" />
        </FormItem>
        <FormItem>
          <Input type="password" v-model="ZhuCe.pw2" placeholder="确认密码" />
        </FormItem>
        <FormItem>
          <Input type="text" v-model="ZhuCe.phone" placeholder="手机号" />
        </FormItem>
        <FormItem>
          <Input type="email" v-model="ZhuCe.email" placeholder="邮箱" />
        </FormItem>
        <FormItem>
          <Input type="date" v-model="ZhuCe.time" placeholder="生日" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="DOZC()">确认注册</Button>
          <Button @click="ZC=false" style="margin-left: 8px">返回登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      formLabelWidth: "120px",
      logo: "../assets/logo.png",
      isRobit: 0,
      ZC: false,
      canSign: false,
      doYZ: false,
      text: "右划验证一下和我是不是同类",
      isX: true,
      formInline: {
        user: "",
        password: ""
      },
      ZhuCe: {
        username: "",
        password: "",
        pw1: "",
        pw2: "",
        nickname: "",
        email: "",
        phone: "",
        time: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: () => {
              this.$Message.error("老哥!你用户名呢");
            },
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: () => {
              this.$Message.error("老哥!你密码呢");
            },
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: () => {
              this.$Message.error("老哥!你那啥太短不敢让你上啊");
            },
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    
    ...mapActions( [ "setCid" ] ),
    DOZC() {
      if (this.ZhuCe.pw1 == this.ZhuCe.pw2) {
        this.ZhuCe.password = this.ZhuCe.pw2;
        let params = {
          username: this.ZhuCe.username,
          password: this.ZhuCe.password,
          nickname: this.ZhuCe.nickname,
          email: this.ZhuCe.email,
          phone: this.ZhuCe.phone,
          time: this.ZhuCe.time
        };
        this.$api.login.ZC(params).then(res => {
          if (res.data.code == 1) {
            this.$Message.success("注册成功");
            this.ZC = false;
          } else {
            this.$Message.error("注册失败");
          }
        });
      } else {
        this.$Message.error("两次密码不一样");
      }
      this.ZC = false;
    },
    showYZ() {
      this.setCid("id")
      this.doYZ = true;
    },
    Editnew() {
      this.ZC = true;
    },
    onSuccess() {
      this.$Message.success("愚蠢的人类!恭喜你验证成功");
      this.isRobit = 1;
      this.canSign = true;
      this.doYZ = false;
    },
    onFail() {
      this.$Message.error("老哥!都是机器人何苦为难机器人");
      this.isRobit = 0;
      this.canSign = false;
    },
    onRefresh() {
      // this.$Message.warning("老哥!再试一试吧");
      this.isRobit = 0;
      this.canSign = false;
    },
    handleSubmit(name) {
      if (this.isRobit == 1) {
        if (this.formInline.user == "") {
          this.$Message.error("老哥!你sei吖");
        } else if (this.formInline.password == "") {
          this.$Message.error("老哥!你密码呢");
        } else {
          this.isRobit = 0;
          this.canSign = false;
          this.doYZ = false;
          let params = {
            username: this.formInline.user,
            password: this.formInline.password
          };
          this.$api.login.login(params).then(res => {
            if (res.data.code == 1) {
              this.$Message.success("登录成功!");
              this.formInline.user = "";
              this.formInline.password = "";
              sessionStorage.setItem("sid", "isDengLu");
              this.$router.replace({ path: "/Home" });
            } else if (res.data.code == 0) {
              this.$Message.error("老哥!你是不是不知道密码？");
              this.onRefresh();
            } else if (res.data.code == 2) {
              this.$Message.error("老哥!你是不是不知道自己是谁？");
              this.onRefresh();
            }
          });
        }
      } else {
        this.$Message.error("请先做身份确认!");
      }
    }
  },
  computed: {
      ...mapState(["test"]),
      ...mapState( { my_num: "CID" } ),
      num1: function() {
        return this.$store.state.num;
      }
    },
};

var Stats = function() {
  var e = Date.now(),
    t = e,
    i = 0,
    n = 1 / 0,
    r = 0,
    s = 0,
    o = 1 / 0,
    a = 0,
    l = 0,
    h = 0,
    c = document.createElement("div");
  (c.id = "stats"),
    c.addEventListener(
      "mousedown",
      function(e) {
        e.preventDefault(), v(++h % 2);
      },
      !1
    ),
    (c.style.cssText = "width:80px;opacity:0.9;cursor:pointer");
  var u = document.createElement("div");
  (u.id = "fps"),
    (u.style.cssText =
      "padding:0 0 3px 3px;text-align:left;background-color:#002"),
    c.appendChild(u);
  var d = document.createElement("div");
  (d.id = "fpsText"),
    (d.style.cssText =
      "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px"),
    (d.innerHTML = "FPS"),
    u.appendChild(d);
  var p = document.createElement("div");
  for (
    p.id = "fpsGraph",
      p.style.cssText =
        "position:relative;width:74px;height:30px;background-color:#0ff",
      u.appendChild(p);
    74 > p.children.length;

  ) {
    var f = document.createElement("span");
    (f.style.cssText =
      "width:1px;height:30px;float:left;background-color:#113"),
      p.appendChild(f);
  }
  var m = document.createElement("div");
  (m.id = "ms"),
    (m.style.cssText =
      "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none"),
    c.appendChild(m);
  var g = document.createElement("div");
  (g.id = "msText"),
    (g.style.cssText =
      "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px"),
    (g.innerHTML = "MS"),
    m.appendChild(g);
  var y = document.createElement("div");
  for (
    y.id = "msGraph",
      y.style.cssText =
        "position:relative;width:74px;height:30px;background-color:#0f0",
      m.appendChild(y);
    74 > y.children.length;

  ) {
    var f = document.createElement("span");
    (f.style.cssText =
      "width:1px;height:30px;float:left;background-color:#131"),
      y.appendChild(f);
  }
  var v = function(e) {
      switch ((h = e)) {
        case 0:
          (u.style.display = "block"), (m.style.display = "none");
          break;
        case 1:
          (u.style.display = "none"), (m.style.display = "block");
      }
    },
    b = function(e, t) {
      var i = e.appendChild(e.firstChild);
      i.style.height = t + "px";
    };
  return {
    REVISION: 11,
    domElement: c,
    setMode: v,
    begin: function() {
      e = Date.now();
    },
    end: function() {
      var h = Date.now();
      return (
        (i = h - e),
        (n = Math.min(n, i)),
        (r = Math.max(r, i)),
        (g.textContent = i + " MS (" + n + "-" + r + ")"),
        b(y, Math.min(30, 30 - 30 * (i / 200))),
        l++,
        h > t + 1e3 &&
          ((s = Math.round((1e3 * l) / (h - t))),
          (o = Math.min(o, s)),
          (a = Math.max(a, s)),
          (d.textContent = s + " FPS (" + o + "-" + a + ")"),
          b(p, Math.min(30, 30 - 30 * (s / 100))),
          (t = h),
          (l = 0)),
        h
      );
    },
    update: function() {
      e = this.end();
    }
  };
};
(function(window) {
  var ctx,
    hue,
    logo,
    form,
    buffer,
    target = {},
    tendrils = [],
    settings = {};

  settings.debug = true;
  settings.friction = 0.5;
  settings.trails = 20;
  settings.size = 50;
  settings.dampening = 0.25;
  settings.tension = 0.98;

  Math.TWO_PI = Math.PI * 2;

  // ========================================================================================
  // Oscillator
  // ----------------------------------------------------------------------------------------

  function Oscillator(options) {
    this.init(options || {});
  }

  Oscillator.prototype = (function() {
    var value = 0;

    return {
      init: function(options) {
        this.phase = options.phase || 0;
        this.offset = options.offset || 0;
        this.frequency = options.frequency || 0.001;
        this.amplitude = options.amplitude || 1;
      },

      update: function() {
        this.phase += this.frequency;
        value = this.offset + Math.sin(this.phase) * this.amplitude;
        return value;
      },

      value: function() {
        return value;
      }
    };
  })();

  // ========================================================================================
  // Tendril
  // ----------------------------------------------------------------------------------------

  function Tendril(options) {
    this.init(options || {});
  }

  Tendril.prototype = (function() {
    function Node() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    return {
      init: function(options) {
        this.spring = options.spring + Math.random() * 0.1 - 0.05;
        this.friction = settings.friction + Math.random() * 0.01 - 0.005;
        this.nodes = [];

        for (var i = 0, node; i < settings.size; i++) {
          node = new Node();
          node.x = target.x;
          node.y = target.y;

          this.nodes.push(node);
        }
      },

      update: function() {
        var spring = this.spring,
          node = this.nodes[0];

        node.vx += (target.x - node.x) * spring;
        node.vy += (target.y - node.y) * spring;
        for (var prev, i = 0, n = this.nodes.length; i < n; i++) {
          node = this.nodes[i];

          if (i > 0) {
            prev = this.nodes[i - 1];

            node.vx += (prev.x - node.x) * spring;
            node.vy += (prev.y - node.y) * spring;
            node.vx += prev.vx * settings.dampening;
            node.vy += prev.vy * settings.dampening;
          }

          node.vx *= this.friction;
          node.vy *= this.friction;
          node.x += node.vx;
          node.y += node.vy;

          spring *= settings.tension;
        }
      },

      draw: function() {
        var x = this.nodes[0].x,
          y = this.nodes[0].y,
          a,
          b;

        ctx.beginPath();
        ctx.moveTo(x, y);

        for (var i = 1, n = this.nodes.length - 2; i < n; i++) {
          a = this.nodes[i];
          b = this.nodes[i + 1];
          x = (a.x + b.x) * 0.5;
          y = (a.y + b.y) * 0.5;

          ctx.quadraticCurveTo(a.x, a.y, x, y);
        }
        a = this.nodes[i];
        b = this.nodes[i + 1];

        ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
        ctx.stroke();
        ctx.closePath();
      }
    };
  })();

  // ----------------------------------------------------------------------------------------

  function init(event) {
    document.removeEventListener("mousemove", init);
    document.removeEventListener("touchstart", init);

    document.addEventListener("mousemove", mousemove);
    document.addEventListener("touchmove", mousemove);
    document.addEventListener("touchstart", touchstart);

    mousemove(event);
    reset();
    loop();
  }

  function reset() {
    tendrils = [];

    for (var i = 0; i < settings.trails; i++) {
      tendrils.push(
        new Tendril({
          spring: 0.45 + 0.025 * (i / settings.trails)
        })
      );
    }
  }

  function loop() {
    if (!ctx.running) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#d4d4d4";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(hue.update()) + ",90%,50%,0.25)";
    // ctx.strokeStyle = "hsla(" + Math.round(hue.update()) + ",90%,50%,0.25)";
    ctx.lineWidth = 1;

    if (ctx.frame % 60 == 0) {
      //console.log(hue.update(), Math.round(hue.update()), hue.phase, hue.offset, hue.frequency, hue.amplitude);
    }

    for (var i = 0, tendril; i < settings.trails; i++) {
      tendril = tendrils[i];
      tendril.update();
      tendril.draw();
    }

    ctx.frame++;
    ctx.stats.update();
    requestAnimFrame(loop);
  }

  function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function start() {
    if (!ctx.running) {
      ctx.running = true;
      loop();
    }
  }

  function stop() {
    ctx.running = false;
  }

  function mousemove(event) {
    if (event.touches) {
      target.x = event.touches[0].pageX;
      target.y = event.touches[0].pageY;
    } else {
      target.x = event.clientX;
      target.y = event.clientY;
    }
    event.preventDefault();
  }

  function touchstart(event) {
    if (event.touches.length == 1) {
      target.x = event.touches[0].pageX;
      target.y = event.touches[0].pageY;
    }
  }

  function keyup(event) {
    switch (event.keyCode) {
      case 32:
        save();
        break;
      default:
      // console.log(event.keyCode);
    }
  }

  function letters(id) {
    var el = document.getElementById(id),
      letters = el.innerHTML.replace("&amp;", "&").split(""),
      heading = "";

    for (var i = 0, n = letters.length, letter; i < n; i++) {
      letter = letters[i].replace("&", "&amp");
      heading += letter.trim()
        ? '<span class="letter-' + i + '">' + letter + "</span>"
        : "&nbsp;";
    }

    el.innerHTML = heading;
    setTimeout(function() {
      el.className = "transition-in";
    }, Math.random() * 500 + 500);
  }

  function save() {
    if (!buffer) {
      buffer = document.createElement("canvas");

      buffer.height = screen.availHeight;
      buffer.ctx = buffer.getContext("2d");

      form = document.createElement("form");
      form.method = "post";
      form.input = document.createElement("input");
      form.input.type = "hidden";
      form.input.name = "data";
      form.appendChild(form.input);

      document.body.appendChild(form);
    }

    buffer.ctx.fillStyle = "#d4d4d4";
    buffer.ctx.fillRect(0, 0, buffer.width, buffer.height);

    buffer.ctx.drawImage(
      canvas,
      Math.round(buffer.width / 2 - canvas.width / 2),
      Math.round(buffer.height / 2 - canvas.height / 2)
    );

    buffer.ctx.drawImage(
      logo,
      Math.round(buffer.width / 2 - logo.width / 4),
      Math.round(buffer.height / 2 - logo.height / 4),
      logo.width / 2,
      logo.height / 2
    );

    window.open(
      buffer.toDataURL(),
      "wallpaper",
      "top=0,left=0,width=" + buffer.width + ",height=" + buffer.height
    );

    // form.input.value = buffer.toDataURL().substr(22);
    // form.submit();
  }

  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(fn) {
        window.setTimeout(fn, 1000 / 60);
      }
    );
  })();

  window.onload = function() {
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.stats = new Stats();
    ctx.running = true;
    ctx.frame = 1;

    logo = new Image();

    hue = new Oscillator({
      phase: Math.random() * Math.TWO_PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285
    });

    document.addEventListener("mousemove", init);
    document.addEventListener("touchstart", init);
    document.body.addEventListener("orientationchange", resize);
    window.addEventListener("resize", resize);
    window.addEventListener("keyup", keyup);
    window.addEventListener("focus", start);
    window.addEventListener("blur", stop);

    resize();

    if (window.DEBUG) {
      var gui = new dat.GUI();

      // gui.add(settings, 'debug');
      settings.gui.add(settings, "trails", 1, 30).onChange(reset);
      settings.gui.add(settings, "size", 25, 75).onFinishChange(reset);
      settings.gui.add(settings, "friction", 0.45, 0.55).onFinishChange(reset);
      settings.gui.add(settings, "dampening", 0.01, 0.4).onFinishChange(reset);
      settings.gui.add(settings, "tension", 0.95, 0.999).onFinishChange(reset);

      document.body.appendChild(ctx.stats.domElement);
    }
  };
})(window);
</script>
<style >
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  font: 16px/1.4 "Lato", sans-serif;
  color: #fefeff;
  -webkit-font-smoothing: antialiased;
}
body {
  background: rgb(0, 0, 0);
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ivu-form-item-error-tip {
  font-size: 40px;
  color: green;
}

#container {
  display: table;
  z-index: 20;
  text-align: center;
  cursor: none;
}
#container > div {
  display: table-cell;
  vertical-align: middle;
}
#container p {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 25px;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  font-weight: 300;
  color: #76747a;
  -webkit-font-smoothing: subpixel-antialiased;
}
#container p strong {
  color: #b3abc5;
  font-size: 5em;
}
#container p span {
  font-size: 0.75em;
  padding: 0 2px;
}

#canvas {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  cursor: none;
}

#stats {
  position: absolute;
  z-index: 10;
}

.dg.ac {
  z-index: 100 !important;
}

#container div p strong a {
  color: #999;
  font-size: 0.5em;
}
body,
td,
th {
  font-family: Lato, sans-serif;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
.formcss {
  text-align: -webkit-center;
  z-index: 20;
  margin-top: 20%;
  width: 350px;
}
#lalala > .ivu-form-item-label {
  color: red;
}
</style>