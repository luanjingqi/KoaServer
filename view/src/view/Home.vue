<!--页面展示-->
<template>
  <div class="layout">
    <Layout>
      <!-- 导航栏 -->
      <Header>
        <Menu mode="horizontal" theme="dark" @on-select="clickTopBar">
          <div class="layout-logo">
            <img src="../assets/logo1.png" class="imgclass" alt />
          </div>
          <div class="layout-nav">
            <!-- 导航栏循环输出 -->
            <MenuItem v-for="item in topbar" :key="item" :name="item" class="Mitem">
              <Icon type="logo-freebsd-devil" />
              {{item.name}}
            </MenuItem>
          </div>
          <Dropdown class="ddown">
            <a href="javascript:void(0)" class="aclass">
              个人中心
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem class="ddownitem">
                <span @click="outLogin()" class="spanclass">退出登录</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Menu>
      </Header>
      <Layout>
        <Sider class="siderclass">
          <Menu v-for="item in topbar" :key="item" width="200px" @on-select="clickleft">
            <MenuGroup v-if="item.show" :title="item.name" class="mgroup">
              <!-- 侧栏循环输出 -->
              <MenuItem
                v-for="child in item.childList"
                :key="child"
                :name="child"
                class="mitem"
              >{{child.name}}</MenuItem>
            </MenuGroup>
          </Menu>
        </Sider>
        <Layout :style="{padding: ' 24px'}">
          <!-- 展示页面 -->

          <Content :style="{padding: '24px', minHeight: '280px', background: '#eee'}">
            <Tabs
              type="card"
              :value="TabName"
              closable
              @on-tab-remove="removeTab"
              @on-click="clickTab"
            >
              <TabPane label="主页" name="主页" type="card" :closable="zhuyeclose" :index="0">
                <homelist></homelist>
              </TabPane>
              <TabPane v-for="item in Bats" :key="item" :name="item.title" :label="item.title">
                <router-view></router-view>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>



<!--数据获取处理-->
<script>
import homelist from "../components/HomeList";
import filmlist from "../components/Filmlist";
import userlist from "../components/UserList";
export default {
  components: {
    homelist,
    filmlist,
    userlist
  },
  data() {
    return {
      logo: "../assets/logo1.png",
      visible: false,
      zhuyeclose: false,
      TabName: "主页",
      columns2: [
        {
          title: "Name",
          key: "name",
          width: 100,
          fixed: "left"
        },
        {
          title: "Age",
          key: "age",
          width: 100
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 200
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100
        },
        {
          title: "Action",
          key: "action",
          fixed: "right",
          width: 120,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "Edit"
              )
            ]);
          }
        }
      ],
      data3: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        }
      ],
      movieList: [
        {
          name: "The Shawshank Redemption",
          url: "https://movie.douban.com/subject/1292052/",
          rate: 9.6
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        }
      ],
      topbar: [
        {
          name: "我的任务",
          url: "/Home",
          show: false,
          childList: [
            {
              name: "通讯录",
              url: "/Home/test"
            },
            {
              name: "任务中心",
              url: "/Home/list"
            }
          ]
        },
        {
          name: "项目计划",
          url: "/Home",
          show: false,
          childList: [
            {
              name: "项目列表",
              url: "/Home"
            }
          ]
        },
        {
          name: "质量管理",
          url: "/Home",
          show: false,
          childList: [
            {
              name: "CEP",
              url: "/Home"
            },
            {
              name: "CEPC",
              url: "/Home"
            },
            {
              name: "CLI",
              url: "/Home"
            }
          ]
        },
        {
          name: "安全管理",
          url: "/Home",
          show: false,
          childList: [
            {
              name: "安全问题单",
              url: "/Home"
            },
            {
              name: "安全变更单",
              url: "/Home"
            }
          ]
        },
        {
          name: "BIM模型",
          url: "/Home",
          show: false,
          childList: [
            {
              name: "4D模拟施工",
              url: "/Home"
            },
            {
              name: "BIM模型",
              url: "/Home"
            }
          ]
        },
        {
          name: "报表统计",
          url: "/Home",
          show: false,
          childList: [
            {
              name: "质量报表",
              url: "/Home"
            },
            {
              name: "项目报表",
              url: "/Home"
            }
          ]
        },
        {
          name: "刘大爷",
          url: "/Home",
          show: true,
          childList: [
            {
              name: "FPX",
              url: "/Home"
            },
            {
              name: "牛逼！！！",
              url: "/Home"
            }
          ]
        }
      ],
      Bats: [],
      randomMovieList: [],
      tab0: true,
      tab1: true,
      tab2: true
    };
  },
  methods: {
    outLogin() {
      sessionStorage.clear();
      this.$router.replace({ path: "/" });
    },
    clickleft(item) {
      let params = {
        title: item.name,
        path: item.url
      };
      var isCon = false;
      var i = 0;
      for (i; i < this.Bats.length; i++) {
        if (this.Bats[i].title == item.name) isCon = true;
      }
      if (!isCon) this.Bats.push(params);
      this.TabName = item.name;
      this.$router.replace({ path: item.url });
    },
    clickTab(name) {
      // alert(this.Bats.length);
      var i = 0;
      for (i; i < this.Bats.length; i++) {
        if (name == this.Bats[i].title) break;
      }
      // alert(i+""+this.Bats.length);
      if (name != "主页") {
        this.$router.replace({ path: this.Bats[i].path });
      } else {
        this.$router.replace({ path: "/Home" });
      }
    },
    removeTab(name) {
      var i = 0;
      for (i; i < this.Bats.length; i++) {
        if (this.Bats[i].title == name) break;
      }
      this.Bats.splice(i, 1);
      this.TabName = "主页";
      this.$router.push({ path: "/Home" });
    },
    clickTopBar(item) {
      var i = 0;
      for (i; i < this.topbar.length; i++) {
        this.topbar[i].show = false;
      }
      item.show = true;
    }
  }
};
</script>
<!--页面样式-->
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

.layout-logo {
  width: 100px;
  height: 61px;
  text-align: center;
  color: rgba(246, 202, 157, 0.7);
  font-size: 40px;
  float: left;
}
.layout-nav {
  width: 60%;
  margin: 0 auto;
  margin-left: 7%;
  color: rgba(246, 202, 157, 0.7);
}
.ivu-layout-sider-children {
  height: 100%;
}
.ivu-layout {
  height: 100%;
}
.divcss {
  background: #eee;
  padding: 20px;
  width: 48%;
  float: left;
  margin-left: 10px;
  height: 45%;
}
.cardcss {
  width: 100%;
  height: 100%;
}
.ivu-menu-dark {
  background: #000000;
}
.ivu-layout-header {
  background: #000000;
}
.ivu-layout-sider {
  background: #000000;
}
.ivu-select-dropdown {
  background: #000000;
}
.ivu-dropdown-menu {
  background: #000000;
}
.ivu-layout-sider-children {
  width: 200px;
}
.ddown {
  float: right;
  background: #000000;
}
.imgclass {
  width: 100%;
}
.aclass {
  color: rgba(246, 202, 157, 0.7);
}
.ddownitem {
  background: #000000;
  height: 100%;
}
.spanclass {
  color: rgba(246, 202, 157, 0.7);
}
.siderclass {
  text-align: center;
}
.mgroup {
  background: #000;
  color: rgba(246, 202, 157, 0.7);
  font-size: 25px;
}
.mitem {
  background-color: rgb(0, 0, 0);
  color: rgba(246, 202, 157, 0.7);
  margin-top: 5%;
  font-size: 15px;
  width: 100%;
}
</style>
