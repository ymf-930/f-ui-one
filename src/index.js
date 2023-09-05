import FAnchor from './components/anchor'
import FAnchorLink from './components/anchor-link'
import FIcon from './components/icon'
import FIconSelect from './components/icon-select'
import FButton from './components/button'
import FButtonGroup from './components/button-group'
import FScrollbar from './components/scrollbar'
import FBackTop from './components/back-top'
import FEmpty from './components/empty'
import FLoading from './components/loading'
import FRow from './components/row'
import FCol from './components/col'
import FSpace from './components/space'
import FCollapseTransition from './components/collapse-transition'
import FMoveTransition from './components/move-transition'
import FDivider from './components/divider'
import FPopper from './components/popper'
import FPopover from './components/popover'
import FTooltip from './components/tooltip'
import FMenu from './components/menu'
import FMenuItem from './components/menu-item'
import FSubmenu from './components/submenu'
import FMenuItemGroup from './components/menu-item-group'
import FAffix from './components/affix'
import FBreadcrumb from './components/breadcrumb'
import FBreadcrumbItem from './components/breadcrumb-item'
import FTabs from './components/tabs'
import FSteps from './components/steps'
import FStep from './components/step'
import FDropdown from './components/dropdown'
import FDropdownItem from './components/dropdown-item'
import FDropdownMenu from './components/dropdown-menu'
import FTimeline from './components/timeline'
import FTimelineItem from './components/timeline-item'
import FCarousel from './components/carousel'
import FCarouselItem from './components/carousel-item'
import FCalendar from './components/calendar'
import FAlert from './components/alert'
import FDrawer from './components/drawer'
import FModal from './components/modal'
import FCard from './components/card'
import FBadge from './components/badge'
import FCollapse from './components/collapse'
import FCollapsePanel from './components/collapse-panel'
import FCollapseWrap from './components/collapse-wrap'
import FSplit from './components/split'
import FTag from './components/tag'
import FCircle from './components/circle'
import FProgress from './components/progress'
import FInput from './components/input'
import FInputNumber from './components/input-number'
import FSwitch from './components/switch'
import FCheckbox from './components/checkbox'
import FCheckboxGroup from './components/checkbox-group'
import FRadio from './components/radio'
import FRadioGroup from './components/radio-group'
import FTree from './components/tree'
import FTreeSelect from './components/tree-select'
import FBigTree from './components/tree-big'
import FDesc from './components/desc'
import FDescItem from './components/desc-item'
import FRate from './components/rate'
import FSelect from './components/select'
import FOption from './components/option'
import FOptionGroup from './components/option-group'
import FPage from './components/page'
import FCascader from './components/cascader'
import FCascaderPanel from './components/cascader-panel'
import FColorPicker from './components/color-picker'
import FTimePicker from './components/time-picker'
import FDatePicker from './components/date-picker'
import FUpload from './components/upload'
import FSlider from './components/slider'
import FSkeleton from './components/skeleton'
import FSkeletonItem from './components/skeleton-item'
import FForm from './components/form'
import FFormItem from './components/form-item'
import FTable from './components/table'
import FCountTo from './components/count-to'
import LoadingBar from './components/loading-bar'
import Message from './components/message'
import MessageBox from './components/message-box'
import Notice from './components/notice'
import FLayout from './components/layout'

import * as util from './utils/util'
import * as helper from './utils/util-helper'
import * as resize from './utils/resize-event'
import * as dom from './utils/dom'
import { setConfig } from './utils/config'
import log from './utils/log'
import { scrollTop } from './utils/dom'
import * as color from './utils/color'
import { ClickAnimation, ClickOutside, NoData, Loading, Waves, RepeatClick } from './directives'
import {
  useFocus,
  useForm,
  useLockScreen,
  useModal,
  useModalDrag,
  useMousePosition,
  useRestoreActive,
  useSortable,
} from './hooks'

import config from '../package.json'

const version = config.version // version_ to fix tsc issue

const Hooks = {
  useFocus,
  useForm,
  useLockScreen,
  useModal,
  useModalDrag,
  useMousePosition,
  useRestoreActive,
  useSortable,
}

const Utils = {
  util,
  helper,
  resize,
  color,
  dom,
  log,
}

const components = [
  FAnchor,
  FAnchorLink,
  FIcon,
  FIconSelect,
  FButton,
  FButtonGroup,
  FBackTop,
  FScrollbar,
  FEmpty,
  FRow,
  FCol,
  FSpace,
  FLoading,
  FCollapseTransition,
  FMoveTransition,
  FDivider,
  FPopper,
  FPopover,
  FTooltip,
  FMenu,
  FMenuItem,
  FSubmenu,
  FMenuItemGroup,
  FAffix,
  FBreadcrumb,
  FBreadcrumbItem,
  FTabs,
  FSteps,
  FStep,
  FDropdown,
  FDropdownItem,
  FDropdownMenu,
  FTimeline,
  FTimelineItem,
  FSkeleton,
  FSkeletonItem,
  FCarousel,
  FCarouselItem,
  FCalendar,
  FAlert,
  FDrawer,
  FModal,
  FCard,
  FBadge,
  FCollapse,
  FCollapsePanel,
  FCollapseWrap,
  FSplit,
  FTag,
  FCircle,
  FProgress,
  FInput,
  FInputNumber,
  FSwitch,
  FRadio,
  FRadioGroup,
  FCheckbox,
  FCheckboxGroup,
  FTree,
  FTreeSelect,
  FBigTree,
  FDesc,
  FDescItem,
  FRate,
  FSelect,
  FOption,
  FOptionGroup,
  FPage,
  FCascader,
  FCascaderPanel,
  FUpload,
  FSlider,
  FForm,
  FFormItem,
  FColorPicker,
  FTimePicker,
  FDatePicker,
  FTable,
  FCountTo,
  FLayout
]
const plugins = [LoadingBar, Message, MessageBox, Notice]
const defaultInstallOpt = {
  zIndex: 2000,
}
const install = function (app, options = {}) {
  components.forEach(component => {
    app.use(component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
  // 注册全局指令
  app.directive('RepeatClick', RepeatClick)
  app.directive('Waves', Waves)
  app.directive('ClickAnimation', ClickAnimation)
  app.directive('ClickOutside', ClickOutside)
  app.directive('NoData', NoData)
  app.directive('Loading', Loading)
  // 注册全局函数和属性
  app.config.globalProperties.$global = { ...defaultInstallOpt, ...options }
  setConfig({ ...defaultInstallOpt, ...options })
  app.config.globalProperties.$title = util.title
  app.config.globalProperties.$open = util.open
  app.config.globalProperties.$copy = util.copy
  app.config.globalProperties.$parseTime = util.parseTime
  app.config.globalProperties.$rangeTime = util.rangeTime
  app.config.globalProperties.$typeOf = util.typeOf
  app.config.globalProperties.$deepCopy = util.deepCopy
  app.config.globalProperties.$deepMerge = util.deepMerge
  app.config.globalProperties.$getRandomInt = util.getRandomInt
  app.config.globalProperties.$throttle = util.throttle
  app.config.globalProperties.$debounce = util.debounce
  app.config.globalProperties.$isEqual = util.isEqual
  app.config.globalProperties.$scrollTop = scrollTop
  app.config.globalProperties.$shuffle = util.shuffle
  app.config.globalProperties.$log = log
  app.config.globalProperties.$color = color

  if (!options.disabledDoc) {
    log.printVersion(config.name, config.version, config.homepage)
  }
  return app
}

export {
  FAnchor,
  FAnchorLink,
  FIcon,
  FIconSelect,
  FButton,
  FButtonGroup,
  FBackTop,
  FScrollbar,
  FEmpty,
  FRow,
  FCol,
  FSpace,
  FLoading,
  FCollapseTransition,
  FMoveTransition,
  FDivider,
  FPopper,
  FPopover,
  FTooltip,
  FMenu,
  FMenuItem,
  FSubmenu,
  FMenuItemGroup,
  FAffix,
  FBreadcrumb,
  FBreadcrumbItem,
  FSkeleton,
  FSkeletonItem,
  FTabs,
  FSteps,
  FStep,
  FDropdown,
  FDropdownItem,
  FDropdownMenu,
  FTimeline,
  FTimelineItem,
  FCarousel,
  FCarouselItem,
  FCalendar,
  FAlert,
  FDrawer,
  FModal,
  FCard,
  FBadge,
  FCollapse,
  FCollapsePanel,
  FCollapseWrap,
  FSplit,
  FTag,
  FCircle,
  FProgress,
  FInput,
  FInputNumber,
  FSwitch,
  FRadio,
  FRadioGroup,
  FCheckbox,
  FCheckboxGroup,
  FTree,
  FTreeSelect,
  FBigTree,
  FDesc,
  FDescItem,
  FRate,
  FSelect,
  FOption,
  FOptionGroup,
  FPage,
  FCascader,
  FCascaderPanel,
  FColorPicker,
  FTimePicker,
  FDatePicker,
  FUpload,
  FSlider,
  FForm,
  FFormItem,
  FTable,
  FCountTo,
  FLayout,
  LoadingBar,
  Message,
  MessageBox,
  Notice,
  Utils,
  Hooks,
}

export default {
  version,
  install,
}
