<!--页面展示-->
<template>
  <div class="layout">
        <Layout>
          <!-- 导航栏 -->
            <Header>
              
                <Menu mode="horizontal" theme="dark">
                    <div class="layout-logo"><img src="../assets/logo1.png" style="width:100%;" alt=""></div>
                    <div class="layout-nav">
                        <!-- 导航栏循环输出 -->
                        <MenuItem v-for="item in topbar" :key="item" :name="item" style="color: rgba(246, 202, 157, 0.7);width: 14%;font-size: 20px;"><Icon type="logo-freebsd-devil" />{{item.name}}</MenuItem>
                    </div>
                    <Dropdown style="float:right;background:#000000" >
                        <a href="javascript:void(0)" style="color: rgba(246,202,157,.7);">个人中心<Icon type="ios-arrow-down"></Icon></a>
                        <DropdownMenu slot="list">
                            <DropdownItem style="background:#000000;height:100%"><span @click="outLogin()" style="color: rgba(246,202,157,.7);">退出登录</span></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Menu>
                
            </Header >
            <Layout >
                <Sider style=" text-align: center" >
                    <Menu v-for="item in topbar" :key="item"  width="200px" @on-select="clickleft" >
                        <MenuGroup   :title="item.name" style="background: #000;color: rgba(246, 202, 157, 0.7);font-size: 25px;">
                        <!-- 侧栏循环输出 -->
                            <MenuItem v-for="child in item.childList" :key="child" :name="child"  style="background-color: rgb(0, 0, 0);color: rgba(246, 202, 157, 0.7);margin-top: 5%;font-size: 15px;width:100%">{{child.name}}</MenuItem>
                        </MenuGroup>
                    </Menu>
                </Sider>
                <Layout :style="{padding: ' 24px'}">
                  <!-- 展示页面 -->
                   
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#eee'}">
                        <Tabs type="card" closable @on-tab-remove="handleTabRemove" @on-click="clickTab">
                        <TabPane label="主页" type="card" :closable="zhuyeclose" index='0'>
                            <homelist></homelist>
                        </TabPane>
                        <TabPane v-for="item in Bats" :key="item" :label="item.title"><router-view></router-view></TabPane>
                        
                        </Tabs>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>



<!--数据获取处理-->
<script>
import homelist from '../components/HomeList';
import filmlist from '../components/Filmlist';
import userlist from '../components/UserList';
export default {
      components: {
          homelist,filmlist,userlist
  },
        data () {
            return {
                logo:'../assets/logo1.png',
                visible: false,
                zhuyeclose:false,
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },{
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },{
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },{
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    
                ],topbar: [
                    {
                        name: '我的任务',
                        url: '/Home', 
                        show:false,
                        childList:[
                            {
                                name:'通讯录',
                                url:'/Home/test',
                            },
                            {
                                name:'任务中心',
                                url:'/Home/list',
                            },
                        ],
                    },
                    {
                        name: '项目计划',
                        url: '/Home', 
                        show:false,
                        childList:[
                            {
                                name:'项目列表',
                                url:'/Home'
                            },
                        ],
                    },
                    {
                        name: '质量管理',
                        url: '/Home', 
                        show:false,
                        childList:[
                            {
                                name:'CEP',
                                url:'/Home'
                            },
                        ],
                    },
                    {
                        name: '安全管理',
                        url: '/Home', 
                        show:false,
                        childList:[
                            {
                                name:'安全问题单',
                                url:'/Home'
                            },
                        ],
                    },
                    {
                        name: 'BIM模型',
                        url: '/Home', 
                        show:false,
                        childList:[
                            {
                                name:'4D模拟施工',
                                url:'/Home'
                            }
                        ],
                    },
                    {
                        name: '报表统计',
                        url: '/Home', 
                        show:false,
                        childList:[
                            {
                                name:'质量报表',
                                url:'/Home'
                            }
                        ],
                    },
                    {
                        name: '未完待续',
                        url: '/Home', 
                        show:true,
                    },
                    
                ],
                Bats:[
                    {
                        title:'列表页',
                        path:'/Home/list'
                    },
                    {
                        title:'Home页',
                        path:'/Home/test'
                    }
                ],
                randomMovieList: [],
                 tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            outLogin(){
                sessionStorage.clear();
				this.$router.replace({ path: "/" });
            },
            clickleft(item){
                let params={
                    title:item.name,
                    path:item.url
                };
                this.Bats.push(params);
            },
            clickTab(name){
                if(name!=0)
                {
                this.$router.replace({path:this.Bats[name-1].path});
                }else{
                this.$router.replace({path:'/Home'});
                }
                
            },
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            },
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        },
        handleTabRemove (name) {
            
                this.$router.push({path:'/Home'});
                this['tab' + name] = false;
            }
    }
  

</script>
<!--页面样式-->
<style scoped>
    
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}

.layout-logo{
    width: 100px;
    height: 61px;
    text-align: center;
    color: rgba(246,202,157,.7);
    font-size: 40px;
    float: left;
}
.layout-nav{
    width: 60%;
    margin: 0 auto;
    margin-left: 7%;
    color:rgba(246,202,157,.7);
}
.ivu-layout-sider-children{

  height: 100%;
}
.ivu-layout{

  height: 100%;
}
.divcss{
    background:#eee; padding: 20px ;width:48%;float: left;margin-left: 10px;height:45%
}
.cardcss{
    width:100%;height:100%
}
.ivu-menu-dark{
    background:#000000;
}
.ivu-layout-header{
    background:#000000;
}
.ivu-layout-sider{
    background:#000000;
}
.ivu-select-dropdown{
    
    background:#000000;
}
.ivu-dropdown-menu{
    
    background:#000000;
}
.ivu-layout-sider-children{
    width:200px;
}

</style>
