(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",function(){return task}),__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var _home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(111),_Task__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(43),task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:task},actions))}).add("pinned",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:"TASK_PINNED"})},actions))}).add("archived",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:"TASK_ARCHIVED"})},actions))})}.call(this,__webpack_require__(98)(module))},187:function(module,exports,__webpack_require__){__webpack_require__(188),__webpack_require__(274),module.exports=__webpack_require__(275)},275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),addDecorator=(__webpack_require__(341),__webpack_require__(32).addDecorator),withPropsTable=__webpack_require__(342).withPropsTable,req=__webpack_require__(368);addDecorator(withPropsTable),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(98)(module))},341:function(module,exports,__webpack_require__){},347:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":173,"./nestedObjectAssign.js":173};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=347},368:function(module,exports,__webpack_require__){var map={"./Task.stories.js":13,"./TaskList.stories.js":438};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=368},43:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}__webpack_exports__.a=Task,Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},438:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"defaultTasks",function(){return defaultTasks}),__webpack_require__.d(__webpack_exports__,"withPinnedTasks",function(){return withPinnedTasks});var _home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59),_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32),_TaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(60),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),defaultTasks=[Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"1",title:"Task 1"}),Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"2",title:"Task 2"}),Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"3",title:"Task 3"}),Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"4",title:"Task 4"}),Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"5",title:"Task 5"}),Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"6",title:"Task 6"})],withPinnedTasks=[].concat(Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("TaskList",module).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())}).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:defaultTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}).add("withPinnedTasks",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:withPinnedTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}).add("loading",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({loading:!0,tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}).add("empty",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})}.call(this,__webpack_require__(98)(module))},60:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43);function TaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"loading-item"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-checkbox"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-text"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"Loading")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"cool")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"state")));if(loading)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow);if(0===tasks.length)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"icon-check"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"title-message"},"You have no tasks"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter(function(t){return"TASK_PINNED"===t.state})),Object(_home_zadmin_storybookexample_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter(function(t){return"TASK_PINNED"!==t.state})));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},tasksInOrder.map(function(task){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({key:task.id,task:task},events))}))}TaskList.defaultProps={loading:!1},__webpack_exports__.a=TaskList,TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{loading:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src/components/TaskList.js"})}},[[187,1,2]]]);
//# sourceMappingURL=main.eb64782acf95e656e6dc.bundle.js.map