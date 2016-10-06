'use strict';

angular.module('nightlife.services', [])

.factory('Api', function($http){
  return {
    barsInDallas : function() {
      return Dallas;
    },
    barsInCity : function(city) {
      return $http.get('/api/yelp?'+city);
      // return Promise.resolve(newYork);
    }
  }
})

const Dallas = [{"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "2418 Allen St", "zip_code": "75204", "address2": "", "address3": ""}, "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/6isTPvODQvLV2C0OHrNj7w/o.jpg", "coordinates": {"longitude": -96.7985488562114, "latitude": 32.7978049989365}, "review_count": 257, "phone": "+14698044321", "categories": [{"title": "Cocktail Bars", "alias": "cocktailbars"}], "name": "Parliament", "rating": 4.5, "id": "parliament-dallas-2", "price": "$$", "url": "https://www.yelp.com/biz/parliament-dallas-2?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "2708 W Elm St", "zip_code": "75226", "address2": "", "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/oErwSqyau3iVJsc3xP5trw/o.jpg", "coordinates": {"longitude": -96.7845154, "latitude": 32.784359}, "review_count": 153, "phone": "+12147494848", "categories": [{"title": "Lounges", "alias": "lounges"}], "name": "Black Swan Saloon", "rating": 4.5, "id": "black-swan-saloon-dallas", "price": "$$", "url": "https://www.yelp.com/biz/black-swan-saloon-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "4900 McKinney Ave", "zip_code": "75205", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/QPj2CIlTDsIu1Ox5B2M1HQ/o.jpg", "coordinates": {"longitude": -96.7847649, "latitude": 32.8268975}, "review_count": 22, "phone": "+14698939400", "categories": [{"title": "Cocktail Bars", "alias": "cocktailbars"}], "name": "Atwater Alley", "rating": 5.0, "id": "atwater-alley-dallas", "price": "$$", "url": "https://www.yelp.com/biz/atwater-alley-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "3902 Maple Ave", "zip_code": "75219", "address2": "", "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-czV4qKApSxdYEBUY-Urrw/o.jpg", "coordinates": {"longitude": -96.815048, "latitude": 32.805362}, "review_count": 237, "phone": "+12145228466", "categories": [{"title": "Dive Bars", "alias": "divebars"}, {"title": "Music Venues", "alias": "musicvenues"}, {"title": "Cocktail Bars", "alias": "cocktailbars"}], "name": "The Grapevine Bar", "rating": 4.0, "id": "the-grapevine-bar-dallas", "price": "$", "url": "https://www.yelp.com/biz/the-grapevine-bar-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "5319 E Mockingbird Ln", "zip_code": "75206", "address2": "Ste 210", "address3": ""}, "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8O_7Zhs9I4Rcbf3YsphcUQ/o.jpg", "coordinates": {"longitude": -96.7774429, "latitude": 32.8368111}, "review_count": 252, "phone": "+12143708755", "categories": [{"title": "Bars", "alias": "bars"}, {"title": "American (New)", "alias": "newamerican"}], "name": "The People's Last Stand", "rating": 4.0, "id": "the-peoples-last-stand-dallas-3", "price": "$$", "url": "https://www.yelp.com/biz/the-peoples-last-stand-dallas-3?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "2714 Elm St", "zip_code": "75226", "address2": "", "address3": ""}, "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/9Ar961K9yRw9aR-OyPfYgg/o.jpg", "coordinates": {"longitude": -96.7840666551348, "latitude": 32.7844633049979}, "review_count": 103, "phone": "+19728035151", "categories": [{"title": "Cocktail Bars", "alias": "cocktailbars"}, {"title": "Burgers", "alias": "burgers"}, {"title": "Hungarian", "alias": "hungarian"}], "name": "Armoury D E", "rating": 4.5, "id": "armoury-d-e-dallas", "price": "$$", "url": "https://www.yelp.com/biz/armoury-d-e-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "1530 Main St", "zip_code": "75201", "address2": "", "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6gxZhjTLLGBEOKRjwfjhVA/o.jpg", "coordinates": {"longitude": -96.7984467, "latitude": 32.7807376}, "review_count": 110, "phone": "+12142614601", "categories": [{"title": "American (New)", "alias": "newamerican"}, {"title": "Cocktail Bars", "alias": "cocktailbars"}], "name": "Midnight Rambler", "rating": 4.0, "id": "midnight-rambler-dallas", "price": "$$", "url": "https://www.yelp.com/biz/midnight-rambler-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "87 Highland Park Village", "zip_code": "75205", "address2": "Fl 2", "address3": ""}, "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1oDveYBOLblv8a2wyiC0mg/o.jpg", "coordinates": {"longitude": -96.8056808, "latitude": 32.8358851}, "review_count": 31, "phone": "+12144203900", "categories": [{"title": "Lounges", "alias": "lounges"}, {"title": "Sushi Bars", "alias": "sushi"}, {"title": "Mediterranean", "alias": "mediterranean"}], "name": "Lounge 31", "rating": 4.5, "id": "lounge-31-dallas", "price": "$$$", "url": "https://www.yelp.com/biz/lounge-31-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "1711 S Lamar St", "zip_code": "75215", "address2": "", "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/lzlV6D9PI_bweR0xkEX9JA/o.jpg", "coordinates": {"longitude": -96.7931187, "latitude": 32.7659649}, "review_count": 11, "phone": "+12142383111", "categories": [{"title": "Bars", "alias": "bars"}], "name": "Industry Alley Bar", "rating": 5.0, "id": "industry-alley-bar-dallas", "price": "$", "url": "https://www.yelp.com/biz/industry-alley-bar-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "2718 Boll St", "zip_code": "75204", "address2": null, "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ouh1RtjafEI6KcEApG1rnw/o.jpg", "coordinates": {"longitude": -96.8030002560584, "latitude": 32.798216474711}, "review_count": 322, "phone": "+12147548771", "categories": [{"title": "Pubs", "alias": "pubs"}, {"title": "Dance Clubs", "alias": "danceclubs"}], "name": "The Ginger Man", "rating": 4.0, "id": "the-ginger-man-dallas", "price": "$$", "url": "https://www.yelp.com/biz/the-ginger-man-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "5334 Lemmon Ave", "zip_code": "75209", "address2": "", "address3": ""}, "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qSfUnHX1M4uYRzJWR_YIpg/o.jpg", "coordinates": {"longitude": -96.8225098, "latitude": 32.826931}, "review_count": 103, "phone": "+12145594424", "categories": [{"title": "Dive Bars", "alias": "divebars"}], "name": "Ivy Tavern", "rating": 4.0, "id": "ivy-tavern-dallas", "price": "$", "url": "https://www.yelp.com/biz/ivy-tavern-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "3122 Samuell Blvd", "zip_code": "75223", "address2": "", "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/HsTLN5Z_O7lkbyAmGgfALA/o.jpg", "coordinates": {"longitude": -96.7408142089844, "latitude": 32.7926559448242}, "review_count": 15, "phone": "+12148230755", "categories": [{"title": "Bars", "alias": "bars"}], "name": "The Fireplace Lounge", "rating": 5.0, "id": "the-fireplace-lounge-dallas", "price": "$", "url": "https://www.yelp.com/biz/the-fireplace-lounge-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "6448 E Mockingbird Ln", "zip_code": "75214", "address2": "", "address3": ""}, "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ruqMPTH1GXNVtSa8kmjukA/o.jpg", "coordinates": {"longitude": -96.7516810074449, "latitude": 32.836397996808}, "review_count": 68, "phone": "+12145846253", "categories": [{"title": "Pubs", "alias": "pubs"}], "name": "Lakewood Growler", "rating": 4.5, "id": "lakewood-growler-dallas", "price": "$", "url": "https://www.yelp.com/biz/lakewood-growler-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "1926 Market Center Blvd", "zip_code": "75207", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/mofnC4o68sbgCKGEMUtFqw/o.jpg", "coordinates": {"longitude": -96.824276, "latitude": 32.797917}, "review_count": 716, "phone": "+12147414628", "categories": [{"title": "Burgers", "alias": "burgers"}, {"title": "Beer Bar", "alias": "beerbar"}], "name": "Rodeo Goat", "rating": 4.0, "id": "rodeo-goat-dallas", "price": "$$", "url": "https://www.yelp.com/biz/rodeo-goat-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "1520 Elm St", "zip_code": "75204", "address2": "Ste 201", "address3": ""}, "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3YIuBECGbkFNxJlgHYIiIg/o.jpg", "coordinates": {"longitude": -96.798692, "latitude": 32.781324}, "review_count": 344, "phone": "+12148140588", "categories": [{"title": "Cocktail Bars", "alias": "cocktailbars"}, {"title": "Tapas/Small Plates", "alias": "tapasmallplates"}, {"title": "American (New)", "alias": "newamerican"}], "name": "The Woolworth", "rating": 4.0, "id": "the-woolworth-dallas", "price": "$$", "url": "https://www.yelp.com/biz/the-woolworth-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "7717 Inwood Rd", "zip_code": "75209", "address2": "", "address3": ""}, "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/_sJ_e8A5ma8s96m1nUBcfQ/o.jpg", "coordinates": {"longitude": -96.8214501, "latitude": 32.8500652}, "review_count": 73, "phone": "+12143532666", "categories": [{"title": "Dive Bars", "alias": "divebars"}, {"title": "Venues & Event Spaces", "alias": "venues"}], "name": "Inwood Tavern", "rating": 4.0, "id": "inwood-tavern-dallas", "price": "$", "url": "https://www.yelp.com/biz/inwood-tavern-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "1621 Oak Lawn Ave", "zip_code": "75207", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9R1wSs67Th5xTSvg5J1Qsw/o.jpg", "coordinates": {"longitude": -96.8202942609787, "latitude": 32.7968167432672}, "review_count": 1362, "phone": "+12146287900", "categories": [{"title": "Bars", "alias": "bars"}, {"title": "Gastropubs", "alias": "gastropubs"}, {"title": "American (Traditional)", "alias": "tradamerican"}], "name": "Meddlesome Moth", "rating": 4.0, "id": "meddlesome-moth-dallas", "price": "$$", "url": "https://www.yelp.com/biz/meddlesome-moth-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "1613 Greenville Ave", "zip_code": "75206", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/j7btkeaB0-GfAwlwyMQx3A/o.jpg", "coordinates": {"longitude": -96.7702455818653, "latitude": 32.8102954477072}, "review_count": 76, "phone": "+19727077234", "categories": [{"title": "Dive Bars", "alias": "divebars"}, {"title": "Pool Halls", "alias": "poolhalls"}], "name": "Ships Lounge", "rating": 4.5, "id": "ships-lounge-dallas", "price": "$", "url": "https://www.yelp.com/biz/ships-lounge-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "5320 Maple Ave", "zip_code": "75235", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2u3qqV4lJPrHPsUhGXQReA/o.jpg", "coordinates": {"longitude": -96.83229, "latitude": 32.81833}, "review_count": 84, "phone": "+12144437818", "categories": [{"title": "Bars", "alias": "bars"}], "name": "Windmill Lounge", "rating": 4.0, "id": "windmill-lounge-dallas", "price": "$", "url": "https://www.yelp.com/biz/windmill-lounge-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "3001 N Henderson Ave", "zip_code": "75206", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/c23eMmNSjwllaocxOtCTyg/o.jpg", "coordinates": {"longitude": -96.7856091, "latitude": 32.8212786}, "review_count": 731, "phone": "+12142528595", "categories": [{"title": "American (New)", "alias": "newamerican"}, {"title": "Gastropubs", "alias": "gastropubs"}, {"title": "Cocktail Bars", "alias": "cocktailbars"}], "name": "Victor Tangos", "rating": 4.0, "id": "victor-tangos-dallas", "price": "$$", "url": "https://www.yelp.com/biz/victor-tangos-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}, {"location": {"city": "Dallas", "country": "US", "state": "TX", "address1": "7248 Gaston Ave", "zip_code": "75214", "address2": "", "address3": ""}, "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/p1_u9drsKx376bgHzsXdEQ/o.jpg", "coordinates": {"longitude": -96.7317886, "latitude": 32.8124504}, "review_count": 103, "phone": "+12143278119", "categories": [{"title": "Dive Bars", "alias": "divebars"}, {"title": "Jazz & Blues", "alias": "jazzandblues"}, {"title": "Karaoke", "alias": "karaoke"}], "name": "The Goat", "rating": 4.0, "id": "the-goat-dallas", "price": "$", "url": "https://www.yelp.com/biz/the-goat-dallas?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q"}]

const newYork = [{"review_count":582,"name":"Whiskey Tavern","location":{"address3":"","state":"NY","zip_code":"10013","city":"New York","country":"US","address1":"79 Baxter St","address2":""},"coordinates":{"longitude":-73.99969,"latitude":40.71646},"id":"whiskey-tavern-new-york","url":"https://www.yelp.com/biz/whiskey-tavern-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"whiskeybars","title":"Whiskey Bars"}],"rating":4.5,"phone":"+12123749119","price":"$$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/P3eezkfdJ1cP3Z34T5Kmyg/o.jpg"},{"review_count":787,"name":"The Pony Bar","location":{"address3":"","state":"NY","zip_code":"10036","city":"New York","country":"US","address1":"637 10th Ave","address2":""},"coordinates":{"longitude":-73.99431,"latitude":40.76178},"id":"the-pony-bar-new-york","url":"https://www.yelp.com/biz/the-pony-bar-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"}],"rating":4,"phone":"+12125862707","price":"$$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/QKa1HzyDO8vtLNo98fVRfg/o.jpg"},{"review_count":831,"name":"The Dead Rabbit","location":{"address3":"","state":"NY","zip_code":"10004","city":"New York","country":"US","address1":"30 Water St","address2":""},"coordinates":{"longitude":-74.01102,"latitude":40.70329},"id":"the-dead-rabbit-new-york","url":"https://www.yelp.com/biz/the-dead-rabbit-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"},{"alias":"irish","title":"Irish"}],"rating":4,"phone":"+16464227906","price":"$$","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/sMgLscPWORntrFI7p8bK7w/o.jpg"},{"review_count":164,"name":"The Ship","location":{"address3":"","state":"NY","zip_code":"10013","city":"New York","country":"US","address1":"158 Lafayette St","address2":""},"coordinates":{"longitude":-73.99947,"latitude":40.7198443},"id":"the-ship-new-york","url":"https://www.yelp.com/biz/the-ship-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":4,"phone":"+12122198496","price":"$$","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/WrHMqXXA15SmY51MCHHPdQ/o.jpg"},{"review_count":45,"name":"The Moonlight Mile","location":{"address3":"","state":"NY","zip_code":"11222","city":"Brooklyn","country":"US","address1":"200 Franklin St","address2":""},"coordinates":{"longitude":-73.9578424,"latitude":40.7321141},"id":"the-moonlight-mile-brooklyn","url":"https://www.yelp.com/biz/the-moonlight-mile-brooklyn?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":5,"phone":"+17183893904","price":"$$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/ERzk-SfC6g388_nDsjRVgQ/o.jpg"},{"review_count":390,"name":"Tanner Smiths","location":{"address3":"","state":"NY","zip_code":"10019","city":"New York","country":"US","address1":"204 W 55 St","address2":""},"coordinates":{"longitude":-73.981712,"latitude":40.764278},"id":"tanner-smiths-new-york","url":"https://www.yelp.com/biz/tanner-smiths-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"},{"alias":"newamerican","title":"American (New)"},{"alias":"breakfast_brunch","title":"Breakfast & Brunch"}],"rating":4.5,"phone":"+16465902034","price":"$$","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/0OXWID_WQaGKs6H73Wd6Tg/o.jpg"},{"review_count":21,"name":"August Laura","location":{"address3":"","state":"NY","zip_code":"11231","city":"Brooklyn","country":"US","address1":"387 Court St","address2":""},"coordinates":{"longitude":-73.996898901872,"latitude":40.6804538169802},"id":"august-laura-brooklyn","url":"https://www.yelp.com/biz/august-laura-brooklyn?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":5,"phone":"+17188585483","price":"$","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/YwSaAhthhe1mNHdlQJ0MJQ/o.jpg"},{"review_count":123,"name":"Sunny's Bar","location":{"address3":"","state":"NY","zip_code":"11231","city":"Brooklyn","country":"US","address1":"253 Conover St","address2":""},"coordinates":{"longitude":-74.01689,"latitude":40.67569},"id":"sunnys-bar-brooklyn","url":"https://www.yelp.com/biz/sunnys-bar-brooklyn?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"}],"rating":4.5,"phone":"+17186258211","price":"$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/cuFl0mZ_KiB80WzVYL0VbA/o.jpg"},{"review_count":114,"name":"Old Man Hustle","location":{"address3":"","state":"NY","zip_code":"10002","city":"New York","country":"US","address1":"39 Essex St","address2":""},"coordinates":{"longitude":-73.9893277618757,"latitude":40.7159819101673},"id":"old-man-hustle-new-york-2","url":"https://www.yelp.com/biz/old-man-hustle-new-york-2?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"},{"alias":"divebars","title":"Dive Bars"},{"alias":"comedyclubs","title":"Comedy Clubs"}],"rating":4.5,"phone":"+12122537747","price":"$","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/wmDaj8eymObD1Ho90-T0-w/o.jpg"},{"review_count":592,"name":"Dutch Kills","location":{"address3":"","state":"NY","zip_code":"11101","city":"Long Island City","country":"US","address1":"27-24 Jackson Ave","address2":""},"coordinates":{"longitude":-73.940159,"latitude":40.747615},"id":"dutch-kills-long-island-city","url":"https://www.yelp.com/biz/dutch-kills-long-island-city?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"lounges","title":"Lounges"},{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":4,"phone":"+17183832724","price":"$$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/tcuE0WTd-20CtGl57ORqkQ/o.jpg"},{"review_count":22,"name":"Blacktail","location":{"address3":null,"state":"NY","zip_code":"10004","city":"New York","country":"US","address1":"22 Battery Pl","address2":"Fl 2 Pier A"},"coordinates":{"longitude":-74.0174372308775,"latitude":40.7044769199104},"id":"blacktail-new-york","url":"https://www.yelp.com/biz/blacktail-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cuban","title":"Cuban"},{"alias":"tradamerican","title":"American (Traditional)"},{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":4.5,"phone":"+12127850153","price":"$$$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/sSaUb-rNs3b_pC2UF2L_Qg/o.jpg"},{"review_count":27,"name":"The Hop Shop Brooklyn","location":{"address3":"","state":"NY","zip_code":"11231","city":"Brooklyn","country":"US","address1":"121 Columbia St","address2":""},"coordinates":{"longitude":-74.0012512207031,"latitude":40.6874694824219},"id":"the-hop-shop-brooklyn-brooklyn","url":"https://www.yelp.com/biz/the-hop-shop-brooklyn-brooklyn?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"}],"rating":5,"phone":"+17188522184","price":"$$","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/qK5dcU1boFUUMP2wht6AEA/o.jpg"},{"review_count":384,"name":"The Wayland","location":{"address3":"","state":"NY","zip_code":"10009","city":"New York","country":"US","address1":"700 E 9th St","address2":""},"coordinates":{"longitude":-73.9778512716293,"latitude":40.7251837849617},"id":"the-wayland-new-york","url":"https://www.yelp.com/biz/the-wayland-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"}],"rating":4.5,"phone":"+12127777022","price":"$$","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/2aTSPms35qvgPw2g5P8i6Q/o.jpg"},{"review_count":295,"name":"Iron Horse NYC","location":{"address3":"","state":"NY","zip_code":"10038","city":"New York","country":"US","address1":"32 Cliff St","address2":""},"coordinates":{"longitude":-74.004943,"latitude":40.708137},"id":"iron-horse-nyc-new-york","url":"https://www.yelp.com/biz/iron-horse-nyc-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"divebars","title":"Dive Bars"},{"alias":"burgers","title":"Burgers"}],"rating":4,"phone":"+16465465426","price":"$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/lDauovahtRKY2fd-hNOK3A/o.jpg"},{"review_count":239,"name":"Proletariat","location":{"address3":"","state":"NY","zip_code":"10009","city":"New York","country":"US","address1":"102 St Marks Pl","address2":""},"coordinates":{"longitude":-73.9845192432404,"latitude":40.7272506368689},"id":"proletariat-new-york","url":"https://www.yelp.com/biz/proletariat-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"beerbar","title":"Beer Bar"}],"rating":4,"phone":"+12127776707","price":"$$","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/UoRQylgEGVpOeeuY9iz_PA/o.jpg"},{"review_count":165,"name":"Dutch Freds","location":{"address3":"","state":"NY","zip_code":"10036","city":"New York","country":"US","address1":"307 W 47th St","address2":null},"coordinates":{"longitude":-73.9878463745117,"latitude":40.7608184814453},"id":"dutch-freds-new-york-2","url":"https://www.yelp.com/biz/dutch-freds-new-york-2?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"},{"alias":"tapasmallplates","title":"Tapas/Small Plates"},{"alias":"newamerican","title":"American (New)"}],"rating":4.5,"phone":"+16469186923","price":"$$","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/78gMj-tpfLM1kHRq-oXiYw/o.jpg"},{"review_count":69,"name":"The Wilky","location":{"address3":"","state":"NY","zip_code":"11221","city":"Brooklyn","country":"US","address1":"108 Patchen Ave","address2":null},"coordinates":{"longitude":-73.9273529052734,"latitude":40.6880187988281},"id":"the-wilky-brooklyn","url":"https://www.yelp.com/biz/the-wilky-brooklyn?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"beerbar","title":"Beer Bar"},{"alias":"beergardens","title":"Beer Gardens"},{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":4.5,"phone":"+17184847458","price":"$$","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/bTLoa9kjRo7pT1eDw5sRxw/o.jpg"},{"review_count":87,"name":"Featherweight","location":{"address3":"","state":"NY","zip_code":"11206","city":"Brooklyn","country":"US","address1":"135 Graham Ave","address2":null},"coordinates":{"longitude":-73.9431119710207,"latitude":40.7063841819763},"id":"featherweight-brooklyn","url":"https://www.yelp.com/biz/featherweight-brooklyn?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"}],"rating":4.5,"phone":"+16462570946","price":"$$","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/AywNKLEOwJ9VwyXlaz1aMQ/o.jpg"},{"review_count":106,"name":"District Social","location":{"address3":"","state":"NY","zip_code":"10018","city":"New York","country":"US","address1":"252 W 37th St","address2":null},"coordinates":{"longitude":-73.9914321899414,"latitude":40.7535743713379},"id":"district-social-new-york","url":"https://www.yelp.com/biz/district-social-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"bars","title":"Bars"},{"alias":"newamerican","title":"American (New)"}],"rating":4,"phone":"+12129949599","price":"$$","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/prQBUjUQR5iOSmIeVsACUQ/o.jpg"},{"review_count":166,"name":"Pocket Bar NYC","location":{"address3":"","state":"NY","zip_code":"10036","city":"New York","country":"US","address1":"455 W 48th St","address2":""},"coordinates":{"longitude":-73.9922985,"latitude":40.7633645},"id":"pocket-bar-nyc-new-york","url":"https://www.yelp.com/biz/pocket-bar-nyc-new-york?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"wine_bars","title":"Wine Bars"}],"rating":4.5,"phone":"+16466829062","price":"$$","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/QfIn8pnTR2h5mWCyS4ChCQ/o.jpg"},{"review_count":222,"name":"Blueprint","location":{"address3":"","state":"NY","zip_code":"11217","city":"Brooklyn","country":"US","address1":"196 5th Ave","address2":""},"coordinates":{"longitude":-73.980407,"latitude":40.676898},"id":"blueprint-brooklyn-2","url":"https://www.yelp.com/biz/blueprint-brooklyn-2?adjust_creative=YJYcI1gF_9cFOmXRivLE4Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=YJYcI1gF_9cFOmXRivLE4Q","categories":[{"alias":"cocktailbars","title":"Cocktail Bars"}],"rating":4.5,"phone":"+17186226644","price":"$$","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/2_WAuNbYBMuiwVKtHjFHnw/o.jpg"}];