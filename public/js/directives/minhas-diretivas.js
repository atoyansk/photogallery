angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
		ddo.transclude = true;

		ddo.scope = {
          titulo: '@'
    };
    ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
  .directive('minhaFoto', function() {

      var ddo = {};
      ddo.restrict = "AE";
      ddo.scope = {
          titulo: '@',
          url: '@'
      };
      ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}" name="{{titulo}}">';

      return ddo;
    })
		.directive('botaoSair', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        };
        ddo.template = '<button class="btn btn-danger pull-right" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        };
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });
