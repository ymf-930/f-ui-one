<template>
  <header class="page-header">
    <div class="header-container">
      <div class="left" style="width: 580px" flex="main:justify cross:center">
        <div class="logo">
          <img src='../assets/images/logo/f-ui-logo.svg' class="icon" alt="icon"/>
          <div class="text">
            <img src="../assets/images/f-ui-one-text.svg" alt="text"/>
          </div>
        </div>
      </div>
      <div class="link-box">
        <f-tooltip content="搜索组件">
          <span class="search" @click="openSearch"><i class="f-iconfont f-icon-search"></i></span>
        </f-tooltip>
        <router-link :to="{ name: 'guide' }" class="active">指南</router-link>
        <f-dropdown @command="handleCommand">
          <a href="#" class="active" @click.prevent>生态系统
            <i class="f-iconfont f-icon-down"></i>
          </a>
          <template #dropdown>
            <f-dropdown-menu>
              <div class="drop-down-menu-group">官方生态</div>
              <f-dropdown-item name="fei-admin">fei-admin</f-dropdown-item>
              <f-dropdown-item name="fei-datav">fei-datav</f-dropdown-item>
              <f-dropdown-item name="fei-editor">fei-editor</f-dropdown-item>
              <f-dropdown-item name="fei-charts">fei-charts</f-dropdown-item>
            </f-dropdown-menu>
          </template>
        </f-dropdown>
        <router-link :to="{ name: 'color' }" class="active">色彩设计</router-link>
        <a
          href="https://gitee.com/ymf930/f-ui-one"
          class="github"
          target="_blank"
        >国内镜像</a>
        <a
          href="https://github.com/ymf-930/f-ui-one"
          class="github"
          target="_blank"
        >GitHub</a>
      </div>
      <search ref="searchRef"></search>
    </div>
  </header>
</template>

<script>
import Search from './search'

export default {
  name: 'MainHeader',
  components: { Search },
  methods: {
    openSearch() {
      this.$refs.searchRef.handleOpen()
    },
    handleCommand(name) {
      const githubUrl = `https://github.com/ymf-930/${name}/`
      const giteeUrl = `https://gitee.com/ymf930/${name}/`
      const preview = `https://ymf930.gitee.io/${name}/`
      this.$log.primary(`------------------------------[${name}]-------------------------------`)
      this.$log.primary(`github：  ${githubUrl}`)
      this.$log.primary(`gitee：  ${giteeUrl}`)
      this.$log.primary(`preview：${preview}`)
      this.$log.primary('----------------------------------------------------------------------------')
      this.$open(preview, true)
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-header {
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    height: 80px;
    .logo {
      display: flex;
      align-items: center;
      color: #1677ff;
      text-transform: uppercase;
      font-weight: bold;
      font-family: helvetica;
      font-size: 40px;
      height: 80px;
      padding-left: 24px;
      .icon {
        width: 70px;
        height: 70px;
      }
      .text {
        height: 64px;
        overflow: hidden;
        margin-left: 10px;
        img {
          width: 100%;
          opacity: .85;
          transform: translate(-170px, -145px);
        }
      }
    }
    .link-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 80px;
      .search {
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: #636363;
        display: inline-block;
        line-height: 1.5;
        padding: 0 22px;
        font-size: 15px;
        &:hover {
          color: #1677ff;
        }
      }
      > span {
        padding: 0 20px;
        color: rgba(0, 0, 0, .65);
        i {
          font-size: 18px;
        }
      }
    }
  }
  :deep(.fei-select) {
    .fei-input.fei-input-default {
      border-color: transparent;
    }
    .fei-input-suffix {
      opacity: 0;
    }
  }
}
.drop-down-menu-group {
  padding: 8px 8px 4px;
  line-height: 18px;
  width: 100%;
  clear: both;
  color: #1c1f31;
  font-weight: 700;
  font-size: 12px !important;
  white-space: nowrap;
  border-top: 1px solid #eee;
  margin-top: 6px;
  &:first-child {
    border-top: none;
    margin-top: 0;
  }
}
</style>
