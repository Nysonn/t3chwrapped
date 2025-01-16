import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './FAQ.css'; 
import faqData from './questions';

export default function FAQSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <Accordion allowZeroExpanded>
          {faqData.map((item, index) => (
            <AccordionItem key={index} className="accordion__item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="accordion-header">
                    <span>{item.question}</span>
                    <div className="accordion-icon">
                      <AiOutlinePlus className="icon-plus" />
                      <AiOutlineMinus className="icon-minus" />
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
