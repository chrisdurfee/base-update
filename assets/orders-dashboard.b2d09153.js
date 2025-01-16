import{Y as t,T as D,a as S,b as I,r as g,G as i,x as y,o as l,P as O,g as N,f as k,p as s,z as h,s as p,m as T,h as $,L as b,i as o,j as r,k as C,w as f,q as F,y as w,D as n,A as M,J as d,B as j,E as A,H as q,I as P,K as m,l as R,O as B,S as H}from"./index.800d43d1.js";const u=({title:e,value:a,change:c,icon:x})=>D({padding:"p-0",margin:"m-0",class:"flex flex-col min-w-[250px] hover:bg-muted transition-colors"},[t({class:"p-6 flex flex-row items-center justify-between pb-2"},[S({class:"text-lg font-semibold"},e),x&&I(x)]),t({class:"p-6 pt-0"},[g({class:"text-3xl font-bold text-primary"},a),i({class:"text-sm text-muted-foreground"},c)])]),L=()=>t({class:"flex flex-auto overflow-x-auto -mx-6 px-6 md:mb-12"},[t({class:"inline-flex flex-auto space-x-4 ml-[-24px] pl-6 mr-6 lg:mr-0"},[u({title:"This Week",value:"$1,329",change:"+25% from last week"}),u({title:"This Month",value:"$5,329",change:"+10% from last month"}),u({title:"Total Revenue",value:"$12,329",change:"+15% overall"}),u({title:"New Orders",value:"452",change:"+12% increase"})])]),v=[{id:1,customerName:"Liam Johnson",email:"liam@example.com",type:"Sale",status:"Fulfilled",date:"2023-06-23",amount:250},{id:2,customerName:"Olivia Smith",email:"olivia@example.com",type:"Refund",status:"Declined",date:"2023-06-24",amount:150},{id:3,customerName:"Noah Williams",email:"noah@example.com",type:"Subscription",status:"Fulfilled",date:"2023-06-25",amount:350},{id:4,customerName:"Emma Brown",email:"emma@example.com",type:"Sale",status:"Fulfilled",date:"2023-06-26",amount:450},{id:5,customerName:"Ava Davis",email:"ava@example.com",type:"Sale",status:"Pending",date:"2023-06-27",amount:120},{id:6,customerName:"William Garcia",email:"williamg@example.com",type:"Subscription",status:"Fulfilled",date:"2023-06-28",amount:399},{id:7,customerName:"Sophia Martinez",email:"sophia@example.com",type:"Refund",status:"Declined",date:"2023-06-29",amount:175},{id:8,customerName:"Mason Lee",email:"mason@example.com",type:"Sale",status:"Pending",date:"2023-06-30",amount:220},{id:9,customerName:"Amelia Taylor",email:"amelia@example.com",type:"Sale",status:"Fulfilled",date:"2023-07-01",amount:550},{id:10,customerName:"Benjamin Clark",email:"benjamin@example.com",type:"Subscription",status:"Fulfilled",date:"2023-07-02",amount:499},{id:11,customerName:"Charlotte Hall",email:"charlotte@example.com",type:"Refund",status:"Declined",date:"2023-07-03",amount:200},{id:12,customerName:"Ethan Adams",email:"ethan@example.com",type:"Sale",status:"Fulfilled",date:"2023-07-04",amount:275}],E=e=>v.find(a=>Number(a.id)===Number(e)),Y=()=>t({class:"fex flex-auto flex-col space-y-3",for:["items",e=>s(e.label,`$${e.price.toFixed(2)}`)]}),J=()=>t({class:"flex flex-auto flex-col space-y-3"},[s("Subtotal","$[[subtotal]]"),s("Shipping","$[[shipping]]"),s("Tax","$[[tax]]"),t({class:"flex justify-between font-semibold text-primary"},[h("Total"),h("$[[total]]")])]),z=()=>t({class:"flex flex-col md:flex-row gap-4 pb-4 pt-6"},[t({class:"flex flex-auto flex-col"},[p({class:"text-sm font-semibold mb-1"},"Shipping Information"),i({class:"text-sm whitespace-pre-line text-muted-foreground"},`[[shippingInfo.name]]
[[shippingInfo.address]]`)]),t({class:"flex flex-auto flex-col"},[p({class:"text-sm font-semibold mb-1"},"Billing Information"),i({class:"text-sm text-muted-foreground"},"[[billingInfo.name]]")])]),W=()=>t({class:"pb-4"},[p({class:"text-sm font-semibold mb-3 pt-6"},"Customer Information"),t({class:"text-sm space-y-3"},[s("Customer ID","[[orderId]]"),s("Date","[[date]]"),s("Customer","[[customerInfo.name]]"),s("Email","[[customerInfo.email]]")])]),G=()=>t({class:"pb-2"},[p({class:"text-sm font-semibold mb-3 pt-6"},"Payment Information"),s("Payment Method","[[paymentMethod]]")]),K=()=>[new T({icon:l.ellipsis.vertical,groups:[[{icon:l.mapPin,label:"Track Order",value:"track-order"},{icon:l.trash,label:"Delete Order",value:"delete-order"}]],onSelect:e=>{console.log("Selected item:",e)}})],Q=e=>{const a=E(e),c=a.date;return Object.assign({},{orderId:"Oe31b70H",date:c,formattedDate:$.format("standard",c),items:[{label:"Glimmer Lamps x 2",price:250},{label:"Aqua Filters x 1",price:49}],subtotal:299,shipping:5,tax:25,total:329,shippingInfo:{name:a.customerName||"Liam Johnson",address:a.address||`1234 Main St.
Anytown, CA 12345`},billingInfo:{name:"Same as shipping address"},customerInfo:{name:a.customerName||"Liam Johnson",email:a.email||"liam@acme.com",phone:"+1 234 567 890"},paymentMethod:"Visa **** **** **** 4532"},a)},V=()=>new y({title:"Order ID: [[orderId]]",icon:l.shoppingCart,description:"Date: [[formattedDate]]",size:"md",type:"right",hidePrimaryButton:!0,setData(){return new O},beforeSetup(){const e=this.route.orderId,a=Q(e);this.data.set(a)},headerOptions:K,afterSetup(){this.showModal()},onClose:()=>app.navigate("orders/orders-dashboard")},[N([k({title:"Order Details"},[Y(),t({class:"my-2 border-t"}),J()]),z(),W(),G()])]),U=e=>new y({title:"Add Order",icon:l.circlePlus,description:"Fill in the details for the new order.",size:"sm",type:"right",onSubmit:()=>app.notify({type:"success",title:"Order Added",description:"The order has been successfully added.",icon:l.check})},[t({class:"flex flex-col lg:p-4 space-y-8"},[t({class:"flex flex-auto flex-col w-full gap-4"},[b({legend:"Customer Info"},[new o({name:"customerName",label:"Customer Name",description:"The name of the customer."},[r({type:"text",placeholder:"e.g. John Doe",required:!0})]),new o({name:"email",label:"Email",description:"Email address of the customer."},[r({type:"email",placeholder:"e.g. john@example.com",required:!0})])]),b({legend:"Order Details"},[new o({name:"type",label:"Order Type",description:"Sale, Subscription, or Refund."},[r({type:"text",placeholder:"e.g. Sale",required:!0})]),new o({name:"status",label:"Status",description:"Fulfilled, Pending, or Declined."},[r({type:"text",placeholder:"e.g. Fulfilled",required:!0})]),new o({name:"date",label:"Date",description:"The date of the order (YYYY-MM-DD)."},[r({type:"date",required:!0})]),new o({name:"amount",label:"Amount",description:"Total amount for this order."},[r({type:"number",min:0,step:"0.01",placeholder:"e.g. 250.00",required:!0})]),new o({name:"quantity",label:"Quantity",description:"Number of items in this order."},[new C({class:"max-w-[300px]",initialCount:1,min:1,max:1e3,readonly:!1,bind:"quantity",change:a=>console.log(a)})])])])])]).open(),X=()=>t({class:"flex justify-between items-center w-full md:w-auto"},[new F({class:"w-full md:w-auto",options:[{label:"Week",value:"week",exact:!0},{label:"Month",value:"month"},{label:"Year",value:"year"}],onSelect:e=>console.log("Selected tab:",e)})]),Z=()=>t({class:"flex flex-auto flex-row justify-between items-center"},[X(),t({class:"hidden md:flex gap-2"},[f({variant:"withIcon",class:"outline",icon:l.download},"Download"),f({variant:"withIcon",class:"outline",icon:l.funnel},"Filter")])]),_=(e,a)=>w({class:"items-center px-4 py-2 hover:bg-muted/50"},[n({class:"p-4 hidden md:table-cell"},[new M({checked:e.selected,class:"mr-2",onChange:()=>a(e)})]),n({class:"p-4"},[d({href:`orders/orders-dashboard/${e.id}`,"data-prevent-scroll":!0,class:"flex items-center gap-x-4 no-underline text-inherit hover:text-primary"},[j({src:e.image||"",alt:e.customerName,fallbackText:e.customerName}),t({class:"min-w-0 flex-auto"},[i({class:"text-base font-semibold leading-6 m-0"},e.customerName),i({class:"truncate text-sm leading-5 text-muted-foreground m-0"},e.email)])])]),n({class:"p-4 hidden md:table-cell"},[d({"data-prevent-scroll":!0,href:`orders/orders-dashboard/${e.id}`,class:"no-underline text-inherit hover:text-primary"},e.type)]),n({class:`p-4 hidden md:table-cell font-medium ${e.status==="Fulfilled"?"text-green-500":"text-red-500"}`},[d({"data-prevent-scroll":!0,href:`orders/orders-dashboard/${e.id}`,class:"no-underline text-inherit hover:text-primary"},e.status)]),n({class:"p-4 hidden md:table-cell"},[d({"data-prevent-scroll":!0,href:`orders/orders-dashboard/${e.id}`,class:"no-underline text-inherit hover:text-primary"},e.date)]),n({class:"p-4 text-right justify-end"},[d({"data-prevent-scroll":!0,href:`orders/orders-dashboard/${e.id}`,class:"no-underline text-inherit hover:text-primary"},`$${e.amount.toFixed(2)}`)])]),ee=()=>q([w({class:"text-muted-foreground border-b"},[P({class:"hidden md:table-cell"}),m({key:"customerName",label:"Customer",class:"w-1/4"}),m({key:"type",label:"Type",class:"hidden md:table-cell"}),m({key:"status",label:"Status",class:"hidden md:table-cell"}),m({key:"date",label:"Date",class:"hidden md:table-cell"}),m({key:"amount",label:"Amount",align:"justify-end"})])]),te=({orders:e})=>new A({cache:"list",customHeader:ee(),rows:e,border:!1,rowItem:_,key:"id"}),ae=()=>t({class:"flex items-center justify-between ml-2 mb-8"},[new B({items:[{href:"orders/orders-dashboard",label:"Orders"},{href:"orders/orders-dashboard",label:"Dashboard"},{label:"Recent"}]}),t({class:"hidden md:flex gap-2"},[f({variant:"withIcon",class:"primary",icon:l.circlePlus,click:U},"Add Order")])]),se=()=>t({class:"flex flex-auto flex-col pt-0 px-6 pb-6 sm:p-6"},[ae(),t({class:"space-y-4"},[L(),Z(),t({class:"border rounded-md bg-card shadow-md p-4 md:p-6"},[R({class:"flex flex-auto flex-col pl-4 md:pl-0"},[g({class:"text-lg font-semibold"},"Orders"),i({class:"text-sm text-muted-foreground mb-6"},"Recent orders from your store.")]),te({orders:v}),t({route:{uri:"orders/orders-dashboard/:orderId*",component:V,preventScroll:!0}})])])]),oe=()=>new H([t({class:"grid grid-cols-1 relative w-full max-w-7xl mx-auto"},[se()])]);export{oe as OrdersDashboard,oe as default};
