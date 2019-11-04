<!--页面展示-->
<template>
  <div class="layout">
        <Layout>
          <!-- 导航栏 -->
            <Header>
              
                <Menu mode="horizontal" theme="dark">
                    <div class="layout-logo">PLM</div>
                    <div class="layout-nav">
                        <!-- 导航栏循环输出 -->
                        <MenuItem name="">
                            <Icon type="ios-keypad"></Icon>
                            我的任务
                        </MenuItem>
                        
                    </div>
                </Menu>
            </Header >
            <Layout >
                <Sider style=" text-align: center" >
                    <Menu width="auto" >
                        <!-- 侧栏循环输出 -->
                        <Submenu>
                            <template slot="title" >我的任务</template>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: ' 24px'}">
                  <!-- 展示页面 -->
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#eee'}">
                       <div style="background:#eee;padding: 10px ;width:390px;display: inline-block;">
                        <Card style="width:350px">
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
                        <div style="background:#eee;padding: 10px; width:390px;display: inline-block;">
                        <Card :bordered="false" style="width:350px">
                            <p slot="title">No border title</p>
                             </Card>
                        </div>
                        <div style="background:#eee;padding: 10px; width:390px;display: inline-block;">
                            <Card :bordered="false" style="width:350px">
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
                    },
                    
                ],
                randomMovieList: []
            }
        },
        methods: {
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
    body{
    height: 100%;
  }
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
    color: white;
    font-size: 40px;
    float: left;
}
.layout-nav{
    width: 60%;
    margin: 0 auto;
    margin-left: 7%;
}
.ivu-layout-sider-children{

  height: 100%;
}
.ivu-layout{

  height: 100%;
}

</style>
