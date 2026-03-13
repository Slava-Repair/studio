'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating marketing content.
 *
 * - aiContentGenerator - A function that generates marketing content for an appliance repair business.
 * - AiContentGeneratorInput - The input type for the aiContentGenerator function.
 * - AiContentGeneratorOutput - The return type for the aiContentGenerator function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiContentGeneratorInputSchema = z.object({
  contentType: z.enum(['slogan', 'product description', 'about us paragraph']).describe('The type of marketing content to generate (e.g., slogan, product description, about us paragraph).'),
  context: z.string().describe('A brief description of the business, product, or service for which content is being generated.'),
  keywords: z.array(z.string()).optional().describe('Optional keywords to include in the generated content.'),
});

export type AiContentGeneratorInput = z.infer<typeof AiContentGeneratorInputSchema>;

const AiContentGeneratorOutputSchema = z.object({
  generatedContent: z.string().describe('The AI-generated marketing content.'),
});

export type AiContentGeneratorOutput = z.infer<typeof AiContentGeneratorOutputSchema>;

export async function aiContentGenerator(input: AiContentGeneratorInput): Promise<AiContentGeneratorOutput> {
  return aiContentGeneratorFlow(input);
}

const aiContentGeneratorPrompt = ai.definePrompt({
  name: 'aiContentGeneratorPrompt',
  input: { schema: AiContentGeneratorInputSchema },
  output: { schema: AiContentGeneratorOutputSchema },
  prompt: `You are an expert marketing content generator specifically for an appliance repair service.
Your task is to create engaging and persuasive text based on the provided content type, context, and keywords.

Content Type: {{{contentType}}}
Context: {{{context}}}
{{#if keywords}}
Keywords to consider: {{#each keywords}} "{{{this}}}" {{/each}}
{{/if}}

Generate the content for the appliance repair business, ensuring it is tailored to the specified content type and context, and incorporates any provided keywords naturally.
`,
});

const aiContentGeneratorFlow = ai.defineFlow(
  {
    name: 'aiContentGeneratorFlow',
    inputSchema: AiContentGeneratorInputSchema,
    outputSchema: AiContentGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await aiContentGeneratorPrompt(input);
    return output!;
  }
);
