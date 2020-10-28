(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{232:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),o=(t(0),t(237)),l={id:"useAnimatedScrollHandler",title:"useAnimatedScrollHandler",sidebar_label:"useAnimatedScrollHandler"},i={id:"version-2.0.0-alpha.7/api/useAnimatedScrollHandler",title:"useAnimatedScrollHandler",description:"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components.",source:"@site/versioned_docs/version-2.0.0-alpha.7/api/useAnimatedScrollHandler.md",permalink:"/react-native-reanimated/docs/2.0.0-alpha.7/api/useAnimatedScrollHandler",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-alpha.7/api/useAnimatedScrollHandler.md",version:"2.0.0-alpha.7",sidebar_label:"useAnimatedScrollHandler",sidebar:"version-2.0.0-alpha.7/docs",previous:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/2.0.0-alpha.7/api/useDerivedValue"},next:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.0.0-alpha.7/api/useAnimatedGestureHandler"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components."),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"scrollhandlerorhandlersobject-workletobject-with-worklets"},Object(o.b)("inlineCode",{parentName:"h4"},"scrollHandlerOrHandlersObject")," ","[worklet|object with worklets]"),Object(o.b)("p",null,"This hook can be used in two ways.\nEither by passing a single worklet that corresponds to a scroll handler.\nThe second way can be used if we are interested in processing other events related to scrolling such as ",Object(o.b)("inlineCode",{parentName:"p"},"onBeginDrag")," or ",Object(o.b)("inlineCode",{parentName:"p"},"onMomentumBegin"),"."),Object(o.b)("p",null,"In the first case, the argument should be a worklet that will be triggered when ",Object(o.b)("inlineCode",{parentName:"p"},"onScroll")," event is dispatched for the connected Scrollable component.\nIn such a case the worklet will receive the following parameters:"),Object(o.b)("p",null,"In the case where we are interested in handling other scroll related events, instead of passing a single worklet we can pass an object containing any of the following keys: ",Object(o.b)("inlineCode",{parentName:"p"},"onScroll"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onBeginDrag"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onEndDrag"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onMomentumBegin"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onMomentumEnd"),".\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected Scrollable component."),Object(o.b)("p",null,"In either case (regardless of whether we pass a single handler worklet, or an object of worklets), each of the event worklets will receive the following parameters when called:"),Object(o.b)("h5",{id:"event-object"},Object(o.b)("inlineCode",{parentName:"h5"},"event")," ","[object]"),Object(o.b)("p",null,"Event object carrying the information about the scroll.\nThe payload can differ depending on the type of the event (",Object(o.b)("inlineCode",{parentName:"p"},"onScroll"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onBeginDrag"),", etc.).\nPlease consult ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/scrollview"}),"React Native's ScrollView documentation")," to learn about scroll event structure."),Object(o.b)("h5",{id:"context-object"},Object(o.b)("inlineCode",{parentName:"h5"},"context")," ","[object]"),Object(o.b)("p",null,"A plain JS object that can be used to store some state.\nThis object will persist in between scroll event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",Object(o.b)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)("p",null,"The hook returns a handler object that can be hooked into a scrollable container.\nNote that in order for the handler to be properly triggered, you should use containers that are wrapped with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.ScrollView")," and not just ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView"),").\nThe handler should be passed under ",Object(o.b)("inlineCode",{parentName:"p"},"onScroll")," parameter regardless of whether it is configured to receive only scroll or also momentum or drag events."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In the below example we define a scroll handler by passing a single worklet handler.\nThe worklet handler is triggered for each of the scroll events dispatched to the ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.ScrollView")," component to which we attach the handler."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{10-12,29}","{10-12,29}":!0}),"import Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  useAnimatedScrollHandler,\n} from 'react-native-reanimated';\n\nfunction ScrollExample() {\n  const translationY = useSharedValue(0);\n\n  const scrollHandler = useAnimatedScrollHandler((event) => {\n    translationY.value = event.contentOffset.y;\n  });\n\n  const stylez = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateY: translationY.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, stylez]} />\n      <Animated.ScrollView\n        style={styles.scroll}\n        onScroll={scrollHandler}\n        scrollEventThrottle={16}>\n        <Content />\n      </Animated.ScrollView>\n    </View>\n  );\n}\n")),Object(o.b)("p",null,"If we are interested in receiving drag or momentum events instead of passing a single worklet object we can pass an object of worklets.\nBelow for convenience, we only show how the ",Object(o.b)("inlineCode",{parentName:"p"},"scrollHandler")," should be defined in such a case.\nThe place where we attach handler to a scrollable component remains unchanged regardless of the event types we want to receive:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const isScrolling = useSharedValue(false);\n\nconst scrollHandler = useAnimatedScrollHandler({\n  onScroll: (event) => {\n    translationY.value = event.contentOffset.y;\n  },\n  onBeginDrag: (e) => {\n    isScrolling.value = true;\n  },\n  onEndDrag: (e) => {\n    isScrolling.value = false;\n  },\n});\n")))}d.isMDXComponent=!0},237:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,h=p["".concat(l,".").concat(u)]||p[u]||b[u]||o;return t?a.a.createElement(h,i(i({ref:n},s),{},{components:t})):a.a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);