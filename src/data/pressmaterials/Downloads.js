export const DownloadsStyle = {
   "style":{ //MENU CONTENT SIZE
      "width": 236,
      "x": 278,
      "y": 141
   },
   "headline": {
      "image": require("../../assets/images/pressmaterials/hd_press_pdf.png"),
      "width": 236,
      "paddingTop": 64, //HEIGHT
      "marginBottom": 13 //HEADLINE TO FIRST ITEM
   },
   "list":{
      "width": 236,
      "paddingTop": 11, //HEIGHT
      "marginBottom": 15 //BETWEEN EACH NAME
   }
}

export const DownloadsItems = [
   {
      "menu": require("../../assets/images/pressmaterials/txt_series_synopsis.png"),
      "href": "/wrongman/pdfs/WM_Series_Synopsis.pdf",
      "section": 1,
   },{
      "menu": require("../../assets/images/pressmaterials/txt_episode_synopses.png"),
      "href": "/wrongman/pdfs/WM_Episode_Synopses.pdf",
      "section": 1,
   },{
      "menu": require("../../assets/images/pressmaterials/txt_production_bios.png"),
      "href": "/wrongman/pdfs/WM_Production_Bios.pdf",
      "section": 1,
   },{
      "menu": require("../../assets/images/pressmaterials/txt_production_credits.png"),
      "href": "/wrongman/pdfs/WM_Production_Credits.pdf",
      "section": 1,
   },
]
