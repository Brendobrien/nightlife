'use strict';

var app = angular.module("nightlife", [
  'ui.router'])
  // 'nightlife.controllers',
  // 'nightlife.services'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('navbar',{
    url: "",
    templateUrl: "views/navbar.html",
    controller: function($scope, $http) {
        // (localStorage.token)
        // ? $scope.loggedOn = true;
        // : $scope.loggedOn = false;
        $scope.loggedOn = false;
    },
    abstract: true
  })

  .state('navbar.home', {
    url: '/home',
    templateUrl: 'views/home.html',    
    controller: function($scope, $http) {
        console.log('yes');

        $scope.city = '';
        $scope.search = function() {
          console.log($scope.city)
          $http.get('/api?Dallas').then(function(x) {
            console.log(x);
          })
        }

        $scope.data = [{"location": {"zip_code": "75204", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "2418 Allen St", "state": "TX"}, "coordinates": {"longitude": -96.7985488562114, "latitude": 32.7978049989365}, "price": "$$", "rating": 4.5, "categories": [{"alias": "cocktailbars", "title": "Cocktail Bars"}], "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/6isTPvODQvLV2C0OHrNj7w/o.jpg", "id": "parliament-dallas-2", "review_count": 257, "name": "Parliament", "phone": "+14698044321", "url": "https://www.yelp.com/biz/parliament-dallas-2?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75226", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "2708 W Elm St", "state": "TX"}, "coordinates": {"longitude": -96.7845154, "latitude": 32.784359}, "price": "$$", "rating": 4.5, "categories": [{"alias": "lounges", "title": "Lounges"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/oErwSqyau3iVJsc3xP5trw/o.jpg", "id": "black-swan-saloon-dallas", "review_count": 153, "name": "Black Swan Saloon", "phone": "+12147494848", "url": "https://www.yelp.com/biz/black-swan-saloon-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75205", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "4900 McKinney Ave", "state": "TX"}, "coordinates": {"longitude": -96.7847649, "latitude": 32.8268975}, "price": "$$", "rating": 5.0, "categories": [{"alias": "cocktailbars", "title": "Cocktail Bars"}], "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/QPj2CIlTDsIu1Ox5B2M1HQ/o.jpg", "id": "atwater-alley-dallas", "review_count": 22, "name": "Atwater Alley", "phone": "+14698939400", "url": "https://www.yelp.com/biz/atwater-alley-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75219", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "3902 Maple Ave", "state": "TX"}, "coordinates": {"longitude": -96.815048, "latitude": 32.805362}, "price": "$", "rating": 4.0, "categories": [{"alias": "divebars", "title": "Dive Bars"}, {"alias": "musicvenues", "title": "Music Venues"}, {"alias": "cocktailbars", "title": "Cocktail Bars"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-czV4qKApSxdYEBUY-Urrw/o.jpg", "id": "the-grapevine-bar-dallas", "review_count": 237, "name": "The Grapevine Bar", "phone": "+12145228466", "url": "https://www.yelp.com/biz/the-grapevine-bar-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75206", "address2": "Ste 210", "address3": "", "country": "US", "city": "Dallas", "address1": "5319 E Mockingbird Ln", "state": "TX"}, "coordinates": {"longitude": -96.7774429, "latitude": 32.8368111}, "price": "$$", "rating": 4.0, "categories": [{"alias": "bars", "title": "Bars"}, {"alias": "newamerican", "title": "American (New)"}], "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8O_7Zhs9I4Rcbf3YsphcUQ/o.jpg", "id": "the-peoples-last-stand-dallas-3", "review_count": 252, "name": "The People's Last Stand", "phone": "+12143708755", "url": "https://www.yelp.com/biz/the-peoples-last-stand-dallas-3?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75226", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "2714 Elm St", "state": "TX"}, "coordinates": {"longitude": -96.7840666551348, "latitude": 32.7844633049979}, "price": "$$", "rating": 4.5, "categories": [{"alias": "cocktailbars", "title": "Cocktail Bars"}, {"alias": "burgers", "title": "Burgers"}, {"alias": "hungarian", "title": "Hungarian"}], "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/9Ar961K9yRw9aR-OyPfYgg/o.jpg", "id": "armoury-d-e-dallas", "review_count": 102, "name": "Armoury D E", "phone": "+19728035151", "url": "https://www.yelp.com/biz/armoury-d-e-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75201", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "1530 Main St", "state": "TX"}, "coordinates": {"longitude": -96.7984467, "latitude": 32.7807376}, "price": "$$", "rating": 4.0, "categories": [{"alias": "newamerican", "title": "American (New)"}, {"alias": "cocktailbars", "title": "Cocktail Bars"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6gxZhjTLLGBEOKRjwfjhVA/o.jpg", "id": "midnight-rambler-dallas", "review_count": 110, "name": "Midnight Rambler", "phone": "+12142614601", "url": "https://www.yelp.com/biz/midnight-rambler-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75205", "address2": "Fl 2", "address3": "", "country": "US", "city": "Dallas", "address1": "87 Highland Park Village", "state": "TX"}, "coordinates": {"longitude": -96.8056808, "latitude": 32.8358851}, "price": "$$$", "rating": 4.5, "categories": [{"alias": "lounges", "title": "Lounges"}, {"alias": "sushi", "title": "Sushi Bars"}, {"alias": "mediterranean", "title": "Mediterranean"}], "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1oDveYBOLblv8a2wyiC0mg/o.jpg", "id": "lounge-31-dallas", "review_count": 31, "name": "Lounge 31", "phone": "+12144203900", "url": "https://www.yelp.com/biz/lounge-31-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75215", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "1711 S Lamar St", "state": "TX"}, "coordinates": {"longitude": -96.7931187, "latitude": 32.7659649}, "price": "$", "rating": 5.0, "categories": [{"alias": "bars", "title": "Bars"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/lzlV6D9PI_bweR0xkEX9JA/o.jpg", "id": "industry-alley-bar-dallas", "review_count": 11, "name": "Industry Alley Bar", "phone": "+12142383111", "url": "https://www.yelp.com/biz/industry-alley-bar-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75204", "address2": null, "address3": "", "country": "US", "city": "Dallas", "address1": "2718 Boll St", "state": "TX"}, "coordinates": {"longitude": -96.8030002560584, "latitude": 32.798216474711}, "price": "$$", "rating": 4.0, "categories": [{"alias": "pubs", "title": "Pubs"}, {"alias": "danceclubs", "title": "Dance Clubs"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ouh1RtjafEI6KcEApG1rnw/o.jpg", "id": "the-ginger-man-dallas", "review_count": 322, "name": "The Ginger Man", "phone": "+12147548771", "url": "https://www.yelp.com/biz/the-ginger-man-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75209", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "5334 Lemmon Ave", "state": "TX"}, "coordinates": {"longitude": -96.8225098, "latitude": 32.826931}, "price": "$", "rating": 4.0, "categories": [{"alias": "divebars", "title": "Dive Bars"}], "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qSfUnHX1M4uYRzJWR_YIpg/o.jpg", "id": "ivy-tavern-dallas", "review_count": 104, "name": "Ivy Tavern", "phone": "+12145594424", "url": "https://www.yelp.com/biz/ivy-tavern-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75223", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "3122 Samuell Blvd", "state": "TX"}, "coordinates": {"longitude": -96.7408142089844, "latitude": 32.7926559448242}, "price": "$", "rating": 5.0, "categories": [{"alias": "bars", "title": "Bars"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/HsTLN5Z_O7lkbyAmGgfALA/o.jpg", "id": "the-fireplace-lounge-dallas", "review_count": 15, "name": "The Fireplace Lounge", "phone": "+12148230755", "url": "https://www.yelp.com/biz/the-fireplace-lounge-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75214", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "6448 E Mockingbird Ln", "state": "TX"}, "coordinates": {"longitude": -96.7516810074449, "latitude": 32.836397996808}, "price": "$", "rating": 4.5, "categories": [{"alias": "pubs", "title": "Pubs"}], "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ruqMPTH1GXNVtSa8kmjukA/o.jpg", "id": "lakewood-growler-dallas", "review_count": 68, "name": "Lakewood Growler", "phone": "+12145846253", "url": "https://www.yelp.com/biz/lakewood-growler-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75207", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "1926 Market Center Blvd", "state": "TX"}, "coordinates": {"longitude": -96.824276, "latitude": 32.797917}, "price": "$$", "rating": 4.0, "categories": [{"alias": "burgers", "title": "Burgers"}, {"alias": "beerbar", "title": "Beer Bar"}], "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/mofnC4o68sbgCKGEMUtFqw/o.jpg", "id": "rodeo-goat-dallas", "review_count": 715, "name": "Rodeo Goat", "phone": "+12147414628", "url": "https://www.yelp.com/biz/rodeo-goat-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75204", "address2": "Ste 201", "address3": "", "country": "US", "city": "Dallas", "address1": "1520 Elm St", "state": "TX"}, "coordinates": {"longitude": -96.798692, "latitude": 32.781324}, "price": "$$", "rating": 4.0, "categories": [{"alias": "cocktailbars", "title": "Cocktail Bars"}, {"alias": "tapasmallplates", "title": "Tapas/Small Plates"}, {"alias": "newamerican", "title": "American (New)"}], "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3YIuBECGbkFNxJlgHYIiIg/o.jpg", "id": "the-woolworth-dallas", "review_count": 343, "name": "The Woolworth", "phone": "+12148140588", "url": "https://www.yelp.com/biz/the-woolworth-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75209", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "7717 Inwood Rd", "state": "TX"}, "coordinates": {"longitude": -96.8214501, "latitude": 32.8500652}, "price": "$", "rating": 4.0, "categories": [{"alias": "divebars", "title": "Dive Bars"}, {"alias": "venues", "title": "Venues & Event Spaces"}], "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/_sJ_e8A5ma8s96m1nUBcfQ/o.jpg", "id": "inwood-tavern-dallas", "review_count": 73, "name": "Inwood Tavern", "phone": "+12143532666", "url": "https://www.yelp.com/biz/inwood-tavern-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75207", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "1621 Oak Lawn Ave", "state": "TX"}, "coordinates": {"longitude": -96.8202942609787, "latitude": 32.7968167432672}, "price": "$$", "rating": 4.0, "categories": [{"alias": "bars", "title": "Bars"}, {"alias": "gastropubs", "title": "Gastropubs"}, {"alias": "tradamerican", "title": "American (Traditional)"}], "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9R1wSs67Th5xTSvg5J1Qsw/o.jpg", "id": "meddlesome-moth-dallas", "review_count": 1362, "name": "Meddlesome Moth", "phone": "+12146287900", "url": "https://www.yelp.com/biz/meddlesome-moth-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75206", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "1613 Greenville Ave", "state": "TX"}, "coordinates": {"longitude": -96.7702455818653, "latitude": 32.8102954477072}, "price": "$", "rating": 4.5, "categories": [{"alias": "divebars", "title": "Dive Bars"}, {"alias": "poolhalls", "title": "Pool Halls"}], "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/j7btkeaB0-GfAwlwyMQx3A/o.jpg", "id": "ships-lounge-dallas", "review_count": 76, "name": "Ships Lounge", "phone": "+19727077234", "url": "https://www.yelp.com/biz/ships-lounge-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75235", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "5320 Maple Ave", "state": "TX"}, "coordinates": {"longitude": -96.83229, "latitude": 32.81833}, "price": "$", "rating": 4.0, "categories": [{"alias": "bars", "title": "Bars"}], "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2u3qqV4lJPrHPsUhGXQReA/o.jpg", "id": "windmill-lounge-dallas", "review_count": 84, "name": "Windmill Lounge", "phone": "+12144437818", "url": "https://www.yelp.com/biz/windmill-lounge-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"zip_code": "75206", "address2": "", "address3": "", "country": "US", "city": "Dallas", "address1": "3001 N Henderson Ave", "state": "TX"}, "coordinates": {"longitude": -96.7856091, "latitude": 32.8212786}, "price": "$$", "rating": 4.0, "categories": [{"alias": "newamerican", "title": "American (New)"}, {"alias": "gastropubs", "title": "Gastropubs"}, {"alias": "cocktailbars", "title": "Cocktail Bars"}], "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/c23eMmNSjwllaocxOtCTyg/o.jpg", "id": "victor-tangos-dallas", "review_count": 730, "name": "Victor Tangos", "phone": "+12142528595", "url": "https://www.yelp.com/biz/victor-tangos-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}];
    }
  })
  .state('navbar.signin', {
    url: '/signin',
    templateUrl: 'views/signin.html'
  })
  .state('navbar.signup', {
    url: '/signup',
    templateUrl: 'views/signup.html'
  })

  $urlRouterProvider.otherwise('/home');
})

 // views: {
  // 	'side-menu-bb': {
  // 		templateUrl: "views/home.html",
  // 		// controller: 'ScheduleCtrl'
  // 	}
  // }