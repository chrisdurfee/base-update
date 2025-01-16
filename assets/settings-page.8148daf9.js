import{Y as e,Q as a,n as o,e as s,F as c,o as t,R as r,S as p}from"./index.800d43d1.js";const u=()=>e({class:"flex items-center justify-between pb-2 mt-2"},[e({class:"flex lg:hidden"},[o({margin:"m-0 ml-0",backUrl:"/settings"})])]),n=(i,l)=>({uri:i,import:l}),g=()=>new a({class:"px-2"},[u(),e({class:"flex flex-auto flex-col contained p-4 lg:p-6",switch:[n("/settings/profile",()=>s(()=>import("./profile-settings.f5ed3540.js"),["assets/profile-settings.f5ed3540.js","assets/index.800d43d1.js","assets/index.24f4989d.css","assets/settings-section.aa5ebbdb.js"])),n("/settings/account",()=>s(()=>import("./account-settings.d686803c.js"),["assets/account-settings.d686803c.js","assets/index.800d43d1.js","assets/index.24f4989d.css","assets/settings-section.aa5ebbdb.js"])),n("/settings/appearance",()=>s(()=>import("./appearance-settings.d6136a6d.js"),["assets/appearance-settings.d6136a6d.js","assets/index.800d43d1.js","assets/index.24f4989d.css","assets/settings-section.aa5ebbdb.js"])),n("/settings/notifications",()=>s(()=>import("./notification-settings.af1543a1.js"),["assets/notification-settings.af1543a1.js","assets/index.800d43d1.js","assets/index.24f4989d.css","assets/settings-section.aa5ebbdb.js"])),n("/settings/display",()=>s(()=>import("./display-settings.69385a94.js"),["assets/display-settings.69385a94.js","assets/index.800d43d1.js","assets/index.24f4989d.css","assets/settings-section.aa5ebbdb.js"]))]})]),f=()=>e({class:"flex flex-auto flex-col"},[e({route:[{uri:"settings/:page*",component:g}]})]),_=i=>c({mobileBorder:!0,title:i.title,options:i.options,class:"lg:block w-full"}),d=()=>_({title:"Settings",options:[{label:"Profile",href:"settings/profile",icon:t.user.default,exact:!0},{label:"Account",href:"settings/account",icon:t.locked},{label:"Appearance",href:"settings/appearance",icon:t.sun},{label:"Notifications",href:"settings/notifications",icon:t.bell.default},{label:"Display",href:"settings/display",icon:t.window},{label:"Sign Out",icon:t.signOut,callBack:()=>{new r({icon:t.signOut,type:"destructive",title:"Are you absoultely sure?",description:"This will sign you out of the application.",confirmTextLabel:"Sign Out",confirmed:()=>app.signOut()}).open()}}]}),w=()=>e({class:"flex items-center justify-between pb-2 mt-2"},[e({class:"flex lg:hidden"},[o({margin:"m-0 ml-0",backUrl:"/settings"})])]),b=1024,m=()=>window.innerWidth<b,h={checkPage(){const i=this.route.page;!m()&&!i&&app.navigate("settings/profile",null,!0)},setupEvents(){return[["resize",window,()=>this.checkPage()]]},afterSetup(){this.checkPage()},update(){this.checkPage()}},P=()=>new p(h,[e({class:"flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full"},[d(),f()])]);export{w as PageToolbar,P as SettingsPage,P as default};
