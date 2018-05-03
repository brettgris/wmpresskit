import { AssetsStyle, AssetsItems } from './pressmaterials/Assets';
import { DownloadsStyle, DownloadsItems } from './pressmaterials/Downloads';
import { ContactsStyle, ContactsItems } from './pressmaterials/Contacts';

export default {
	"menu":{
		"style":{
	      "width": 778,
	      "height": 527,
	      "x": 108,
	      "y": 62,
	      "image": require("../assets/images/pressmaterials/bg_paper_press.png")
	   },

		"pageheadline":{
	      "width": 413,
	      "height": 45,
	      paddingTop: 45,
	      "x": 196,
	      "y": 38,
	      "image": require("../assets/images/pressmaterials/hd_press_materials.png")
	   },

		"sections":[
			AssetsStyle, DownloadsStyle, ContactsStyle
		],

		pictures:[
	      {
	         "width": 112,
	         "height": 67,
	         "x": 32,
	         "y": 575,
	         "image": require("../assets/images/pressmaterials/pins_smiley.png"),
	      }
		]
	},

	"items":[
		...AssetsItems,
		...DownloadsItems,
		...ContactsItems
	]
}
