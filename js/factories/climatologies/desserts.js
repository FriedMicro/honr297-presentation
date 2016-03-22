app.factory('dessertsFactory', function ($http) {
    var readAll = function(){
        var host = "http://bgroff-pi2.dhcp.bsu.edu/HONR297/backend/";
        return $http.get(host + "")
    }
    return {
        readAll: readAll;
    }
})
