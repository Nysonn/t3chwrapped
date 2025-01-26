import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Faq.module.css';
import faqData from './questions';

export default function FAQSection() {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const handleAccordionChange = (uuids) => {
    setExpandedItems(new Set(uuids));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.headerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our services and platform
          </p>
        </motion.div>

        <Accordion 
          allowMultipleExpanded 
          allowZeroExpanded
          onChange={handleAccordionChange}
          className={styles.accordionContainer}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem 
                uuid={index.toString()}
                className={`${styles.accordionItem} ${
                  expandedItems.has(index.toString()) ? styles.expanded : ''
                }`}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordionButton}>
                    <div className={styles.accordionHeader}>
                      <span className={styles.question}>{item.question}</span>
                      <div className={styles.iconWrapper}>
                        <AiOutlinePlus className={styles.iconPlus} />
                        <AiOutlineMinus className={styles.iconMinus} />
                      </div>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AnimatePresence>
                  {expandedItems.has(index.toString()) && (
                    <AccordionItemPanel className={styles.accordionPanel}>
                      <motion.div 
                        className={styles.answerWrapper}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className={styles.answer}>{item.answer}</p>
                      </motion.div>
                    </AccordionItemPanel>
                  )}
                </AnimatePresence>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
