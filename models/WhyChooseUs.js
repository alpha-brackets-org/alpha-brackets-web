const schema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  items: [{
    title: {
      type: String,
      trim: true
    },
    desc: {
      type: String,
      trim: true
    }
  }]
});