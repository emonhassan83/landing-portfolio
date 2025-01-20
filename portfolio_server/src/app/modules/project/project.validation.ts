import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Project name is required!',
    }),
    client: z.string({
      required_error: 'Client name is required!',
    }),
    color: z.string({
      required_error: 'Color is required!',
    }),
    work: z
      .array(
        z.string({
          required_error: 'Each work item must be a string!',
        }),
      )
      .min(1, 'At least one work item is required!'),
    image: z.string({
      required_error: 'Project image URL is required!',
    }),
    story: z.string({
      required_error: 'Project story is required!',
    }),
    banner_images: z
      .array(
        z.string({
          required_error: 'Each banner image URL must be a string!',
        }),
      )
      .min(1, 'At least one banner image is required!'),
    description: z.string({
      required_error: 'Project description is required!',
    }),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Project name is required!',
      })
      .optional(),
    client: z
      .string({
        required_error: 'Client name is required!',
      })
      .optional(),
    color: z
      .string({
        required_error: 'Color is required!',
      })
      .optional(),
    work: z
      .array(
        z.string({
          required_error: 'Each work item must be a string!',
        }),
      )
      .optional(),
    image: z
      .string({
        required_error: 'Project image URL is required!',
      })
      .optional(),
    story: z
      .string({
        required_error: 'Project story is required!',
      })
      .optional(),
    banner_images: z
      .array(
        z.string({
          required_error: 'Each banner image URL must be a string!',
        }),
      )
      .optional(),
    description: z
      .string({
        required_error: 'Project description is required!',
      })
      .optional(),
  }),
});

export const projectValidations = {
  createProjectValidation,
  updateProjectValidation,
};
