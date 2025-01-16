import{_ as m,Y as t,a4 as T,w as d,o as n,b as x,a as b,G as h,B as S,z as c,a0 as w,n as j,$ as v,R as I,M,V as l,Q as L,C as y,a5 as E,l as k,r as D,a7 as C,J as A,q as R,a8 as $,a1 as B,a2 as U,W as P,S as O,U as z,P as W}from"./index.800d43d1.js";const u=[{id:1,name:"William Smith",subject:"Meeting Tomorrow",tags:["meeting","work","important"],time:"2024-11-04T18:00:00",content:"Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details...",read:!1},{id:2,name:"Alice Smith",subject:"Re: Project Update",tags:["work","important"],time:"2024-11-04T18:00:00",content:"Thank you for the project update. It looks great! I've gone through the report, and the progress...",read:!1},{id:3,name:"Bob Johnson",subject:"Weekend Plans",tags:["personal"],time:"2024-11-04T18:00:00",content:"Any plans for the weekend? I was thinking of going hiking in the nearby mountains...",read:!0},{id:4,name:"Emily Davis",subject:"Re: Question about Budget",tags:["work","budget"],time:"2024-11-04T18:00:00",content:"I have a question about the budget for the upcoming project. It seems like there's a discrepancy in...",read:!0},{id:5,name:"Michael Wilson",subject:"Important Announcement",tags:["meeting","work","important"],time:"2024-11-04T18:00:00",content:"I have an important announcement to make during our team meeting...",read:!0},{id:6,name:"Sophia White",subject:"Team Dinner",tags:["meeting","work"],time:"2024-11-04T18:00:00",content:"Let's have a team dinner next week to celebrate our success...",read:!0},{id:7,name:"James Martin",subject:"Re: Conference Registration",tags:["work","conference"],time:"2024-11-04T18:00:00",content:"I've completed the registration for the conference next month...",read:!0},{id:8,name:"Olivia Wilson",subject:"Vacation Plans",tags:["personal"],time:"2024-11-04T18:00:00",content:"Let's plan our vacation for next month. What do you think? I've been thinking of visiting...",read:!0}],N=(e,s)=>e>s?!0:null,Y=()=>t({class:"text-xs text-muted-foreground"},"[[charCount]]/[[charLimit]]"),H=()=>t({class:"flex justify-between items-center mt-3"},[d({variant:"icon",click:()=>console.log("Send email"),icon:n.airplane,class:"text-foreground hover:text-accent"})]),J=m({state(){var e;return{charCount:0,charLimit:(e=this.charLimit)!=null?e:5e3,isOverLimit:!1}},render(){const e=this.state.charLimit,s=o=>{const a=o.target.value,i=this.state;i.charCount=a.length,i.isOverLimit=N(a.length,e)};return t({class:"fadeIn pt-4"},[t({class:"relative flex border rounded-lg p-3 bg-surface"},[T({class:"w-full border-none bg-transparent resize-none focus:outline-none focus:ring-0 text-sm text-foreground placeholder-muted-foreground",placeholder:this.placeholder,input:s,bind:this.bind}),t({class:"flex flex-col items-end justify-end"},[Y(),H()])])])}}),g=()=>t({class:"m-4 mt-8 p-4 border rounded-md items-center justify-center text-center"},[t({class:"flex-none max-w-12 mx-auto mt-8 mb-4"},[x({size:"xl"},n.document.text)]),b({class:"text-xl font-semibold text-muted-foreground text-center"},"Nothing to see here."),t({class:"flex flex-auto flex-col items-center justify-center"},[h("This view is empty. Click on a message is the list to view it or get started by creating a new message.")]),d({variant:"outline",class:"my-8"},"Create a Message")]),_=e=>c({class:"ml-auto text-xs text-foreground"},[w({dateTime:e})]),F=e=>t({class:"flex items-center justify-between border-b pb-4 gap-4"},[t({class:"flex items-center gap-4"},[S({src:null,alt:e.name,fallbackText:`${e.name.split(" ")[0][0]}${e.name.split(" ")[1][0]}`,size:"md"}),t({class:"flex flex-col"},[c({class:"font-semibold text-lg text-foreground"},e.name),c({class:"text-sm text-muted-foreground"},`Reply-To: ${e.replyTo||"No Reply-To Available"}`)])]),t({class:"text-xs text-muted-foreground"},[_(e.time)])]),r=e=>v({content:e.content,position:e.position},[d({variant:"icon",icon:e.icon,click:e.click})]),G=e=>t({class:"flex items-center justify-between border-b pb-2"},[t({class:"flex lg:hidden"},[j({margin:"m-0 ml-0",backUrl:"/inbox"})]),t({class:"hidden lg:flex items-center gap-2"},[r({content:"Move to inbox",position:"bottom-right",icon:n.archive.box.default,click:()=>{}}),r({content:"Move to junk",position:"bottom",icon:n.archive.box.x,click:()=>{}}),r({content:"Delete",position:"bottom",icon:n.trash,click:(s,o)=>{new I({icon:n.trash,title:"Delete Message",description:"Are you sure you want to delete this message?",confirmTextLabel:"Delete",confirmed:()=>{e.delete(e.message.id)}}).open()}}),r({content:"Snooze",position:"bottom",icon:n.clock,click:()=>{}})]),t({class:"hidden lg:flex items-center gap-2"},[r({content:"Reply",position:"bottom",icon:n.arrows.left,click:()=>{}}),r({content:"Reply all",position:"bottom",icon:n.arrows.uturn.left,click:()=>{}}),r({content:"Forward",position:"bottom",icon:n.arrows.right,click:()=>{}}),t({class:"w-px h-5 bg-border mx-2"}),r({content:"More options",position:"bottom-left",icon:n.ellipsis.vertical,click:()=>{}})])]),q=()=>t({class:"flex flex-col gap-4 p-4"},[t({class:"hidden lg:flex items-center justify-between border-b pb-4"},[t({class:"flex items-center gap-4"},[l({width:"w-8",height:"h-8"}),l({width:"w-8",height:"h-8"}),l({width:"w-8",height:"h-8"}),l({width:"w-8",height:"h-8"})]),t({class:"flex items-center gap-4"},[l({width:"w-8",height:"h-8"}),l({width:"w-8",height:"h-8"}),l({width:"w-8",height:"h-8"}),l({width:"w-8",height:"h-8"})])]),t({class:"flex lg:hidden items-center justify-between border-b pb-4"},[t({class:"flex items-center gap-4"},[l({width:"w-8",height:"h-8"})])]),t({class:"flex items-center gap-4"},[l({width:"w-12",height:"h-12",shape:"circle"}),t({class:"flex flex-col gap-2 flex-1"},[l({width:"w-1/2",height:"h-6",class:"rounded"}),l({width:"w-1/3",height:"h-4",class:"rounded"})])]),l({width:"w-full",height:"h-40",class:"rounded"})]),Q=e=>u.find(s=>s.id.toString()===e)||null,V=m({state:{loaded:!1},render(){const e=Q(this.messageId);return setTimeout(()=>this.state.loaded=!0,500),t({class:"w-full flex flex-auto flex-col space-y-4",onState:["loaded",o=>e?o?t({class:"flex flex-auto flex-col space-y-4 max-h-screen p-4"},[G({message:e,delete:this.delete}),F(e),t({class:"flex flex-grow flex-col overflow-y-auto"},[M({class:"text-sm text-foreground mt-2 pb-40 whitespace-pre-line font-sans"},e.content)]),new J({placeholder:`Reply to ${e.name}...`})]):q():g()]})}}),X=e=>()=>new L([y("messageId",s=>s?new V({messageId:s,delete:e.delete}):g())]),K=()=>new E([t({class:"hidden lg:flex flex-auto flex-col"},[t({class:"flex auto flex-col w-full h-full"},[g()])])]),Z=e=>t({class:"flex-[4] flex-col w-full h-full hidden lg:flex",switch:[{uri:"inbox/:page/:messageId*",component:X(e)},{uri:"inbox*",component:K}]}),ee=[{label:"Inbox",count:8,icon:n.inbox.default,href:"inbox/inbox"},{label:"Drafts",count:0,icon:n.document.default,href:"inbox/drafts"},{label:"Sent",count:0,icon:n.envelope.open,href:"inbox/sent"},{label:"Junk",count:0,icon:n.archive.box.x,href:"inbox/junk"},{label:"Trash",count:0,icon:n.trash,href:"inbox/trash"},{label:"Archive",count:0,icon:n.archive.box.default,href:"inbox/archive"}],te=[{label:"Social",count:0,icon:n.user.group,href:"inbox/social"},{label:"Updates",count:0,icon:n.bell.alert,href:"inbox/updates"},{label:"Forums",count:0,icon:n.chat.text,href:"inbox/forums"},{label:"Shopping",count:0,icon:n.shoppingBag,href:"inbox/shopping"}],p=({label:e,count:s,icon:o,href:a})=>new C({class:"flex items-center justify-between p-2 rounded-md hover:bg-muted transition",activeClass:"bg-muted",href:a,exact:!1},[t({class:"flex items-center space-x-2"},[o&&x({class:"flex-shrink-0 w-5 h-5"},o),c({class:"text-sm font-medium text-foreground"},e)]),c({class:"text-xs text-muted-foreground"},s.toString())]),se=()=>t({class:"flex-auto flex-col pb-12 hidden lg:flex p-6 border-r bg-sidebar max-w-[270px] h-full"},[k({class:"pb-4 px-2 flex flex-col"},[D({class:"scroll-m-20 text-2xl font-bold tracking-tight"},"Messages")]),t({class:"flex flex-auto flex-col divide-y divide-border"},[t({class:"space-y-2 mb-4",map:[ee,p]}),t({class:"space-y-2 pt-4",map:[te,p]})])]),ne=()=>t({class:"flex flex-col flex-auto w-full rounded-md space-y-3"},[l({width:"w-3/4",height:"h-6",class:"rounded"}),l({width:"w-1/2",height:"h-5",class:"rounded"}),l({width:"w-full",height:"h-8",class:"rounded"}),t({class:"flex space-x-2 mt-4 pb-[1.5px]"},[l({width:"w-12",height:"h-5",class:"rounded"}),l({width:"w-14",height:"h-5",class:"rounded"})])]),oe=e=>c({class:"ml-auto text-xs text-foreground"},[w({dateTime:e})]),le=()=>c({class:"w-2 h-2 bg-blue-500 rounded-full",ariaLabel:"Unread message indicator"}),ae=e=>c({class:"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"},e),ie=m({state:{loaded:!1},markRead(){let{message:e}=this;e={...e},e.read||(e.read=!0,this.parent.mingle([e]))},render(){const e=this.message,s=this.parent.parent.route;return setTimeout(()=>this.state.loaded=!0,500),t({class:"flex flex-auto flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-muted/50",onSet:[s,"messageId",{"bg-muted/50":e.id.toString()}],onState:["loaded",a=>a?A({class:"flex flex-auto flex-col w-full gap-2",href:`inbox/${s.page}/${e.id}`,click:()=>this.markRead()},[t({class:"flex w-full flex-col gap-1"},[t({class:"flex items-center justify-between"},[t({class:"flex items-center gap-2"},[c({class:"font-semibold text-base text-foreground"},e.name),!e.read&&le()]),oe(e.time)]),t({class:"text-sm font-medium text-muted-foreground"},e.subject)]),h({class:"line-clamp-2 text-sm text-muted-foreground"},e.content),t({class:"flex flex-wrap gap-2 mt-2",map:[e.tags,ae]})]):ne()]})}}),ce=({list:e})=>t({class:"m-4 mt-8 p-4 border rounded-md items-center justify-center text-center"},[t({class:"flex-none max-w-12 mx-auto mt-8 mb-4"},[x({size:"xl"},n.inbox.default)]),b({class:"text-xl font-semibold text-muted-foreground text-center"},"I've checked but found nothing."),t({class:"flex flex-auto flex-col items-center justify-center"},[h("Let's get this thread started. Create a message to begin.")]),d({variant:"outline",class:"my-8"},"Create a Message")]),re=()=>$({class:"pl-2 lg:pl-0 text-3xl lg:text-xl font-bold",useParent:({route:e})=>c({class:"capitalize",text:["[[page]]",e]})}),de=()=>t({class:"flex mr-2"},[v({content:"Add Message",position:"left"},[d({variant:"icon",icon:n.circlePlus})])]),ue=()=>k({class:"px-4 pb-2 lg:p-4 bg-card"},[t({class:"flex justify-between"},[re(),t({class:"flex"},[de(),new R({options:[{label:"All Mail",value:"all"},{label:"Unread",value:"unread"}],onSelect:(e,{state:s})=>s.list=e})])])]),f=(e,s)=>s==="unread"?e.filter(o=>!o.read):e,fe=()=>t({class:"w-full pt-0 lg:pt-2 space-y-2 lg:overflow-y-auto lg:max-h-screen"},[ue(),t([y("page",(e,s,{data:o,state:a})=>{e||(e="inbox",app.navigate("inbox/inbox",null,!0));let i=u;e!=="inbox"&&(i=[]),i=f(i,a.list),o.items=i}),B("list",(e,s,{route:o,data:a})=>{let i=u;o.page!=="inbox"&&(i=[]),i=f(i,e),a.items=i}),U("items",(e,s,{state:o})=>(e=f(e,o.list),e.length?new P({cache:"list",key:"id",items:e,role:"list",class:"space-y-2 px-4 pb-4",rowItem:a=>new ie({message:a})}):ce({list:o.list})))])]),xe=()=>{const e={setData(){return new W({items:u})},afterSetup(){this.route.page||app.navigate("inbox/inbox",null,!0)},setupStates(){return{list:"all"}}};return new O(e,[t({class:"flex w-full flex-col lg:flex-row h-full"},[se(),t({class:"flex flex-[2] lg:max-w-[550px] lg:border-r"},[fe()]),z(s=>Z({delete:o=>{s.list.delete(o),app.navigate(`inbox/${s.route.page}`),app.notify({type:"success",title:"Email Deleted",description:"The email has been deleted.",icon:n.check})}}))])])};export{xe as InboxPage,xe as default};
