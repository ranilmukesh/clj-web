
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "What is BIS 916 Hallmarked gold jewellery?",
    answer: "BIS 916 Hallmark is a certification issued by the Bureau of Indian Standards (BIS) that guarantees the purity of gold. The number '916' corresponds to 22-karat gold, meaning the jewellery contains 91.6% pure gold. When you buy BIS 916 hallmarked jewels from us, you are assured of the highest quality and purity.",
  },
  {
    question: "What is HUID and why is it important?",
    answer: "HUID stands for Hallmark Unique Identification. It is a unique 6-digit alphanumeric code engraved on each piece of hallmarked gold jewellery. This code provides complete traceability and transparency, allowing you to verify the authenticity of your purchase from a government-approved Assaying and Hallmarking Centre. It's a crucial step in protecting consumer rights.",
  },
  {
    question: "Do you offer customization for jewellery?",
    answer: "Absolutely. We specialize in custom handmade designs. Whether you have a specific vision, want to recreate a vintage piece, or need a unique bridal set, our master artisans can bring your ideas to life. Please visit our <a href='/contact' class='text-secondary hover:underline'>Contact Page</a> to schedule a consultation.",
  },
  {
    question: "How are your making charges compared to machine-made jewellery?",
    answer: "Because we focus on handcrafted excellence and operate with wholesale pricing principles, we are able to offer highly competitive making charges. Our handmade process ensures superior quality and unique character that machine-made alternatives often lack, providing you with unmatched value.",
  },
  {
    question: "Do you have any gold purchase plans or schemes?",
    answer: "Yes, we offer flexible gold purchase plans to help you invest in gold systematically. These schemes allow you to buy gold in installments and protect you from fluctuating gold rates. For more details on our current plans, please visit our showroom or <a href='/contact' class='text-secondary hover:underline'>contact us</a> directly.",
  },
];

const Faq = () => {
  // AEO: Generate FAQ Schema automatically from the faqs array
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '') // Strips HTML tags for clean JSON
      }
    }))
  };

  return (
    <div className="bg-dark-vanilla/30">
      {/* Inject JSON-LD Schema for AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about buying gold, our policies, and the unique benefits of choosing Chandralekha Jewels in Coimbatore.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg font-semibold text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12">
            <p className="text-muted-foreground">Have more questions? We're happy to help.</p>
            <Link href="/contact" className="text-secondary font-bold hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};
export default Faq;
