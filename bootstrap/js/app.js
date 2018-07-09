angular.module("abc",[])
.controller("ctrl1",ctrl1)
function ctrl1($scope)
{
    $scope.obj =[
        {
            'Company':'Alfreds Futterkiste',
            'Contact':'	Maria Anders',
            'Country':'Germany'
        },
           { 'Company':'Centro comercial Moctezuma',
            'Contact':'Francisco Chang',
            'Country':'Mexico'
        },
          {  'Company':'Ernst Handel',
            'Contact':'Roland Mendel',
            'Country':'Austria'
        },
           { 'Company':'Island Trading',
            'Contact':'Helen Bennett',
            'Country':'UK'
        },
           { 'Company':'Laughing Bacchus Winecellars',
            'Contact':'Yoshi Tannamuri',
            'Country':'Canada'
        },
        ];
    }
        
        
