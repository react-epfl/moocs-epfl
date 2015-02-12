'use strict';

function WebSocketController($scope) {

    $scope.servoValue = 1500;

    // MOCK websocket server
    var host = '127.0.0.1';
    var port = '8080';

    // Establish WebSocket connection with BBB.
    var ws= new WebSocket('ws://' + host + ':' + port);

    // Receive incoming messages from the WS connection with Lab and display.
    ws.onmessage = function (event) {
        $scope.$apply(function () {
            $scope.message = event.data;
        })
    };

    // Setup listener for slider events.
    //$('.slider').slider().on('slide', function (event) {

        // Update the UI for current slider value.
    //     $scope.$apply($scope.servoValue = event.value);

    //     // Send the value over the WS connection.
    //     if (ws.readyState === 1)
    //         ws.send(event.value);
    // });

    $scope.sendData = function () {
        alert("Under construction");
    };

    $scope.saveData = function () {
        alert("Under construction");
    };

}
