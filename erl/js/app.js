angular.module('ERL', ['ngSanitize'] )
    .controller('AppCtrl', function ($scope) {
        $scope.client = {};
        $scope.pages = [];

        /** Allows the user to enlarge thumbnails on the screen */

        $scope.viewThumbnail = function () {
            $scope.isEnlarged = !$scope.isEnlarged;

            console.log($scope.isEnlarged);
            if ($scope.isEnlarged) {
                $scope.viewedImage = "<img src='" + this.temps + "'>" ;
                $scope.viewedImg = this.temps;
                /*+ '\n' +
                "<button ng-click=' " + 'viewThumbnail()' +
                'ng-class=' + 'isEnlarged ? ' + '' : 'hide' ' class='closeBtn'>X</button>"*/
            } else {
                $scope.viewedImage = "";
            }
        };

        $scope.pageNotShown, $scope.notEnoughPages, $scope.useWP, $scope.notWP, $scope.start,
            $scope.formComplete, $scope.howItWorks, $scope.isCustomizable, $scope.invalidEmail = false;

        // The first set of template pages shown
        $scope.templateSet1 = [
            "img/erl_page1.png",
            "img/erl_page2.png",
            "img/erl_page3.png",
            "img/erl_page4.png"
        ];
        // The second set of template pages shown
        $scope.templateSet2 = [
            "img/erl_page5.png",
            "img/erl_page6.png",
            "img/erl_page7.png",
            "img/erl_page8.png"
        ];

        $scope.showTemplates = true;

        // Values must match the 9 in the ERL Clients Spreadsheet
        $scope.selectPages = [{
            id: "1", val: "Home"
        }, {
            id: "2", val: "About"
        }, {
            id: "3", val: "Contact"
        }, {
            id: "4", val: "Blog"
        }, {
            id: "5", val: "Wild Card 1"
        }, {
            id: "6", val: "Wild Card 2"
        }, {
            id: "7", val: "Wild Card 3"
        }, {
            id: "8", val: "Wild Card 4"
        }];


        $scope.lowQuote = 500;
        $scope.highQuote = 1500;

        $scope.calculateQuote = function () {
            var additionalCost = 0;
            // multiples $120 per page (the array length of the amount of pages the user input)
            var costPerPage = $scope.selectedPages.length * 120;
            additionalCost += costPerPage; // 1.5 hours per page

            var isWordpress = document.querySelector('input[name = "isWordpress"]:checked').value;
            if (isWordpress == 'yeswp') {
                additionalCost += 960; // 12 additional hours for WordPress, adds 960
            }
            $scope.quoteRange = '$' + ($scope.lowQuote + additionalCost).toString() + " to " +
                '$' + ($scope.highQuote + additionalCost).toString();
            document.getElementById('quote').value = $scope.quoteRange;
            $scope.quoted = true;
        }

        $scope.isValidForm = function () {
            if ( document.getElementById('quote').value === "" || document.getElementById('quote').value === undefined) {
                return false;
            } else {
                return true;
            }
        }
        // Sets the value for a button to true if it was checked
        $scope.formCompleted = function () {
            if ( $scope.isValidForm() ) {
                $scope.formComplete = true;
            } else {
                $scope.invalidEmail = true;
            }
        }

        /** Dynamically creates the screens for choosing templates based on the number of pages the user selected */
        $scope.setPages = function() {
            $scope.selectedPages = [];
            var selectedPagesCount = 0;
            for (var m = 1; m < 9; m++) {
                if (document.getElementById('selectPages' + m).checked) {
                    selectedPagesCount++;
                    $scope.selectedPages.push({
                        name: document.getElementById('selectPages' + m).value.toString(),
                        idx: selectedPagesCount
                        /*brillient man: https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/333251_706962506398_1157689944_o.jpg*/

                    });
                }
            }
        }
    });
