<!--页面展示-->
<template>
  <div class="layout">
        <Layout>
          <!-- 导航栏 -->
            <Header>
              
                <Menu mode="horizontal" theme="dark">
                    <div class="layout-logo"><img src="../assets/logo1.png" style="width:150%;" alt=""></div>
                    <div class="layout-nav">
                        <!-- 导航栏循环输出 -->
                        <MenuItem v-for="item in topbar" :key="item" :name="item.name" style="color: rgba(246, 202, 157, 0.7);width: 14%;font-size: 20px;"><Icon type="ios-keypad"></Icon>{{item.name}}</MenuItem>
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
                    <Menu v-for="item in topbar" :key="item" width="auto"  >
                        <!-- 侧栏循环输出 -->
                        <MenuItem style="background-color: rgb(0, 0, 0);color: rgba(246, 202, 157, 0.7);margin-top: 5%;font-size: 20px;">{{item.name}}</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: ' 24px'}">
                  <!-- 展示页面 -->
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#eee'}">
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss" >
                                <p slot="title">个人信息</p>
                                <div style="width:100%;height:80px">
                                    <img src="../assets/logo.png" style="width:50%;float :left" alt="">
                                    <span style="font-size: 40px; padding-left: 9%;">Admin</span>
                                </div>
                                <hr>
                                <span style="float :left">本次登陆地点</span><p></p>
                                <span>天气</span><p></p>
                             </Card>
                        </div>
                       <div class="divcss" >
                        <Card class="cardcss">
                            <p slot="title"> <Icon type="ios-film-outline"></Icon> Film</p>
                            <a style="color:#2d8cf0" href="#" slot="extra" @click.prevent="changeLimit"><Icon type="ios-loop-strong"></Icon>Change </a>
                            <ul>
                                <li v-for="item in randomMovieList" :key="item">
                                    <a style="color:#2d8cf0" :href="item.url" target="_blank">{{ item.name }}</a>
                                    <span style=" color:orange ">
                                        <Icon color="orange" type="ios-star" v-for="n in 4" :key="n"></Icon><Icon  color="orange"  type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon  color="orange"  type="ios-star-half" v-else></Icon>
                                        {{ item.rate }}
                                    </span>
                                </li>
                            </ul>
                        </Card>
                        </div>
                        <div class="divcss" style="width:500px">
                            <Card :bordered="false" class="cardcss" style="width:500px">
                                <p slot="title">我是一个没有感情的列表</p>
                                <Table width="100%" border :columns="columns2" :data="data3"></Table>
                            </Card>
                        </div>

                        
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss">
                                <p slot="title">No border title</p>
                                </Card>
                        </div>
                        
                        
                       
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss">
                                <p slot="title">No border title</p>
                                </Card>
                        </div>
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss">
                                <p slot="title">No border title</p>
                                </Card>
                        </div>
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss">
                                <p slot="title">No border title</p>
                                </Card>
                        </div>
                        
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss">
                                <p slot="title">No border title</p>
                                </Card>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>



<!--数据获取处理-->
<script>
export default {
      
        data () {
            return {
                visible: false,
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
                    },
                    {
                        name: '项目计划',
                        url: '/Home', 
                    },
                    {
                        name: '质量管理',
                        url: '/Home', 
                    },
                    {
                        name: '安全管理',
                        url: '/Home', 
                    },
                    {
                        name: 'BIM模型',
                        url: '/Home', 
                    },
                    {
                        name: '项目报表',
                        url: '/Home', 
                    },
                    {
                        name: '未完待续',
                        url: '/Home', 
                    },
                    
                ],
                randomMovieList: []
            }
        },
        methods: {
            outLogin(){
                sessionStorage.clear();
				this.$router.replace({ path: "/" });
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
    background:#eee; padding: 16px ;width:490px;float: left;margin-left: 10px
}
.cardcss{
    width:450px;
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
</style>
