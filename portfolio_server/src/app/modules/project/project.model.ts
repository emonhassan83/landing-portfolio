import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    client: { type: String, required: true },
    color: { type: String, required: true },
    work: { type: [String], required: true },
    image: { type: String, required: true },
    story: { type: String, required: true },
    banner_images: { type: [String], required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', projectSchema);
