angular.module('photogallery')
  .controller('LoginController', function($scope, $http, $location, $window) {

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function() {

        var usuario = $scope.usuario;

        $http.post('/autenticar',
        {login: usuario.login, senha: usuario.senha})
        .then(function() {
            $location.path('/');
        }, function(error) {
            console.log(error);
            $scope.usuario = {};
            $scope.mensagem = 'Login ou Senha incorretos';
        });
    };

});
