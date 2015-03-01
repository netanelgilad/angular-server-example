/**
 * Created by netanel on 27/02/15.
 */
var coll = new Mongo.Collection('vens');

var sampleData = {
  "originalData": {
    "Id": "29",
    "cat_id": "0",
    "company_id": null,
    "name": "The Observatory",
    "headline": "Afterwork drinks with the best view of the Palm",
    "image": "",
    "lat": "25.0877",
    "long": "55.1462",
    "address": "Dubai Marriott Harbour Hotel & Suites, Al Sufouh Road, Dubai Internet City, Dubai, 128358, United Arab Emirates",
    "summary": "Enticing. Tempting. Engaging. A feast for the eyes, the warm woods, custom lighting and modern décor help create the perfect setting for a dinner party with friends or business partners. With imposing views across Dubai, The Observatory is an audacious host. \n\nUnforgettable in its style and undeniable in its energy, The Observatory’s dynamic libations and cosmopolitan ambiance are as welcomed as the modish, melodious setting. As Dubai Marriott Harbour’s definitive destination venue, The Observatory serves up more than signature dishes and cocktails; it’s the ultimate night out.\n\n\n\n\n",
    "status": "1",
    "order": "29",
    "dt1": null,
    "dt2": null,
    "desp": null,
    "city": "dubai",
    "address2": "Marriott Hotel - Marina",
    "contact": "+97143194000",
    "happy_hours": "Saturday to Thursday: discounts on selected beverages",
    "dress_code": "Smart Casual",
    "check_in": "2",
    "photos": [
      {
        "Id": "50",
        "venu_id": "29",
        "photo": "1411028071.jpeg"
      },
      {
        "Id": "51",
        "venu_id": "29",
        "photo": "14110280711.jpeg"
      },
      {
        "Id": "52",
        "venu_id": "29",
        "photo": "14110280712.jpeg"
      }
    ],
    "hours": [
      {
        "Id": "1196",
        "venu_id": "29",
        "day_id": "Everyday",
        "time_id": "12.30pm - 1am"
      }
    ],
    "ratings": [],
    "categories": [
      {
        "venue_id": "29",
        "cat_id": "4",
        "status": "0"
      },
      {
        "venue_id": "29",
        "cat_id": "5",
        "status": "0"
      }
    ]
  },
  "name": "The Observatory",
  "location": {
    "latitude": "25.0877",
    "longitude": "55.1462"
  },
  "address": "Marriott Hotel - Marina",
  "summary": "Enticing. Tempting. Engaging. A feast for the eyes, the warm woods, custom lighting and modern décor help create the perfect setting for a dinner party with friends or business partners. With imposing views across Dubai, The Observatory is an audacious host. \n\nUnforgettable in its style and undeniable in its energy, The Observatory’s dynamic libations and cosmopolitan ambiance are as welcomed as the modish, melodious setting. As Dubai Marriott Harbour’s definitive destination venue, The Observatory serves up more than signature dishes and cocktails; it’s the ultimate night out.\n\n\n\n\n",
  "city": "dubai",
  "cities": [
    "dubai"
  ],
  "contact": "+97143194000",
  "dressCode": "Smart Casual",
  "happyhours": [
    {
      "description": "Saturday to Thursday: discounts on selected beverages"
    }
  ],
  "ladiesnights": [],
  "photos": [
    "1411028071.jpeg",
    "14110280711.jpeg",
    "14110280712.jpeg"
  ],
  "opening": [
    {
      "day": "Everyday",
      "hours": "12.30pm - 1am"
    }
  ],
  "categories": [
    "4",
    "5"
  ]
};

coll.allow({
  insert : function () {
    return true;
  },
  update : function() {
    return true;
  },
  remove : function() {
    console.log('remove');
    return true;
  }
});

Meteor.methods({
  addObjects : function (count) {
    for (var i = 0; i < count; i++) {
      coll.insert(sampleData);
    }
  }
});

Meteor.publish('vens', function () {
  return coll.find({});
});

if (coll.find({}).count() === 0) {
  for (var i = 0; i < 204; i++) {
    coll.insert({
      "originalData": {
        "Id": "29",
        "cat_id": "0",
        "company_id": null,
        "name": "The Observatory",
        "headline": "Afterwork drinks with the best view of the Palm",
        "image": "",
        "lat": "25.0877",
        "long": "55.1462",
        "address": "Dubai Marriott Harbour Hotel & Suites, Al Sufouh Road, Dubai Internet City, Dubai, 128358, United Arab Emirates",
        "summary": "Enticing. Tempting. Engaging. A feast for the eyes, the warm woods, custom lighting and modern décor help create the perfect setting for a dinner party with friends or business partners. With imposing views across Dubai, The Observatory is an audacious host. \n\nUnforgettable in its style and undeniable in its energy, The Observatory’s dynamic libations and cosmopolitan ambiance are as welcomed as the modish, melodious setting. As Dubai Marriott Harbour’s definitive destination venue, The Observatory serves up more than signature dishes and cocktails; it’s the ultimate night out.\n\n\n\n\n",
        "status": "1",
        "order": "29",
        "dt1": null,
        "dt2": null,
        "desp": null,
        "city": "dubai",
        "address2": "Marriott Hotel - Marina",
        "contact": "+97143194000",
        "happy_hours": "Saturday to Thursday: discounts on selected beverages",
        "dress_code": "Smart Casual",
        "check_in": "2",
        "photos": [
          {
            "Id": "50",
            "venu_id": "29",
            "photo": "1411028071.jpeg"
          },
          {
            "Id": "51",
            "venu_id": "29",
            "photo": "14110280711.jpeg"
          },
          {
            "Id": "52",
            "venu_id": "29",
            "photo": "14110280712.jpeg"
          }
        ],
        "hours": [
          {
            "Id": "1196",
            "venu_id": "29",
            "day_id": "Everyday",
            "time_id": "12.30pm - 1am"
          }
        ],
        "ratings": [],
        "categories": [
          {
            "venue_id": "29",
            "cat_id": "4",
            "status": "0"
          },
          {
            "venue_id": "29",
            "cat_id": "5",
            "status": "0"
          }
        ]
      },
      "name": "The Observatory",
      "location": {
        "latitude": "25.0877",
        "longitude": "55.1462"
      },
      "address": "Marriott Hotel - Marina",
      "summary": "Enticing. Tempting. Engaging. A feast for the eyes, the warm woods, custom lighting and modern décor help create the perfect setting for a dinner party with friends or business partners. With imposing views across Dubai, The Observatory is an audacious host. \n\nUnforgettable in its style and undeniable in its energy, The Observatory’s dynamic libations and cosmopolitan ambiance are as welcomed as the modish, melodious setting. As Dubai Marriott Harbour’s definitive destination venue, The Observatory serves up more than signature dishes and cocktails; it’s the ultimate night out.\n\n\n\n\n",
      "city": "dubai",
      "cities": [
        "dubai"
      ],
      "contact": "+97143194000",
      "dressCode": "Smart Casual",
      "happyhours": [
        {
          "description": "Saturday to Thursday: discounts on selected beverages"
        }
      ],
      "ladiesnights": [],
      "photos": [
        "1411028071.jpeg",
        "14110280711.jpeg",
        "14110280712.jpeg"
      ],
      "opening": [
        {
          "day": "Everyday",
          "hours": "12.30pm - 1am"
        }
      ],
      "categories": [
        "4",
        "5"
      ]
    });
  }
}