/**
 * Created by gerh on 11.12.15.
 */


//var teml ="{{name}}";
//var data = {"name":'Peter I'};
//
//var output= Mustache.render(teml,data);
//console.log(output);
//_______________________________________________
//Template:
//var data
//{{#repo}}
//<b>{{name}}</{{/repo}}
//{{^repo}}
//No repos :(
//{{/repo}}
//Hash:
//{
//    "repo": []
//}
//Output:
//    No repos :(
//
////_________________________________________________


var teml ="{{#repo}}<b>{{name}}</b>{{/repo}}";


var data = {"repo": [
    { "name": "resque" },
    { "name": "hub" },
    { "name": "rip" }
]
}

var output= Mustache.render(teml,data);
console.log(output);
//Output:
//    <b>resque</b><b>hub</b><b>rip</b>

