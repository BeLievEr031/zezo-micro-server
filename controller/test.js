let replaceString  = require("replace-string")
let str = `{"status":1,"listWebSiteStatus":1,"error_message":"None","data":"[{\\"domain\\": \\"deep5.in\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"},{\\"domain\\": \\"hello.com\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"},{\\"domain\\": \\"ns1.zezosoft.com\\", \\"adminEmail\\": \\"sandyrajak031@gmail.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"1MB\\"},{\\"domain\\": \\"okabadiwala.com\\", \\"adminEmail\\": \\"pukhraj@zezo.in\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"1MB\\"},{\\"domain\\": \\"sa.com\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"},{\\"domain\\": \\"sam.com\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"},{\\"domain\\": \\"sandy.com\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"},{\\"domain\\": \\"white.com\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"},{\\"domain\\": \\"yellow.com\\", \\"adminEmail\\": \\"usman@cyberpersons.com\\", \\"ipAddress\\": \\"139.59.73.58\\", \\"admin\\": \\"admin\\", \\"package\\": \\"Default\\", \\"state\\": \\"Active\\", \\"diskUsed\\": \\"0MB\\"}]","pagination":["<li><a href=\\"\\\\#\\"></a></li>"]}`;



// let x = str.replace("\\", "");
// let y = x.replace("\\", "");
// let y = str.replace("status", "dfd");
// let z = str.replace("\\\"", "\"");
// // let z = str.replace("\\", "ss");
// console.log(z);

// let str = 'sandeep+rajak'
// let z = str.replace("rajak","prem")
console.log(replaceString(str,"\\",""))
