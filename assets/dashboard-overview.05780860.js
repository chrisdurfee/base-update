import{aa as s,Y as e,e as a,l as r,r as o,ae as l,o as i,w as d,af as c}from"./index.2f4e42cd.js";const n=()=>r({class:"flex items-center justify-between"},[o({class:"text-3xl font-bold"},"Dashboard"),e({class:"flex items-center gap-2"},[new l({label:"Pick a date",icon:i.calendar}),e({class:"hidden md:flex items-center gap-2"},[d({variant:"default"},"Download")])])]),b=()=>e({class:"justify-between flex flex-auto items-center"},[new c({options:[{label:"Overview",href:"dashboard",exact:!0},{label:"Analytics",href:"dashboard/overview/analytics"}],onSelect:t=>console.log("Selected tab:",t)})]),p=()=>new s([e({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[n(),b(),e({switch:[{uri:"dashboard",import:()=>a(()=>import("./overview-dashboard.27794fe5.js"),["assets/overview-dashboard.27794fe5.js","assets/index.2f4e42cd.js","assets/index.24f4989d.css"])},{uri:"dashboard/overview/analytics",import:()=>a(()=>import("./analytics-dashboard.ae5ef33d.js"),["assets/analytics-dashboard.ae5ef33d.js","assets/index.2f4e42cd.js","assets/index.24f4989d.css"])}]})])]);export{p as DashboardOverview,p as default};