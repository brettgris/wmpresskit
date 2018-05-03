export default {
   "style":{
     "image": require("../../assets/images/production/menu/bg_paper_prod.png"),
     "width": 542,
     "height": 522,
     "x": 45,
     "y": 56
   },

   "sections":[
      {
         "hide": "production-menu-additional",

         "style":{ //MENU CONTENT SIZE
            "width": 300,
            "x": 116,
            "y": 37
         },
         "headline": {
            "image": require("../../assets/images/production/menu/hd_prod_bios.png"),
            "width": 300,
            "paddingTop": 36, //HEIGHT
            "marginBottom": 10 //HEADLINE TO FIRST ITEM
         },
         "list":{
            "width": 300,
            "paddingTop": 30, //HEIGHT
            "marginBottom": 6 //BETWEEN EACH NAME
         }
      },{
         "style":{ //MENU CONTENT SIZE
            "width": 300,
            "x": 116,
            "y": 194
         },
         "headline": {
            "image": require("../../assets/images/production/menu/hd_add_prod_bios.png"),
            "width": 300,
            "paddingTop": 66, //HEIGHT
            "marginBottom": 10 //HEADLINE TO FIRST ITEM
         },
         "list":{
            "width": 300,
            "paddingTop": 30, //HEIGHT
            "marginBottom": 6 //BETWEEN EACH NAME
         },

         "production-menu-additional":{
            "width": 300,
            "x": 118,
            "y": 99
         }
      }
   ],

   "pictures":[
      {
        "hide": "production-menu-additional",
         "width": 490,
         "height": 329,
         "x": 462,
         "y": 17,
         "rotation": 5.27,
         "image": require("../../assets/images/production/menu/all_prod_bio_pic.png")
      },{
        "hide": "production-menu",
         "width": 488,
         "height": 330,
         "x": 451,
         "y": 53,
         "rotation": -1.06,
         "image": require("../../assets/images/production/menu/add_prod_bios_pic.png")
      },{
         "width": 906,
         "height": 121,
         "x": 11,
         "y": 421,
         "rotation": 0,
         "image": require("../../assets/images/production/menu/pins_4.png")
      }
   ]
}
