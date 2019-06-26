var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({

	// Title is a required string

	title: {
		type: String,
		required: true
	},

	// Link is a required string

	link: {
		type: String,
		required: true,
		index: { unique: true }
	},

	saved: {
		type: Boolean,
		required: true,
		default: false
	},

	// This only saves one note's ObjectId
	// "Ref" refers to the Note model

	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;