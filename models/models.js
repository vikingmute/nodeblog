/**
 * @author nttdocomo
 */
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var Comments = new Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now }
});

var BlogPost = new Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
	update:{ type: Date, default: Date.now },
    comments: [Comments]
});
mongoose.model('BlogPost', BlogPost);
mongoose.model('Comments', Comments);
var BlogPost = exports.BlogPost = mongoose.model('BlogPost');
var Comments = exports.Comments = mongoose.model('Comments');