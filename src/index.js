import { registerBlockType } from "@wordpress/blocks";

registerBlockType("dominic-vogl/firstblock", {
	edit: function () {
		return <p className="myfirstBlock">Edit this Stuff!</p>;
	},
	save: function () {
		return <p className="myfirstBlock">Save JSX this Stuff!</p>;
	},
});
