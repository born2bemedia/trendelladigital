'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { Dropdown } from '@/shared/ui/kit/dropdown';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';

import { sendContactForm } from '../api/send-contact-form';
import { contactSchema } from '../model/schema';
import { ThankYouDialog } from './thank-you';

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('contactUs.sendUsMessage.form');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
      industryOrNiche: '',
      currentBusinessStage: '',
      companyName: '',
      companyWebsite: '',
      budgetRange: '',
      service: '',
    },
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async data => {
      const { success } = await sendContactForm(data.value);

      if (success) {
        setIsSuccess(true);
      } else {
        notifyWarning(
          'Something went wrong — try again or contact us directly',
        );
      }
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex flex-col gap-6"
    >
      <ThankYouDialog isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <div className="flex w-full gap-6 max-md:flex-col">
        <div className="flex w-1/2 flex-col gap-6 max-md:w-full">
          <Field name="fullName">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.fullName.label', {
                  fallback: 'Full Name',
                })}
                placeholder={t('fields.fullName.label', {
                  fallback: 'Full Name',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="email">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.email.label', {
                  fallback: 'Email',
                })}
                placeholder={t('fields.email.label', {
                  fallback: 'Email',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="phone">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.phoneNumber.label', {
                  fallback: 'Phone Number',
                })}
                placeholder={t('fields.phoneNumber.label', {
                  fallback: 'Phone Number',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="industryOrNiche">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.industryOrNiche.label', {
                  fallback: 'Your Industry or Niche',
                })}
                placeholder={t('fields.industryOrNiche.label', {
                  fallback: 'Your Industry or Niche',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="currentBusinessStage">
            {field => (
              <div className="flex flex-col gap-2">
                <Text color="ghost">
                  {t('fields.currentBusinessStage.label', {
                    fallback: 'Current Business Stage',
                  })}
                </Text>
                <Dropdown
                  options={[
                    {
                      label: t('variants.currentBusinessStage.0', {
                        fallback: 'Startup',
                      }),
                      value: t('variants.currentBusinessStage.0', {
                        fallback: 'Startup',
                      }),
                    },
                    {
                      label: t('variants.currentBusinessStage.1', {
                        fallback: 'Growing',
                      }),
                      value: t('variants.currentBusinessStage.1', {
                        fallback: 'Growing',
                      }),
                    },
                    {
                      label: t('variants.currentBusinessStage.2', {
                        fallback: 'Scaling',
                      }),
                      value: t('variants.currentBusinessStage.2', {
                        fallback: 'Scaling',
                      }),
                    },
                    {
                      label: t('variants.currentBusinessStage.3', {
                        fallback: 'Established',
                      }),
                      value: t('variants.currentBusinessStage.3', {
                        fallback: 'Established',
                      }),
                    },
                  ]}
                  value={String(
                    field.state.value.trim().length
                      ? field.state.value
                      : t('fields.currentBusinessStage.label', {
                          fallback: 'Current Business Stage',
                        }),
                  )}
                  onChange={e => field.handleChange(e)}
                />
              </div>
            )}
          </Field>
          <div className="max-md:hidden">
            <Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="justify-center"
                  fullWidth
                >
                  {isSubmitting ? (
                    t('fields.submit.loading', {
                      fallback: 'Sending...',
                    })
                  ) : (
                    <>
                      {t('fields.submit.label', {
                        fallback: 'Submit',
                      })}
                      <ArrowRight color="black" />
                    </>
                  )}
                </Button>
              )}
            </Subscribe>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-6 max-md:w-full">
          <Field name="companyName">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.companyName.label', {
                  fallback: 'Company Name',
                })}
                placeholder={t('fields.companyName.placeholder', {
                  fallback: 'Company Name (optional)',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="companyWebsite">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.companyWebsite.label', {
                  fallback: 'Your Website',
                })}
                placeholder={t('fields.companyWebsite.placeholder', {
                  fallback: 'Company Website (optional)',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="message">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.message.label', {
                  fallback: 'Your Message',
                })}
                placeholder={t('fields.message.placeholder', {
                  fallback: 'Your Message (optional)',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="budgetRange">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.budgetRange.label', {
                  fallback: 'Budget Range',
                })}
                placeholder={t('fields.budgetRange.label', {
                  fallback: 'Budget Range',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="service">
            {field => (
              <div className="flex flex-col gap-2">
                <Text color="ghost">
                  {t('fields.service.label', {
                    fallback: 'Select a Service',
                  })}
                </Text>
                <Dropdown
                  options={[
                    {
                      label: t('variants.service.0', {
                        fallback: 'Business Consulting',
                      }),
                      value: t('variants.service.0', {
                        fallback: 'Business Consulting',
                      }),
                    },
                    {
                      label: t('variants.service.1', {
                        fallback: 'Marketing Consulting',
                      }),
                      value: t('variants.service.1', {
                        fallback: 'Marketing Consulting',
                      }),
                    },
                  ]}
                  value={String(
                    field.state.value.trim().length
                      ? field.state.value
                      : t('fields.service.label', {
                          fallback: 'Select a Service',
                        }),
                  )}
                  onChange={e => field.handleChange(e)}
                />
              </div>
            )}
          </Field>
          <div className="hidden max-md:flex">
            <Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="justify-center"
                  fullWidth
                >
                  {isSubmitting ? (
                    t('fields.submit.loading', {
                      fallback: 'Sending...',
                    })
                  ) : (
                    <>
                      {t('fields.submit.label', {
                        fallback: 'Submit',
                      })}
                      <ArrowRight color="black" />
                    </>
                  )}
                </Button>
              )}
            </Subscribe>
          </div>
        </div>
      </div>
    </form>
  );
};
