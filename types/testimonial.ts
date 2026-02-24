// types/testimonial.ts
export type TestimonialTheme = {
  text: string;
  gradient: string;
  borderHover: string;
};

export type Testimonial = {
  id: number;
  initials: string;
  name: string;
  role: string;
  text: string;
  footer: string;
  theme: TestimonialTheme;
};
