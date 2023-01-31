(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{457:function(e,r,t){"use strict";t.r(r);var o=t(29),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"从1-1升级到1-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从1-1升级到1-2"}},[e._v("#")]),e._v(" 从1.1升级到1.2")]),e._v(" "),t("p",[e._v("目前1.2版本还在开发中，大家可以下载"),t("a",{attrs:{href:"https://www.npmjs.com/package/@logicflow/core?activeTab=versions",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.2.0-next.x"),t("OutboundLink")],1),e._v("版本")]),e._v(" "),t("h3",{attrs:{id:"breaking-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("LogicFlow "),t("code",[e._v("1.2")]),e._v("版本并没有在"),t("code",[e._v("1.1")]),e._v("版本基础上有巨大变化，在"),t("code",[e._v("1.2")]),e._v("版本，我们对源码中一些拼写错误进行了修改，但是不涉及到 LogicFlow 提供的 API。但是 LogicFlow 提供的基于继承的自定义机制，可以让熟悉 LogicFlow 源码的同学绕过 LogicFlow 文档上的API进行高度自定义，所以我们选择发布一个新的 minor 版本。若您是基于LogicFlow提供的API或者示例开发，可以直接升级。若您在LogicFlow 上涉及到绕过API进行自定义，可以安装 VSCode 插件 "),t("code",[e._v("Code Spell Checker")]),e._v(" 快速找到拼写错误。")])]),e._v(" "),t("li",[t("p",[e._v("LogicFlow在"),t("code",[e._v("1.1")]),e._v("提供了拖动节点或者连线到画布边界时会自动扩展画布区域，在后续收到的反馈来看，这个交互会带来一定的解释成本，所以在"),t("code",[e._v("1.2")]),e._v("版本默认关闭此功能。大家可以在初始化LogicFlow时传如参数"),t("code",[e._v("autoExpand")]),e._v("为"),t("code",[e._v("true")]),e._v("来开启，现在改成默认为"),t("code",[e._v("false")]),e._v("。")])])]),e._v(" "),t("h3",{attrs:{id:"_1-2-0-next-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-0-next-2"}},[e._v("#")]),e._v(" 1.2.0-next.2")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("features")]),e._v(" "),t("ul",[t("li",[e._v("增加本文溢出省略时鼠标移动到文本tip显示全文。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/984",target:"_blank",rel:"noopener noreferrer"}},[e._v("#984"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("右键点击节点、连线默认会选中这个元素。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/949",target:"_blank",rel:"noopener noreferrer"}},[e._v("#949"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("p",[e._v("bugfix")]),e._v(" "),t("ul",[t("li",[e._v("禁用画布右键框选功能修复可能会导致画布存在多个框选框不会消失的问题。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/985",target:"_blank",rel:"noopener noreferrer"}},[e._v("#984"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("修复了开启"),t("code",[e._v("adjustEdgeStartAndEnd")]),e._v("后，调整连线导致API与默认新建连线不一致的问题。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/973",target:"_blank",rel:"noopener noreferrer"}},[e._v("973"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/979",target:"_blank",rel:"noopener noreferrer"}},[e._v("979"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/968",target:"_blank",rel:"noopener noreferrer"}},[e._v("968"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("anchor的drop和dragend事件的参数传递优化成event对像不嵌套在e对像下。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/969",target:"_blank",rel:"noopener noreferrer"}},[e._v("#969"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("修复了"),t("code",[e._v("CurvedEdge")]),e._v("插件在某些情况下，出现报错的问题。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/953",target:"_blank",rel:"noopener noreferrer"}},[e._v("#953"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("拖拽新增节点时，不再触发"),t("code",[e._v("node:add")]),e._v("事件。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/916",target:"_blank",rel:"noopener noreferrer"}},[e._v("#916"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("修复连线后，edgeModel.targetAnchorId不准确问题。"),t("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/944",target:"_blank",rel:"noopener noreferrer"}},[e._v("#944"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);r.default=n.exports}}]);