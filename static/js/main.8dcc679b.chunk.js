(this["webpackJsonpcra-tailwind"]=this["webpackJsonpcra-tailwind"]||[]).push([[0],{128:function(e,t,a){e.exports=a(463)},133:function(e,t,a){},16:function(e){e.exports=JSON.parse('{"syndicai_website":"https://syndicai.co/","syndicai_enterprise":"https://syndicai.co/enterprise","syndicai_platform":"https://app.syndicai.co/","syndicai_docs":"https://docs.syndicai.co/","syndicai_feedback":"https://syndicai.slack.com/join/shared_invite/zt-eqbfjmyo-BCNw0gDryzU1A_6GH7xyYw","syndicai_mail":"hello@syndicai.co","syndicai_logo":"https://raw.githubusercontent.com/syndicai/brand/main/logo/sai_logo.svg","syndicai_github":"https://github.com/syndicai/","syndicai_slack":"https://join.slack.com/t/syndicai/shared_invite/zt-eqbfjmyo-BCNw0gDryzU1A_6GH7xyYw","syndicai_linkedin":"https://linkedin.com/company/syndicai","syndicai_facebook":"https://facebook.com/syndicai","syndicai_medium":"https://medium.com/syndicai","showcase_github":"https://github.com/syndicai/showcase"}')},17:function(e){e.exports=JSON.parse('[{"name":"Image Classifier","description":"Alexnet image classifier.","path":"showcase/image-classifier","image":"images/imageclassifier.jpg","model":"https://dd6ff357-893d-4527-bc44-034dfe9ad575.syndic.ai","input_type":"JSON (base64)","output_type":"String","sample_input":"https://st.hzcdn.com/simgs/pictures/kitchens/mrgreensincharge-amy-storm-and-company-img~32610be50a52da3d_4-5494-1-ad43b18.jpg","sample_output":"carpet","category":"Computer Vision","framework":"PyTorch","github":"https://github.com/syndicai/models/tree/master/pytorch/image_classifier"},{"name":"Object Detector","description":"YoloV5 object detection and classification model.","path":"object-detector","image":"images/objectdetector.jpg","model":"https://f8b23ba5-a755-42b6-bdb8-19a93fe5fa3d.syndic.ai","input_type":"JSON (url)","output_type":"JSON (base64)","sample_input":"https://raw.githubusercontent.com/syndicai/models/master/pytorch/yolov5/sample_data/input.jpeg","sample_output":"https://raw.githubusercontent.com/syndicai/models/master/pytorch/yolov5/sample_data/output.png","category":"Computer Vision","framework":"PyTorch","github":"https://github.com/syndicai/models/tree/master/pytorch/yolov5"},{"name":"Colorizer","description":"Colorize and restore old images using DeOldify model.","path":"colorizer","image":"images/colorizer.jpg","model":"https://cc23d91d-1019-4c97-9c3b-fed3b9a7dc87.syndic.ai","input_type":"JSON (url)","output_type":"JSON (base64)","sample_input":"https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2013/05/einstein11.jpg","sample_output":"sample output","category":"Computer Vision","framework":"FastAI","github":"https://github.com/syndicai/models/tree/master/fastai/deoldify"},{"name":"Face blurring","description":"Anonymize the face by blurring it.","path":"face-blurring","image":"images/faceblurring.jpg","model":"https://39787df5-a8b9-46b0-9f3d-87f498f14138.syndic.ai","input_type":"JSON (base64)","output_type":"JSON (base64)","sample_input":"https://images.firstpost.com/wp-content/uploads/2020/01/oscars-presenters-1200.jpg","sample_output":"","category":"Computer Vision","framework":"OpenCV","github":"https://github.com/syndicai/models/tree/master/opencv/face_blurring"},{"name":"Style Transfer","description":"Fast arbitrary image style transfer.","path":"style-transfer","image":"images/styletransfer.jpg","model":"https://655f8e11-d8c1-4eb1-b35c-fe90e4025e79.syndic.ai","input_type":"JSON (url)","output_type":"JSON (base64)","sample_input":"https://www.pinkvilla.com/files/styles/contentpreview/public/Once-Upon-A-Time-In-Hollywood-Heres-when-Brad-Pitt-and-Leonardo-DiCaprios-movie-is-releasing-in-India.jpg","sample_output":"","category":"Computer Vision","framework":"Tensorflow","github":"https://github.com/syndicai/models/tree/master/tensorflow/style_transfer"},{"name":"Instance Segmentation","description":"Mask R-CNN implementation for instance segmentation.","path":"instance-segmentation","image":"images/instancesegmentation.jpg","model":"https://bf6803d1-0101-4558-bcca-c6b6d1c2deb1.syndic.ai","input_type":"JSON (url)","output_type":"JSON (base64)","sample_input":"https://i.pinimg.com/474x/69/e5/d7/69e5d7b4a1633d73a1362fb4e6561bc4.jpg","sample_output":"","category":"Computer Vision","framework":"Keras","github":"https://github.com/syndicai/models/tree/master/keras/object_segmentation"},{"name":"Face Mask Detector","description":"Face-mask detection created for safety purposes due to the outbreak of Covid-19.","path":"mask-detector","image":"images/maskdetector.jpg","model":"https://155b4fe4-42ff-4fdb-b671-196b913a7a09.syndic.ai","input_type":"JSON (url)","output_type":"JSON (base64)","sample_input":"https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1601205-face-masks-ipsos.jpg;w=960","sample_output":"","category":"Computer Vision","framework":"Keras","github":"https://github.com/syndicai/models/tree/master/keras/face_mask_detector"}]')},463:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),s=(a(133),a(24)),i=a(25),o=a(27),m=a(26),u=a(28),d=a(126),p=a(15),h=a(10),g=a(120),f=a(16);function y(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("nav",{className:"z-40 sticky top-0 w-full h-16 border-b flex justify-center items-center bg-white"},l.a.createElement("div",{className:"container max-w-5xl px-3 xl:px-0"},l.a.createElement("div",{className:"grid grid-cols-6"},l.a.createElement("div",{className:"col-span-2 flex text-center justify-start items-center"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:f.syndicai_logo,width:"110px",className:"mx-auto md:ml-0",alt:"syndicai logo"}))),l.a.createElement("div",{className:"col-span-4 flex text-center justify-end items-center"},l.a.createElement("a",{href:f.syndicai_feedback,className:"mr-5"},l.a.createElement(h.Text,{type:"secondary",className:"hover:text-black"},"Feedback")),l.a.createElement("a",{href:f.syndicai_docs,className:"mr-5"},l.a.createElement(h.Text,{type:"secondary",className:"hover:text-black"},"Docs")),l.a.createElement(h.Popover,{content:function(){return l.a.createElement("div",{className:"w-40 flex flex-wrap justify-end"},l.a.createElement(h.Popover.Item,null,l.a.createElement(h.Link,{href:f.syndicai_platform},l.a.createElement("p",{className:"my-0",type:"secondary"},"Platform"))),l.a.createElement(h.Popover.Item,null,l.a.createElement(h.Link,{href:f.syndicai_website},l.a.createElement("p",{className:"my-0",type:"secondary"},"Website"))),l.a.createElement(h.Popover.Item,null,l.a.createElement(h.Link,{href:f.syndicai_enterprise},l.a.createElement("p",{className:"my-0",type:"secondary"},"Enterprise"))),l.a.createElement(h.Popover.Item,{line:!0}),l.a.createElement(h.Popover.Item,null,l.a.createElement(h.Link,{href:"mailto:"+f.syndicai_mail},l.a.createElement("p",{className:"my-0"},"Contact Us"))))},placement:"bottomEnd",trigger:"hover"},l.a.createElement(g.MoreHorizontal,{color:"gray",className:"cursor-pointer mt-1"})))))))}var E=a(42),b=a(121),x=a.n(b),v=a(122),w=a.n(v),_=a(123),k=a.n(_),N=a(124),j=a.n(N),C=a(125),O=a.n(C);function S(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("footer",{className:"inset-x-0 bottom-0 pt-12 relative w-full h-40 border-t flex justify-center",style:{backgroundColor:"#fafafa"}},l.a.createElement("div",{className:"container max-w-5xl px-3 xl:px-0"},l.a.createElement("div",{className:"w-full mb-2"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:f.syndicai_logo,width:"100px",className:"mx-auto md:ml-0",alt:"syndicai logo"}))),l.a.createElement("div",{className:"grid grid-cols-6"},l.a.createElement("div",{className:"col-span-6 md:col-span-3 mb-6 md:mb-0 flex flex-wrap text-center justify-center md:justify-start items-center"},l.a.createElement(h.Text,{small:!0,type:"secondary",className:"hover:text-black"},"Copyright \xa9 2020 syndicai. All rights reserved.")),l.a.createElement("div",{className:"col-span-6 md:col-span-3 flex text-center justify-center md:justify-end items-center"},l.a.createElement(h.Link,{href:f.syndicai_github},l.a.createElement(E.Icon,{className:"w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75",icon:k.a})),l.a.createElement(h.Link,{href:f.syndicai_slack},l.a.createElement(E.Icon,{className:"w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75",icon:x.a})),l.a.createElement(h.Link,{href:f.syndicai_linkedin},l.a.createElement(E.Icon,{className:"w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75",icon:j.a})),l.a.createElement(h.Link,{href:f.syndicai_facebook},l.a.createElement(E.Icon,{className:"w-6 h-6 ml-2 mr-2 opacity-50 hover:opacity-75",icon:O.a})),l.a.createElement(h.Link,{href:f.syndicai_medium},l.a.createElement(E.Icon,{className:"w-6 h-6 ml-2 mr-0 opacity-50 hover:opacity-75",icon:w.a})))))))}function T(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("div",{className:"w-full text-center mb-20 sm:mb-32"},l.a.createElement("h2",{className:"mx-auto text-2xl md:text-3xl font-bold gradient-text tracking-tighter",style:{width:"min-content"}},"Showcase"),l.a.createElement("h1",{className:"px-5 sm:px-auto mb-5 md:text-6xl tracking-tighter"},"Let us inspire you"),l.a.createElement(h.Text,{type:"secondary",className:"px-5 sm:px-auto max-w-screen-md mx-auto"},"We do know that deploying machine learning models at scale is a very time-consuming and complex process. Therefore we decided to build a platform that will allow you easily showcase your models."),l.a.createElement(h.Text,{small:!0,p:!0},l.a.createElement("a",{href:f.showcase_github},"Visit source code on GitHub."))),l.a.createElement("style",{jsx:!0},"\n        .gradient-text {\n          background-color: #7c32b8;\n          background-image: linear-gradient(45deg, #7c32b8, #fc0783);\n          background-size: 100%;\n          -webkit-background-clip: text;\n          -moz-background-clip: text;\n          -webkit-text-fill-color: transparent; \n          -moz-text-fill-color: transparent;\n      }\n      "))}function I(e){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("a",{href:"/"+e.data.path},l.a.createElement(h.Card,{shadow:!0,width:"100%"},l.a.createElement(h.Image,{src:e.data.image,height:"200",style:{objectFit:"cover"}}),l.a.createElement("h3",null,e.data.name),l.a.createElement(h.Text,{type:"secondary"},e.data.description),l.a.createElement(h.Card.Footer,null,l.a.createElement(h.Link,{color:!0,target:"_blank",href:e.data.github},l.a.createElement(h.Text,{small:!0},"Visit source code."))))))}var B=a(17),P=function(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("div",{className:"w-full min-h-screen flex",style:{backgroundColor:"#fafafa"}},l.a.createElement("div",{className:"container max-w-5xl pt-20 mx-auto pt-32 py-48 px-3 xl:px-0"},l.a.createElement(T,null),l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6"},B.map(function(e){return l.a.createElement("div",{className:"col-span-1"},l.a.createElement(I,{data:e}))})))))};function J(e){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("div",{className:"w-full h-64 flex items-center"},l.a.createElement("div",{className:"container max-w-5xl mx-auto xl:px-0 text-center"},l.a.createElement(h.Text,{h2:!0},e.data.name),l.a.createElement(h.Link,{color:!0,target:"_blank",href:e.data.github},l.a.createElement(h.Text,{small:!0},"Visit source code")))))}function A(e){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("div",{className:"w-full flex"},l.a.createElement("div",{className:"container max-w-5xl pt-10 mx-auto py-20 px-3 xl:px-0"},l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-6 gap-20"},l.a.createElement("div",{className:"col-span-1 sm:col-span-3 lg:col-span-2"},l.a.createElement(h.Text,{h3:!0},"Details"),l.a.createElement(h.Divider,null),l.a.createElement("div",{className:"grid grid-cols-2 gap-2"},l.a.createElement("div",null,l.a.createElement(h.Text,{p:!0,b:!0},"Category:"),l.a.createElement(h.Text,{p:!0,b:!0},"Input type:"),l.a.createElement(h.Text,{p:!0,b:!0},"Output type:"),l.a.createElement(h.Text,{p:!0,b:!0},"Framework:")),l.a.createElement("div",{className:"w-full text-right"},l.a.createElement(h.Text,{p:!0,type:"secondary"},e.data.category),l.a.createElement(h.Text,{p:!0,type:"secondary"},e.data.input_type),l.a.createElement(h.Text,{p:!0,type:"secondary"},e.data.output_type),l.a.createElement(h.Text,{p:!0,type:"secondary"},e.data.framework)))),l.a.createElement("div",{className:"col-span-1 sm:col-span-3 lg:col-span-4"},l.a.createElement(h.Text,{h3:!0},"Description"),l.a.createElement(h.Divider,null),l.a.createElement("div",{className:"grid grid-cols-1 gap-2"},l.a.createElement(h.Text,{p:!0,type:"secondary"},e.data.description)))))),l.a.createElement(h.Spacer,{y:7}))}function D(e){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),l.a.createElement("div",{className:"w-full flex border-t border-b",style:{backgroundColor:"#fafafa"}},l.a.createElement("div",{className:"container max-w-5xl py-10 mx-auto px-3 xl:px-0"},l.a.createElement(h.Text,{h3:!0},"Run a model"),l.a.createElement(h.Text,{type:"secondary"},"Provide input data in order to run a model."),l.a.createElement("div",{className:"w-full h-full"},e.children))),l.a.createElement(h.Spacer,{y:3}),l.a.createElement("style",{jsx:!0},"\n        .background-dots {\n            background-position: 0 0, 25px 25px;\n            background-image: radial-gradient(#d7d7d7 1px,transparent 0),radial-gradient(#d7d7d7 1px,transparent 0);\n            background-size: 50px 50px;\n      }\n      "))}var G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={model:a.props.data.model,img_url:a.props.data.sample_input,output:null,loading:!1},a.toggleInputChange=function(e){a.setState({img_url:e.target.value})},a.toggleButtonState=function(){var e=a.state.img_url;a.setState({loading:!0,output:null}),fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",crossDomain:!0,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.blob()}).then(function(t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){fetch(a.state.model,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then(function(e){return e.text()}).then(function(e){a.setState({output:e,loading:!1})})}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),""===this.state.img_url?null:l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center",style:{height:"440px"}},l.a.createElement(h.Image,{height:"440",src:this.state.img_url})),null===this.state.output?null:l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center"},l.a.createElement(h.Code,{width:"100%",className:"bg-white",block:!0},this.state.output)),l.a.createElement("div",{className:"my-5"},l.a.createElement(h.Input,{value:this.state.img_url,width:"100%",onChange:this.toggleInputChange}),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(h.Button,{className:"m-2",type:"success",onClick:this.toggleButtonState,loading:this.state.loading},"Run model"))))}}]),t}(l.a.Component),z=function(){var e=B[0];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(G,{data:e})),l.a.createElement(A,{data:e}))},L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={model:a.props.data.model,img_url:a.props.data.sample_input,output:null,loading:!1},a.toggleInputChange=function(e){a.setState({img_url:e.target.value,output:null})},a.toggleButtonState=function(){var e=a.state.img_url;a.setState({loading:!0,output:null}),fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",crossDomain:!0,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.blob()}).then(function(t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){fetch(a.state.model,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then(function(e){return e.text()}).then(function(e){a.setState({output:e,loading:!1})})}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),null===this.state.output?""===this.state.img_url?null:l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center",style:{height:"440px"}},l.a.createElement(h.Image,{height:"440",src:this.state.img_url})):l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center"},l.a.createElement(h.Image,{height:"440",src:"data:image/png;base64,".concat(this.state.output)})),l.a.createElement("div",{className:"my-5"},l.a.createElement(h.Input,{value:this.state.img_url,width:"100%",onChange:this.toggleInputChange}),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(h.Button,{className:"m-2",type:"success",onClick:this.toggleButtonState,loading:this.state.loading},"Run model"))))}}]),t}(l.a.Component),R=function(){var e=B[1];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(L,{data:e})),l.a.createElement(A,{data:e}))},F=function(){var e=B[2];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(L,{data:e})),l.a.createElement(A,{data:e}))},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={model:a.props.data.model,img_url:a.props.data.sample_input,output:null,loading:!1},a.toggleInputChange=function(e){a.setState({img_url:e.target.value,output:null})},a.toggleButtonState=function(){var e=a.state.img_url;a.setState({loading:!0,output:null}),fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",crossDomain:!0,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.blob()}).then(function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result,n=e.substr(e.indexOf(",")+1);fetch(a.state.model,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64:n})}).then(function(e){return e.text()}).then(function(e){a.setState({output:e,loading:!1})})}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),null===this.state.output?""===this.state.img_url?null:l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center",style:{height:"440px"}},l.a.createElement(h.Image,{height:"440",src:this.state.img_url})):l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center"},l.a.createElement(h.Image,{height:"440",src:"data:image/png;base64,".concat(this.state.output)})),l.a.createElement("div",{className:"my-5"},l.a.createElement(h.Input,{value:this.state.img_url,width:"100%",onChange:this.toggleInputChange}),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(h.Button,{className:"m-2",type:"success",onClick:this.toggleButtonState,loading:this.state.loading},"Run model"))))}}]),t}(l.a.Component),U=function(){var e=B[3];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(V,{data:e})),l.a.createElement(A,{data:e}))},H=function(){var e=B[4];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(L,{data:e})),l.a.createElement(A,{data:e}))},M=function(){var e=B[5];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(V,{data:e})),l.a.createElement(A,{data:e}))},Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={model:a.props.data.model,img_url:a.props.data.sample_input,output:null,loading:!1},a.toggleInputChange=function(e){a.setState({img_url:e.target.value,output:null})},a.toggleButtonState=function(){var e=a.state.img_url;a.setState({loading:!0,output:null}),fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",crossDomain:!0,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.blob()}).then(function(t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){fetch(a.state.model,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:e})}).then(function(e){return e.text()}).then(function(e){a.setState({output:e,loading:!1})})}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.GeistProvider,null,l.a.createElement(h.CssBaseline,null),null===this.state.output?""===this.state.img_url?null:l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center",style:{height:"440px"}},l.a.createElement(h.Image,{height:"440",src:this.state.img_url})):l.a.createElement("div",{className:"w-full background-dots flex justify-center items-center"},l.a.createElement(h.Image,{height:"440",src:"data:image/png;base64,".concat(this.state.output)})),l.a.createElement("div",{className:"my-5"},l.a.createElement(h.Input,{value:this.state.img_url,width:"100%",onChange:this.toggleInputChange}),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(h.Button,{className:"m-2",type:"success",onClick:this.toggleButtonState,loading:this.state.loading},"Run model"))))}}]),t}(l.a.Component),q=function(){var e=B[6];return l.a.createElement("div",null,l.a.createElement(J,{data:e}),l.a.createElement(D,null,l.a.createElement(Y,{data:e})),l.a.createElement(A,{data:e}))},K=function(){return l.a.createElement(d.a,{basename:"/showcase"},l.a.createElement(y,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/showcase",exac:!0,component:P}),l.a.createElement(p.a,{path:"/showcase/image-classifier",exac:!0,component:z}),l.a.createElement(p.a,{path:"/object-detector",component:R}),l.a.createElement(p.a,{path:"/colorizer",component:F}),l.a.createElement(p.a,{path:"/face-blurring",component:U}),l.a.createElement(p.a,{path:"/style-transfer",component:H}),l.a.createElement(p.a,{path:"/instance-segmentation",component:M}),l.a.createElement(p.a,{path:"/mask-detector",component:q})),l.a.createElement(S,null))},W=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(K,null)}}]),t}(n.Component);c.a.render(l.a.createElement(W,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.8dcc679b.chunk.js.map