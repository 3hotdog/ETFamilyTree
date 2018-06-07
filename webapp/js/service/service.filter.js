(function(angular) {
    var app=angular.module("etFamlilyTree.service.filter",[]);
    app.filter("containkey",function () {
        return function (etlist,key) {
            var showlist=[];
            if(etlist!=undefined){
                etlist.forEach(function (et) {
                    if(et.et_name.indexOf(key)>=0){
                        showlist.push(et);
                    }
                });
            }
            return showlist;
        }
    });
    app.filter('wordPlace', function ($sce) {
        return function (input, word) {
            if (!word)
                return input;
            var result = input.replace(word, "<span style='color:#c00;'>" + word + "</span>");
            return $sce.trustAsHtml(result);
        };
    })
})(angular)