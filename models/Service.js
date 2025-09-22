import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  pragma_link: {
    type: String,
    required: [true, "Pragma link is required"],
    trim: true,
  },
  bg_image: {
    type: String,
    required: [true, "Background image is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxLength: [100, "Title cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxLength: [500, "Description cannot be more than 500 characters"],
  },
  keywords: {
    type: [String],
    required: [true, "Keywords are required"],
    trim: true,
  },
  explore_link: {
    type: String,
    trim: true,
  },
  card: {
    intro: {
      type: String,
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "Icon is required"],
    },
  },
  cta: {
    caption: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    },
  },
  process: {
    bg_image: {
      type: String,
      required: [true, "Background image is required"],
    },
    title_first: {
      type: String,
      trim: true,
    },
    title_second: {
      type: String,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    steps: [
      {
        title: {
          type: String,
          trim: true,
        },
        desc: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  why_choose_us: {
    title: {
      type: String,
      trim: true,
    },
    items: [
      {
        title: {
          type: String,
          trim: true,
        },
        desc: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  parent_service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    nullable: true,
  },
  bread_crumbs: {
    type: [
      {
        name: {
          type: String,
          trim: true,
        },
        link: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  active: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
