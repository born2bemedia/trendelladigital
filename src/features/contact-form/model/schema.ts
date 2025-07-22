import { v } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils/validation';

export const contactSchema = v.object({
  fullName: v.pipe(
    v.string(),
    v.minLength(
      1,
      'Looks like you missed a required field. Please double-check and try again.',
    ),
  ),
  email: v.pipe(
    v.string(),
    v.email('Hmm… that email format doesn’t look quite right.'),
  ),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Please provide your phone number'),
    v.custom(
      value => isPhoneValid(String(value)),
      'Looks like you missed a required field. Please double-check and try again.',
    ),
  ),
  industryOrNiche: v.pipe(
    v.string(),
    v.minLength(
      1,
      'Looks like you missed a required field. Please double-check and try again.',
    ),
  ),
  currentBusinessStage: v.pipe(
    v.string(),
    v.minLength(
      1,
      'Looks like you missed a required field. Please double-check and try again.',
    ),
  ),
  companyName: v.pipe(v.string()),
  companyWebsite: v.pipe(v.string()),
  message: v.pipe(v.string()),
  budgetRange: v.pipe(
    v.string(),
    v.minLength(
      1,
      'Looks like you missed a required field. Please double-check and try again.',
    ),
  ),
  service: v.pipe(
    v.string(),
    v.minLength(
      1,
      'Looks like you missed a required field. Please double-check and try again.',
    ),
  ),
});
