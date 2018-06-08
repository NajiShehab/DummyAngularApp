'use strict';
var myData = angular.module('dataList',[]);
myData.component('listOfStoriesComponent', {
    templateUrl: 'data-list/HTML/data-list.template.html' ,
    controller: function TestingThis($http){
        var self = this;

        self.itemData = [];
        self.maxID = 0;
        self.number = 0;


        $http.get('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty').then(function(response) {
            self.maxID = response.data;

            var itemID;

            for (itemID = self.maxID; itemID>self.maxID-300; itemID--)

                $http.get('https://hacker-news.firebaseio.com/v0/item/' + itemID +'.json?print=pretty').then(function(response){
                    if(response.data.type === 'story' && response.data.title != null){
                        self.itemData.push(response.data);
                        self.number++;
                    }

                });
        });




    }

});
