<!--页面展示-->
<template>
  <div class="layout">
        <Layout>
          <!-- 导航栏 -->
            
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#eee'}">
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss" >
                                <p slot="title">个人信息</p>
                                    <img src="../assets/logo.png" style="width:50%;" alt="">
                                    <span style="font-size: 40px; padding-left: 9%;">Admin</span>
                                
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

                        <div class="divcss" >
                            <Card :bordered="false" class="cardcss" >
                                <p slot="title">我是一个没有感情的列表</p>
                                <Table width="100%" border :columns="columns2" :data="data3"></Table>
                            </Card>
                        </div>

                        
                        <div class="divcss">
                            <Card :bordered="false" class="cardcss">
                                <p slot="title">No border title</p>
                                </Card>
                        </div>
                        
                        
                       
                        
                    </Content>
                </Layout>
    </div>
</template>



<!--数据获取处理-->
<script>
export default {
      
        data () {
            return {
                logo:'../assets/logo1.png',
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
            clickTab(name){
                this.$router.replace({path:"/Home/list"});
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
            
                this.$router.replace({path:"/Home"});
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
