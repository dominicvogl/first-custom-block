var registerBlockType = wp.blocks.registerBlockType;

registerBlockType("dominic-vogl/firstblock", {
	edit: function () {
		return "Edit";
	},
	save: function () {
		return "Save";
	},
});
