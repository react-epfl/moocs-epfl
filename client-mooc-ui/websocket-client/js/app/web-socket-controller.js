'use strict';

function WebSocketController($scope) {
    // MOCK websocket server
    var host = '127.0.0.1';
    var port = '8081';

    // Establish WebSocket connection
    var ws= new WebSocket('ws://' + host + ':' + port);

    // Receive incoming messages from the WS connection with Lab
    ws.onmessage = function (event) {
        $scope.$apply(function () {
            $scope.data_string = event.data;
            $scope.message = event.data;
        })
    };

    // Setup listener for slider events
    $('.slider').slider().on('slide', function (event) {

        // Update the UI with current slider value
        $scope.$apply($scope.sliderValue = event.value);

    // Send the value over the WS
        if (ws.readyState === 1)
            ws.send(event.value);
    });

    $scope.sendData = function () {
        alert("Under construction");
    };

    $scope.saveData = function () {
        alert("Under construction");
    };

    $scope.loadData = function(){
        ws.send('loadData');

    };

}
