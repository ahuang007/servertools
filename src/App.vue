<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      router
      style="min-height:100vh;width:240px;float:left">
      <NavMenu :navMenus="menuData"></NavMenu>
    </el-menu>
    <router-view style="margin-left:250px"></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
export default {
  components: {
    NavMenu: NavMenu
  },
  data() {
    return {
      activeIndex: 'Home',
      menuData: [
        {
          //一级
          entity: {
            id: 1, // 注意 entity id不能重复
            name: "Home",
            icon: "el-icon-message",
            alias: "可视化查询工具"
          },
          //二级
          childs: [
            {
              entity: {
                id: 2,
                name: "Redis",
                icon: "el-icon-loading",
                alias: "Redis",
              }
            },
            {
              entity: {
                id: 3,
                name: "Memcache",
                icon: "el-icon-bell",
                alias: "Memcache",
              }
            },
            {
              entity: {
                id: 4,
                name: "Mysql",
                icon: "el-icon-edit",
                alias: "Mysql",
              },
              // 三级
              childs: [
                {
                  entity: {
                    id: 41,
                    name: "tb_game_data_pool_record",
                    icon: "el-icon-printer",
                    alias: "游戏数据池记录",
                  }
                },
                {
                  entity: {
                    id: 42,
                    name: "tb_user_pay_income_record",
                    icon: "el-icon-printer",
                    alias: "用户消费收支记录",
                  }
                },
                {
                  entity: {
                    id: 43,
                    name: "tb_game_service_stat_info",
                    icon: "el-icon-printer",
                    alias: "游戏房间统计信息",
                  }
                },
                {
                  entity: {
                    id: 44,
                    name: "tb_game_user_stat_info",
                    icon: "el-icon-printer",
                    alias: "游戏个人统计信息",
                  }
                }
              ]
            }
          ]
        },
        {
          //一级
          entity: {
            id: 5,
            name: "Manual",
            icon: "el-icon-message",
            alias: "服务端开发手册"
          }
        },
      ],
    };
  },
  mounted(){
    window.console.log(window.location.href)
    let start = window.location.href.lastIndexOf('/');
    let path = window.location.href.slice(start+1);
    this.activeIndex = path;
    window.console.log(this.activeIndex)
  }

};
</script>

<style>
</style>
