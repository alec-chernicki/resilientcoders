angular.module('Application', ['ngSanitize'] )
    .controller('AppCtrl', function ($scope) {

        $scope.isValidContact = function() {
            return $scope.name !== undefined && $scope.email !== "" && $scope.telephone !== "" && $scope.organization !== ""
        };

        $scope.isValidExplanation = function() {
            return $scope.whyYou !== undefined;
        };

        $scope.isValidForm = function() {
            return $scope.isValidContact() && $scope.isValidExplanation();
        };

        $scope.showForm = function() {
            $scope.triggerForm = false;
            $scope.triggerForm = !$scope.triggerForm;
            return $scope.triggerForm;
        };

        $scope.formSubmit = function() {
            if ($scope.isValidForm()) {
                $scope.submitSuccess = true;
            } else {
                $scope.submitSuccess = false;
            }
        }
    });
